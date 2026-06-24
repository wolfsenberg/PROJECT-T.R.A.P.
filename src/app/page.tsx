"use client";

import Link from "next/link";
import { quizTopics } from "@/data";
import { iconMap, BookIcon, CheckIcon, XIcon } from "@/components/Icons";
import { useGame } from "@/context/GameContext";

export default function Home() {
  const { state, isTopicLocked, getTopicResult, getCompletedCount, resetAll } = useGame();
  const completedCount = getCompletedCount();
  const totalTopics = 7;
  const progressPct = (completedCount / totalTopics) * 100;

  return (
    <main className="min-h-screen p-5 md:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <header className="text-center mb-8 pt-6">
        <div className="inline-block border border-[#1a4d00] px-4 py-1 text-xs text-[#1a8c00] mb-3 tracking-[0.2em]">
          POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
        </div>
        <h1 className="text-3xl md:text-5xl font-bold glow-green tracking-tight flicker font-[VT323]">
          CCIS COMPREHENSIVE EXAM
        </h1>
        <p className="text-[#33ff00] mt-2 text-lg md:text-xl tracking-wide glow-green-subtle font-[VT323]">
          MOCK TEST REVIEWER
        </p>
        <p className="text-[#1a8c00] mt-3 text-sm">
          Part I: Written Exam // 100 Questions Per Topic // 7 Subjects // 700 Total Items
        </p>
      </header>

      {/* Overall Progress Panel */}
      <section className="retro-card p-5 mb-6 border-[#33ff00]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs text-[#1a8c00] tracking-wider mb-1">EXAM PROGRESS</p>
            <p className="text-[#33ff00] text-lg font-[VT323]">
              {completedCount} / {totalTopics} TOPICS COMPLETED
            </p>
          </div>

          <div className="flex-1 md:max-w-sm">
            <div className="xp-bar-track">
              <div className="xp-bar-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <p className="text-[10px] text-[#1a8c00] mt-1 text-right">
              {Math.round(progressPct)}%
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-[#1a8c00]">PASSING RATE</p>
            <p className="text-[#33ff00] font-bold text-sm">75% REQUIRED</p>
          </div>
        </div>

        {/* Instructions */}
        {!state.allCompleted && completedCount === 0 && (
          <div className="mt-4 border-t border-[#1a4d00] pt-4">
            <p className="text-xs text-[#1a8c00] leading-relaxed">
              {"> "}Complete all 7 topics to see your overall score. Each topic can only be taken once per attempt.
              After completing all topics, you can restart for another attempt.
            </p>
          </div>
        )}
      </section>

      {/* Results Panel (shown when all topics complete) */}
      {state.allCompleted && (
        <section className={`retro-card p-6 mb-6 border-[${state.overallPassed ? "#33ff00" : "#ff3300"}]`}>
          <div className="text-center">
            <h2 className="text-2xl font-[VT323] glow-green mb-4">
              {state.overallPassed ? "EXAMINATION PASSED" : "EXAMINATION FAILED"}
            </h2>
            <div className={`inline-block border-2 ${state.overallPassed ? "border-[#33ff00]" : "border-[#ff3300]"} rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4`}
              style={{ boxShadow: `0 0 20px ${state.overallPassed ? "rgba(51,255,0,0.3)" : "rgba(255,51,0,0.3)"}` }}>
              <div className="text-center">
                <p className={`text-3xl font-bold font-[VT323] ${state.overallPassed ? "text-[#33ff00]" : "text-[#ff3300]"}`}>
                  {Math.round((state.overallScore / state.overallTotal) * 100)}%
                </p>
                <p className="text-[10px] text-[#1a8c00]">
                  {state.overallScore}/{state.overallTotal}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#1a8c00] mb-6">
              {state.overallPassed
                ? "Congratulations! You scored above the 75% passing rate."
                : "You did not reach the 75% passing rate. Review the topics and try again."}
            </p>

            <button onClick={resetAll} className="retro-btn retro-btn-highlight">
              RESTART EXAM (NEW ATTEMPT)
            </button>
          </div>
        </section>
      )}

      {/* Topic Grid */}
      <section className="mb-4">
        <h2 className="text-xs text-[#1a8c00] mb-3 tracking-wider">
          // SELECT TOPIC:
        </h2>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {quizTopics.map((topic) => {
          const IconComponent = iconMap[topic.icon];
          const locked = isTopicLocked(topic.id);
          const result = getTopicResult(topic.id);
          const scorePct = result ? Math.round((result.score / result.total) * 100) : null;
          const passed = scorePct !== null && scorePct >= 75;

          return (
            <div
              key={topic.id}
              className={`retro-card p-5 relative overflow-hidden ${
                locked ? "opacity-60" : "group"
              } ${locked && passed ? "border-[#1a4d00]" : ""}`}
            >
              {/* Status badge */}
              {locked && (
                <div className={`absolute top-3 right-3 flex items-center gap-1 border px-2 py-0.5 text-[10px] tracking-wider ${
                  passed ? "border-[#33ff00] text-[#33ff00]" : "border-[#ff3300] text-[#ff3300]"
                }`}>
                  {passed ? <CheckIcon className="w-3 h-3" /> : <XIcon className="w-3 h-3" />}
                  {scorePct}%
                </div>
              )}

              <div className="flex items-center gap-3 mb-3">
                {IconComponent && (
                  <IconComponent className={`w-7 h-7 ${locked ? "text-[#1a4d00]" : "text-[#1a8c00] group-hover:text-[#33ff00]"} transition-colors`} />
                )}
                <h3 className={`text-sm font-bold ${locked ? "text-[#1a4d00]" : "text-[#33ff00] group-hover:text-[#66ff33]"} glow-green-subtle`}>
                  {topic.title}
                </h3>
              </div>
              <p className="text-[#1a8c00] text-xs leading-relaxed mb-4">
                {topic.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[#1a8c00] text-[10px] border border-[#1a4d00] px-2 py-0.5 tracking-wider">
                  100 ITEMS
                </span>

                {locked ? (
                  <span className="text-[10px] text-[#1a4d00]">COMPLETED</span>
                ) : state.allCompleted ? (
                  <span className="text-[10px] text-[#1a4d00]">RESTART TO RETAKE</span>
                ) : (
                  <Link
                    href={`/quiz/${topic.id}`}
                    className="text-xs text-[#1a4d00] group-hover:text-[#33ff00] transition-colors"
                  >
                    {"> "}START
                  </Link>
                )}
              </div>

              {/* Score bar if completed */}
              {scorePct !== null && (
                <div className="mt-3 xp-bar-track">
                  <div
                    className="xp-bar-fill"
                    style={{
                      width: `${scorePct}%`,
                      background: passed
                        ? "linear-gradient(90deg, #1a8c00, #33ff00)"
                        : "linear-gradient(90deg, #8c1a00, #ff3300)",
                    }}
                  />
                </div>
              )}

              {/* Make the whole card clickable if not locked */}
              {!locked && !state.allCompleted && (
                <Link
                  href={`/quiz/${topic.id}`}
                  className="absolute inset-0"
                  aria-label={`Start ${topic.title}`}
                />
              )}
            </div>
          );
        })}
      </section>

      {/* Per-topic breakdown (when all complete) */}
      {state.allCompleted && (
        <section className="retro-card p-5 mb-8">
          <h3 className="text-sm font-bold text-[#33ff00] mb-4 glow-green-subtle">
            // SCORE BREAKDOWN
          </h3>
          <div className="space-y-2">
            {quizTopics.map((topic) => {
              const result = getTopicResult(topic.id);
              if (!result) return null;
              const pct = Math.round((result.score / result.total) * 100);
              const passed = pct >= 75;
              return (
                <div key={topic.id} className="flex items-center justify-between text-sm">
                  <span className="text-[#1a8c00]">{topic.title}</span>
                  <span className={passed ? "text-[#33ff00]" : "text-[#ff3300]"}>
                    {result.score}/{result.total} ({pct}%)
                  </span>
                </div>
              );
            })}
            <div className="border-t border-[#1a4d00] pt-2 mt-2 flex items-center justify-between text-sm font-bold">
              <span className="text-[#33ff00]">OVERALL</span>
              <span className={state.overallPassed ? "text-[#33ff00]" : "text-[#ff3300]"}>
                {state.overallScore}/{state.overallTotal} ({Math.round((state.overallScore / state.overallTotal) * 100)}%)
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Previous Attempts */}
      {state.attempts.length > 0 && (
        <section className="retro-card p-5 mb-8">
          <h3 className="text-xs font-bold text-[#1a8c00] mb-3 tracking-wider">
            // ATTEMPT HISTORY
          </h3>
          <div className="space-y-2">
            {state.attempts.map((attempt, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <span className="text-[#1a8c00]">Attempt #{idx + 1} — {attempt.date}</span>
                <span className={attempt.passed ? "text-[#33ff00]" : "text-[#ff3300]"}>
                  {attempt.score}/{attempt.total} ({Math.round((attempt.score / attempt.total) * 100)}%) — {attempt.passed ? "PASSED" : "FAILED"}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* References */}
      <section className="retro-card p-5 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BookIcon className="w-4 h-4 text-[#1a8c00]" />
          <h3 className="text-xs font-bold text-[#1a8c00] tracking-wider">
            PUP CCIS REFERENCE MATERIALS
          </h3>
        </div>
        <div className="space-y-2 text-xs text-[#0a4d00]">
          <p><span className="text-[#1a8c00]">COMP 20013</span> — Peter Norton&apos;s Introduction to Computers (6th Ed, McGraw-Hill)</p>
          <p><span className="text-[#1a8c00]">CMPE 30052</span> — DSA by Austria, Dastas, Dela Fuente &amp; Sagum (PUP CCIS 2021); Lafore; CLRS</p>
          <p><span className="text-[#1a8c00]">OS</span> — Operating System Concepts by Silberschatz, Galvin &amp; Gagne (10th Ed)</p>
          <p><span className="text-[#1a8c00]">COMP 20043</span> — Discrete Structures by Asst. Prof. Fernandez (PUP); Rosen (8th Ed)</p>
          <p><span className="text-[#1a8c00]">NETWORKING</span> — Data Communications &amp; Networking by Forouzan (5th Ed)</p>
          <p><span className="text-[#1a8c00]">COMP 20163</span> — Web Development by Novida (PUP CCIS); Robbins; Duckett</p>
          <p><span className="text-[#1a8c00]">COMP 20143</span> — HCI: Sharp, Rogers &amp; Preece (5th Ed); Nielsen&apos;s 10 Heuristics</p>
        </div>
      </section>

      <footer className="text-center text-[#0a3300] text-xs pb-8">
        <p>// PUP CCIS COMPREHENSIVE EXAM MOCK TEST // FOR REVIEW PURPOSES ONLY //</p>
      </footer>
    </main>
  );
}
