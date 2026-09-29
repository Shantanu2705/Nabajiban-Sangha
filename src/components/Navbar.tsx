"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Activities", href: "#activities" },
  { name: "Committee", href: "#committee" },
  { name: "Notice", href: "#notice" },
  { name: "Krandoshi", href: "#krandoshi" },
  { name: "Theme 2026", href: "#theme" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-slate-200 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-4 md:gap-6 z-50">
            <div className={cn(
              "relative transition-all duration-500 ease-in-out flex-shrink-0 origin-left", 
              isScrolled ? "w-24 h-14 md:w-32 md:h-16" : "w-40 h-24 md:w-56 md:h-32 lg:w-72 lg:h-40"
            )}>
              <Image
                src="/logo/logo.png"
                alt="Nabajiban Sangha Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className={cn("flex flex-col transition-all duration-500 justify-center", isScrolled ? "scale-90 origin-left" : "scale-100 origin-left")}>
              <span className={cn(
                "font-playfair font-bold text-maroon leading-tight transition-all duration-500", 
                isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl lg:text-4xl"
              )}>
                Nabajiban Sangha
              </span>
              <span className={cn(
                "font-semibold tracking-wider text-navy uppercase hidden sm:block transition-all duration-500", 
                isScrolled ? "text-xs" : "text-sm md:text-base mt-1"
              )}>
                Estd. 1959
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-700 hover:text-maroon transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#about"
              className="px-6 py-2.5 bg-maroon text-white text-sm font-medium rounded-full hover:bg-maroon-dark transition-colors shadow-sm hover:shadow"
            >
              Know Our Club
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-700 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-2xl font-playfair font-medium text-slate-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            href="#about"
            className="inline-flex justify-center items-center w-full px-6 py-4 bg-maroon text-white font-medium rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Explore Nabajiban Sangha
          </Link>
        </div>
      </div>
    </header>
  );
}
