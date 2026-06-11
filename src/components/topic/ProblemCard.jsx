import { useState } from "react";
import CodeBlock from "../code/CodeBlock";

const DIFFICULTY_CONFIG = {
  Easy: { className: "difficulty-easy", icon: "🟢" },
  Medium: { className: "difficulty-medium", icon: "🟡" },
  Hard: { className: "difficulty-hard", icon: "🔴" },
};

export default function ProblemCard({ problem, index, topicId, progressApi }) {
  const [showSolution, setShowSolution] = useState(false);
  const diff = DIFFICULTY_CONFIG[problem.difficulty] || DIFFICULTY_CONFIG.Easy;

  const handleShowSolution = () => {
    setShowSolution(true);
    progressApi.markProblemSeen(topicId, problem.id);
  };

  return (
    <article
      id={`problem-${problem.id}`}
      className="glass-card overflow-hidden animate-fade-in"
    >
      {/* Problem Header */}
      <div className="px-6 py-5 border-b border-surface-border">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600/30 to-violet-600/30 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm flex-shrink-0">
              {index + 1}
            </div>
            <div>
              <h3 className="text-white font-semibold text-base">{problem.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${diff.className}`}>
                  {diff.icon} {problem.difficulty}
                </span>
                {problem.timeComplexity && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
                    {problem.timeComplexity}
                  </span>
                )}
              </div>
            </div>
          </div>

          {progressApi.isProblemSeen(topicId, problem.id) && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Solved
            </div>
          )}
        </div>
      </div>

      <div className="px-6 py-5 space-y-6">
        {/* Problem statement */}
        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Problem Statement</h4>
          <p className="text-gray-300 leading-relaxed">{problem.statement}</p>
        </div>

        {/* Constraints and I/O format */}
        {(problem.inputFormat || problem.outputFormat || problem.constraints) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {problem.inputFormat && (
              <div className="bg-[#0d1117] rounded-xl p-4 border border-surface-border">
                <p className="text-xs font-semibold text-blue-400 mb-1.5">📥 Input Format</p>
                <p className="text-sm text-gray-400">{problem.inputFormat}</p>
              </div>
            )}
            {problem.outputFormat && (
              <div className="bg-[#0d1117] rounded-xl p-4 border border-surface-border">
                <p className="text-xs font-semibold text-emerald-400 mb-1.5">📤 Output Format</p>
                <p className="text-sm text-gray-400">{problem.outputFormat}</p>
              </div>
            )}
            {problem.constraints && (
              <div className="bg-[#0d1117] rounded-xl p-4 border border-surface-border sm:col-span-2">
                <p className="text-xs font-semibold text-amber-400 mb-1.5">⚠️ Constraints</p>
                <p className="text-sm text-gray-400">{problem.constraints}</p>
              </div>
            )}
          </div>
        )}

        {/* Show Solution toggle */}
        {!showSolution ? (
          <div className="flex flex-col items-center gap-3 py-4 border-2 border-dashed border-surface-border rounded-xl">
            <p className="text-gray-500 text-sm">Try to solve this problem before viewing the solution!</p>
            <button
              id={`show-solution-${problem.id}`}
              onClick={handleShowSolution}
              className="btn-primary flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Show Solution
            </button>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            {/* Logic Steps */}
            {problem.logic && problem.logic.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  🧠 Step-by-Step Logic
                </h4>
                <ol className="space-y-2">
                  {problem.logic.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600/30 border border-indigo-500/30 text-xs font-bold text-indigo-400 flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-gray-300 text-sm leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Solution Code */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                💻 Complete C Program
              </h4>
              <CodeBlock code={problem.solution} language="c" />
            </div>

            {/* Sample I/O */}
            {(problem.sampleInput || problem.sampleOutput) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {problem.sampleInput && (
                  <div className="bg-[#0d1117] rounded-xl border border-surface-border overflow-hidden">
                    <div className="px-4 py-2 bg-[#161b22] border-b border-surface-border">
                      <p className="text-xs font-semibold text-blue-400">📥 Sample Input</p>
                    </div>
                    <pre className="px-4 py-3 text-sm font-mono text-gray-300 whitespace-pre-wrap">
                      {problem.sampleInput}
                    </pre>
                  </div>
                )}
                {problem.sampleOutput && (
                  <div className="bg-[#0d1117] rounded-xl border border-surface-border overflow-hidden">
                    <div className="px-4 py-2 bg-[#161b22] border-b border-surface-border">
                      <p className="text-xs font-semibold text-emerald-400">📤 Sample Output</p>
                    </div>
                    <pre className="px-4 py-3 text-sm font-mono text-gray-300 whitespace-pre-wrap">
                      {problem.sampleOutput}
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* Time Complexity */}
            {problem.timeComplexity && (
              <div className="flex items-center gap-3 p-3 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
                <span className="text-xl">⏱️</span>
                <div>
                  <p className="text-xs text-gray-500">Time Complexity</p>
                  <p className="text-sm font-mono font-semibold text-indigo-400">{problem.timeComplexity}</p>
                </div>
              </div>
            )}

            {/* Collapse solution */}
            <button
              onClick={() => setShowSolution(false)}
              className="btn-secondary text-sm w-full flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
              Hide Solution
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
