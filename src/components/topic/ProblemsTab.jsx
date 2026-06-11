import ProblemCard from "./ProblemCard";

export default function ProblemsTab({ topic, progressApi }) {
  const { problems } = topic;

  if (!problems || problems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
        <span className="text-5xl mb-4">🔧</span>
        <p className="text-gray-400">No problems added yet for this topic.</p>
        <p className="text-gray-600 text-sm mt-1">Problems will appear here once provided.</p>
      </div>
    );
  }

  const easyCount = problems.filter((p) => p.difficulty === "Easy").length;
  const medCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardCount = problems.filter((p) => p.difficulty === "Hard").length;
  const solvedCount = problems.filter((p) => progressApi.isProblemSeen(topic.id, p.id)).length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="font-medium text-white">{problems.length}</span> Problems
        </div>
        <div className="w-px h-4 bg-surface-border" />
        {easyCount > 0 && (
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            🟢 {easyCount} Easy
          </span>
        )}
        {medCount > 0 && (
          <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            🟡 {medCount} Medium
          </span>
        )}
        {hardCount > 0 && (
          <span className="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
            🔴 {hardCount} Hard
          </span>
        )}
        <div className="ml-auto text-xs text-gray-500">
          {solvedCount}/{problems.length} solved
        </div>
      </div>

      {/* Problem cards */}
      <div className="space-y-6">
        {problems.map((problem, index) => (
          <ProblemCard
            key={problem.id}
            problem={problem}
            index={index}
            topicId={topic.id}
            progressApi={progressApi}
          />
        ))}
      </div>
    </div>
  );
}
