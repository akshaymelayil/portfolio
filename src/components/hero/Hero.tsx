import { useState, useEffect } from "react";
import { motion, MotionValue } from "framer-motion";

type Props = {
  heroScale: MotionValue<number>;
  heroOpacity: MotionValue<number>;
};

const systems = [
  "Initializing Infrastructure Node...",
  "Loading Python & Django Framework Core...",
  "Connecting to PostgreSQL Database Instance...",
  "Configuring LAN/WAN & Routing Protocols...",
  "Syncing Real-time OpenCV Recognition Models...",
  "Securing Environment Permissions & Firewalls...",
  "System Fully Operational.",
];

export default function Hero({ heroScale, heroOpacity }: Props) {
  const [logIndex, setLogIndex] = useState(0);

  // Terminal Cycle Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % systems.length);
    }, 2550);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      style={{
        scale: heroScale,
        opacity: heroOpacity,
      }}
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-24 z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Main Elevator Matrix */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-300">
              LOCKED INTO INFRASTRUCTURE CORE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white"
          >
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              resilient
            </span>{" "}
            <br />
            environments.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-base text-white/60 leading-relaxed font-sans"
          >
            B.Tech Computer Science Engineer working at the junction of full-stack web architectures 
            and enterprise infrastructure administration. Merging Python/Django automations with physical network stack controls.
          </motion.p>

          <div className="flex flex-wrap gap-4 font-mono text-xs tracking-wider">
            <a
              href="#projects"
              className="px-6 py-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase"
            >
              Inspect Deployments
            </a>
            <a
              href="mailto:akshaymelayil@gmail.com"
              className="px-6 py-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-300 uppercase"
            >
              Request Authorization
            </a>
          </div>
        </div>

        {/* RIGHT CRITICAL MONITOR NODE */}
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-6 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div>
                <p className="text-[10px] uppercase text-white/40 tracking-widest">Active Node Identifier</p>
                <p className="text-sm font-bold text-white mt-0.5">AKSHAY_M//PORTFOLIO</p>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Hardware Data Streams */}
            <div className="space-y-3">
              {[
                ["Deployment Stack", "Django / React"],
                ["Database Engines", "PostgreSQL / MySQL"],
                ["Target Topology", "LAN/WAN Networking"],
                ["Operational Hub", "Malappuram, Kerala"],
                ["Status Matrix", "Available for Collaboration"]
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between p-3 rounded-lg border border-white/[0.03] bg-black/40">
                  <span className="text-white/40 font-mono text-[11px]">{label}</span>
                  <span className="text-cyan-300 font-bold">{val}</span>
                </div>
              ))}
            </div>

            {/* Console Stream */}
            <div className="mt-6 rounded-xl border border-cyan-500/10 bg-black/60 p-4 relative min-h-[90px] flex flex-col justify-between">
              <motion.p
                key={logIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-cyan-400 text-[11px] leading-relaxed tracking-wide"
              >
                &gt; {systems[logIndex]}
              </motion.p>
              <div className="mt-2 flex items-center gap-1.5 text-white/30 text-[10px]">
                <span className="w-1.5 h-3 bg-cyan-400 animate-pulse" />
                <span>Awaiting execution parameters...</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </motion.section>
  );
}