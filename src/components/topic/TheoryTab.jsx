import CalloutBox from "../ui/CalloutBox";
import CodeBlock from "../code/CodeBlock";
import Flowchart from "../ui/Flowchart";

// Renders inline markdown: **bold** and `code` segments
function InlineMd({ text }) {
  if (!text && text !== 0) return null;
  const str = String(text);
  const tokens = str.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {tokens.map((tok, i) => {
        if (tok.startsWith("**") && tok.endsWith("**")) {
          return <strong key={i} className="text-white font-semibold">{tok.slice(2, -2)}</strong>;
        }
        if (tok.startsWith("`") && tok.endsWith("`")) {
          return (
            <code key={i} className="text-violet-300 bg-violet-500/10 px-1 py-0.5 rounded text-[0.85em] font-mono">
              {tok.slice(1, -1)}
            </code>
          );
        }
        return <span key={i}>{tok}</span>;
      })}
    </>
  );
}

// Renders content string with bullet/numbered lists and inline markdown
function Content({ text }) {
  if (!text) return null;
  const lines = text.split("\n");

  const result = [];
  let bullets = [];
  let numbered = [];

  const flushBullets = () => {
    if (!bullets.length) return;
    result.push(
      <ul key={`ul-${result.length}`} className="space-y-1.5 my-3">
        {bullets.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-300">
            <span className="text-indigo-400 mt-0.5 flex-shrink-0 font-bold">•</span>
            <span className="leading-relaxed"><InlineMd text={item} /></span>
          </li>
        ))}
      </ul>
    );
    bullets = [];
  };

  const flushNumbered = () => {
    if (!numbered.length) return;
    result.push(
      <ol key={`ol-${result.length}`} className="space-y-1.5 my-3">
        {numbered.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-300">
            <span className="text-indigo-400 font-mono text-sm w-5 flex-shrink-0 mt-0.5">{i + 1}.</span>
            <span className="leading-relaxed"><InlineMd text={item} /></span>
          </li>
        ))}
      </ol>
    );
    numbered = [];
  };

  lines.forEach((line, i) => {
    const bulletMatch = line.match(/^[-*]\s+(.+)/);
    const numberedMatch = line.match(/^\d+\.\s+(.+)/);

    if (bulletMatch) {
      flushNumbered();
      bullets.push(bulletMatch[1]);
    } else if (numberedMatch) {
      flushBullets();
      numbered.push(numberedMatch[1]);
    } else {
      flushBullets();
      flushNumbered();
      if (line.trim()) {
        result.push(
          <p key={i} className="leading-relaxed text-gray-300 mb-1">
            <InlineMd text={line} />
          </p>
        );
      }
    }
  });

  flushBullets();
  flushNumbered();

  return <div className="space-y-0.5">{result}</div>;
}

export default function TheoryTab({ topic }) {
  const { sections } = topic.theory;

  return (
    <div className="space-y-10 animate-fade-in">
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600/30 to-violet-600/30 border border-indigo-500/20 text-xs font-bold text-indigo-400 flex-shrink-0">
              {index + 1}
            </div>
            <h2 className="text-xl font-bold text-white">{section.heading}</h2>
          </div>

          {/* Callout box with rich content */}
          <CalloutBox type={section.type}>
            <Content text={section.content} />
          </CalloutBox>

          {/* Flowchart visual */}
          {section.flowchart && <Flowchart type={section.flowchart} />}

          {/* Data table */}
          {section.table && (
            <div className="overflow-x-auto rounded-xl border border-surface-border my-5 shadow-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#161b22] border-b border-surface-border">
                    {section.table.headers.map((h, hi) => (
                      <th
                        key={hi}
                        className="px-4 py-3 text-left text-xs font-semibold text-indigo-300 uppercase tracking-wider whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className={`border-b border-surface-border last:border-0 transition-colors hover:bg-indigo-500/5 ${
                        ri % 2 === 0 ? "bg-surface-card" : "bg-surface-hover"
                      }`}
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-4 py-3 align-top ${
                            ci === 0
                              ? "font-mono text-violet-400 font-medium text-xs whitespace-nowrap"
                              : "text-gray-300 text-sm"
                          }`}
                        >
                          <InlineMd text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Code example */}
          {section.code && <CodeBlock code={section.code} language="c" />}

          {/* Inline tip */}
          {section.tip && (
            <CalloutBox type="tip">
              <p className="text-sm"><InlineMd text={section.tip} /></p>
            </CalloutBox>
          )}
        </section>
      ))}
    </div>
  );
}
