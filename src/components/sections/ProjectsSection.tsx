import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-black z-10"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            04 // SYSTEMS & INFRASTRUCTURE
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Executed Deployments
          </h2>

          <p className="mt-6 text-white/50 max-w-2xl">
            A collection of systems, platforms and architectures engineered
            across AI, infrastructure and full-stack environments.
          </p>
        </div>

        {/* Animated Timeline Line */}
        <div className="space-y-12">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="relative"
              style={{
                transformPerspective: 1000,
              }}
            >

              {/* Card */}
              <div className="ml-14 group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30">

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10" />

                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="grid lg:grid-cols-12 gap-8 p-8 md:p-10 relative z-10">

                  {/* LEFT */}
                  <div className="lg:col-span-4">

                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em] block mb-3">
                      {project.type}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-6">

                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: techIndex * 0.05,
                          }}
                          className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono uppercase text-white/60 hover:text-cyan-300 hover:border-cyan-400/30 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}

                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="lg:col-span-8 flex items-center">

                  <p className="font-mono text-[13px] text-white/60 leading-7">
                      {project.desc}
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}