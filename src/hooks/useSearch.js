import { useState, useMemo } from "react";
import { getAllSearchableContent } from "../data/topics";
import { labExercises } from "../data/labExercises";

export function useSearch() {
  const [query, setQuery] = useState("");

  const allContent = useMemo(() => {
    const topicsContent = getAllSearchableContent();
    
    // Format lab exercises for search
    const labsContent = [];
    labExercises.forEach((lab) => {
      lab.problems.forEach((problem) => {
        labsContent.push({
          type: "lab",
          topicId: "lab-" + lab.id,
          topicSlug: "lab-solutions",
          topicTitle: lab.title,
          text: problem.title,
          sub: problem.statement.substring(0, 100) + "...",
          difficulty: problem.difficulty,
          labId: lab.id,
          problemId: problem.id,
        });
      });
    });

    return [...topicsContent, ...labsContent];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) return [];

    return allContent.filter(
      (item) =>
        item.text.toLowerCase().includes(q) ||
        item.sub?.toLowerCase().includes(q) ||
        item.topicTitle?.toLowerCase().includes(q)
    );
  }, [query, allContent]);

  const groupedResults = useMemo(() => {
    const groups = {};
    results.forEach((item) => {
      if (!groups[item.topicId]) {
        groups[item.topicId] = { topicTitle: item.topicTitle, topicSlug: item.topicSlug, items: [] };
      }
      groups[item.topicId].items.push(item);
    });
    return Object.values(groups);
  }, [results]);

  return { query, setQuery, results, groupedResults };
}

