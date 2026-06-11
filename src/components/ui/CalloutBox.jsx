const TYPE_CONFIG = {
  definition: {
    icon: "📖",
    label: "Definition",
    className: "callout-info",
    labelColor: "text-blue-400",
  },
  tip: {
    icon: "💡",
    label: "Pro Tip",
    className: "callout-tip",
    labelColor: "text-emerald-400",
  },
  warning: {
    icon: "⚠️",
    label: "Warning",
    className: "callout-warning",
    labelColor: "text-amber-400",
  },
  syntax: {
    icon: "🔷",
    label: "Syntax",
    className: "callout-syntax",
    labelColor: "text-violet-400",
  },
  concept: {
    icon: "🧠",
    label: "Key Concept",
    className: "callout-info",
    labelColor: "text-blue-400",
  },
  example: {
    icon: "✨",
    label: "Example",
    className: "callout-tip",
    labelColor: "text-emerald-400",
  },
};

export default function CalloutBox({ type = "concept", children }) {
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.concept;

  return (
    <div className={`${config.className} my-4`}>
      <div className={`flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider ${config.labelColor}`}>
        <span>{config.icon}</span>
        <span>{config.label}</span>
      </div>
      <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
