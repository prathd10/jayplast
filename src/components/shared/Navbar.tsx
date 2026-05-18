"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "Materials", href: "/catalog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3 shadow-md" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg gold-gradient shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">JP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-industrial-dark">
                JAY <span className="gold-text-gradient">PLAST</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground leading-tight">
                Engineering Plastic Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold-primary relative py-1",
                  pathname === link.href ? "text-gold-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 gold-gradient rounded-full"
                  />
                )}
              </Link>
            ))}
            <Link
              href="https://wa.me/919821374466"
              target="_blank"
              className="px-5 py-2.5 gold-gradient text-white text-sm font-bold rounded-full shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              Inquiry
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-industrial-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="flex flex-col p-4 gap-4">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between py-2 text-base font-medium",
                    pathname === link.href ? "text-gold-primary" : "text-industrial-dark"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={18} className="text-gold-400" />
                </Link>
              ))}
              <Link
                href="https://wa.me/919821374466"
                target="_blank"
                className="w-full py-3 gold-gradient text-white text-center font-bold rounded-xl shadow-lg mt-2"
                onClick={() => setIsOpen(false)}
              >
                WhatsApp Inquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
