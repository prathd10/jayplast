"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/mockData";
import { notFound } from "next/navigation";
import { 
  ChevronRight, 
  FileText, 
  Download, 
  MessageSquare, 
  Table as TableIcon, 
  CheckCircle2, 
  Info,
  ArrowLeft,
  Share2
} from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailsPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Hello JAY PLAST, I am interested in inquiring about ${product.manufacturer} ${product.name} (Grade: ${product.grade}). Please provide more details.`;
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Breadcrumbs & Navigation */}
      <div className="bg-industrial-light/50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/catalog" className="hover:text-gold-primary transition-colors">Catalog</Link>
            <ChevronRight size={12} />
            <span className="text-industrial-dark font-bold truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Images & Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-square rounded-[3rem] bg-industrial-light/30 border border-gray-100 overflow-hidden relative shadow-2xl"
            >
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-8 left-8">
                <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full text-xs font-bold text-gold-primary shadow-sm uppercase tracking-widest">
                  {product.manufacturer}
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, i) => (
                <div key={i} className="aspect-square rounded-2xl border border-gray-100 overflow-hidden cursor-pointer hover:border-gold-primary transition-all opacity-60 hover:opacity-100">
                   <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="aspect-square rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center text-muted-foreground hover:bg-industrial-light hover:text-gold-primary transition-all cursor-pointer">
                <Share2 size={24} />
              </div>
            </div>
          </div>

          {/* Right Side: Info & Actions */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-gold-primary/10 text-gold-primary text-[10px] font-bold uppercase tracking-widest rounded-md border border-gold-primary/20">
                  {product.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  Grade: {product.grade}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6 leading-tight">
                {product.name}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-6 bg-industrial-light/50 rounded-3xl border border-gray-100">
                  <h3 className="text-xs font-bold text-gold-primary uppercase tracking-widest mb-2">Manufacturer</h3>
                  <p className="text-lg font-bold text-industrial-dark">{product.manufacturer}</p>
                </div>
                <div className="p-6 bg-industrial-light/50 rounded-3xl border border-gray-100">
                  <h3 className="text-xs font-bold text-gold-primary uppercase tracking-widest mb-2">Availability</h3>
                  <p className="text-lg font-bold text-green-600">In Stock</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href={`https://wa.me/919821374466?text=${encodedMessage}`}
                  target="_blank"
                  className="flex-grow py-4 gold-gradient text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-gold-primary/20 hover:shadow-gold-primary/40 hover:-translate-y-1 transition-all"
                >
                  <MessageSquare size={20} />
                  Inquiry via WhatsApp
                </a>
                <button className="px-8 py-4 bg-industrial-dark text-white font-bold rounded-2xl hover:bg-industrial-dark/90 transition-all flex items-center justify-center gap-2">
                  <Download size={20} />
                  Datasheet
                </button>
              </div>
            </motion.div>

            {/* Features List */}
            <div className="space-y-4">
              <h3 className="font-bold text-industrial-dark flex items-center gap-2">
                <CheckCircle2 size={18} className="text-gold-primary" /> Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map(feature => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-primary/40" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Section */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center text-white shadow-lg">
              <TableIcon size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-industrial-dark">Technical Specifications</h2>
              <p className="text-muted-foreground text-sm">Official performance parameters for {product.grade}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-industrial-light/50 border-b border-gray-100">
                      <th className="px-8 py-5 text-sm font-bold text-gold-primary uppercase tracking-widest">Property</th>
                      <th className="px-8 py-5 text-sm font-bold text-gold-primary uppercase tracking-widest">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="hover:bg-industrial-light/30 transition-colors">
                        <td className="px-8 py-5 text-sm font-medium text-industrial-dark">{key}</td>
                        <td className="px-8 py-5 text-sm font-bold text-industrial-dark">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-industrial-light/30 rounded-2xl flex items-start gap-3">
                <Info size={20} className="text-gold-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Note: The values mentioned above are indicative and based on general manufacturer datasheets. Actual properties may vary slightly depending on processing conditions and testing environment. For precise technical data, please refer to the official PDF datasheet.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-industrial-dark text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-xl font-bold mb-6 relative z-10">Typical Applications</h3>
                <ul className="space-y-4 relative z-10">
                  {product.applications.map(app => (
                    <li key={app} className="flex items-center gap-3 text-white/60">
                      <ChevronRight size={16} className="text-gold-accent" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border border-gray-100 bg-industrial-light/30 rounded-[2.5rem]">
                <h3 className="text-xl font-bold text-industrial-dark mb-4">Request COA</h3>
                <p className="text-sm text-muted-foreground mb-6">We provide Certificate of Analysis (COA) and material traceability reports for all our batches.</p>
                <Link href="/contact" className="w-full py-4 gold-gradient text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-gold-primary/20 transition-all flex items-center justify-center">
                  Request Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
