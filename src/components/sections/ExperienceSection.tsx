import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (

    
    <section
      id="experience"
      className="relative py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-white/[0.01] z-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Grid System */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
              02 // ACTIVE MISSION LOG
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Professional Track
            </h2>
          </div>
          <div className="font-mono text-right hidden md:block">
            <span className="text-white/30 text-xs uppercase block">Current Station</span>
            <span className="text-cyan-300 text-sm font-bold">{experience.company}</span>
          </div>
        </div>

        {/* Layout Infrastructure */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Live Operational Analytics (Metrics Hub) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {experience.metrics.map((metric) => (
              <div
                key={metric.label}
                className="border border-white/5 bg-black/60 p-5 rounded-2xl flex flex-col justify-between"
              >
                <span className="text-3xl font-black text-cyan-400 tracking-tight block">
                  {metric.value}
                </span>
                <span className="block mt-4 text-[10px] font-mono uppercase tracking-wider text-white/40 mt-4 block leading-tight">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Core Directives Frame */}
          <div className="lg:col-span-8 space-y-6">
            <div className="border border-white/10 rounded-2xl bg-black/40 p-6 md:p-8">
              
              {/* Internal Metadata Line */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {experience.role}
                  </h3>
                  <p className="text-xs text-white/40 mt-1">
                    {experience.company} &bull; {experience.location}
                  </p>
                </div>
                <span className="px-3 py-1 text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-md">
                  {experience.duration}
                </span>
              </div>

              {/* Log Streams */}
              <ul className="space-y-4 text-sm text-white/70">
                {experience.points.map((point, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-cyan-400 font-mono text-xs mt-1 select-none">
                      [{index + 1}]
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}