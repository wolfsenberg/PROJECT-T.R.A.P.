"use client";

import { useRef } from "react";
import Link from "next/link";
import { quizTopics } from "@/data";
import { iconMap, CheckIcon, XIcon, BookIcon, PencilIcon, CodeIcon } from "@/components/Icons";
import { useGame } from "@/context/GameContext";
import XPTaskbar from "@/components/XPTaskbar";

export default function Home() {
  const { state, isTopicSubmitted, getTopicProgress, getCompletedCount, getAnsweredCount, resetTopic, resetAll } = useGame();
  const done = getCompletedCount();
  const progressPct = Math.round((done / 7) * 100);

  // 7-tap reset: tap a topic row 7 times quickly to reset it
  const tapCountRef = useRef<Record<string, { count: number; timer: ReturnType<typeof setTimeout> | null }>>({});

  const handleTopicTap = (topicId: string) => {
    const entry = tapCountRef.current[topicId] || { count: 0, timer: null };

    // Clear previous timeout
    if (entry.timer) clearTimeout(entry.timer);

    entry.count += 1;

    if (entry.count >= 7) {
      // Reset this topic
      resetTopic(topicId);
      entry.count = 0;
      entry.timer = null;
    } else {
      // Reset counter after 2 seconds of no taps
      entry.timer = setTimeout(() => {
        entry.count = 0;
      }, 2000);
    }

    tapCountRef.current[topicId] = entry;
  };

  return (
    <div className="xp-desktop">
      {/* Main content area */}
      <div className="app-shell">
        <div className="xp-window w-full max-w-3xl">
          {/* Title Bar */}
          <div className="xp-titlebar">
            <svg className="xp-titlebar-icon text-white" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 2h12v12H2V2zm1 2v8h10V4H3zm1 1h8v1H4V5zm0 2h8v1H4V7zm0 2h5v1H4V9z"/>
            </svg>
            <span className="xp-titlebar-text">
              Mock Reviewer
            </span>
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

          {/* Window Body */}
          <div className="xp-body">
            {/* Info Section */}
            <div className="xp-infobox mb-4">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="#0054e3">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <div className="text-[12px] text-[#000000]">
                <p className="font-bold mb-1">Part I: Written Examination</p>
                <p>7 Topics with Review Notes and Exam Mode - 75% Passing Score (525 correct answers required)</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-5">
              <div className="flex justify-between text-[12px] text-[#000000] mb-2">
                <span>{done}/7 topics completed</span>
                <span className="font-bold">{progressPct}%</span>
              </div>
              <div className="xp-progress">
                <div className="xp-progress-fill" style={{ width: `${progressPct}%` }} />
              </div>
            </div>

            <div className="java-home-callout mb-4">
              <div className="java-home-icon">
                <CodeIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-[12px] mb-1">Java Reviewer</p>
                <p className="text-[11px] text-[#333333]">
                  Separate Java cheat sheet, 80 practice items, and 20 coding problems with a desktop runner.
                </p>
              </div>
              <Link href="/java" className="xp-button-primary no-underline inline-flex items-center gap-1">
                <CodeIcon className="w-3.5 h-3.5" />
                Open
              </Link>
            </div>

            {/* Results Panel (only when all done) */}
            {state.allCompleted && (
              <div className="border border-[#7f9db9] rounded bg-white p-4 mb-3">
                <div className="text-center mb-3">
                  <p className="text-[24px] font-bold" style={{ color: state.overallPassed ? "#006100" : "#9c0006" }}>
                    {Math.round((state.overallScore / state.overallTotal) * 100)}%
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    {state.overallPassed ? (
                      <CheckIcon className="w-4 h-4 text-[#006100]" />
                    ) : (
                      <XIcon className="w-4 h-4 text-[#9c0006]" />
                    )}
                    <span className="text-[12px] font-bold" style={{ color: state.overallPassed ? "#006100" : "#9c0006" }}>
                      {state.overallPassed ? "PASSED" : "FAILED"}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#444444] mt-1">
                    {state.overallScore}/{state.overallTotal} correct answers
                  </p>
                </div>

                {/* Per-topic breakdown */}
                <div className="border-t border-[#aca899] pt-2 mb-3">
                  {quizTopics.map((t) => {
                    const progress = getTopicProgress(t.id);
                    if (!progress || !progress.submitted) return null;
                    const p = Math.round((progress.score / progress.total) * 100);
                    return (
                      <div key={t.id} className="flex justify-between text-[11px] py-0.5">
                        <span>{t.title}</span>
                        <span className="font-bold" style={{ color: p >= 75 ? "#006100" : "#9c0006" }}>
                          {progress.score}/{progress.total} ({p}%)
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center border-t border-[#aca899] pt-3">
                  <button onClick={resetAll} className="xp-button-primary cursor-pointer">
                    Restart Exam
                  </button>
                </div>
              </div>
            )}

            {/* Topic ListView */}
            <div className="xp-listview mb-4">
              <div className="xp-listview-header xp-topic-header">
                <div>#</div>
                <div>Topic</div>
                <div>Items</div>
                <div>Status</div>
                <div>Review</div>
                <div>Exam</div>
              </div>
              {quizTopics.map((topic, i) => {
                const submitted = isTopicSubmitted(topic.id);
                const progress = getTopicProgress(topic.id);
                const answeredCount = getAnsweredCount(topic.id);
                const score = progress?.submitted ? Math.round((progress.score / progress.total) * 100) : null;
                const IconComponent = iconMap[topic.icon];
                const inProgress = !submitted && answeredCount > 0;

                return (
                  <div
                    key={topic.id}
                    className="xp-listview-row xp-topic-row"
                    onClick={() => handleTopicTap(topic.id)}
                  >
                    <div className="xp-topic-number text-[12px]">{i + 1}</div>
                    <div className="xp-topic-name">
                      {IconComponent && <IconComponent className="w-4 h-4 text-[#0054e3]" />}
                      <span className="xp-topic-copy">
                        <span className="xp-topic-title text-[12px] truncate font-bold">{topic.title}</span>
                        <span className="xp-topic-description">{topic.description}</span>
                      </span>
                    </div>
                    <div className="xp-topic-items text-[12px]">{topic.questions.length}</div>
                    <div className="xp-topic-status">
                      {submitted ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold" style={{ color: score !== null && score >= 75 ? "#006100" : "#9c0006" }}>
                          {score !== null && score >= 75 ? (
                            <CheckIcon className="w-3.5 h-3.5" />
                          ) : (
                            <XIcon className="w-3.5 h-3.5" />
                          )}
                          {score}%
                        </span>
                      ) : inProgress ? (
                        <span className="text-[11px] text-[#0054e3] font-bold">{answeredCount}/100</span>
                      ) : (
                        <span className="text-[11px] text-[#808080]">Pending</span>
                      )}
                    </div>
                    <div className="xp-topic-action">
                      <Link href={`/notes/${topic.id}`} className="xp-button text-[11px] px-2 py-1 no-underline flex items-center gap-1">
                        <BookIcon className="w-3.5 h-3.5" />
                        Notes
                      </Link>
                    </div>
                    <div className="xp-topic-action">
                      <Link href={`/quiz/${topic.id}`} className="xp-button text-[11px] px-2 py-1 no-underline flex items-center gap-1">
                        <PencilIcon className="w-3.5 h-3.5" />
                        {submitted ? "Retake" : inProgress ? "Resume" : "Exam"}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Attempt History */}
            {state.attempts.length > 0 && (
              <div className="border border-[#7f9db9] rounded bg-white p-3">
                <p className="text-[11px] font-bold mb-2">Attempt History</p>
                {state.attempts.map((a, i) => (
                  <div key={i} className="flex justify-between text-[11px] py-1 border-b border-[#f0f0f0] last:border-0">
                    <span className="text-[#444444]">Attempt #{i + 1} - {a.date}</span>
                    <span className="flex items-center gap-1 font-bold" style={{ color: a.passed ? "#006100" : "#9c0006" }}>
                      {a.passed ? (
                        <CheckIcon className="w-3 h-3" />
                      ) : (
                        <XIcon className="w-3 h-3" />
                      )}
                      {Math.round((a.score / a.total) * 100)}% - {a.passed ? "Passed" : "Failed"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* XP Taskbar */}
      <XPTaskbar />
    </div>
  );
}
