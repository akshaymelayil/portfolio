export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-40 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-gradient-to-b from-black to-neutral-950 z-10"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">

        <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
          05 // SECURE CHANNEL DISCOVERY
        </p>

        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
          Initialize <br />System Connect
        </h2>

        <p className="max-w-xl mx-auto text-sm md:text-base text-white/50 leading-relaxed font-sans">
          Ready to route administrative integrations, execute customized core system operations, or manage scalable application codebases.
        </p>

        {/* Explicit Contact Grid */}
        <div className="max-w-md mx-auto grid gap-3 font-mono text-xs pt-6">
          <div className="p-4 rounded-xl border border-white/5 bg-black/50 flex items-center justify-between">
            <span className="text-white/30">Direct Link Node</span>
            <a 
              href="mailto:akshaymelayil@gmail.com" 
              className="text-cyan-300 hover:underline transition-all"
            >
              akshaymelayil@gmail.com
            </a>
          </div>

          <div className="p-4 rounded-xl border border-white/5 bg-black/50 flex items-center justify-between">
            <span className="text-white/30">Call Network Terminal</span>
            <a 
              href="tel:+919947791583" 
              className="text-cyan-300 hover:underline transition-all"
            >
              +91 9947791583
            </a>
          </div>

          <div className="p-4 rounded-xl border border-white/5 bg-black/50 flex items-center justify-between">
            <span className="text-white/30">Geographic Routing</span>
            <span className="text-white/80">Malappuram, Kerala, India</span>
          </div>
        </div>

        {/* Action Controls */}
      <div className="flex flex-wrap justify-center gap-4 font-mono text-xs pt-8">
       <a
        href="mailto:akshaymelayil@gmail.com"
        className="group relative overflow-hidden px-8 py-4 rounded-xl bg-cyan-400 text-black uppercase font-bold tracking-wider transition-all duration-500"
      >
        {/* Sliding Hover Layer */}
        <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white transition-transform duration-500 ease-out"></span>

        {/* Glow Effect */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-cyan-300/40 transition-opacity duration-500"></span>

        {/* Text */}
        <span className="relative z-10 group-hover:text-black transition-colors duration-300">
          establish_handshake.sh
        </span>
        </a>

        <a href="https://github.com/akshaymelayil"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/30 text-white transition-all duration-300 uppercase">
        GitHub Node
        </a>


      <a
        href="/Akshay_M_Resume.pdf"
        download
        className="group relative overflow-hidden px-8 py-4 rounded-xl border border-cyan-400/20 bg-white/[0.02] text-white uppercase tracking-wider transition-all duration-500"
      >
        {/* Animated Background */}
        <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-cyan-400 transition-transform duration-500 ease-out"></span>

        {/* Glow Effect */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-cyan-400/30 transition-opacity duration-500"></span>

        {/* Text */}
        <span className="relative z-10 group-hover:text-black transition-colors duration-300">
          Download CV
        </span>
      </a>

      </div>

      </div>
    </section>
  );
}