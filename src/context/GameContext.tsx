"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface TopicResult {
  score: number;
  total: number;
  completed: boolean;
}

interface GameState {
  // Track each topic's result
  topicResults: Record<string, TopicResult>;
  // Whether all 7 topics have been completed in this attempt
  allCompleted: boolean;
  // Overall score once all are done
  overallScore: number;
  overallTotal: number;
  overallPassed: boolean;
  // Historical attempts
  attempts: { date: string; score: number; total: number; passed: boolean }[];
}

interface GameContextType {
  state: GameState;
  isTopicLocked: (topicId: string) => boolean;
  completeQuiz: (topicId: string, score: number, total: number) => void;
  getTopicResult: (topicId: string) => TopicResult | null;
  getCompletedCount: () => number;
  resetAll: () => void;
}

const TOTAL_TOPICS = 7;
const PASSING_RATE = 0.75;

const defaultState: GameState = {
  topicResults: {},
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
    const saved = localStorage.getItem("ccis-exam-state");
    if (saved) {
      try {
        setState(JSON.parse(saved));
      } catch {
        // ignore parse errors
      }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("ccis-exam-state", JSON.stringify(state));
    }
  }, [state, loaded]);

  const isTopicLocked = (topicId: string): boolean => {
    // A topic is locked if it's already been completed in this attempt
    // (user can't retake until all topics are done and they restart)
    return !!state.topicResults[topicId]?.completed;
  };

  const getTopicResult = (topicId: string): TopicResult | null => {
    return state.topicResults[topicId] || null;
  };

  const getCompletedCount = (): number => {
    return Object.values(state.topicResults).filter((r) => r.completed).length;
  };

  const completeQuiz = (topicId: string, score: number, total: number) => {
    setState((prev) => {
      const newResults = {
        ...prev.topicResults,
        [topicId]: { score, total, completed: true },
      };

      const completedCount = Object.values(newResults).filter((r) => r.completed).length;
      const allDone = completedCount >= TOTAL_TOPICS;

      let overallScore = prev.overallScore;
      let overallTotal = prev.overallTotal;
      let overallPassed = prev.overallPassed;
      let attempts = prev.attempts;

      if (allDone) {
        overallScore = Object.values(newResults).reduce((sum, r) => sum + r.score, 0);
        overallTotal = Object.values(newResults).reduce((sum, r) => sum + r.total, 0);
        overallPassed = overallScore / overallTotal >= PASSING_RATE;
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
        topicResults: newResults,
        allCompleted: allDone,
        overallScore,
        overallTotal,
        overallPassed,
        attempts,
      };
    });
  };

  const resetAll = () => {
    setState((prev) => ({
      ...defaultState,
      attempts: prev.attempts, // keep history
    }));
  };

  return (
    <GameContext.Provider
      value={{
        state,
        isTopicLocked,
        completeQuiz,
        getTopicResult,
        getCompletedCount,
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
