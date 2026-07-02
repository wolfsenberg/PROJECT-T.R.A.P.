"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface TopicProgress {
  answers: (number | null)[];       // user's answers (null = unanswered)
  questions: number[];              // shuffled question indices (to keep order consistent on return)
  submitted: boolean;               // true = locked/done
  score: number;                    // correct count (only meaningful when submitted)
  total: number;                    // total questions
}

interface GameState {
  topics: Record<string, TopicProgress>;
  allCompleted: boolean;
  overallScore: number;
  overallTotal: number;
  overallPassed: boolean;
  attempts: { date: string; score: number; total: number; passed: boolean }[];
}

interface GameContextType {
  state: GameState;
  getTopicProgress: (topicId: string) => TopicProgress | null;
  isTopicSubmitted: (topicId: string) => boolean;
  startOrResumeTopic: (topicId: string, totalQuestions: number) => TopicProgress;
  saveAnswer: (topicId: string, questionIndex: number, answer: number) => void;
  submitTopic: (topicId: string, score: number) => void;
  getCompletedCount: () => number;
  getAnsweredCount: (topicId: string) => number;
  resetTopic: (topicId: string) => void;
  resetAll: () => void;
}

const TOTAL_TOPICS = 7;
const PASSING_RATE = 0.75;

const defaultState: GameState = {
  topics: {},
  allCompleted: false,
  overallScore: 0,
  overallTotal: 0,
  overallPassed: false,
  attempts: [],
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>(defaultState);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      const saved = localStorage.getItem("ccis-exam-state-v2");
      if (saved) {
        try { setState(JSON.parse(saved)); } catch { /* ignore */ }
      }
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("ccis-exam-state-v2", JSON.stringify(state));
    }
  }, [state, loaded]);

  const getTopicProgress = (topicId: string): TopicProgress | null => {
    return state.topics[topicId] || null;
  };

  const isTopicSubmitted = (topicId: string): boolean => {
    return !!state.topics[topicId]?.submitted;
  };

  const startOrResumeTopic = (topicId: string, totalQuestions: number): TopicProgress => {
    const existing = state.topics[topicId];
    if (existing) return existing;

    // Create shuffled indices for this topic
    const indices = Array.from({ length: totalQuestions }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const newProgress: TopicProgress = {
      answers: new Array(totalQuestions).fill(null),
      questions: indices,
      submitted: false,
      score: 0,
      total: totalQuestions,
    };

    setState((prev) => ({
      ...prev,
      topics: { ...prev.topics, [topicId]: newProgress },
    }));

    return newProgress;
  };

  const saveAnswer = (topicId: string, questionIndex: number, answer: number) => {
    setState((prev) => {
      const topic = prev.topics[topicId];
      if (!topic || topic.submitted) return prev;
      const newAnswers = [...topic.answers];
      newAnswers[questionIndex] = answer;
      return {
        ...prev,
        topics: {
          ...prev.topics,
          [topicId]: { ...topic, answers: newAnswers },
        },
      };
    });
  };

  const submitTopic = (topicId: string, score: number) => {
    setState((prev) => {
      const topic = prev.topics[topicId];
      if (!topic || topic.submitted) return prev;

      const newTopics = {
        ...prev.topics,
        [topicId]: { ...topic, submitted: true, score },
      };

      const completedCount = Object.values(newTopics).filter((t) => t.submitted).length;
      const allDone = completedCount >= TOTAL_TOPICS;

      let overallScore = 0;
      let overallTotal = 0;
      let overallPassed = false;
      let attempts = prev.attempts;

      if (allDone) {
        Object.values(newTopics).forEach((t) => {
          overallScore += t.score;
          overallTotal += t.total;
        });
        overallPassed = overallTotal > 0 && overallScore / overallTotal >= PASSING_RATE;
        attempts = [
          ...prev.attempts,
          {
            date: new Date().toLocaleDateString(),
            score: overallScore,
            total: overallTotal,
            passed: overallPassed,
          },
        ];
      }

      return {
        ...prev,
        topics: newTopics,
        allCompleted: allDone,
        overallScore,
        overallTotal,
        overallPassed,
        attempts,
      };
    });
  };

  const getCompletedCount = (): number => {
    return Object.values(state.topics).filter((t) => t.submitted).length;
  };

  const getAnsweredCount = (topicId: string): number => {
    const topic = state.topics[topicId];
    if (!topic) return 0;
    return topic.answers.filter((a) => a !== null).length;
  };

  const resetTopic = (topicId: string) => {
    setState((prev) => {
      const newTopics = { ...prev.topics };
      delete newTopics[topicId];

      // Recalculate allCompleted
      const completedCount = Object.values(newTopics).filter((t) => t.submitted).length;

      return {
        ...prev,
        topics: newTopics,
        allCompleted: completedCount >= TOTAL_TOPICS,
        // Reset overall if it was completed before
        overallScore: completedCount >= TOTAL_TOPICS ? prev.overallScore : 0,
        overallTotal: completedCount >= TOTAL_TOPICS ? prev.overallTotal : 0,
        overallPassed: completedCount >= TOTAL_TOPICS ? prev.overallPassed : false,
      };
    });
  };

  const resetAll = () => {
    setState((prev) => ({
      ...defaultState,
      attempts: prev.attempts,
    }));
  };

  return (
    <GameContext.Provider
      value={{
        state,
        getTopicProgress,
        isTopicSubmitted,
        startOrResumeTopic,
        saveAnswer,
        submitTopic,
        getCompletedCount,
        getAnsweredCount,
        resetTopic,
        resetAll,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}
