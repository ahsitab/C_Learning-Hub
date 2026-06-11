import { Link } from "react-router-dom";

export default function HomePage({ topics, progressApi }) {
  const overall = progressApi.getOverallProgress(topics.length);
  const completedCount = topics.filter((t) => progressApi.isTopicComplete(t.id)).length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-16 pb-20">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/15 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse-slow" />
            Interactive C Programming Course
          </div>

          {/* Hero title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6 animate-slide-up">
            Master C Programming{" "}
            <span className="gradient-text block sm:inline">
              Through Guided Learning
            </span>{" "}
            and Problem Solving
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up animate-delay-100">
            Study structured theory from lecture slides, then sharpen your skills with step-by-step solved problems — all in one place.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up animate-delay-200">
            <Link
              to={`/topic/${topics[0].slug}`}
              id="start-learning-btn"
              className="btn-primary flex items-center gap-2 text-base px-8 py-4"
            >
              <span>🚀</span>
              Start Learning
            </Link>
            <button
              onClick={() => document.getElementById("topics-section")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary flex items-center gap-2 text-base px-8 py-4"
            >
              <span>📚</span>
              Browse Topics
            </button>
          </div>

          {/* Stats row */}
          {overall > 0 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 animate-fade-in">
              <div className="flex items-center gap-3 px-5 py-3 glass-card">
                <span className="text-2xl font-black gradient-text">{completedCount}</span>
                <span className="text-sm text-gray-400">Topics<br/>Completed</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 glass-card">
                <span className="text-2xl font-black gradient-text">{overall}%</span>
                <span className="text-sm text-gray-400">Overall<br/>Progress</span>
              </div>
            </div>
          )}
        </div>

        {/* Feature pills */}
        <div className="relative max-w-3xl mx-auto mt-16 flex flex-wrap justify-center gap-3">
          {[
            { icon: "📖", label: "Theory Explanations" },
            { icon: "🔧", label: "Solved Problems" },
            { icon: "💻", label: "Syntax Highlighting" },
            { icon: "📊", label: "Progress Tracking" },
            { icon: "🔍", label: "Smart Search" },
          ].map((feat) => (
            <div key={feat.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card border border-surface-border text-sm text-gray-400">
              <span>{feat.icon}</span>
              <span>{feat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Lab Banner Section */}
      <section className="px-6 mb-12 animate-fade-in animate-delay-300">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-900/10 via-violet-900/10 to-cyan-900/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-400 font-semibold mb-3">
                New Feature
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-gray-100 mb-2">
                Practice Lab Exercises & Solutions
              </h2>
              <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
                Unlock 33 comprehensive C programming solutions from your Ternary Operator, If-Else, and Switch Case lab files. Commented step-by-step for beginners.
              </p>
            </div>
            <Link
              to="/lab-solutions"
              id="home-lab-banner-btn"
              className="relative btn-primary flex items-center gap-2 text-sm px-6 py-3.5 whitespace-nowrap shadow-glow-sm"
            >
              <span>🧪</span> View Lab Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Topics Dashboard */}
      <section id="topics-section" className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Course Topics</h2>
              <p className="text-gray-500 text-sm mt-1">Select a topic to start learning</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Progress</p>
              <p className="text-lg font-bold gradient-text">{overall}%</p>
            </div>
          </div>

          {/* Overall progress bar */}
          <div className="w-full h-1.5 bg-surface-border rounded-full overflow-hidden mb-10">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 rounded-full transition-all duration-700"
              style={{ width: `${overall}%` }}
            />
          </div>

          {/* Topic cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic, index) => {
              const isComplete = progressApi.isTopicComplete(topic.id);

              return (
                <Link
                  key={topic.id}
                  to={`/topic/${topic.slug}`}
                  id={`topic-card-${topic.id}`}
                  className="glass-card-hover group flex flex-col p-6 cursor-pointer"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Card top */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {topic.icon}
                    </div>
                    {isComplete ? (
                      <div className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        Done
                      </div>
                    ) : (
                      <span className="text-xs text-gray-600 font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>

                  {/* Title & description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {topic.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span>📖 {topic.theory.sections.length} sections</span>
                      <span>🔧 {topic.problems.length} problems</span>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
