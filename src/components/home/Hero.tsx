"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white via-[#FFF9CC] to-[#B9A66A] metallic-grain">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#B9A66A]/20 -skew-x-12 translate-x-1/4" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-24 right-24 w-64 h-64 bg-gold-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full gold-gradient animate-pulse" />
              <span className="text-xs font-bold text-gold-primary uppercase tracking-[0.2em]">Established 2005</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-industrial-dark mb-8 leading-[1.1] tracking-tight">
              Engineering <br />
              <span className="gold-text-gradient">Plastic</span> Solutions
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Mumbai&apos;s premier trading house for high-performance polymers. Delivering technical excellence and material innovation to India&apos;s top industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/catalog"
                className="px-10 py-5 gold-gradient text-white font-bold rounded-2xl shadow-xl premium-shadow hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2 group"
              >
                Browse Catalog
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="px-10 py-5 bg-white text-industrial-dark font-bold rounded-2xl border border-gray-200 hover:border-gold-primary/50 transition-all text-center shadow-sm"
              >
                Our Legacy
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-100 pt-10 max-w-md">
              <div>
                <div className="text-2xl font-black text-industrial-dark">20+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-black text-industrial-dark">500+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Material Grades</div>
              </div>
              <div>
                <div className="text-2xl font-black text-industrial-dark">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Global Brands</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 aspect-square rounded-[4rem] overflow-hidden shadow-2xl premium-shadow border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000"
                alt="Engineering Plastics"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-3xl">
                <p className="text-sm italic text-industrial-dark font-medium leading-relaxed">
                  &quot;Precision in every granule. We don&apos;t just sell plastic; we provide the foundation for industrial innovation.&quot;
                </p>
                <div className="mt-4 text-xs font-bold uppercase tracking-widest text-gold-primary">Kalpesh Desai — Founder</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 gold-gradient rounded-full mix-blend-multiply opacity-20 blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-industrial-dark rounded-full mix-blend-multiply opacity-5 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
