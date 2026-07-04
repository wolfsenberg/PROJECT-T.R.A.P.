# Java Runner API

Express service for the Java Reviewer coding problems. It compiles a submitted `Main.java`, runs standard input/output tests, and returns pass/fail results.

## Local

```bash
npm install
npm start
```

The frontend defaults to `http://localhost:4000`. For deployment, set `NEXT_PUBLIC_JAVA_RUNNER_URL` in the Next.js app.

## Render

Deploy this folder as a Docker-backed web service. Render should expose `PORT=10000`, and the service binds to `0.0.0.0`.
