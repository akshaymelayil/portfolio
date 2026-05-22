import { skillCategories } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 z-10"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
          03 // CORE ENGINE SPECIFICATIONS
        </p>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-white">
          Technical Competence Matrix
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-300 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-6 h-6 font-mono text-xs border border-white/10 rounded-md flex items-center justify-center text-white/40 mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-base font-bold text-white mb-4 tracking-tight">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-black border border-white/5 text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}