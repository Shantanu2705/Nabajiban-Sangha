"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-sky-light/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row items-center gap-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-maroon/5 rounded-full flex items-center justify-center text-maroon"
          >
            <MapPin className="w-10 h-10 md:w-14 md:h-14" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left flex-grow"
          >
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-navy mb-4">
              Visit Our Club
            </h2>
            <div className="w-12 h-1 bg-maroon rounded-full mb-6 mx-auto md:mx-0" />
            <address className="not-italic text-slate-700 text-lg leading-relaxed font-medium">
              Vivekananda Para,<br />
              Dhupguri,<br />
              Dist - Jalpaiguri,<br />
              West Bengal
            </address>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
