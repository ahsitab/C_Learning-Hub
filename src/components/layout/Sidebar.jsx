import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ topics, progressApi, isOpen, isMobile, onClose }) {
  const location = useLocation();

  if (!isOpen && !isMobile) return null;

  const sidebarContent = (
    <nav className="flex flex-col h-full py-6 px-3 overflow-y-auto">
      {/* Header */}
      <div className="px-3 mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
          Topics
        </p>
      </div>

      {/* Topic list */}
      <div className="space-y-1 flex-1">
        {topics.map((topic, index) => {
          const isActive = location.pathname === `/topic/${topic.slug}`;
          const isComplete = progressApi.isTopicComplete(topic.id);

          return (
            <Link
              key={topic.id}
              to={`/topic/${topic.slug}`}
              onClick={onClose}
              id={`sidebar-topic-${topic.id}`}
              className={`sidebar-item ${isActive ? "sidebar-item-active" : ""}`}
            >
              {/* Icon */}
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 bg-gradient-to-br ${topic.color} bg-opacity-20`}
                style={{ background: `linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))` }}
              >
                {topic.icon}
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${isActive ? "text-white" : "text-gray-300"}`}>
                  <span className="text-gray-500 mr-1">{String(index + 1).padStart(2, "0")}.</span>
                  {topic.shortTitle}
                </p>
              </div>

              {/* Completion badge */}
              {isComplete ? (
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                )
              )}
            </Link>
          );
        })}

        {/* Divider */}
        <div className="my-3 border-t border-surface-border/50" />

        {/* Lab Solutions Sidebar Link */}
        <Link
          to="/lab-solutions"
          onClick={onClose}
          id="sidebar-lab-solutions"
          className={`sidebar-item ${location.pathname === "/lab-solutions" ? "sidebar-item-active" : ""}`}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 bg-indigo-500/10 text-indigo-500">
            🧪
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium truncate ${location.pathname === "/lab-solutions" ? "text-indigo-500" : "text-gray-300"}`}>
              Lab Exercises
            </p>
          </div>
        </Link>
      </div>

      {/* Footer progress */}
      <div className="px-3 pt-6 border-t border-surface-border">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-500">Overall Progress</span>
          <span className="text-xs font-semibold text-indigo-400">
            {progressApi.getOverallProgress(topics.length)}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-surface-border rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-700"
            style={{ width: `${progressApi.getOverallProgress(topics.length)}%` }}
          />
        </div>
        <p className="text-xs text-gray-600 mt-2">
          {topics.filter((t) => progressApi.isTopicComplete(t.id)).length} / {topics.length} completed
        </p>
      </div>
    </nav>
  );

  if (isMobile) {
    return (
      <div className="relative z-50 w-72 h-full bg-[#0d0d18] border-r border-surface-border animate-slide-in-right">
        {sidebarContent}
      </div>
    );
  }

  // Desktop: fixed sidebar
  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-16 bottom-0 w-72 bg-[#0d0d18] border-r border-surface-border z-20">
      {sidebarContent}
    </aside>
  );
}
