import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { miniProjects } from "../data/miniProjects";
import CodeBlock from "../components/code/CodeBlock";

export default function MiniProjectsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(miniProjects[0].id);
  const [copied, setCopied] = useState(false);

  const activeProject = miniProjects.find((p) => p.id === activeTab) || miniProjects[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeProject.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunInstant = () => {
    navigate("/compiler", { state: { code: activeProject.code } });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-gray-100 transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-300">Mini Projects</span>
      </nav>

      {/* Header Section */}
      <header className="glass-card p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-100 mb-2 flex items-center gap-3">
              <span>📁</span> C Mini Projects
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              Study fully-functional, intermediate-level C systems. Analyze real-world code implementing file operations, dynamic memory, structures, and business logic.
            </p>
          </div>
        </div>
      </header>

      {/* Tab Switcher */}
      <div className="flex gap-2 p-1.5 bg-surface-card border border-surface-border rounded-2xl mb-8">
        {miniProjects.map((project) => {
          const isActive = project.id === activeTab;
          return (
            <button
              key={project.id}
              onClick={() => {
                setActiveTab(project.id);
                setCopied(false);
              }}
              className={`flex-1 py-3 px-2 rounded-xl text-center font-semibold text-sm transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-glow-sm"
                  : "text-gray-400 hover:text-gray-100 hover:bg-surface-hover"
              }`}
            >
              {project.title}
            </button>
          );
        })}
      </div>

      {/* Project Content */}
      <article className="space-y-6">
        <div className="glass-card p-6 border-indigo-500/10">
          <h2 className="text-xl font-bold text-gray-100 mb-3">{activeProject.title}</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {activeProject.description}
          </p>

          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            🎯 Key System Features
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {activeProject.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                <span className="text-emerald-400 text-base leading-none">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* Code Controls */}
          <div className="flex flex-wrap items-center gap-3 border-t border-surface-border/50 pt-6">
            <button
              onClick={handleRunInstant}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:shadow-glow-sm"
            >
              <span>💻</span>
              <span>Run Instant</span>
            </button>

            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl border transition-all duration-200 ${
                copied
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-surface-card text-gray-300 border-surface-border hover:bg-surface-hover hover:text-white"
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-6 4h6m-6 4h6" />
                  </svg>
                  <span>Copy Code</span>
                </>
              )}
            </button>

            <span className="text-xs text-gray-500 md:ml-auto">
              Runs in our interactive in-browser compiler.
            </span>
          </div>
        </div>

        {/* Source Code Container */}
        <div className="glass-card p-4 overflow-hidden border-indigo-500/10">
          <div className="flex justify-between items-center mb-3 px-2">
            <span className="text-xs font-mono text-gray-500">
              {activeProject.id === "parking-system" ? "parking_system.c" : "library_system.c"}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full font-mono uppercase">
              C Language
            </span>
          </div>
          <div className="max-h-[600px] overflow-y-auto rounded-xl border border-surface-border">
            <CodeBlock code={activeProject.code} language="c" />
          </div>
        </div>
      </article>

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
