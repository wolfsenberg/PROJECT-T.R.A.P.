const express = require("express");
const fs = require("fs/promises");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");
const { problems } = require("./problems");

const app = express();
const port = Number(process.env.PORT || 4000);
const maxCodeLength = 12000;
const commandTimeoutMs = Number(process.env.JAVA_RUNNER_TIMEOUT_MS || 10000);
const maxOutputBytes = 64 * 1024;

app.use(express.json({ limit: "32kb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  return next();
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, problems: Object.keys(problems).length });
});

app.get("/", (_req, res) => {
  res.json({
    ok: true,
    service: "java-runner-api",
    routes: ["/health", "/problems", "/run"],
  });
});

app.get("/problems", (_req, res) => {
  res.json({
    ok: true,
    problems: Object.entries(problems).map(([id, problem]) => ({ id, title: problem.title })),
  });
});

app.post("/run", async (req, res) => {
  const { problemId, code } = req.body || {};
  const problem = problems[problemId];

  if (!problem) return res.status(404).json({ ok: false, passed: false, error: "Unknown problem." });
  if (typeof code !== "string") return res.status(400).json({ ok: false, passed: false, error: "Code must be a string." });
  if (code.length > maxCodeLength) return res.status(400).json({ ok: false, passed: false, error: "Code is too long." });

  const safetyError = validateCode(code);
  if (safetyError) return res.status(400).json({ ok: false, passed: false, error: safetyError });

  const workDir = await fs.mkdtemp(path.join(os.tmpdir(), "java-run-"));
  try {
    await fs.writeFile(path.join(workDir, "Main.java"), code, "utf8");

    const compile = await runCommand("javac", ["Main.java"], "", workDir);
    if (compile.code !== 0) {
      return res.json({
        ok: true,
        passed: false,
        compileOutput: compile.stderr || compile.stdout || "Compilation failed.",
      });
    }

    const results = [];
    for (let index = 0; index < problem.tests.length; index += 1) {
      const test = problem.tests[index];
      const execution = await runCommand("java", ["-Xmx64m", "-cp", workDir, "Main"], test.input, workDir);
      const actual = normalizeOutput(execution.stdout);
      const expected = normalizeOutput(test.expectedOutput);
      const outputMatches = compareOutput(actual, expected);
      results.push({
        test: index + 1,
        passed: execution.code === 0 && outputMatches,
        expected,
        actual: execution.code === 0 ? actual : normalizeOutput(execution.stderr || execution.stdout),
        matchedBy: outputMatches ? "standard-output" : null,
      });
    }

    res.json({
      ok: true,
      passed: results.every((result) => result.passed),
      gradingMode: "standard-output",
      message: "Accepted solutions are judged by stdout, not by matching a specific code pattern.",
      results,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      passed: false,
      error: error instanceof Error ? error.message : "Runner failed.",
    });
  } finally {
    await fs.rm(workDir, { recursive: true, force: true });
  }
});

app.use((req, res) => {
  res.status(404).json({
    ok: false,
    error: "Route not found.",
    path: req.path,
    routes: ["/", "/health", "/problems", "/run"],
  });
});

function validateCode(code) {
  if (!/public\s+class\s+Main\b/.test(code)) return "Submit a full Java class named Main.";
  if (/^\s*package\s+/m.test(code)) return "Do not declare a package. The runner compiles Main.java directly.";

  const blockedPatterns = [
    /\bSystem\.exit\s*\(/,
    /\bRuntime\b/,
    /\bProcessBuilder\b/,
    /\bClassLoader\b/,
    /\bjava\.lang\.reflect\b/,
    /\bjava\.net\b/,
    /\bSocket\b/,
    /\bURL\b/,
    /\bjava\.io\.File\b/,
    /\bjava\.nio\.file\b/,
    /\bThread\b/,
  ];

  if (blockedPatterns.some((pattern) => pattern.test(code))) {
    return "This runner only allows console-style Java solutions for the listed problems.";
  }

  return null;
}

function normalizeOutput(output) {
  return String(output || "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
}

function compareOutput(actual, expected) {
  return comparableOutput(actual) === comparableOutput(expected);
}

function comparableOutput(output) {
  const normalized = normalizeOutput(output);
  if (!normalized) return "";
  return normalized.split(/\s+/).join(" ");
}

function runCommand(command, args, input, cwd) {
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      cwd,
      shell: false,
      windowsHide: true,
      stdio: ["pipe", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    let killed = false;
    const timer = setTimeout(() => {
      killed = true;
      child.kill("SIGKILL");
    }, commandTimeoutMs);

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
      if (Buffer.byteLength(stdout, "utf8") > maxOutputBytes) child.kill("SIGKILL");
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
      if (Buffer.byteLength(stderr, "utf8") > maxOutputBytes) child.kill("SIGKILL");
    });

    child.on("error", (error) => {
      clearTimeout(timer);
      resolve({ code: 1, stdout, stderr: error.message });
    });

    child.on("close", (code) => {
      clearTimeout(timer);
      resolve({
        code: killed ? 124 : code ?? 1,
        stdout,
        stderr: killed ? "Execution timed out." : stderr,
      });
    });

    child.stdin.end(input);
  });
}

app.listen(port, "0.0.0.0", () => {
  console.log(`Java runner API listening on ${port}`);
});
