"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { quizTopics } from "@/data";
import { notesByTopic } from "@/data/notes";
import { Question } from "@/data/types";
import { useGame } from "@/context/GameContext";
import { ArrowLeftIcon, CheckIcon, XIcon, InfoIcon } from "@/components/Icons";
import XPTaskbar from "@/components/XPTaskbar";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params.topicId as string;
  const { startOrResumeTopic, saveAnswer, submitTopic, getTopicProgress } = useGame();
  const topic = quizTopics.find((t) => t.id === topicId);
  const topicNotes = notesByTopic[topicId];
  const [idx, setIdx] = useState(0);
  const [view, setView] = useState<"quiz" | "results" | "review">("quiz");

  // Initialize or resume progress
  const progress = useMemo(() => {
    if (!topic) return null;
    return startOrResumeTopic(topic.id, topic.questions.length, topic.questions.map((question) => question.choices.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic?.id]);

  // Get questions in the saved shuffled order
  const questions: Question[] = useMemo(() => {
    if (!topic || !progress) return [];
    return progress.questions.map((i) => topic.questions[i]);
  }, [topic, progress]);

  // Use live progress from context (not local state) for answers
  const liveProgress = getTopicProgress(topicId);
  const answers = liveProgress?.answers || new Array(100).fill(null);
  const choiceOrders = liveProgress?.choiceOrders || progress?.choiceOrders || [];

  const getChoiceOrder = (questionIndex: number) => {
    return choiceOrders[questionIndex] || questions[questionIndex]?.choices.map((_, choiceIndex) => choiceIndex) || [];
  };

  const getOriginalChoiceIndex = (questionIndex: number, displayChoiceIndex: number) => {
    return getChoiceOrder(questionIndex)[displayChoiceIndex] ?? displayChoiceIndex;
  };

  const isAnswerCorrect = (questionIndex: number, displayChoiceIndex: number | null) => {
    if (displayChoiceIndex === null) return false;
    return getOriginalChoiceIndex(questionIndex, displayChoiceIndex) === questions[questionIndex]?.answer;
  };

  const q: Question | undefined = questions[idx];
  const answered = answers.filter((a: number | null) => a !== null).length;
  const correct = answers.reduce<number>((s: number, a: number | null, i: number) => (isAnswerCorrect(i, a) ? s + 1 : s), 0);
  const pct = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;

  // Find first unanswered question to resume at
  useEffect(() => {
    if (liveProgress && view === "quiz") {
      const firstUnanswered = liveProgress.answers.findIndex((a) => a === null);
      if (firstUnanswered !== -1 && firstUnanswered > 0) {
        queueMicrotask(() => setIdx(firstUnanswered));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pick = useCallback((choice: number) => {
    if (answers[idx] !== null) return;
    saveAnswer(topicId, idx, choice);
  }, [answers, idx, saveAnswer, topicId]);

  const submit = () => {
    const finalScore = answers.reduce<number>((s: number, a: number | null, i: number) => (isAnswerCorrect(i, a) ? s + 1 : s), 0);
    submitTopic(topicId, finalScore);
    setView("results");
  };

  if (!topic) {
    return (
      <div className="xp-desktop">
        <div className="flex-1 flex items-start sm:items-center justify-center p-2 sm:p-4 pb-14">
          <div className="xp-window w-80">
            <div className="xp-titlebar">
              <span className="xp-titlebar-text">Error</span>
              <div className="xp-titlebar-buttons">
                <div className="xp-titlebar-btn xp-btn-close"><svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="2"/></svg></div>
              </div>
            </div>
            <div className="xp-body text-center py-6">
              <p className="text-[12px] text-[#9c0006] font-bold mb-3">Topic not found</p>
              <button onClick={() => router.push("/")} className="xp-button-primary cursor-pointer">Go Back</button>
            </div>
          </div>
        </div>
        <XPTaskbar />
      </div>
    );
  }

  // === RESULTS ===
  if (view === "results") {
    const passed = pct >= 75;
    return (
      <div className="xp-desktop">
        <div className="flex-1 flex items-start sm:items-center justify-center p-2 sm:p-4 pb-14">
          <div className="xp-window w-full max-w-lg">
            <div className="xp-titlebar">
              <svg className="xp-titlebar-icon text-white" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2h12v12H2V2zm1 2v8h10V4H3zm1 1h8v1H4V5zm0 2h8v1H4V7zm0 2h5v1H4V9z"/></svg>
              <span className="xp-titlebar-text">Results - {topic.title}</span>
              <div className="xp-titlebar-buttons">
                <div className="xp-titlebar-btn xp-btn-close" onClick={() => router.push("/")}><svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="2"/></svg></div>
              </div>
            </div>
            <div className="xp-body">
              <div className="text-center mb-4">
                <p className="text-[36px] font-bold" style={{ color: passed ? "#006100" : "#9c0006" }}>{pct}%</p>
                <div className="flex items-center justify-center gap-1 mb-1">
                  {passed ? <CheckIcon className="w-4 h-4 text-[#006100]" /> : <XIcon className="w-4 h-4 text-[#9c0006]" />}
                  <span className="text-[13px] font-bold" style={{ color: passed ? "#006100" : "#9c0006" }}>
                    {passed ? "PASSED" : "FAILED"}
                  </span>
                </div>
                <p className="text-[11px] text-[#444]">75% required to pass</p>
              </div>
              <div className="border border-[#7f9db9] rounded bg-[#fafafa] p-3 mb-4">
                <div className="flex justify-between text-[11px] py-1 border-b border-[#f0f0f0]">
                  <span className="flex items-center gap-1"><CheckIcon className="w-3 h-3 text-[#006100]" /> Correct</span>
                  <span className="font-bold">{correct}</span>
                </div>
                <div className="flex justify-between text-[11px] py-1 border-b border-[#f0f0f0]">
                  <span className="flex items-center gap-1"><XIcon className="w-3 h-3 text-[#9c0006]" /> Wrong</span>
                  <span className="font-bold">{answered - correct}</span>
                </div>
                <div className="flex justify-between text-[11px] py-1">
                  <span className="text-[#808080]">Skipped</span>
                  <span className="font-bold">{questions.length - answered}</span>
                </div>
              </div>
              <p className="text-[11px] text-[#444] text-center mb-4">This topic is now locked. Complete remaining topics to see overall score.</p>
              <div className="flex gap-2 justify-center">
                <button onClick={() => setView("review")} className="xp-button cursor-pointer">Review Answers</button>
                <button onClick={() => router.push("/")} className="xp-button-primary cursor-pointer">OK</button>
              </div>
            </div>
          </div>
        </div>
        <XPTaskbar />
      </div>
    );
  }

  // === REVIEW ===
  if (view === "review") {
    const letters = ["A", "B", "C", "D"];
    return (
      <div className="xp-desktop">
        <div className="flex-1 flex items-start justify-center p-2 sm:p-4 pb-14 overflow-auto">
          <div className="xp-window w-full max-w-2xl">
            <div className="xp-titlebar">
              <svg className="xp-titlebar-icon text-white" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2h12v12H2V2zm1 2v8h10V4H3zm1 1h8v1H4V5zm0 2h8v1H4V7zm0 2h5v1H4V9z"/></svg>
              <span className="xp-titlebar-text">Review - {topic.title}</span>
              <div className="xp-titlebar-buttons">
                <div className="xp-titlebar-btn xp-btn-close" onClick={() => router.push("/")}><svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="2"/></svg></div>
              </div>
            </div>
            <div className="xp-toolbar">
              <button onClick={() => router.push("/")} className="xp-button text-[10px] flex items-center gap-1 cursor-pointer">
                <ArrowLeftIcon className="w-3 h-3" /> Back to Topics
              </button>
            </div>
            <div className="xp-body max-h-[70vh] overflow-y-auto">
              <div className="space-y-3">
                {questions.map((question, i) => {
                  const a = answers[i];
                  const order = getChoiceOrder(i);
                  const selectedOriginalChoice = a === null ? null : getOriginalChoiceIndex(i, a);
                  const correctDisplayIndex = order.indexOf(question.answer);
                  const ok = selectedOriginalChoice === question.answer;
                  return (
                    <div key={i} className="border border-[#aca899] rounded p-3 bg-[#fafafa]">
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-0.5">
                          {a === null ? (
                            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-[#ece9d8] text-[10px] text-[#808080]">-</span>
                          ) : ok ? (
                            <CheckIcon className="w-4 h-4 text-[#006100]" />
                          ) : (
                            <XIcon className="w-4 h-4 text-[#9c0006]" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] font-bold text-[#000] mb-1">{i + 1}. {question.question}</p>
                          {a !== null ? (
                            <div className="space-y-0.5">
                              <p className="text-[11px]" style={{ color: ok ? "#006100" : "#9c0006" }}>
                                Your answer: {letters[a]}. {selectedOriginalChoice !== null ? question.choices[selectedOriginalChoice] : ""}
                              </p>
                              {!ok && (
                                <p className="text-[11px] text-[#006100]">Correct: {letters[correctDisplayIndex]}. {question.choices[question.answer]}</p>
                              )}
                            </div>
                          ) : (
                            <p className="text-[11px] text-[#808080]">Skipped</p>
                          )}
                          <p className="text-[11px] text-[#0054e3] mt-1">{question.explanation}</p>
                          {topicNotes?.sources.length ? (
                            <details className="quiz-source-details mt-2">
                              <summary>Topic sources</summary>
                              <div className="quiz-source-list">
                                {topicNotes.sources.map((source) => (
                                  <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="quiz-source-link">
                                    {source.label}
                                  </a>
                                ))}
                              </div>
                            </details>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <XPTaskbar />
      </div>
    );
  }

  // === QUIZ ===
  const letters = ["A", "B", "C", "D"];
  const userAns = answers[idx];
  const isLocked = userAns !== null;
  const currentChoiceOrder = getChoiceOrder(idx);
  const progressPct = questions.length > 0 ? Math.round(((idx + 1) / questions.length) * 100) : 0;

  return (
    <div className="xp-desktop">
      <div className="flex-1 flex items-start sm:items-center justify-center p-2 sm:p-4 pb-14">
        <div className="xp-window w-full max-w-2xl">
          <div className="xp-titlebar">
            <svg className="xp-titlebar-icon text-white" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2h12v12H2V2zm1 2v8h10V4H3zm1 1h8v1H4V5zm0 2h8v1H4V7zm0 2h5v1H4V9z"/></svg>
            <span className="xp-titlebar-text">{topic.title}</span>
            <div className="xp-titlebar-buttons">
              <div className="xp-titlebar-btn xp-btn-minimize">
                <svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><rect x="1" y="7" width="8" height="2" fill="white"/></svg>
              </div>
              <div className="xp-titlebar-btn xp-btn-maximize">
                <svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><rect x="1" y="1" width="8" height="8" fill="none" stroke="white" strokeWidth="2"/></svg>
              </div>
              <div className="xp-titlebar-btn xp-btn-close" onClick={() => router.push("/")}>
                <svg viewBox="0 0 10 10" className="w-[9px] h-[9px]"><path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="2"/></svg>
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="xp-toolbar">
            <button onClick={() => router.push("/")} className="xp-button text-[10px] flex items-center gap-1 cursor-pointer">
              <ArrowLeftIcon className="w-3 h-3" /> Save &amp; Exit
            </button>
            <span className="text-[11px] text-[#000]">Q{idx + 1}/{questions.length}</span>
            <span className="text-[11px] text-[#444] ml-auto">
              Answered: {answered}/{questions.length}
            </span>
          </div>

          <div className="xp-body">
            {/* Progress */}
            <div className="mb-3">
              <div className="xp-progress">
                <div className="xp-progress-fill" style={{ width: `${progressPct}%` }} />
              </div>
            </div>

            {/* Question */}
            <div className="border border-[#aca899] rounded bg-[#fafafa] p-3 mb-3">
              <p className="text-[14px] sm:text-[13px] font-bold text-[#000] leading-relaxed">{q?.question}</p>
            </div>

            {/* Choices */}
            <div className="space-y-2 mb-3">
              {q && currentChoiceOrder.map((originalChoiceIndex, i) => {
                const choice = q.choices[originalChoiceIndex];
                let choiceClass = "xp-choice";
                let icon: React.ReactNode = null;
                if (isLocked) {
                  if (originalChoiceIndex === q.answer) {
                    choiceClass = "xp-choice xp-choice-correct";
                    icon = <CheckIcon className="w-4 h-4 text-[#006100]" />;
                  } else if (i === userAns) {
                    choiceClass = "xp-choice xp-choice-wrong";
                    icon = <XIcon className="w-4 h-4 text-[#9c0006]" />;
                  } else {
                    choiceClass = "xp-choice xp-choice-neutral";
                  }
                }
                return (
                  <button key={i} onClick={() => pick(i)} disabled={isLocked} className={choiceClass}>
                    <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-[#ece9d8] border border-[#aca899] flex items-center justify-center text-[10px] font-bold">{letters[i]}</span>
                    <span className="flex-1 text-[12px]">{choice}</span>
                    {icon && <span className="flex-shrink-0">{icon}</span>}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {isLocked && q && (
              <div className="xp-infobox mb-3">
                <InfoIcon className="w-4 h-4 text-[#0054e3] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold text-[#003c74] mb-0.5">Explanation</p>
                  <p className="text-[11px] text-[#000] leading-relaxed">{q.explanation}</p>
                  {topicNotes?.sources.length ? (
                    <details className="quiz-source-details mt-2">
                      <summary>Topic sources</summary>
                      <div className="quiz-source-list">
                        {topicNotes.sources.map((source) => (
                          <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="quiz-source-link">
                            {source.label}
                          </a>
                        ))}
                      </div>
                    </details>
                  ) : null}
                </div>
              </div>
            )}

            {/* Nav */}
            <div className="xp-quiz-nav flex items-center justify-between pt-2 border-t border-[#aca899]">
              <button onClick={() => setIdx(idx - 1)} disabled={idx === 0} className="xp-button cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">Previous</button>
              {idx < questions.length - 1 ? (
                <button onClick={() => setIdx(idx + 1)} className="xp-button cursor-pointer">Next</button>
              ) : (
                <button onClick={submit} className="xp-button-primary cursor-pointer">Submit</button>
              )}
            </div>
          </div>

          {/* Status Bar */}
          <div className="xp-statusbar">
            <span>{isLocked ? (isAnswerCorrect(idx, userAns) ? "Correct!" : "Incorrect") : "Select an answer"}</span>
            <span className="ml-auto">Score: {correct}/{answered}</span>
          </div>
        </div>
      </div>

      <XPTaskbar />
    </div>
  );
}
