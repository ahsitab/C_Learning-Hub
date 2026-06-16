import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const TEMPLATES = [
  {
    id: "hello",
    title: "Hello World",
    description: "The classic starter program to print text to the console.",
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
  },
  {
    id: "io",
    title: "Basic Input / Output",
    description: "Read an integer from the user and print it back.",
    code: `#include <stdio.h>

int main() {
    int number;
    printf("Enter an integer: ");
    scanf("%d", &number);
    printf("You entered: %d\\n", number);
    return 0;
}`,
  },
  {
    id: "ifelse",
    title: "If-Else Condition",
    description: "Check if a number is even or odd.",
    code: `#include <stdio.h>

int main() {
    int num;
    printf("Enter an integer: ");
    scanf("%d", &num);
    
    if (num % 2 == 0) {
        printf("%d is even.\\n", num);
    } else {
        printf("%d is odd.\\n", num);
    }
    
    return 0;
}`,
  },
  {
    id: "loop",
    title: "For Loop (Sum of N)",
    description: "Calculate the sum of the first N positive integers.",
    code: `#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter a positive integer: ");
    scanf("%d", &n);
    
    for (int i = 1; i <= n; ++i) {
        sum += i;
    }
    
    printf("Sum of first %d natural numbers = %d\\n", n, sum);
    return 0;
}`,
  },
];

export default function CompilerPage() {
  const location = useLocation();
  const iframeRef = useRef(null);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const initialCode = location.state?.code || "";

  const populateCodeInEditor = (codeText) => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        {
          eventType: "populateCode",
          language: "c",
          code: codeText,
        },
        "*"
      );
    }
  };

  useEffect(() => {
    if (isIframeLoaded && initialCode) {
      const timer = setTimeout(() => {
        populateCodeInEditor(initialCode);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isIframeLoaded, initialCode]);

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-gray-100 transition-colors">
          Home
        </Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-300">Online Compiler</span>
      </nav>

      {/* Header section */}
      <header className="glass-card p-6 mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-100 mb-2 flex items-center gap-3">
          <span>💻</span> Interactive C Compiler
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
          Write, compile, and run your C programs directly in your browser. Use the starter templates below to quickly test logic and practice syntax without any local installation.
        </p>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Code Templates */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-5">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>📋</span> Starter Templates
            </h2>
            <div className="space-y-4">
              {TEMPLATES.map((tpl) => (
                <div
                  key={tpl.id}
                  className="p-4 bg-surface-card border border-surface-border rounded-xl hover:border-indigo-500/30 transition-all duration-200"
                >
                  <div className="flex justify-between items-center gap-2 mb-2">
                    <h3 className="text-sm font-bold text-gray-200">{tpl.title}</h3>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => populateCodeInEditor(tpl.code)}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-600/15 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-150"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => handleCopy(tpl.id, tpl.code)}
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded border transition-all duration-150 ${
                          copiedId === tpl.id
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-surface-hover text-gray-400 border-surface-border hover:text-white"
                        }`}
                      >
                        {copiedId === tpl.id ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">{tpl.description}</p>
                  <pre className="text-[10px] font-mono p-2.5 bg-black/40 border border-surface-border/50 rounded-lg text-indigo-300 overflow-x-auto max-h-32 select-all">
                    {tpl.code}
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Help box */}
          <div className="glass-card p-5 bg-gradient-to-br from-indigo-900/10 to-violet-900/10 border-indigo-500/20">
            <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <span>💡</span> How to use
            </h3>
            <ul className="text-xs text-gray-400 space-y-2 list-decimal list-inside pl-1 leading-relaxed">
              <li>Choose a template above and click <strong className="text-gray-300">Copy</strong>.</li>
              <li>Paste it into the editor on the right (<kbd className="bg-surface-border px-1 rounded font-mono text-[10px]">Ctrl+V</kbd> or <kbd className="bg-surface-border px-1 rounded font-mono text-[10px]">Cmd+V</kbd>).</li>
              <li>Click the green <strong className="text-emerald-400">Run</strong> button to execute.</li>
              <li>If the code asks for input (like <code className="text-indigo-300 font-mono">scanf</code>), click on the Output terminal area to type your input and hit Enter!</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Embedded OneCompiler Editor */}
        <div className="lg:col-span-2 flex flex-col h-full min-h-[600px]">
          <div className="glass-card p-1.5 flex-1 flex flex-col overflow-hidden border-indigo-500/15 shadow-glow-sm">
            <iframe
              ref={iframeRef}
              onLoad={() => setIsIframeLoaded(true)}
              src="https://onecompiler.com/embed/c?theme=dark&hideLanguageSelection=true"
              title="Online C Compiler"
              className="w-full h-[650px] rounded-xl border-0 bg-[#0d0d18]"
              allow="clipboard-read; clipboard-write"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
