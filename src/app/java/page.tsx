"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  javaCheatTopics,
  javaCodingProblems,
  javaDifficultyOrder,
  javaPracticeItems,
  javaSources,
  type JavaCodingProblem,
  type JavaDifficulty,
  type JavaPracticeItem,
} from "@/data/java";
import { ArrowLeftIcon, BookIcon, CheckIcon, ClipboardIcon, CodeIcon, LayersIcon, PencilIcon, PlayIcon, TableIcon, TargetIcon, XIcon } from "@/components/Icons";
import XPTaskbar from "@/components/XPTaskbar";

type JavaView = "cheatsheet" | "practice" | "coding";

type JavaProgress = {
  practiceAnswers: Record<string, number>;
  solvedProblems: Record<string, boolean>;
  codeDrafts: Record<string, string>;
};

type RunnerResult = {
  ok: boolean;
  passed: boolean;
  gradingMode?: string;
  message?: string;
  compileOutput?: string;
  error?: string;
  results?: Array<{
    test: number;
    passed: boolean;
    expected: string;
    actual: string;
    matchedBy?: string | null;
  }>;
};

const emptyProgress: JavaProgress = {
  practiceAnswers: {},
  solvedProblems: {},
  codeDrafts: {},
};

const progressKey = "java-reviewer-progress-v1";
const runnerUrl = process.env.NEXT_PUBLIC_JAVA_RUNNER_URL || "http://localhost:4000";
const oopTopicIds = ["oop", "constructors", "inheritance", "interfaces"];

function difficultyClass(difficulty: JavaDifficulty) {
  return `java-badge java-badge-${difficulty.toLowerCase()}`;
}

function byDifficulty(a: { difficulty: JavaDifficulty }, b: { difficulty: JavaDifficulty }) {
  return javaDifficultyOrder.indexOf(a.difficulty) - javaDifficultyOrder.indexOf(b.difficulty);
}

