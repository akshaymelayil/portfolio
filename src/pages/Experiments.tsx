"use client";

import { motion } from "framer-motion";

const experiments = [
  "AI Automation Interfaces",
  "Motion UI Systems",
  "Predictive Dashboard Concepts",
  "Terminal-Based Interactions",
  "Infrastructure Monitoring Interfaces",
  "Realtime Analytics Visualization",
];

export default function Experiments() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 py-40">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-24">
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.4em] mb-6">
            Experiments // Innovation Lab
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
            Experimental
            <br />
            systems &
            <br />
            interfaces.
          </h1>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((exp, index) => (
            <motion.div
              key={exp}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="border border-white/10 bg-white/[0.02] rounded-3xl p-8 min-h-[220px] flex flex-col justify-between group"
            >
              <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/40 font-mono text-sm">
                0{index + 1}
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight group-hover:text-cyan-300 transition-colors">
                  {exp}
                </h2>

                <p className="text-white/40 mt-4 leading-relaxed">
                  Experimental infrastructure and interface exploration focused on intelligent systems and futuristic workflows.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}