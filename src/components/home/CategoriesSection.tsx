"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CATEGORIES_LIST } from "@/data/mockData";

export function CategoriesSection() {
  return (
    <section className="py-24 bg-industrial-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-gold-primary mb-4">Market Verticals</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-industrial-dark">Specialized Material <br /><span className="gold-text-gradient">Categories</span></h3>
          </div>
          <Link 
            href="/catalog" 
            className="group flex items-center gap-2 text-sm font-bold text-industrial-dark hover:text-gold-primary transition-colors"
          >
            View Full Catalog
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gold-primary group-hover:bg-gold-primary group-hover:text-white transition-all">
              <ChevronRight size={16} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_LIST.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/catalog?category=${category.name}`}
                className="group block p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-gold-primary/30 transition-all hover:shadow-2xl hover:shadow-gold-primary/5 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-white mb-6 shadow-lg shadow-gold-primary/20 group-hover:scale-110 transition-transform">
                  <category.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-industrial-dark mb-2 group-hover:text-gold-primary transition-colors">{category.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {category.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-gold-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  Explore Grade <ChevronRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
