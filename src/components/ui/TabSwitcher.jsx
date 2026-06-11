export default function TabSwitcher({ tabs, activeTab, onChange }) {
  return (
    <div className="flex gap-1 p-1 bg-surface-card border border-surface-border rounded-xl w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          id={`tab-${tab.id}`}
          onClick={() => onChange(tab.id)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeTab === tab.id ? "tab-active" : "tab-inactive"
          }`}
        >
          {tab.icon && <span>{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
