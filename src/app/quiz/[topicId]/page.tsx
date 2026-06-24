"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { quizTopics } from "@/data";
import { Question } from "@/data/types";
import { ArrowLeftIcon, CheckIcon, XIcon, InfoIcon } from "@/components/Icons";
import { useGame } from "@/context/GameContext";

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params.topicId as string;
  const { isTopicLocked, completeQuiz } = useGame();

  const topic = quizTopics.find((t) => t.id === topicId);

  // Redirect if topic is locked (already completed)
  useEffect(() => {
    if (topic && isTopicLocked(topic.id)) {
      router.push("/");
    }
  }, [topic, isTopicLocked, router]);

  const questions = useMemo(() => {
    if (!topic) return [];
    return shuffleArray(topic.questions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic?.id]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => new Array(questions.length || 100).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [flashType, setFlashType] = useState<"correct" | "wrong" | null>(null);

  const currentQuestion: Question | undefined = questions[currentIndex];
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;

  useEffect(() => {
    if (flashType) {
      const timer = setTimeout(() => setFlashType(null), 500);
      return () => clearTimeout(timer);
    }
  }, [flashType]);

  const selectAnswer = useCallback(
    (choiceIndex: number) => {
      if (answers[currentIndex] !== null) return;
      const newAnswers = [...answers];
      newAnswers[currentIndex] = choiceIndex;
      setAnswers(newAnswers);

      const isCorrect = choiceIndex === questions[currentIndex]?.answer;
      setFlashType(isCorrect ? "correct" : "wrong");
    },
    [answers, currentIndex, questions]
  );

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const finishQuiz = () => {
    const correct = answers.reduce<number>((acc, ans, idx) => {
      if (ans !== null && ans === questions[idx]?.answer) return acc + 1;
      return acc;
    }, 0);
    completeQuiz(topicId, correct, questions.length);
    setShowResults(true);
  };

  const correctCount = answers.reduce<number>((acc, ans, idx) => {
    if (ans !== null && ans === questions[idx]?.answer) return acc + 1;
    return acc;
  }, 0);

  const answeredCount = answers.filter((a) => a !== null).length;
  const percentage = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  if (!topic) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#ff3300] text-xl font-[VT323]">ERROR: TOPIC NOT FOUND</p>
          <button onClick={() => router.push("/")} className="retro-btn mt-6">RETURN TO MENU</button>
        </div>
      </main>
    );
  }

  // Results Screen
  if (showResults && !showReview) {
    const passed = percentage >= 75;
    return (
      <main className="min-h-screen p-5 md:p-10 max-w-3xl mx-auto">
        <div className="retro-card p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-3xl glow-green text-[#33ff00] mb-2 font-[VT323]">
            TOPIC COMPLETE
          </h2>
          <p className="text-sm text-[#1a8c00] mb-6">{topic.title}</p>

          {/* Score */}
          <div
            className={`w-36 h-36 mx-auto border-2 ${passed ? "border-[#33ff00]" : "border-[#ff3300]"} rounded-full flex flex-col items-center justify-center mb-6 score-pop`}
            style={{ boxShadow: `0 0 25px ${passed ? "rgba(51,255,0,0.3)" : "rgba(255,51,0,0.3)"}` }}
          >
            <span className={`text-4xl font-bold font-[VT323] ${passed ? "text-[#33ff00] glow-green" : "text-[#ff3300]"}`}>
              {percentage}%
            </span>
            <span className="text-xs text-[#1a8c00]">{correctCount}/{questions.length}</span>
          </div>

          <p className={`text-sm mb-6 ${passed ? "text-[#33ff00]" : "text-[#ff3300]"}`}>
            {passed ? "PASSED (75%+ required)" : "BELOW PASSING (75% required)"}
          </p>

          {/* Breakdown */}
          <div className="text-left retro-card p-4 mb-6 space-y-2 text-sm">
            <p className="text-[#33ff00] flex items-center gap-2">
              <CheckIcon className="w-4 h-4" /> Correct: {correctCount}
            </p>
            <p className="text-[#ff3300] flex items-center gap-2">
              <XIcon className="w-4 h-4" /> Wrong: {answeredCount - correctCount}
            </p>
            <p className="text-[#1a4d00]">
              Skipped: {questions.length - answeredCount}
            </p>
          </div>

          <p className="text-xs text-[#1a8c00] mb-6">
            This topic is now locked. Complete all remaining topics to see your overall score.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => setShowReview(true)} className="retro-btn retro-btn-highlight">
              REVIEW ANSWERS
            </button>
            <button onClick={() => router.push("/")} className="retro-btn">
              BACK TO MENU
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Review Screen
  if (showReview) {
    return (
      <main className="min-h-screen p-5 md:p-10 max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl glow-green-subtle text-[#33ff00] font-[VT323]">ANSWER REVIEW</h2>
          <button onClick={() => router.push("/")} className="retro-btn text-sm">BACK TO MENU</button>
        </div>

        <div className="space-y-3">
          {questions.map((q, idx) => {
            const userAns = answers[idx];
            const isCorrect = userAns === q.answer;
            const letters = ["A", "B", "C", "D"];
            return (
              <div key={idx} className={`retro-card p-4 border-l-4 ${
                userAns === null ? "border-l-[#1a4d00]" : isCorrect ? "border-l-[#33ff00]" : "border-l-[#ff3300]"
              }`}>
                <p className="text-[#33ff00] text-sm mb-2 leading-relaxed">{idx + 1}. {q.question}</p>
                {userAns !== null ? (
                  <>
                    <p className={`text-xs ${isCorrect ? "text-[#33ff00]" : "text-[#ff3300]"}`}>
                      Your answer: {letters[userAns]}. {q.choices[userAns]}
                    </p>
                    {!isCorrect && (
                      <p className="text-xs text-[#33ff00] mt-1">
                        Correct: {letters[q.answer]}. {q.choices[q.answer]}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-xs text-[#1a4d00]">SKIPPED</p>
                )}
                <p className="text-xs text-[#1a8c00] mt-2 leading-relaxed">// {q.explanation}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 mb-10">
          <button onClick={() => router.push("/")} className="retro-btn">BACK TO MENU</button>
        </div>
      </main>
    );
  }

  // Quiz Screen
  const letters = ["A", "B", "C", "D"];
  const userAnswer = answers[currentIndex];
  const isAnswered = userAnswer !== null;

  return (
    <main className="min-h-screen p-5 md:p-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => router.push("/")} className="retro-btn text-xs flex items-center gap-2">
          <ArrowLeftIcon className="w-4 h-4" /> EXIT
        </button>
        <span className="text-[#33ff00] text-xs font-bold glow-green-subtle tracking-wider">
          {topic.title.toUpperCase()}
        </span>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between text-xs text-[#1a8c00] mb-2">
        <span>QUESTION {currentIndex + 1} / {questions.length}</span>
        <span>{answeredCount} ANSWERED</span>
      </div>
      <div className="progress-bar-retro mb-5">
        <div className="progress-fill-retro" style={{ width: `${progress}%` }} />
      </div>

      {/* Question Card */}
      <div className={`retro-card p-6 ${flashType === "correct" ? "correct-flash" : ""} ${flashType === "wrong" ? "wrong-shake" : ""}`}>
        <h3 className="text-[#33ff00] text-base leading-relaxed mb-6 glow-green-subtle">
          {currentIndex + 1}. {currentQuestion?.question}
        </h3>

        {/* Choices */}
        <div className="space-y-3">
          {currentQuestion?.choices.map((choice, idx) => {
            let btnClass = "choice-btn";
            if (isAnswered) {
              btnClass += " disabled";
              if (idx === currentQuestion.answer) btnClass += " correct";
              else if (idx === userAnswer) btnClass += " wrong";
            }
            return (
              <button key={idx} className={btnClass} onClick={() => selectAnswer(idx)}>
                <span className="font-bold mr-3 text-[#1a8c00]">[{letters[idx]}]</span>
                {choice}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {isAnswered && currentQuestion && (
          <div className="mt-6 p-4 border-l-2 border-[#33ff00] bg-[#001100] text-sm text-[#33ff00] leading-relaxed">
            <div className="flex items-start gap-3">
              <InfoIcon className="w-5 h-5 mt-0.5 shrink-0 text-[#1a8c00]" />
              <span>{currentQuestion.explanation}</span>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevQuestion}
            className="retro-btn text-xs"
            style={{ visibility: currentIndex > 0 ? "visible" : "hidden" }}
          >
            {"<"} PREV
          </button>
          {currentIndex < questions.length - 1 ? (
            <button onClick={nextQuestion} className="retro-btn text-xs">NEXT {">"}</button>
          ) : (
            <button onClick={finishQuiz} className="retro-btn retro-btn-highlight text-xs">
              [ SUBMIT EXAM ]
            </button>
          )}
        </div>
      </div>

      {/* Question Navigator */}
      <div className="mt-5 retro-card p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[#1a8c00] text-[10px] tracking-wider">QUESTION MAP</p>
          <p className="text-[#1a8c00] text-[10px]">
            <span className="text-[#33ff00]">{correctCount}</span> correct / <span className="text-[#ff3300]">{answeredCount - correctCount}</span> wrong / <span>{questions.length - answeredCount}</span> remaining
          </p>
        </div>
        <div className="flex flex-wrap gap-[3px]">
          {questions.map((_, idx) => {
            const ans = answers[idx];
            let dotColor = "bg-[#001a00] border-[#1a4d00] text-[#1a4d00]";
            if (ans !== null) {
              dotColor = ans === questions[idx].answer
                ? "bg-[#0a3300] border-[#33ff00] text-[#33ff00]"
                : "bg-[#1a0000] border-[#ff3300] text-[#ff3300]";
            }
            if (idx === currentIndex) {
              dotColor += " ring-1 ring-[#33ff00] shadow-[0_0_4px_#33ff00]";
            }
            return (
              <button key={idx} onClick={() => setCurrentIndex(idx)}
                className={`w-[22px] h-[22px] border text-[8px] flex items-center justify-center font-bold ${dotColor}`}>
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
