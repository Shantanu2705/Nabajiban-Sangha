"use client";

import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";

export default function Publication() {
  return (
    <section id="krandoshi" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="lines" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lines)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3 flex justify-center"
            >
              <div className="w-48 h-64 md:w-56 md:h-72 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg shadow-lg border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden group">
                {/* Placeholder cover */}
                <div className="absolute inset-x-0 top-0 h-4 bg-maroon" />
                <BookMarked className="w-12 h-12 text-slate-400 mb-4 group-hover:scale-110 transition-transform duration-500" />
                <span className="font-playfair font-bold text-2xl text-slate-600 tracking-wider">Krandoshi</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-2/3 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium text-sm mb-4">
                <BookMarked className="w-4 h-4" />
                Official Publication
              </div>
              
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-navy mb-4">
                Krandoshi
              </h2>
              
              <div className="w-16 h-1 bg-maroon rounded-full mb-6 mx-auto md:mx-0" />
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The official publication of Nabajiban Sangha. A space where thoughts, community stories, and our rich heritage are documented and shared with all members.
              </p>
              
              <button className="px-6 py-3 bg-navy text-white font-medium rounded-full hover:bg-navy-dark transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed">
                Editions Coming Soon
              </button>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
