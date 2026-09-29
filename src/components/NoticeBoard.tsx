"use client";

import { motion } from "framer-motion";
import { Bell, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NoticeBoard() {
  return (
    <section id="notice" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        
        <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-maroon/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-shrink-0 relative z-10 w-full md:w-auto">
            <div className="flex items-center gap-3 mb-4 text-maroon font-semibold">
              <Bell className="w-5 h-5 animate-pulse" />
              <span>OFFICIAL NOTICE</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
              <Calendar className="w-4 h-4" />
              <span>Upcoming Event — 2026</span>
            </div>
          </div>
          
          <div className="flex-grow relative z-10 text-center md:text-left">
            <h3 className="text-sm font-bold tracking-widest text-navy uppercase mb-2">
              Theme of 2026
            </h3>
            <p className="text-2xl md:text-3xl font-playfair font-bold text-maroon leading-tight mb-4">
              "Kaler Darpaney, MAHABHARAT"
            </p>
            <p className="text-slate-600 mb-4 md:mb-0">
              Join us in our grand celebration as we explore this epic theme.
            </p>
          </div>
          
          <div className="flex-shrink-0 relative z-10 w-full md:w-auto mt-4 md:mt-0">
            <Link 
              href="#theme" 
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-navy text-white rounded-full hover:bg-navy-dark transition-colors font-medium text-sm group"
            >
              View Details
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
