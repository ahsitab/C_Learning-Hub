import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar({ topics, progressApi, theme, onToggleTheme, onOpenSearch, onToggleSidebar }) {
  const overall = progressApi.getOverallProgress(topics.length);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ctrl+K shortcut
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onOpenSearch]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-surface-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full px-4 gap-4">
        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-surface-hover transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-glow-sm">
            C
          </div>
          <span className="font-bold text-white hidden sm:block">
            C Learning <span className="gradient-text">Hub</span>
          </span>
        </Link>

        {/* Search bar */}
        <button
          id="search-btn"
          onClick={onOpenSearch}
          className="flex-1 max-w-sm mx-4 hidden md:flex items-center gap-3 px-4 py-2 bg-surface-card border border-surface-border rounded-xl text-gray-500 text-sm hover:border-indigo-500/50 hover:text-gray-300 transition-all duration-200 cursor-pointer"
          aria-label="Search"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="flex-1 text-left">Search topics, problems...</span>
          <span className="text-xs bg-surface-border px-1.5 py-0.5 rounded font-mono">Ctrl K</span>
        </button>

        <div className="flex-1" />

        {/* Lab Solutions Navigation Link */}
        <Link
          to="/lab-solutions"
          id="nav-lab-btn"
          className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-gray-100 hover:bg-surface-hover transition-all duration-200"
        >
          <span>🧪</span>
          <span>Lab Exercises</span>
        </Link>

        {/* Progress indicator */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 leading-none">Progress</span>
            <span className="text-sm font-semibold text-indigo-400">{overall}%</span>
          </div>
          <div className="w-20 h-1.5 bg-surface-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
              style={{ width: `${overall}%` }}
            />
          </div>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          id="theme-toggle-btn"
          className="p-2.5 rounded-xl border border-surface-border bg-surface-card text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          )}
        </button>

        {/* Mobile search */}
        <button
          onClick={onOpenSearch}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-surface-hover transition-colors"
          aria-label="Search"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
