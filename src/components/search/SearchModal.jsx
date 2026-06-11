import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";

const TYPE_ICONS = {
  topic: "📚",
  theory: "📖",
  problem: "🔧",
  lab: "🧪",
};

const DIFFICULTY_COLORS = {
  Easy: "text-emerald-400",
  Medium: "text-amber-400",
  Hard: "text-rose-400",
};

export default function SearchModal({ onClose, topics }) {
  const { query, setQuery, groupedResults, results } = useSearch();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleResultClick = (item) => {
    if (item.type === "lab") {
      navigate("/lab-solutions", { state: { activeTab: item.labId, openProblemId: item.problemId } });
    } else {
      navigate(`/topic/${item.topicSlug}`, { state: { tab: item.type === "problem" ? "problems" : "theory" } });
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-surface-card border border-surface-border rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-surface-border">
          <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            id="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics, theory, problems..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 text-base outline-none"
          />
          <button
            onClick={onClose}
            className="text-xs text-gray-500 bg-surface-border px-2 py-1 rounded-md font-mono hover:text-gray-300 transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.length < 2 ? (
            <div className="px-5 py-10 text-center">
              <p className="text-gray-500 text-sm">Type at least 2 characters to search</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => { navigate(`/topic/${topic.slug}`); onClose(); }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-surface-hover hover:border hover:border-indigo-500/30 transition-all text-center"
                  >
                    <span className="text-2xl">{topic.icon}</span>
                    <span className="text-xs text-gray-400">{topic.shortTitle}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="text-4xl mb-3">🔍</p>
              <p className="text-gray-400 text-sm">No results for "<span className="text-white">{query}</span>"</p>
            </div>
          ) : (
            <div className="py-2">
              {groupedResults.map((group) => (
                <div key={group.topicId}>
                  <div className="px-5 py-2 text-xs font-semibold text-gray-500 uppercase tracking-widest bg-[#0d0d18]">
                    {group.topicTitle}
                  </div>
                  {group.items.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleResultClick(item)}
                      className="w-full flex items-start gap-3 px-5 py-3 hover:bg-surface-hover transition-colors text-left"
                    >
                      <span className="text-lg mt-0.5 flex-shrink-0">{TYPE_ICONS[item.type]}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white font-medium">{item.text}</p>
                        {item.sub && (
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.sub}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {item.difficulty && (
                          <span className={`text-xs font-medium ${DIFFICULTY_COLORS[item.difficulty]}`}>
                            {item.difficulty}
                          </span>
                        )}
                        <span className="text-xs px-2 py-0.5 bg-surface-border rounded-md text-gray-500 capitalize">
                          {item.type}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-surface-border">
          <p className="text-xs text-gray-600">
            {results.length > 0 ? `${results.length} result${results.length !== 1 ? "s" : ""} found` : ""}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span className="flex items-center gap-1"><kbd className="bg-surface-border px-1.5 py-0.5 rounded font-mono">↑↓</kbd> navigate</span>
            <span className="flex items-center gap-1"><kbd className="bg-surface-border px-1.5 py-0.5 rounded font-mono">↵</kbd> select</span>
          </div>
        </div>
      </div>
    </div>
  );
}
