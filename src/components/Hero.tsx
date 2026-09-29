"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-sky-light">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-medium opacity-50 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-blue-100 opacity-50 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-maroon/10 text-maroon font-semibold tracking-wider text-sm mb-4">
              Established 2nd February 1959
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-navy mb-6 leading-tight"
          >
            Celebrating Games, Culture, Education & Social Welfare
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed"
          >
            Founded during the time of Vasanta Panchami, Nabajiban Sangha came together with a vision to celebrate games, culture, education, social welfare and community activities in Vivekananda Para, Dhupguri.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="#about"
              className="w-full sm:w-auto px-8 py-3.5 bg-maroon text-white font-medium rounded-full hover:bg-maroon-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Discover Our Journey
            </Link>
            <Link
              href="#committee"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-navy font-medium rounded-full border border-slate-200 hover:bg-slate-50 transition-all shadow-sm hover:shadow"
            >
              View Committee
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
