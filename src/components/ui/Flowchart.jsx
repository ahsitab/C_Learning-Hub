export default function Flowchart({ type }) {
  if (type === "if-else") {
    return (
      <div className="flex flex-col items-center my-8 p-6 bg-[#0e0e16]/60 backdrop-blur-sm border border-surface-border/50 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
        <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-4">
          Visual Execution Path: if-else Decision
        </div>

        {/* Start Node */}
        <div className="px-5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shadow-glow-sm animate-pulse">
          START
        </div>

        {/* Arrow Down */}
        <div className="h-8 w-0.5 bg-indigo-500/30 relative my-1">
          <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-indigo-500/40 transform rotate-45" />
        </div>

        {/* Decision Diamond (Styled Card) */}
        <div className="relative p-5 bg-gradient-to-b from-indigo-900/20 to-indigo-950/10 border border-indigo-500/40 text-white text-sm font-bold text-center rounded-2xl max-w-[240px] shadow-glow-sm">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-indigo-500 text-[9px] font-mono rounded text-white font-bold tracking-wider">
            DECISION
          </div>
          <div className="font-mono text-xs text-indigo-400 mb-1">Check Condition</div>
          <div className="text-gray-100">isConditionTrue()</div>
        </div>

        {/* Split Path Grid */}
        <div className="grid grid-cols-2 gap-4 w-full mt-4 max-w-md">
          {/* Left Column: True Path */}
          <div className="flex flex-col items-center">
            {/* Arrow down-left */}
            <div className="flex flex-col items-center h-8">
              <div className="text-[10px] text-emerald-400 font-bold font-mono mb-1">TRUE (Non-zero)</div>
              <div className="h-full w-0.5 bg-emerald-500/30 relative">
                <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-emerald-500/40 transform rotate-45" />
              </div>
            </div>
            {/* Action Box */}
            <div className="px-4 py-3 bg-surface-card border border-emerald-500/20 rounded-xl text-gray-200 text-xs font-semibold text-center shadow-md w-full">
              <div className="text-[9px] text-emerald-400 font-mono mb-1">IF BLOCK</div>
              Execute statement(s) inside <code className="text-emerald-400 font-mono text-xs">if</code> block
            </div>
          </div>

          {/* Right Column: False Path */}
          <div className="flex flex-col items-center">
            {/* Arrow down-right */}
            <div className="flex flex-col items-center h-8">
              <div className="text-[10px] text-rose-400 font-bold font-mono mb-1">FALSE (Zero)</div>
              <div className="h-full w-0.5 bg-rose-500/30 relative">
                <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-rose-500/40 transform rotate-45" />
              </div>
            </div>
            {/* Action Box */}
            <div className="px-4 py-3 bg-surface-card border border-rose-500/20 rounded-xl text-gray-200 text-xs font-semibold text-center shadow-md w-full">
              <div className="text-[9px] text-rose-400 font-mono mb-1">ELSE BLOCK</div>
              Execute statement(s) inside <code className="text-rose-400 font-mono text-xs">else</code> block
            </div>
          </div>
        </div>

        {/* Merge Path Lines */}
        <div className="flex w-full max-w-[360px] justify-between h-8 relative mt-3">
          <div className="w-1/2 border-r border-b border-emerald-500/20 rounded-br-xl" />
          <div className="w-1/2 border-l border-b border-rose-500/20 rounded-bl-xl" />
        </div>

        {/* Final Joint Arrow */}
        <div className="h-8 w-0.5 bg-indigo-500/30 relative">
          <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-indigo-500/40 transform rotate-45" />
        </div>

        {/* End Node */}
        <div className="px-5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold shadow-glow-sm">
          END
        </div>
      </div>
    );
  }

  if (type === "loop") {
    return (
      <div className="flex flex-col items-center my-8 p-6 bg-[#0e0e16]/60 backdrop-blur-sm border border-surface-border/50 rounded-2xl shadow-lg w-full max-w-lg mx-auto">
        <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-4">
          Visual Execution Path: for Loop Cycle
        </div>

        {/* Start Node */}
        <div className="px-5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shadow-glow-sm">
          START
        </div>

        {/* Arrow Down */}
        <div className="h-6 w-0.5 bg-indigo-500/30 relative my-1">
          <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-indigo-500/40 transform rotate-45" />
        </div>

        {/* Initialization */}
        <div className="px-4 py-2.5 bg-surface-card border border-surface-border rounded-xl text-gray-200 text-xs font-semibold text-center shadow-md max-w-[200px]">
          <div className="text-[9px] text-gray-500 font-mono mb-1">STEP 1</div>
          <span className="font-bold text-gray-100">Initialization</span>
          <div className="text-[10px] text-indigo-400 font-mono mt-0.5">int i = 0</div>
        </div>

        {/* Arrow Down */}
        <div className="h-6 w-0.5 bg-indigo-500/30 relative my-1">
          <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-indigo-500/40 transform rotate-45" />
        </div>

        {/* Condition Check */}
        <div className="relative p-5 bg-gradient-to-b from-indigo-900/20 to-indigo-950/10 border border-indigo-500/40 text-white text-sm font-bold text-center rounded-2xl max-w-[220px] shadow-glow-sm">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-indigo-500 text-[9px] font-mono rounded text-white font-bold tracking-wider">
            STEP 2: CONDITION
          </div>
          <div className="font-mono text-xs text-indigo-400 mb-1">Check Condition</div>
          <div className="text-gray-100">i &lt; N</div>
        </div>

        {/* True / False Split */}
        <div className="grid grid-cols-2 gap-4 w-full mt-4 max-w-md">
          {/* Left Column: True Path */}
          <div className="flex flex-col items-center border-r border-indigo-500/10 pr-2">
            <div className="flex flex-col items-center h-8">
              <div className="text-[10px] text-emerald-400 font-bold font-mono mb-1">TRUE</div>
              <div className="h-full w-0.5 bg-emerald-500/30 relative">
                <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-emerald-500/40 transform rotate-45" />
              </div>
            </div>
            {/* Loop Body */}
            <div className="px-4 py-3 bg-surface-card border border-emerald-500/20 rounded-xl text-gray-200 text-xs font-semibold text-center shadow-md w-full">
              <div className="text-[9px] text-emerald-400 font-mono mb-1">STEP 3: BODY</div>
              Execute statement(s) inside loop body
            </div>
            
            {/* Arrow down to Update */}
            <div className="h-6 w-0.5 bg-emerald-500/30 relative my-1">
              <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-emerald-500/40 transform rotate-45" />
            </div>
            {/* Update Box */}
            <div className="px-4 py-2.5 bg-surface-card border border-indigo-500/20 rounded-xl text-gray-200 text-xs font-semibold text-center shadow-md w-full">
              <div className="text-[9px] text-indigo-400 font-mono mb-1">STEP 4: UPDATE</div>
              Increment/Decrement
              <div className="text-[10px] text-indigo-400 font-mono mt-0.5">i++</div>
            </div>
            {/* Loop Back Indicator */}
            <div className="flex items-center gap-1 text-[10px] text-indigo-400 font-bold mt-3.5 font-mono bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full animate-pulse">
              <span>🔁</span> Loop back to Step 2
            </div>
          </div>

          {/* Right Column: False Path */}
          <div className="flex flex-col items-center justify-center pl-2">
            <div className="flex flex-col items-center h-8">
              <div className="text-[10px] text-rose-400 font-bold font-mono mb-1">FALSE</div>
              <div className="h-full w-0.5 bg-rose-500/30 relative">
                <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-rose-500/40 transform rotate-45" />
              </div>
            </div>
            <div className="px-5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold shadow-glow-sm">
              EXIT LOOP
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
