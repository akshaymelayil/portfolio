export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div>
          <h1 className="text-xl font-black tracking-tighter text-white">
            AKSHAY M
          </h1>

          <p className="text-[9px] tracking-[0.4em] uppercase text-white/40 font-mono">
            Systems Administrator & Developer
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
          <a href="#identity">Identity</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Stack</a>
          <a href="#projects">Systems</a>
          <a href="#contact">Connect</a>
        </nav>
      </div>
    </header>
  );
}