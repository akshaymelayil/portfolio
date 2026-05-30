import { motion } from "framer-motion";
import CountUp from "react-countup";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-white/[0.01] z-10 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-20"
        >
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            02 // ACTIVE MISSION LOG
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Professional Track
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6 space-y-5"
          >
            {/* Current Position */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

              <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.25em] mb-4">
                Current Position
              </p>

              <h3 className="text-2xl font-black text-white">
                {experience.role}
              </h3>

              <p className="text-white/50 mt-2">
                {experience.company}
              </p>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/30">Location</span>
                  <span className="text-white/80">
                    {experience.location}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white/30">Duration</span>
                  <span className="text-cyan-300">
                    {experience.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {experience.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
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
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5"
                >
                  <div className="text-3xl font-black text-cyan-400">
                    {metric.value === "99%" && (
                      <>
                        <CountUp end={99} duration={2} />%
                      </>
                    )}

                    {metric.value === "+25%" && (
                      <>
                        +<CountUp end={25} duration={2} />%
                      </>
                    )}

                    {metric.value === "-35%" && (
                      <>
                        -<CountUp end={35} duration={2} />%
                      </>
                    )}

                    {metric.value === "730+ Users" && (
                      <>
                        <CountUp end={730} duration={2.5} />+
                      </>
                    )}
                  </div>

                  <div className="mt-2 text-[9px] font-mono uppercase tracking-wider text-white/40">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
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
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-5">
              <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.25em] mb-5">
                Mission Highlights
              </p>

              <div className="space-y-2">
                {experience.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      x: 6,
                    }}
                    className="group flex gap-3"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                      {index !== experience.points.length - 1 && (
                        <div className="w-px h-6 mt-2 bg-white/10" />
                      )}
                    </div>

                    <div className="pb-1">
                      <div className="font-mono text-[8px] tracking-[0.2em] text-cyan-400 mb-1">
                        MISSION_{String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="text-white/60 text-xs leading-5">
                        {point}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}