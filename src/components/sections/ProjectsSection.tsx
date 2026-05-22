import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-black z-10"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
          04 // SYSTEMS & INFRASTRUCTURE
        </p>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-white">
          Executed Deployments
        </h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group border border-white/5 bg-white/[0.01] hover:border-cyan-500/20 hover:bg-white/[0.02] transition-all duration-300 rounded-2xl p-6 md:p-8 relative overflow-hidden"
            >
              {/* Radial Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/[0.01] rounded-full blur-2xl group-hover:bg-cyan-500/[0.03] transition-colors duration-500 pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-6 items-start relative z-10">
                
                {/* Left Column: Classification Metadata */}
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-2">
                    {project.type}
                  </span>
                  
                  <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Technology Node Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-black text-white/50 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Narrative Summary */}
                <div className="lg:col-span-8 flex flex-col justify-between h-full">
                  <p className="text-sm text-white/60 leading-relaxed font-sans">
                    {project.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}