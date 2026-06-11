export default function Footer() {
  return (
    <footer className="mt-16 border-t border-surface-border py-8 px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-xs font-bold">
            C
          </div>
          <span className="text-gray-500 text-sm">C Programming Learning Hub</span>
        </div>
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right gap-1">
          <p className="text-gray-500 text-xs">
            Built for students — Study theory, practice problems, master C.
          </p>
          <p className="text-gray-500 text-xs">
            Created by{" "}
            <a
              href="https://ahsitab-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors font-medium"
            >
              Asfar Hossain Sitab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
