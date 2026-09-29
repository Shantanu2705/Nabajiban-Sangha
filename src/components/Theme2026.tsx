"use client";

import { motion } from "framer-motion";

export default function Theme2026() {
  return (
    <section id="theme" className="py-24 relative overflow-hidden bg-navy text-white">
      {/* Abstract Epic Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjRoLTR6bS0xMSAxMUg5di0yaDE2djJ6bTMgMTBIMTB2LTJoMTh2MnptLTEzIDE0SDR2LTJoMTR2MnoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPjwvZz48L3N2Zz4=')] [background-size:40px_40px] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/80 to-navy" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-maroon rounded-full mix-blend-screen blur-[100px] opacity-30 animate-pulse" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex flex-col items-center justify-center mb-8">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-maroon mb-4" />
            <span className="text-maroon font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Theme 2026
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-500 mb-8 leading-tight drop-shadow-lg">
            Kaler Darpaney, <br /> MAHABHARAT
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />

          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            A grand exploration of the epic through the mirror of time. 
            Experience the profound philosophy, complex characters, and timeless teachings 
            brought to life in our 2026 presentation.
          </p>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-white/20" />
            <div className="w-3 h-3 rotate-45 border border-amber-500 bg-amber-500/20" />
            <div className="w-12 h-px bg-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
