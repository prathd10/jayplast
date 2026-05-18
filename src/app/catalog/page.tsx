"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  ChevronRight, 
  ArrowRight,
  Grid,
  List as ListIcon
} from "lucide-react";
import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "@/data/mockData";
import { cn } from "@/lib/utils";

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-b from-white via-[#FFF9CC] to-[#B9A66A] min-h-screen">
      {/* Header Section */}
      <section className="bg-industrial-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full gold-gradient opacity-10 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-sm uppercase tracking-[0.4em] font-black text-gold-accent mb-6">Material Database</h1>
            <h2 className="text-5xl font-bold mb-6">Engineering <span className="gold-text-gradient">Catalog</span></h2>
            <p className="text-white/60 text-lg">
              Explore our comprehensive range of high-performance engineering plastic granules and specialty polymers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 shrink-0 space-y-8">
            <div className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-xl sticky top-28">
              <div className="flex items-center gap-2 mb-8 text-gold-primary font-bold">
                <Filter size={20} />
                <span className="uppercase tracking-widest text-xs">Filter Products</span>
              </div>
              
              <div className="space-y-8">
                {/* Search */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">Search Grades</h4>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                    <input 
                      type="text" 
                      placeholder="e.g. Polycarbonate"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-industrial-light rounded-xl text-sm border-none focus:ring-2 focus:ring-gold-primary transition-all text-industrial-dark"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">Categories</h4>
                  <div className="space-y-2">
                    {["All", ...CATEGORIES].map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                          "w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between group",
                          selectedCategory === category 
                            ? "bg-gold-primary text-white shadow-lg shadow-gold-primary/20" 
                            : "text-muted-foreground hover:bg-industrial-light hover:text-industrial-dark"
                        )}
                      >
                        {category}
                        <ChevronRight size={14} className={cn(
                          "transition-transform",
                          selectedCategory === category ? "rotate-90" : "group-hover:translate-x-1"
                        )} />
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="w-full py-3 bg-industrial-dark text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-gold-dark transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Catalog Info & Sorting */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-4">
                <div className="bg-gold-primary/10 px-4 py-2 rounded-xl border border-gold-primary/20">
                  <span className="text-sm font-bold text-gold-primary">{filteredProducts.length}</span>
                  <span className="text-sm text-gold-primary/60 ml-2">Materials Found</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Sort By:</span>
                <select className="bg-transparent text-sm font-bold text-industrial-dark border-none focus:ring-0 cursor-pointer">
                  <option>Popularity</option>
                  <option>Name (A-Z)</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Link 
                      href={`/catalog/${product.slug}`}
                      className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:border-gold-primary/30 hover:shadow-2xl hover:shadow-gold-primary/5 transition-all h-full"
                    >
                      <div className="h-64 overflow-hidden relative bg-industrial-light/50">
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gold-primary border border-gold-primary/20">
                          {product.manufacturer}
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[10px] font-bold text-gold-primary uppercase tracking-[0.2em]">{product.category}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{product.grade}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-industrial-dark mb-4 group-hover:text-gold-primary transition-colors">
                          {product.name}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
                          {product.description}
                        </p>

                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                          <div className="flex items-center gap-1 text-gold-primary">
                             <div className="w-2 h-2 rounded-full gold-gradient animate-pulse" />
                             <span className="text-[10px] font-bold uppercase tracking-widest">In Stock</span>
                          </div>
                          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gold-primary group-hover:text-white transition-all">
                            <ArrowRight size={18} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-24 text-center">
                <div className="w-24 h-24 rounded-full bg-industrial-light flex items-center justify-center mx-auto mb-8 text-muted-foreground">
                  <Search size={40} />
                </div>
                <h3 className="text-2xl font-bold text-industrial-dark mb-4">No Materials Found</h3>
                <p className="text-muted-foreground mb-8">Try adjusting your filters or search terms to find what you&apos;re looking for.</p>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="px-8 py-3 gold-gradient text-white font-bold rounded-full"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="bg-industrial-dark text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 gold-gradient opacity-10 rounded-full -mr-48 -mt-48 blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Didn&apos;t find the specific grade?</h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">We source thousands of material grades. Contact us with your specific requirement and we&apos;ll find it for you.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 gold-gradient text-white font-bold rounded-full hover:shadow-xl hover:shadow-gold-primary/20 transition-all">
            Special Requirement Inquiry <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
