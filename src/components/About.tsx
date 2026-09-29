"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-sky-light border border-sky-100 p-8 flex items-center justify-center overflow-hidden relative shadow-inner">
              <div className="absolute inset-0 bg-maroon/[0.02] mix-blend-multiply" />
              <div className="absolute -bottom-10 -right-10 text-9xl font-playfair font-bold text-maroon/[0.03] select-none">
                1959
              </div>
              
              <div className="text-center z-10">
                <h3 className="text-3xl font-playfair font-bold text-navy mb-4">Since 1959</h3>
                <p className="text-slate-600 text-lg">Over six decades of community spirit</p>
                <div className="mt-8 mx-auto w-16 h-1 bg-maroon rounded-full" />
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(circle,#cbd5e1_2px,transparent_2px)] [background-size:8px_8px] -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(circle,#cbd5e1_2px,transparent_2px)] [background-size:8px_8px] -z-10" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-medium/50 text-navy font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-maroon" />
              Our Heritage
            </div>
            
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-6 leading-tight">
              More Than a Club — A Community Tradition
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              The founding members came together during the time of Vasanta Panchami and founded the club with a noble vision. Today, Nabajiban Sangha stands as a pillar of the community in Vivekananda Para, Dhupguri.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Games & Sports",
                "Cultural Activities",
                "Educational Activities",
                "Social Welfare",
                "Community Activities"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-maroon flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">Government Registration</p>
                <p className="text-navy font-bold">S/2L/333467</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200" />
              <div>
                <p className="text-sm text-slate-500 font-medium mb-1">Affiliations</p>
                <p className="text-navy font-bold text-sm">District Sport Association<br/>Bengal Sport Association</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
