import CalloutBox from "../ui/CalloutBox";
import CodeBlock from "../code/CodeBlock";

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

          {/* Content based on type */}
          <CalloutBox type={section.type}>
            <p className="leading-relaxed whitespace-pre-line">{section.content}</p>
          </CalloutBox>

          {/* Code example */}
          {section.code && <CodeBlock code={section.code} language="c" />}

          {/* Data table */}
          {section.table && (
            <div className="overflow-x-auto rounded-xl border border-surface-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#161b22] border-b border-surface-border">
                    {section.table.headers.map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, ri) => (
                    <tr key={ri} className={`border-b border-surface-border last:border-0 ${ri % 2 === 0 ? "bg-surface-card" : "bg-surface-hover"}`}>
                      {row.map((cell, ci) => (
                        <td key={ci} className={`px-4 py-3 ${ci === 0 ? "font-mono text-violet-400 font-medium" : "text-gray-300"}`}>
                          {ci === row.length - 1 ? (
                            <code className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                              {cell}
                            </code>
                          ) : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Inline tip */}
          {section.tip && (
            <CalloutBox type="tip">
              <p>{section.tip}</p>
            </CalloutBox>
          )}
        </section>
      ))}
    </div>
  );
}
