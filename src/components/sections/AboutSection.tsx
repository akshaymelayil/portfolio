export default function AboutSection() {
  return (
    <section
      id="identity"
      className="relative py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 z-10"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-5">
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            01 // IDENTITY PARADIGM
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Bridging application codebases and systems infrastructure.
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6 text-white/60 text-base leading-relaxed">
          <p>
            Holding a B.Tech degree in Computer Science Engineering from APJ Abdul Kalam Technological University (Graduated 2024), 
            I develop specialized infrastructure balancing back-end efficiency and robust physical hardware configuration.
          </p>

          <p>
            Whether it involves engineering database triggers in PostgreSQL, containerizing Python utilities, deploying digital platforms , 
            or structuring full system safety guidelines—my methodology revolves around predictability, speed, and continuous architecture health metrics.
          </p>

          {/* Micro Languages Frame */}
          <div className="pt-6 border-t border-white/5">
            <p className="text-white/30 font-mono text-[11px] uppercase tracking-wider mb-2">
              Communication Protocols Spoken:
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {["English", "Malayalam", "Tamil", "Hindi"].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 rounded-md border border-white/5 bg-white/[0.02] text-white/80"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}