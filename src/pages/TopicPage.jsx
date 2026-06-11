import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { getTopicBySlug } from "../data/topics";
import TabSwitcher from "../components/ui/TabSwitcher";
import TheoryTab from "../components/topic/TheoryTab";
import ProblemsTab from "../components/topic/ProblemsTab";

const TABS = [
  { id: "theory", label: "Theory", icon: "📖" },
  { id: "problems", label: "Problems", icon: "🔧" },
];

export default function TopicPage({ topics, progressApi }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const topic = getTopicBySlug(slug);

  const initialTab = location.state?.tab || "theory";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Reset tab when topic changes
  useEffect(() => {
    setActiveTab(location.state?.tab || "theory");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug, location.state?.tab]);

  if (!topic) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <span className="text-6xl mb-4">🔍</span>
        <h2 className="text-xl font-bold text-white mb-2">Topic Not Found</h2>
        <p className="text-gray-500 mb-6">The topic "<code className="text-indigo-400">{slug}</code>" doesn't exist.</p>
        <Link to="/" className="btn-primary">← Back to Dashboard</Link>
      </div>
    );
  }

  const topicIndex = topics.findIndex((t) => t.slug === slug);
  const prevTopic = topicIndex > 0 ? topics[topicIndex - 1] : null;
  const nextTopic = topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null;
  const isComplete = progressApi.isTopicComplete(topic.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-300">{topic.title}</span>
      </nav>

      {/* Topic header */}
      <header className="glass-card p-6 mb-8">
        <div className="flex items-start gap-5">
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
            {topic.icon}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <span className="text-xs font-mono text-gray-600">
                Topic {String(topicIndex + 1).padStart(2, "0")} / {String(topics.length).padStart(2, "0")}
              </span>
              {isComplete && (
                <span className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Completed
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">{topic.title}</h1>
            <p className="text-gray-400 text-sm leading-relaxed">{topic.description}</p>
          </div>

          {/* Mark complete button */}
          <button
            id={`complete-btn-${topic.id}`}
            onClick={() => progressApi.toggleTopicComplete(topic.id)}
            className={`flex-shrink-0 flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl border transition-all duration-200 ${
              isComplete
                ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                : "bg-surface-card border-surface-border text-gray-400 hover:border-emerald-500/30 hover:text-emerald-400"
            }`}
          >
            <svg className="w-4 h-4" fill={isComplete ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hidden sm:inline">{isComplete ? "Completed" : "Mark Complete"}</span>
          </button>
        </div>

        {/* Quick stats */}
        <div className="flex items-center gap-4 mt-5 pt-5 border-t border-surface-border text-xs text-gray-500">
          <span>📖 {topic.theory.sections.length} theory sections</span>
          <span>🔧 {topic.problems.length} practice problems</span>
          <span className="ml-auto">
            {topic.problems.filter((p) => progressApi.isProblemSeen(topic.id, p.id)).length}/{topic.problems.length} problems solved
          </span>
        </div>
      </header>

      {/* Tab switcher */}
      <div className="mb-8">
        <TabSwitcher tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* Tab content */}
      <div className="min-h-[400px]">
        {activeTab === "theory" ? (
          <TheoryTab topic={topic} />
        ) : (
          <ProblemsTab topic={topic} progressApi={progressApi} />
        )}
      </div>

      {/* Prev / Next navigation */}
      <nav className="mt-16 pt-8 border-t border-surface-border flex items-center justify-between gap-4">
        {prevTopic ? (
          <Link
            to={`/topic/${prevTopic.slug}`}
            id={`prev-topic-btn`}
            className="btn-secondary flex items-center gap-3 group max-w-xs"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div className="text-left">
              <p className="text-xs text-gray-600">Previous</p>
              <p className="text-sm font-medium truncate">{prevTopic.shortTitle}</p>
            </div>
          </Link>
        ) : (
          <Link to="/" className="btn-secondary flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </Link>
        )}

        {nextTopic ? (
          <Link
            to={`/topic/${nextTopic.slug}`}
            id={`next-topic-btn`}
            className="btn-primary flex items-center gap-3 group ml-auto"
          >
            <div className="text-right">
              <p className="text-xs text-indigo-300/70">Next</p>
              <p className="text-sm font-medium truncate">{nextTopic.shortTitle}</p>
            </div>
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div className="flex items-center gap-2 text-sm text-emerald-400 ml-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            🎉 All topics covered!
          </div>
        )}
      </nav>
    </div>
  );
}
