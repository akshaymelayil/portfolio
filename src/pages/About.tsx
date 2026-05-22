"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025 - Present",
    title: "IT Administrator",
    company: "MTM College of Arts & Science",
    desc: "Managing institutional infrastructure, servers, networks, and academic systems for 500+ users.",
  },
  {
    year: "2024",
    title: "Python Django Intern",
    company: "Zoople Technologies",
    desc: "Worked on scalable backend systems and full-stack academic management applications.",
  },
  {
    year: "2024",
    title: "B.Tech Computer Science",
    company: "APJ Abdul Kalam Technological University",
    desc: "Specialized in backend systems, networking, databases, and intelligent applications.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 py-40">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-cyan-400 text-xs font-mono uppercase tracking-[0.4em] mb-6"
        >
          About // Identity Core
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]"
        >
          Building reliable
          <br />
          infrastructures
          <br />
          for modern systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mt-10 text-white/60 text-lg leading-relaxed"
        >
          I specialize in backend engineering, systems administration,
          intelligent automation, academic infrastructures, and scalable
          software environments. My workflow combines application logic
          with real-world infrastructure reliability.
        </motion.p>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto mt-40">
        <div className="mb-16">
          <p className="text-cyan-400 text-xs uppercase tracking-[0.4em] font-mono mb-4">
            Professional Timeline
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Experience Matrix
          </h2>
        </div>

        <div className="space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div>
                  <p className="text-cyan-300 font-mono text-xs uppercase tracking-[0.3em]">
                    {item.year}
                  </p>

                  <h3 className="text-3xl font-black mt-4">
                    {item.title}
                  </h3>

                  <p className="text-white/40 mt-2">
                    {item.company}
                  </p>
                </div>

                <div className="max-w-2xl">
                  <p className="text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}