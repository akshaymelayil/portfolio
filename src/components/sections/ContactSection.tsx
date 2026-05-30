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

{/* Contact Information */}
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 pt-6 font-mono text-xs">

  {/* Direct Contact */}
  <div className="rounded-2xl border border-white/5 bg-black/50 p-6 text-left">
    <h3 className="text-cyan-400 uppercase tracking-[0.25em] mb-6">
      Direct Channels
    </h3>

    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-white/30">Email</span>
        <a
          href="mailto:akshaymelayil@gmail.com"
          className="text-cyan-300 hover:underline"
        >
          akshaymelayil@gmail.com
        </a>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-white/30">Phone</span>
        <a
          href="tel:+919947791583"
          className="text-cyan-300 hover:underline"
        >
          +91 9947791583
        </a>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-white/30">WhatsApp</span>
        <a
          href="https://wa.me/919947791583"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:underline"
        >
          Chat Now
        </a>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-white/30">Location</span>
        <span className="text-white/80">
          Malappuram, Kerala, India
        </span>
      </div>
    </div>
  </div>

  {/* Social Networks */}
  <div className="rounded-2xl border border-white/5 bg-black/50 p-6 text-left">
    <h3 className="text-cyan-400 uppercase tracking-[0.25em] mb-6">
      Network Endpoints
    </h3>

    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-white/30">GitHub</span>
        <a
          href="https://github.com/akshaymelayil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:underline"
        >
          View Profile
        </a>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-white/30">Instagram</span>
        <a
          href="https://instagram.com/akshay_hendry"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:underline"
        >
          @akshayhendry
        </a>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-white/30">LinkedIn</span>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:underline"
        >
          Connect
        </a>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-white/30">Facebook</span>
        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:underline"
        >
          Follow
        </a>
      </div>
    </div>
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