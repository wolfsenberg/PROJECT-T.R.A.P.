# Java Reviewer Plan

The Java Reviewer is a separate main section from the seven mock-review topics.

## Navigation

Primary navigation is by Java Topic. Difficulty is shown as a secondary path through Beginner, Easy, Medium, and Hard labels.

## Cheat Sheet

The Java Cheat Sheet is one large reviewer page organized by Java Topic. It should provide anchors or tabs so Review Candidates can jump quickly without leaving the page.

## Java Topics

- Java Basics and Syntax
- Variables, Data Types, and Operators
- Input/Output and Formatting
- Conditionals
- Loops
- Methods
- Arrays
- Strings
- Object-Oriented Programming
- Constructors and Encapsulation
- Inheritance and Polymorphism
- Interfaces and Abstract Classes
- Exception Handling
- Collections
- File Handling
- Recursion
- Basic Algorithms

## Coding Problem V1

The first version has exactly 20 Coding Problems:

- 5 Beginner
- 5 Easy
- 5 Medium
- 5 Hard

Each Coding Problem should include title, difficulty, topic tags, problem statement, starter code, visible sample tests, hidden grading tests for the backend runner, expected class or method shape, and explanation notes.

Coding Problems use Full-class Submissions. Starter code should normally provide `public class Main` and a `main` method so beginners can practice complete Java programs.

Grading uses Standard I/O Tests. Each Coding Problem defines one or more inputs and expected outputs. The runner compiles `Main.java`, executes it once per test case, sends the test input to standard input, and compares standard output after normalization.

## Practice Items

Java Practice Items include both multiple-choice and fill-in-the-blank questions. Multiple-choice items should focus on syntax recognition and concepts. Fill-in-the-blank items should focus on exact Java keywords, operators, method calls, and code structure.

The first version has 80 Java Practice Items total, separate from the 20 Coding Problems:

- 40 multiple-choice items
- 40 fill-in-the-blank items

## Progress

Java Reviewer progress is stored locally in the browser for v1. This can include completed fill-in-blank items, solved Coding Problems, and saved code drafts.

## Mobile Boundary

The Java Cheat Sheet and fill-in-blank or multiple-choice practice must work on mobile. The Coding Problem editor, compiler, and runner are desktop-only for v1. On mobile, the app should show the problem statement and a clear note that code running is available on PC view only.

## Runner Boundary

The Code Runner is problem-only. It is not a free public playground.

The first implementation should be full-stack: frontend Java Reviewer plus a separate backend runner designed for Render deployment. The frontend should call a backend runner URL when available. If no runner URL is configured, the Java Reviewer should still show notes and problems, while the run action displays a friendly unavailable state.

## Repository Layout

The frontend and backend live in one repository. The Java runner backend should be placed in a separate folder such as `java-runner-api/` so Render can deploy it as an independent service from that subdirectory.

## Backend Stack

The `java-runner-api` service uses Node/Express for HTTP handling and a Docker image with a JDK for Java compilation and execution. The service compiles/runs Java only for known Coding Problems and applies execution limits.

## Source Policy

Java Reviewer content should follow this source priority:

1. PUP/CCIS or PUP syllabus/materials, if available.
2. Oracle Java official documentation and tutorials.
3. w3resource Java exercises and references.
4. OpenJDK documentation.
5. Reputable university/open course materials.
6. Secondary sources only if needed.

If sources disagree on Java language behavior, official Java sources such as Oracle documentation and OpenJDK documentation should be used for correctness. w3resource can be used for practice coverage and exercise inspiration.
