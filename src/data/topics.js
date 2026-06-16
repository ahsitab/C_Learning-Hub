import { topic1to5 } from "./topics/topic1to5";
import { topic6to10 } from "./topics/topic6to10";
import { topic11to15 } from "./topics/topic11to15";
import { topic16to20 } from "./topics/topic16to20";

// Combine all topics into one array
export const topics = [
  ...topic1to5,
  ...topic6to10,
  ...topic11to15,
  ...topic16to20
];

// Helper: get topic by slug
export const getTopicBySlug = (slug) =>
  topics.find((t) => t.slug === slug) || null;

// Helper: get topic by index
export const getTopicByIndex = (index) => topics[index] || null;

// Helper: all searchable content (flat list)
export const getAllSearchableContent = () => {
  const items = [];
  topics.forEach((topic) => {
    // Topic title
    items.push({ type: "topic", topicId: topic.id, topicSlug: topic.slug, topicTitle: topic.title, text: topic.title, sub: topic.description });

    // Theory sections
    if (topic.theory && topic.theory.sections) {
      topic.theory.sections.forEach((section) => {
        items.push({
          type: "theory",
          topicId: topic.id,
          topicSlug: topic.slug,
          topicTitle: topic.title,
          text: section.heading,
          sub: section.content.substring(0, 100) + "...",
        });
      });
    }

    // Problems
    if (topic.problems) {
      topic.problems.forEach((problem) => {
        items.push({
          type: "problem",
          topicId: topic.id,
          topicSlug: topic.slug,
          topicTitle: topic.title,
          text: problem.title,
          sub: problem.statement.substring(0, 100) + "...",
          difficulty: problem.difficulty,
        });
      });
    }
  });
  return items;
};
