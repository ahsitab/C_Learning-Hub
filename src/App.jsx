import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useProgress } from "./hooks/useProgress";
import { topics } from "./data/topics";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import SearchModal from "./components/search/SearchModal";
import HomePage from "./pages/HomePage";
import TopicPage from "./pages/TopicPage";
import LabExercisesPage from "./pages/LabExercisesPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const progressApi = useProgress();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("c_learning_theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("c_learning_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  const handleOpenSearch = () => setSearchOpen(true);
  const handleCloseSearch = () => setSearchOpen(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-transparent">
        <Navbar
          topics={topics}
          progressApi={progressApi}
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenSearch={handleOpenSearch}
          onToggleSidebar={() => setMobileSidebarOpen((v) => !v)}
        />

        <div className="flex flex-1 pt-16">
          {/* Desktop Sidebar */}
          <Sidebar
            topics={topics}
            progressApi={progressApi}
            isOpen={true}
            isMobile={false}
          />

          {/* Mobile Sidebar Drawer */}
          {mobileSidebarOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setMobileSidebarOpen(false)}
              />
              <Sidebar
                topics={topics}
                progressApi={progressApi}
                isOpen={mobileSidebarOpen}
                isMobile={true}
                onClose={() => setMobileSidebarOpen(false)}
              />
            </div>
          )}

          {/* Main content area — offset for desktop sidebar */}
          <main className="flex-1 lg:ml-72 min-w-0">
            <Routes>
              <Route
                path="/"
                element={<HomePage topics={topics} progressApi={progressApi} />}
              />
              <Route
                path="/topic/:slug"
                element={<TopicPage topics={topics} progressApi={progressApi} />}
              />
              <Route
                path="/lab-solutions"
                element={<LabExercisesPage progressApi={progressApi} />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </main>
        </div>

        {searchOpen && (
          <SearchModal onClose={handleCloseSearch} topics={topics} />
        )}
      </div>
    </BrowserRouter>
  );
}
