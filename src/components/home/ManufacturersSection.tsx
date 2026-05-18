"use client";

import React from "react";
import { motion } from "framer-motion";
import { MANUFACTURERS } from "@/data/mockData";

export function ManufacturersSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-gold-primary mb-4">Strategic Partners</h2>
          <h3 className="text-4xl font-bold text-industrial-dark">Authorized Distribution of <br /><span className="gold-text-gradient">Global Market Leaders</span></h3>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center py-4">
          {[...MANUFACTURERS, ...MANUFACTURERS].map((brand, i) => (
            <div 
              key={i} 
              className="mx-6 px-12 py-8 bg-industrial-light/50 rounded-[2rem] border border-gray-100 flex items-center justify-center min-w-[240px] group hover:border-gold-primary/30 transition-all hover:bg-white hover:shadow-xl hover:shadow-gold-primary/5"
            >
              <span className="text-xl font-black text-industrial-dark/30 group-hover:text-gold-primary transition-colors tracking-tighter uppercase italic">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          And many more specialized manufacturers catering to niche industrial requirements.
        </p>
      </div>
    </section>
  );
}
