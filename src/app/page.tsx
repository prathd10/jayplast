import { Hero } from "@/components/home/Hero";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { ManufacturersSection } from "@/components/home/ManufacturersSection";
import { PRODUCTS } from "@/data/mockData";
import Link from "next/link";
import { ArrowRight, Box, CheckCircle, Clock, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ManufacturersSection />
      <CategoriesSection />

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-gold-primary mb-4">Featured Grades</h2>
            <h3 className="text-4xl font-bold text-industrial-dark mb-6">Highest Demand Raw Materials</h3>
            <p className="text-muted-foreground">Our most requested engineering polymers, selected for their superior performance and reliability in modern industrial applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group flex flex-col bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:border-gold-primary/30 transition-all hover:shadow-2xl hover:shadow-gold-primary/5">
                <div className="h-64 overflow-hidden relative bg-industrial-light/50">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gold-primary border border-gold-primary/20">
                    {product.manufacturer}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-gold-primary font-bold text-xs uppercase tracking-widest mb-2">{product.category}</span>
                  <h4 className="text-xl font-bold text-industrial-dark mb-3 group-hover:text-gold-primary transition-colors">{product.name}</h4>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{product.description}</p>
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-industrial-dark bg-industrial-light px-3 py-1 rounded-lg">Grade: {product.grade}</span>
                    <Link href={`/catalog/${product.slug}`} className="text-gold-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      View Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/catalog" 
              className="inline-flex items-center gap-2 px-10 py-4 gold-gradient text-white font-bold rounded-full hover:shadow-xl hover:shadow-gold-primary/20 transition-all"
            >
              Browse Full Catalog <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-industrial-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-gold-accent mb-4">Why JAY PLAST</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Expertise, Quality, and <br /><span className="gold-text-gradient">Reliable Sourcing</span></h3>
              <p className="text-white/60 text-lg mb-10">Since 2005, we have been at the forefront of the engineering plastic industry, providing tailored solutions to manufacturers across India.</p>
              
              <div className="space-y-6">
                {[
                  { icon: CheckCircle, title: "Original Grades Only", desc: "We exclusively deal in genuine material from authorized sources with full COA documentation." },
                  { icon: Clock, title: "18+ Years Experience", desc: "Deep technical knowledge in polymer science and material selection for industrial parts." },
                  { icon: Truck, title: "Seamless Supply Chain", desc: "Efficient logistics network ensuring timely delivery for your production schedules." },
                  { icon: Box, title: "Comprehensive Inventory", desc: "From general purpose to high-performance specialty polymers, all under one roof." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gold-accent shrink-0 border border-white/10">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-white/40 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000" 
                  alt="Industrial Material" 
                  className="w-full h-full object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-gold-primary/10 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-12">
                    <span className="text-7xl font-black text-white block mb-2">20+</span>
                    <span className="text-xl font-bold uppercase tracking-widest text-gold-accent">Global Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[4rem] bg-industrial-light/50 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 gold-gradient opacity-5 rounded-full -mr-32 -mt-32" />
            <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-8 relative z-10">Ready to Optimize Your <br /><span className="gold-text-gradient">Production Material?</span></h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">Get in touch with our technical team today for a quote or material consultation. We help you find the perfect grade for your specific application.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="https://wa.me/919821374466" target="_blank" className="px-10 py-4 gold-gradient text-white font-bold rounded-full shadow-xl hover:shadow-gold-primary/40 transition-all">
                Request Inquiry Now
              </Link>
              <Link href="/contact" className="px-10 py-4 bg-white text-industrial-dark font-bold rounded-full border border-gray-200 hover:border-gold-primary transition-all shadow-sm">
                Contact Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
