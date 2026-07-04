"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { quizTopics } from "@/data";
import { iconMap, CheckIcon, XIcon } from "@/components/Icons";
import { useGame } from "@/context/GameContext";

function WindowsFlag({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="0.5" fill="#ff0000" />
      <rect x="9" y="1" width="6" height="6" rx="0.5" fill="#00aa00" />
      <rect x="1" y="9" width="6" height="6" rx="0.5" fill="#0066ff" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" fill="#ffcc00" />
    </svg>
  );
}

export default function XPTaskbar() {
  const { state, isTopicSubmitted, getTopicProgress, getCompletedCount, getAnsweredCount } = useGame();
  const done = getCompletedCount();
  const [clock, setClock] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [countdown, setCountdown] = useState("");
  const [startOpen, setStartOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
      setDateStr(now.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" }));

      // Countdown to July 29
      const target = new Date(now.getFullYear(), 6, 29); // July is month 6 (0-indexed)
      if (now > target) {
        // If July 29 already passed this year, count to next year
        target.setFullYear(target.getFullYear() + 1);
      }
      const diff = target.getTime() - now.getTime();
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setCountdown(`${days}d`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  // Close start menu when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setStartOpen(false);
      }
    }
    if (startOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [startOpen]);

  return (
    <>
      {/* Start Menu Popup */}
      {startOpen && (
        <div
          ref={menuRef}
          className="xp-start-menu fixed bottom-[36px] left-0 z-[1000]"
          style={{ width: 320 }}
        >
          <div
            className="xp-start-menu-content overflow-hidden"
            style={{
              border: "2px solid",
              borderTopColor: "#ffffff",
              borderLeftColor: "#ffffff",
              borderRightColor: "#404040",
              borderBottomColor: "#404040",
              borderRadius: "8px 8px 0 0",
              boxShadow: "3px 3px 8px rgba(0,0,0,0.4)",
            }}
          >
            {/* Header strip */}
            <div
              className="px-3 py-2 flex items-center gap-2"
              style={{
                background: "linear-gradient(180deg, #1665d8 0%, #0050d0 100%)",
              }}
            >
              <div className="w-8 h-8 rounded-full bg-[#c0c0c0] border-2 border-white flex items-center justify-center">
                <svg className="w-4 h-4 text-[#0054e3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="text-white text-[12px] font-bold">Student</span>
            </div>

            {/* Body — two columns */}
            <div className="xp-start-menu-body flex">
              {/* Left: Topics */}
              <div className="flex-1 bg-white py-1">
                <p className="px-3 py-1 text-[10px] text-[#808080] font-bold border-b border-[#ece9d8]">
                  Topics ({done}/7 completed)
                </p>
                {quizTopics.map((topic, i) => {
                  const submitted = isTopicSubmitted(topic.id);
                  const progress = getTopicProgress(topic.id);
                  const answeredCount = getAnsweredCount(topic.id);
                  const score = progress?.submitted ? Math.round((progress.score / progress.total) * 100) : null;
                  const IconComponent = iconMap[topic.icon];
                  const passed = score !== null && score >= 75;
                  const inProgress = !submitted && answeredCount > 0;

                  return (
                    <Link
                      key={topic.id}
                      href={`/quiz/${topic.id}`}
                      onClick={() => setStartOpen(false)}
                      className="flex items-center gap-2 px-3 py-[6px] no-underline text-[11px] hover:bg-[#316ac5] hover:text-white text-[#000000] cursor-pointer"
                    >
                      <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        {submitted ? (
                          passed ? (
                            <CheckIcon className="w-3.5 h-3.5 text-[#006100]" />
                          ) : (
                            <XIcon className="w-3.5 h-3.5 text-[#9c0006]" />
                          )
                        ) : (
                          IconComponent && <IconComponent className="w-4 h-4 text-[#0054e3]" />
                        )}
                      </span>
                      <span className="flex-1 truncate">
                        {i + 1}. {topic.title}
                      </span>
                      {score !== null && (
                        <span
                          className="text-[10px] font-bold"
                          style={{ color: passed ? "#006100" : "#9c0006" }}
                        >
                          {score}%
                        </span>
                      )}
                      {inProgress && (
                        <span className="text-[10px] text-[#0054e3]">
                          {answeredCount}/100
                        </span>
                      )}
                      {!submitted && answeredCount === 0 && (
                        <span className="text-[10px] text-[#808080]">
                          100
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Right: Progress info */}
              <div className="xp-start-menu-side w-[110px] bg-[#d3e5fa] py-2 px-2 border-l border-[#7f9db9]">
                <p className="text-[10px] font-bold text-[#003c74] mb-2">Progress</p>

                <div className="space-y-2">
                  <div className="text-center">
                    <p className="text-[18px] font-bold text-[#0054e3]">{done}/7</p>
                    <p className="text-[9px] text-[#003c74]">Completed</p>
                  </div>

                  <div className="h-[4px] bg-white border border-[#7f9db9] rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-[#37b44a]"
                      style={{ width: `${Math.round((done / 7) * 100)}%` }}
                    />
                  </div>

                  <div className="text-center border-t border-[#7f9db9] pt-2 mt-2">
                    <p className="text-[14px] font-bold text-[#003c74]">
                      {state.attempts.length}
                    </p>
                    <p className="text-[9px] text-[#003c74]">
                      {state.attempts.length === 1 ? "Attempt" : "Attempts"}
                    </p>
                  </div>

                  {state.allCompleted && (
                    <div className="text-center border-t border-[#7f9db9] pt-2">
                      <p className="text-[12px] font-bold" style={{ color: state.overallPassed ? "#006100" : "#9c0006" }}>
                        {Math.round((state.overallScore / state.overallTotal) * 100)}%
                      </p>
                      <p className="text-[9px]" style={{ color: state.overallPassed ? "#006100" : "#9c0006" }}>
                        {state.overallPassed ? "Passed" : "Failed"}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#ece9d8] border-t border-[#aca899] px-3 py-1 flex items-center justify-between">
              <span className="text-[10px] text-[#808080]">
                {state.allCompleted ? "All topics completed" : `${7 - done} topic${7 - done === 1 ? "" : "s"} remaining`}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="xp-taskbar">
        <button
          className={`xp-start-button ${startOpen ? "shadow-inner" : ""}`}
          onClick={() => setStartOpen(!startOpen)}
          style={startOpen ? {
            background: "linear-gradient(180deg, #2a7a2c 0%, #1a6c1c 30%, #0e5b10 70%, #085008 100%)",
          } : undefined}
        >
          <WindowsFlag className="xp-start-flag" />
          <span>start</span>
        </button>

        {/* System Tray / Notification Area */}
        <div className="xp-clock flex items-center gap-2 sm:gap-3">
          {/* Attempt counter */}
          <span className="text-[10px] text-[#a0c0e0] flex items-center gap-1" title={`${state.attempts.length} completed attempt(s)`}>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            {state.attempts.length}
          </span>

          {/* Separator */}
          <span className="w-px h-4 bg-[#1a4e8a]" />

          {/* Countdown to July 29 */}
          <span className="text-[10px] text-[#ffcc00] flex items-center gap-1" title="Days until July 29">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {countdown}
          </span>

          {/* Separator */}
          <span className="w-px h-4 bg-[#1a4e8a] hidden sm:block" />

          {/* Date (hidden on mobile) */}
          <span className="text-[10px] hidden sm:inline">{dateStr}</span>

          {/* Clock */}
          <span className="text-[11px]">{clock}</span>
        </div>
      </div>
    </>
  );
}
