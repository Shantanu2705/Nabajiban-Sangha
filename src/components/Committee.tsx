"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { committeeMembers, type CommitteeCategory } from "@/data/committee";

const categories: CommitteeCategory[] = [
  "Leadership",
  "Secretaries",
  "Sports",
  "Cultural",
  "Executive Committee",
];

export default function Committee() {
  const [activeCategory, setActiveCategory] = useState<CommitteeCategory>("Leadership");

  const filteredMembers = committeeMembers.filter(
    (member) => member.category === activeCategory
  );

  return (
    <section id="committee" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
              Our Committee Members
            </h2>
            <div className="w-16 h-1 bg-maroon mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Dedicated individuals working together to uphold the traditions and drive the vision of Nabajiban Sangha forward.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-maroon text-white shadow-md"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Member Cards */}
        <motion.div layout className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredMembers.map((member) => (
                <motion.div
                  layout
                  key={member.id}
                  className={`relative p-6 rounded-2xl border ${
                    member.role === "President" || member.role === "General Secretary"
                      ? "bg-sky-50/50 border-sky-100 shadow-sm"
                      : "bg-white border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-playfair font-bold text-xl mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-navy text-lg leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-maroon text-sm font-medium">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
