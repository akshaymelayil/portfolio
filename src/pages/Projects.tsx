"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "IdentifEye",
    category: "AI / Computer Vision",
    description:
      "AI-powered attendance infrastructure using facial recognition and intelligent verification.",
  },
  {
    title: "Academic ERP System",
    category: "Backend Architecture",
    description:
      "Scalable institutional management infrastructure with automated academic workflows.",
  },
  {
    title: "Thinkvo Solutions",
    category: "Frontend Engineering",
    description:
      "Corporate frontend architecture engineered using React and scalable UI systems.",
  },
  {
    title: "Bridgeway Motors",
    category: "Web Application",
    description:
      "Vehicle dealership platform with search engines and booking infrastructure.",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 py-40">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-24">
          <p className="text-cyan-400 text-xs uppercase tracking-[0.4em] font-mono mb-6">
            Projects // Deployment Archive
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
            Systems
            <br />
            engineered
            <br />
            for scale.
          </h1>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="group border border-white/10 rounded-[32px] bg-white/[0.02] p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 grid lg:grid-cols-12 gap-10">
                
                <div className="lg:col-span-4">
                  <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-mono mb-5">
                    {project.category}
                  </p>

                  <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                    {project.title}
                  </h2>
                </div>

                <div className="lg:col-span-8 flex items-end">
                  <p className="text-white/60 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}