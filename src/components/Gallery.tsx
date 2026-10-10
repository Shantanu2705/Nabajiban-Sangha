"use client";

import { motion } from "framer-motion";

const photos = [
  "WhatsApp Image 2026-10-09 at 23.42.12.jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.13 (1).jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.13.jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.14.jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.15 (1).jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.15 (2).jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.15.jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.16 (1).jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.16 (2).jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.16.jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.17 (1).jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.17 (2).jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.17.jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.18 (1).jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.18.jpeg",
  "WhatsApp Image 2026-10-09 at 23.42.19.jpeg"
];

export default function Gallery() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden" id="gallery">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
              Our Moments
            </h2>
            <div className="w-16 h-1 bg-maroon mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              Glimpses of our vibrant activities and celebrations.
            </p>
          </motion.div>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`/images/whatsapp_extracted/${photo}`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
