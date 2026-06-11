import { useState, useEffect } from "react";

const STORAGE_KEY = "c_learning_progress";

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markTopicComplete = (topicId) => {
    setProgress((prev) => ({ ...prev, [topicId]: { ...prev[topicId], complete: true } }));
  };

  const toggleTopicComplete = (topicId) => {
    setProgress((prev) => ({
      ...prev,
      [topicId]: { ...prev[topicId], complete: !prev[topicId]?.complete },
    }));
  };

  const isTopicComplete = (topicId) => !!progress[topicId]?.complete;

  const markProblemSeen = (topicId, problemId) => {
    setProgress((prev) => ({
      ...prev,
      [topicId]: {
        ...prev[topicId],
        seenProblems: { ...(prev[topicId]?.seenProblems || {}), [problemId]: true },
      },
    }));
  };

  const isProblemSeen = (topicId, problemId) =>
    !!progress[topicId]?.seenProblems?.[problemId];

  const getOverallProgress = (totalTopics) => {
    const completed = Object.values(progress).filter((t) => t.complete).length;
    return totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;
  };

  const resetProgress = () => {
    setProgress({});
  };

  return {
    markTopicComplete,
    toggleTopicComplete,
    isTopicComplete,
    markProblemSeen,
    isProblemSeen,
    getOverallProgress,
    resetProgress,
    progress,
  };
}
