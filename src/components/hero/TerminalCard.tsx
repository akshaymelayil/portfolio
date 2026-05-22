import { systems } from "@/lib/data";
import { useTerminalCycle } from "@/hooks/useTerminalCycle";

export default function TerminalCard() {

  const logIndex = useTerminalCycle();

  return (
    <div className="lg:col-span-5 relative">

      <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-6 font-mono text-xs">

        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
          <div>
            <p className="text-[10px] uppercase text-white/40 tracking-widest">
              Active Node Identifier
            </p>

            <p className="text-sm font-bold text-white mt-0.5">
              AKSHAY_M//PORTFOLIO
            </p>
          </div>

          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        <div className="space-y-3">

          {[
            ["Deployment Stack", "Django / React"],
            ["Database Engines", "PostgreSQL / MySQL"],
            ["Target Topology", "LAN/WAN Networking"],
            ["Operational Hub", "Kerala, India"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between p-3 rounded-lg border border-white/[0.03] bg-black/40"
            >
              <span className="text-white/40">
                {label}
              </span>

              <span className="text-cyan-300 font-bold">
                {value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-cyan-500/10 bg-black/60 p-4 min-h-[90px]">

          <p className="text-cyan-400 text-[11px]">
            {systems[logIndex]}
          </p>

          <div className="mt-3 flex items-center gap-2 text-white/30 text-[10px]">
            <span className="w-1.5 h-3 bg-cyan-400 animate-pulse" />

            <span>Awaiting execution parameters...</span>
          </div>
        </div>
      </div>
    </div>
  );
}