export default function JavaReviewerPage() {
  const [view, setView] = useState<JavaView>("cheatsheet");
  const [activeTopic, setActiveTopic] = useState(javaCheatTopics[0].id);
  const [practiceTopic, setPracticeTopic] = useState("all");
  const [practiceType, setPracticeType] = useState<"all" | JavaPracticeItem["type"]>("all");
  const [activeProblemId, setActiveProblemId] = useState(javaCodingProblems[0].id);
  const [progress, setProgress] = useState<JavaProgress>(emptyProgress);
  const [hydrated, setHydrated] = useState(false);
  const [runnerBusy, setRunnerBusy] = useState(false);
  const [runnerResult, setRunnerResult] = useState<RunnerResult | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => {
      try {
        const stored = localStorage.getItem(progressKey);
        if (stored) setProgress({ ...emptyProgress, ...JSON.parse(stored) });
      } catch {
        setProgress(emptyProgress);
      } finally {
        setHydrated(true);
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(progressKey, JSON.stringify(progress));
  }, [hydrated, progress]);

  const activeCheatTopic = javaCheatTopics.find((topic) => topic.id === activeTopic) ?? javaCheatTopics[0];
  const activeProblem = javaCodingProblems.find((problem) => problem.id === activeProblemId) ?? javaCodingProblems[0];
  const oopTopics = javaCheatTopics.filter((topic) => oopTopicIds.includes(topic.id));

  const filteredPractice = useMemo(() => {
    return javaPracticeItems
      .filter((item) => practiceTopic === "all" || item.topicId === practiceTopic)
      .filter((item) => practiceType === "all" || item.type === practiceType)
      .sort(byDifficulty);
  }, [practiceTopic, practiceType]);

  const practiceCorrect = javaPracticeItems.filter((item) => progress.practiceAnswers[item.id] === item.answer).length;
  const solvedCount = javaCodingProblems.filter((problem) => progress.solvedProblems[problem.id]).length;
  const currentDraft = progress.codeDrafts[activeProblem.id] ?? activeProblem.starterCode;

  const answerPractice = (item: JavaPracticeItem, answer: number) => {
    setProgress((current) => ({
      ...current,
      practiceAnswers: {
        ...current.practiceAnswers,
        [item.id]: answer,
      },
    }));
  };

  const updateDraft = (problem: JavaCodingProblem, code: string) => {
    setProgress((current) => ({
      ...current,
      codeDrafts: {
        ...current.codeDrafts,
        [problem.id]: code,
      },
    }));
  };

  const resetDraft = (problem: JavaCodingProblem) => {
    updateDraft(problem, problem.starterCode);
    setRunnerResult(null);
  };

  const runCode = async () => {
    setRunnerBusy(true);
    setRunnerResult(null);
    try {
      const response = await fetch(`${runnerUrl}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problemId: activeProblem.id, code: currentDraft }),
      });
      const data = (await response.json()) as RunnerResult;
      setRunnerResult(data);
      if (data.passed) {
        setProgress((current) => ({
          ...current,
          solvedProblems: {
            ...current.solvedProblems,
            [activeProblem.id]: true,
          },
        }));
      }
    } catch {
      setRunnerResult({
        ok: false,
        passed: false,
        error: `Java runner is not reachable at ${runnerUrl}. Start java-runner-api or set NEXT_PUBLIC_JAVA_RUNNER_URL.`,
      });
    } finally {
      setRunnerBusy(false);
    }
  };

  return (
    <div className="xp-desktop">
      <div className="app-shell">
        <div className="xp-window java-window w-full max-w-6xl">
          <div className="xp-titlebar">
            <CodeIcon className="xp-titlebar-icon text-white" />
            <span className="xp-titlebar-text">Java Reviewer</span>
            <div className="xp-titlebar-buttons">
              <div className="xp-titlebar-btn xp-btn-minimize">
                <svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><rect x="1" y="7" width="8" height="2" fill="white"/></svg>
              </div>
              <div className="xp-titlebar-btn xp-btn-maximize">
                <svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><rect x="1" y="1" width="8" height="8" fill="none" stroke="white" strokeWidth="2"/></svg>
              </div>
              <div className="xp-titlebar-btn xp-btn-close">
                <svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="2"/></svg>
              </div>
            </div>
          </div>

          <div className="xp-toolbar java-toolbar">
            <Link href="/" className="xp-button no-underline inline-flex items-center gap-1">
              <ArrowLeftIcon className="w-3.5 h-3.5" />
              Back
            </Link>
            <button className={view === "cheatsheet" ? "xp-button-primary java-mode-button" : "xp-button java-mode-button"} onClick={() => setView("cheatsheet")}>
              <TableIcon className="w-3.5 h-3.5" />
              Cheat Sheet
            </button>
            <button className={view === "practice" ? "xp-button-primary java-mode-button" : "xp-button java-mode-button"} onClick={() => setView("practice")}>
              <PencilIcon className="w-3.5 h-3.5" />
              Practice
            </button>
            <button className={view === "coding" ? "xp-button-primary java-mode-button" : "xp-button java-mode-button"} onClick={() => setView("coding")}>
              <PlayIcon className="w-3.5 h-3.5" />
              Coding Problems
            </button>
            <span className="java-toolbar-meter ml-auto">
              Practice {practiceCorrect}/80 | Code {solvedCount}/20
            </span>
          </div>

          <div className="xp-body java-body">
            <div className="xp-infobox mb-4">
              <BookIcon className="w-5 h-5 flex-shrink-0 text-[#0054e3]" />
              <div>
                <p className="font-bold mb-1">Separate Java Reviewer</p>
                <p>University-style Java notes, 80 practice items, and exactly 20 full-class coding problems. Runner is desktop-only.</p>
                <div className="quiz-source-list mt-2">
                  {javaSources.map((source) => (
                    <a key={source.url} className="quiz-source-link" href={source.url} target="_blank" rel="noreferrer">
                      {source.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="java-oop-strip mb-4">
              <div className="java-oop-title">
                <LayersIcon className="w-4 h-4" />
                <span>Object-Oriented Track</span>
              </div>
              <div className="java-oop-links">
                {oopTopics.map((topic) => (
                  <button
                    key={topic.id}
                    className="java-oop-link"
                    onClick={() => {
                      setView("cheatsheet");
                      setActiveTopic(topic.id);
                    }}
                  >
                    {topic.title}
                  </button>
                ))}
              </div>
            </div>

            {view === "cheatsheet" && (
              <section className="java-section java-cheatsheet-layout">
                <aside className="java-topic-rail" aria-label="Java topics">
                  <div className="java-rail-title">
                    <BookIcon className="w-4 h-4" />
                    <span>Topics</span>
                  </div>
                  {javaCheatTopics.map((topic) => (
                    <button
                      key={topic.id}
                      className={activeTopic === topic.id ? "java-topic-tab active" : "java-topic-tab"}
                      onClick={() => setActiveTopic(topic.id)}
                    >
                      <span>{topic.title}</span>
                      <span className={difficultyClass(topic.difficulty)}>{topic.difficulty}</span>
                    </button>
                  ))}
                </aside>

                <div className="java-panel">
                  <div className="java-panel-heading">
                    <div>
                      <h1>{activeCheatTopic.title}</h1>
                      <p>{activeCheatTopic.summary}</p>
                    </div>
                    <span className={difficultyClass(activeCheatTopic.difficulty)}>{activeCheatTopic.difficulty}</span>
                  </div>

                  <div className="java-cheat-snapshot">
                    <div>
                      <TableIcon className="w-4 h-4" />
                      <span>{activeCheatTopic.rows.length} key concepts</span>
                    </div>
                    <div>
                      <TargetIcon className="w-4 h-4" />
                      <span>Quick recall cues</span>
                    </div>
                    <div>
                      <CheckIcon className="w-4 h-4" />
                      <span>Source-backed</span>
                    </div>
                  </div>

                  <div className="java-table-wrap">
                    <table className="java-table">
                      <thead>
                        <tr>
                          <th>Word / Concept</th>
                          <th>Meaning</th>
                          <th>Memorize</th>
                          <th>Exam Trap</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeCheatTopic.rows.map((row) => (
                          <tr key={row.term}>
                            <td data-label="Word / Concept">{row.term}</td>
                            <td data-label="Meaning">{row.meaning}</td>
                            <td data-label="Memorize">{row.remember}</td>
                            <td data-label="Exam Trap">{row.trap}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {view === "practice" && (
              <section className="java-section">
                <div className="java-filters">
                  <label>
                    Topic
                    <select value={practiceTopic} onChange={(event) => setPracticeTopic(event.target.value)}>
                      <option value="all">All topics</option>
                      {javaCheatTopics.map((topic) => (
                        <option key={topic.id} value={topic.id}>
                          {topic.title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Type
                    <select value={practiceType} onChange={(event) => setPracticeType(event.target.value as typeof practiceType)}>
                      <option value="all">All practice</option>
                      <option value="multiple-choice">Multiple choice</option>
                      <option value="fill-blank">Fill in the blank</option>
                    </select>
                  </label>
                </div>

                <div className="java-practice-grid">
                  {filteredPractice.map((item) => {
                    const selected = progress.practiceAnswers[item.id];
                    const correct = selected === item.answer;
                    const topic = javaCheatTopics.find((candidate) => candidate.id === item.topicId);
                    return (
                      <article key={item.id} className="java-practice-card">
                        <div className="java-card-meta">
                          <span>{topic?.title ?? item.topicId}</span>
                          <span className={difficultyClass(item.difficulty)}>{item.difficulty}</span>
                          <span>{item.type === "fill-blank" ? "Fill blank" : "MCQ"}</span>
                        </div>
                        <p className="java-question">{item.prompt}</p>
                        {item.code && <pre className="java-code-snippet">{item.code}</pre>}
                        <div className="java-choice-list">
                          {item.choices.map((choice, index) => {
                            const isSelected = selected === index;
                            const isAnswer = item.answer === index;
                            const stateClass = selected === undefined ? "" : isAnswer ? "xp-choice-correct" : isSelected ? "xp-choice-wrong" : "";
                            return (
                              <button
                                key={choice}
                                className={`xp-choice ${stateClass}`}
                                onClick={() => answerPractice(item, index)}
                              >
                                <span>{String.fromCharCode(65 + index)}</span>
                                <span>{choice}</span>
                              </button>
                            );
                          })}
                        </div>
                        {selected !== undefined && (
                          <div className={`java-feedback ${correct ? "java-feedback-good" : "java-feedback-bad"}`}>
                            {correct ? <CheckIcon className="w-4 h-4" /> : <XIcon className="w-4 h-4" />}
                            <span>{item.explanation}</span>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {view === "coding" && (
              <section className="java-section java-coding-layout">
                <div className="java-mobile-runner-note">
                  Coding problem reading works on mobile, but the compiler and runner are for PC/laptop view only.
                </div>

                <aside className="java-problem-list">
                  {javaDifficultyOrder.map((difficulty) => (
                    <div key={difficulty}>
                      <p className="java-problem-group">{difficulty}</p>
                      {javaCodingProblems
                        .filter((problem) => problem.difficulty === difficulty)
                        .map((problem) => (
                          <button
                            key={problem.id}
                            className={problem.id === activeProblem.id ? "java-problem-item active" : "java-problem-item"}
                            onClick={() => {
                              setActiveProblemId(problem.id);
                              setRunnerResult(null);
                            }}
                          >
                            <span>{problem.title}</span>
                            {progress.solvedProblems[problem.id] && <CheckIcon className="w-3.5 h-3.5" />}
                          </button>
                        ))}
                    </div>
                  ))}
                </aside>

                <div className="java-problem-main">
                  <div className="java-panel">
                    <div className="java-panel-heading">
                      <div>
                        <h1>{activeProblem.title}</h1>
                        <p>{activeProblem.statement}</p>
                      </div>
                      <span className={difficultyClass(activeProblem.difficulty)}>{activeProblem.difficulty}</span>
                    </div>
                    <div className="java-problem-details">
                      <p><strong>Input:</strong> {activeProblem.inputFormat}</p>
                      <p><strong>Output:</strong> {activeProblem.outputFormat}</p>
                      <p><strong>Remember:</strong> {activeProblem.explanation}</p>
                      <div className="java-grading-note">
                        <TargetIcon className="w-4 h-4" />
                        <span>Accepted by standard output. Different variable names, methods, loops, or OOP structure are fine.</span>
                      </div>
                    </div>
                    <div className="java-samples">
                      {activeProblem.sampleTests.map((test, index) => (
                        <div key={`${test.input}-${index}`}>
                          <p>Sample {index + 1}</p>
                          <pre>Input: {test.input.trim() || "(empty)"}</pre>
                          <pre>Output: {test.expectedOutput}</pre>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="java-runner-workspace">
                    <div className="java-editor-toolbar">
                      <span>Submit a full Java class named Main</span>
                      <button className="xp-button" onClick={() => resetDraft(activeProblem)}>Reset Starter</button>
                      <button className="xp-button-primary" onClick={runCode} disabled={runnerBusy}>
                        {runnerBusy ? "Running..." : "Run Tests"}
                      </button>
                    </div>
                    <textarea
                      className="java-editor"
                      spellCheck={false}
                      value={currentDraft}
                      onChange={(event) => updateDraft(activeProblem, event.target.value)}
                    />
                    {runnerResult && (
                      <div className={runnerResult.passed ? "java-runner-result good" : "java-runner-result bad"}>
                        <p className="font-bold">{runnerResult.passed ? "Output accepted." : "Needs fixing."}</p>
                        {runnerResult.message && <p>{runnerResult.message}</p>}
                        {runnerResult.error && <pre>{runnerResult.error}</pre>}
                        {runnerResult.compileOutput && <pre>{runnerResult.compileOutput}</pre>}
                        {runnerResult.results?.map((result) => (
                          <div key={result.test} className="java-test-row">
                            <span>{result.passed ? "PASS" : "FAIL"} Test {result.test}</span>
                            {!result.passed && <pre>Expected: {result.expected}{"\n"}Actual: {result.actual}</pre>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}
          </div>

          <div className="xp-statusbar">
            <ClipboardIcon className="w-3.5 h-3.5" />
            <span>Source-backed Java review mode</span>
            <span className="ml-auto">Local progress saved in this browser</span>
          </div>
        </div>
      </div>
      <XPTaskbar />
    </div>
  );
}
