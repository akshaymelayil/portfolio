"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 py-40 flex items-center">

      <div className="max-w-5xl mx-auto w-full text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-cyan-400 text-xs uppercase tracking-[0.4em] font-mono mb-8"
        >
          Contact // Secure Connection
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
        >
          Ready to
          <br />
          build intelligent
          <br />
          systems together.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto mt-10 text-white/60 text-lg leading-relaxed"
        >
          Available for backend engineering, infrastructure management,
          AI automation systems, academic platforms, and scalable web architectures.
        </motion.p>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-5 mt-20">

          <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">
            <p className="text-white/30 uppercase text-xs tracking-[0.3em] font-mono">
              Email
            </p>

            <a
              href="mailto:akshaymelayil@gmail.com"
              className="block mt-5 text-cyan-300 break-all"
            >
              akshaymelayil@gmail.com
            </a>
          </div>

          <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">
            <p className="text-white/30 uppercase text-xs tracking-[0.3em] font-mono">
              Phone
            </p>

            <a
              href="tel:+919947791583"
              className="block mt-5 text-cyan-300"
            >
              +91 9947791583
            </a>
          </div>

          <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.02]">
            <p className="text-white/30 uppercase text-xs tracking-[0.3em] font-mono">
              Location
            </p>

            <p className="mt-5 text-white/70">
              Kerala, India
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}