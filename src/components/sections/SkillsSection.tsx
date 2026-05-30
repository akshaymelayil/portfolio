import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            03 // CORE ENGINE SPECIFICATIONS
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Technical Competence Matrix
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.9,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: index % 2 === 0 ? -1 : 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                rotate: 0,
                scale: 1.02,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl ${
                index === 0
                  ? "md:mt-0"
                  : index === 1
                  ? "md:mt-16"
                  : index === 2
                  ? "md:-mt-8"
                  : "md:mt-12"
              }`}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />

              {/* Huge Number */}
              <div className="absolute top-4 right-6 text-7xl font-black text-white/[0.03] select-none">
                0{index + 1}
              </div>

              <div className="relative z-10 p-8">

                <div className="mb-8">

                  <div className="inline-flex items-center gap-3 mb-4">

                    <div className="w-10 h-10 rounded-xl border border-cyan-500/20 bg-cyan-500/5 flex items-center justify-center">
                      <span className="font-mono text-cyan-400 text-xs">
                        0{index + 1}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
                      Specialization
                    </span>

                  </div>

                  <h3 className="text-2xl font-black text-white leading-tight">
                    {category.title}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: skillIndex * 0.04,
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      className="px-3 py-2 rounded-xl border border-white/10 bg-black/40 text-white/70 font-mono text-xs hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}