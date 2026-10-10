"use client";

import { motion } from "framer-motion";

const sponsorshipItems = [
  "Gate (Entrance)",
  "Gate (Exit)",
  "Pillar",
  "Hoarding",
  "Stall",
  "Enquiry, First Aid Counter",
  "Banner",
  "Invitee Entrance",
  "Street Light Post-Each",
  "Members Gallery"
];

export default function Sponsorship() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="sponsorship">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-orange-50/50 rounded-r-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
              Sponsorship Opportunities
            </h2>
            <p className="text-maroon font-medium mb-6 uppercase tracking-wider">Durga Puja</p>
            <div className="w-16 h-1 bg-maroon mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join us in making this Durga Puja grand! We offer various sponsorship categories. Support us and get visibility for your brand.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sponsorshipItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-maroon/20 transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-orange-50 group-hover:bg-maroon text-maroon group-hover:text-white flex items-center justify-center font-bold transition-colors">
                {index + 1}
              </div>
              <h3 className="font-semibold text-navy text-lg">{item}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-maroon/5 border border-maroon/20 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <h3 className="text-2xl font-playfair font-bold text-navy mb-4 relative z-10">Interested in Sponsoring?</h3>
          <p className="text-slate-600 mb-8 relative z-10">Contact our In-Charge for more details and booking.</p>
          
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white px-8 py-5 rounded-2xl md:rounded-full shadow-lg shadow-maroon/5 border border-slate-100 relative z-10">
            <div className="flex flex-col items-center md:items-end">
              <span className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">In-Charge</span>
              <span className="font-bold text-navy text-xl">Gautam Paul</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-200" />
            <a href="tel:+918759002331" className="flex items-center gap-3 text-maroon font-bold text-2xl hover:text-maroon/80 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              87590 02331
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
