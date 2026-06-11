import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { labExercises } from "../data/labExercises";
import CodeBlock from "../components/code/CodeBlock";

export default function LabExercisesPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("ternary");
  const [expandedProblems, setExpandedProblems] = useState({});
  
  // Local storage tracker for lab completion progress
  const [completedLabs, setCompletedLabs] = useState(() => {
    try {
      const stored = localStorage.getItem("c_learning_labs_progress");
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("c_learning_labs_progress", JSON.stringify(completedLabs));
  }, [completedLabs]);

  // Handle routing state when clicking search results
  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
    if (location.state?.openProblemId) {
      setExpandedProblems((prev) => ({ ...prev, [location.state.openProblemId]: true }));
      setTimeout(() => {
        const el = document.getElementById(`problem-card-${location.state.openProblemId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
    }
  }, [location.state]);

  const toggleExpand = (problemId) => {
    setExpandedProblems((prev) => ({
      ...prev,
      [problemId]: !prev[problemId],
    }));
  };

  const toggleCompleted = (problemId) => {
    setCompletedLabs((prev) => ({
      ...prev,
      [problemId]: !prev[problemId],
    }));
  };

  const currentLab = labExercises.find((lab) => lab.id === activeTab) || labExercises[0];

  const totalProblems = currentLab.problems.length;
  const completedCount = currentLab.problems.filter((p) => completedLabs[p.id]).length;
  const progressPercent = totalProblems > 0 ? Math.round((completedCount / totalProblems) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-gray-100 transition-colors">Home</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-300">Lab Solutions</span>
      </nav>

      {/* Header section */}
      <header className="glass-card p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-100 mb-2 flex items-center gap-3">
              <span>🧪</span> Lab Exercise Solutions
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Step-by-step solved programming labs designed for absolute beginners. Study the logic, review the comments, and run the programs on your compiler.
            </p>
          </div>
          <div className="flex-shrink-0 text-right md:border-l md:border-surface-border md:pl-6">
            <span className="text-xs text-gray-500 block">Section Progress</span>
            <span className="text-2xl font-black gradient-text">{progressPercent}%</span>
            <span className="text-xs text-gray-600 block mt-0.5">{completedCount} / {totalProblems} solved</span>
          </div>
        </div>

        {/* Section progress bar */}
        <div className="w-full h-1.5 bg-surface-border rounded-full overflow-hidden mt-5">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 rounded-full transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* Tab Switcher */}
      <div className="flex gap-2 p-1.5 bg-surface-card border border-surface-border rounded-2xl mb-8">
        {labExercises.map((lab) => {
          const isActive = lab.id === activeTab;
          const completedInTab = lab.problems.filter((p) => completedLabs[p.id]).length;
          
          return (
            <button
              key={lab.id}
              onClick={() => setActiveTab(lab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-xl text-center transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-glow-sm"
                  : "text-gray-400 hover:text-gray-100 hover:bg-surface-hover"
              }`}
            >
              <span className="text-sm font-semibold">{lab.title}</span>
              <span className="text-[10px] opacity-80 mt-0.5">
                {completedInTab} / {lab.problems.length} Solved
              </span>
            </button>
          );
        })}
      </div>

      {/* Problem list */}
      <div className="space-y-4">
        {currentLab.problems.map((problem, index) => {
          const isExpanded = !!expandedProblems[problem.id];
          const isSolved = !!completedLabs[problem.id];

          return (
            <article
              key={problem.id}
              id={`problem-card-${problem.id}`}
              className={`glass-card transition-all duration-300 ${
                isExpanded ? "border-indigo-500/40 shadow-glow" : "hover:border-surface-border/80"
              }`}
            >
              {/* Card Header (Click to toggle expand) */}
              <div 
                className="flex items-start gap-4 p-5 cursor-pointer select-none"
                onClick={() => toggleExpand(problem.id)}
              >
                {/* Solved Checkbox */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCompleted(problem.id);
                  }}
                  className={`w-6 h-6 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors ${
                    isSolved
                      ? "bg-emerald-500 border-emerald-600 text-white"
                      : "border-surface-border bg-surface-hover hover:border-emerald-500/50"
                  }`}
                >
                  {isSolved && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                {/* Problem Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <span className="text-xs font-mono text-gray-500">
                      Problem {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        problem.difficulty === "Easy"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : problem.difficulty === "Medium"
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                          : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                      }`}
                    >
                      {problem.difficulty}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-100 group-hover:text-indigo-400 transition-colors">
                    {problem.title}
                  </h3>
                </div>

                {/* Arrow indicator */}
                <svg
                  className={`w-5 h-5 text-gray-500 mt-1 transition-transform duration-300 flex-shrink-0 ${
                    isExpanded ? "transform rotate-180 text-indigo-400" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Card Body (Expanded Content) */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-1 border-t border-surface-border">
                  {/* Problem statement */}
                  <div className="my-4">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      📋 Problem Statement
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed bg-surface-hover/50 p-4 rounded-xl border border-surface-border/50">
                      {problem.statement}
                    </p>
                  </div>

                  {/* Explanation / Logic */}
                  <div className="my-4">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      💡 Logic & Approach
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {problem.explanation}
                    </p>
                  </div>

                  {/* Solution Code */}
                  <div className="my-4">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>💻 C Solution (Beginner-Friendly)</span>
                    </h4>
                    <CodeBlock code={problem.solution} language="c" />
                  </div>

                  {/* Sample I/O */}
                  {(problem.sampleInput || problem.sampleOutput) && (
                    <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {problem.sampleInput && (
                        <div>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            📥 Sample Input
                          </h4>
                          <pre className="text-xs font-mono p-3 bg-surface-hover border border-surface-border rounded-xl text-gray-300 leading-relaxed">
                            {problem.sampleInput}
                          </pre>
                        </div>
                      )}
                      {problem.sampleOutput && (
                        <div>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            📤 Sample Output
                          </h4>
                          <pre className="text-xs font-mono p-3 bg-surface-hover border border-surface-border rounded-xl text-gray-300 leading-relaxed">
                            {problem.sampleOutput}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bottom solved trigger */}
                  <div className="mt-6 pt-4 border-t border-surface-border/50 flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Study the comments above to understand the syntax and logic.
                    </span>
                    <button
                      onClick={() => toggleCompleted(problem.id)}
                      className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
                        isSolved
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
                          : "bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-glow-sm"
                      }`}
                    >
                      {isSolved ? "✓ Solved" : "Mark as Solved"}
                    </button>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Nav back to home */}
      <div className="mt-12 text-center">
        <Link to="/" className="btn-secondary inline-flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
