"use client";

import { motion } from "framer-motion";
import { activities } from "@/data/activities";

export default function Activities() {
  return (
    <section id="activities" className="py-20 lg:py-28 bg-sky-light/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">Our Activities</h2>
            <div className="w-16 h-1 bg-maroon mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-lg">
              Through diverse activities, we aim to bring the community together and make a positive impact in Vivekananda Para and beyond.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-slate-100 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-6 group-hover:bg-maroon transition-colors duration-300">
                  <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{activity.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
