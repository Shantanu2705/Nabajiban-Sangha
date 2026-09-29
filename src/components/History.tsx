"use client";

import { motion } from "framer-motion";

export default function History() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-sky-50/50 rounded-l-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
              Our Journey
            </h2>
            <div className="w-16 h-1 bg-maroon mx-auto rounded-full mb-6" />
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200" />

          {/* Timeline Item */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-12">
            
            <div className="w-full md:w-[45%] pl-20 md:pl-0 md:text-right pr-0 md:pr-12 mb-4 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-playfair font-bold text-navy">The Beginning</h3>
                <span className="inline-block py-1 px-3 mt-2 rounded-full bg-sky-100 text-maroon font-semibold text-sm">
                  2nd February 1959
                </span>
              </motion.div>
            </div>

            {/* Marker */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-maroon shadow-sm z-10" />

            <div className="w-full md:w-[45%] pl-20 md:pl-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <p className="text-slate-600 leading-relaxed">
                  During the time of Vasanta Panchami the founding members came together and founded this club to celebrate games, cultural, educational, social welfare and other activities.
                </p>
              </motion.div>
            </div>

          </div>

          {/* Future Marker */}
          <div className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-[45%] pl-20 md:pl-0 md:text-right pr-0 md:pr-12 mb-4 md:mb-0" />
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-slate-300 shadow-sm z-10" />
            <div className="w-full md:w-[45%] pl-20 md:pl-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-slate-400 font-medium italic">
                  Continuing the legacy forward...
                </p>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
