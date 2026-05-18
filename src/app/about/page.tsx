"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, History, Users, Globe, Building2, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Years of Experience", value: "18+", icon: History },
    { label: "Material Grades", value: "500+", icon: Award },
    { label: "Active Clients", value: "1200+", icon: Users },
    { label: "Global Partners", value: "25+", icon: Globe },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-[#FFF9CC] to-[#B9A66A] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-industrial-dark text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-primary/10 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-sm uppercase tracking-[0.3em] font-bold text-gold-accent mb-6">Our Legacy</h1>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Pioneering <span className="gold-text-gradient">Polymer Excellence</span> Since 2005
            </h2>
            <p className="text-xl text-white/60 leading-relaxed">
              JAY PLAST is a premier engineering plastic raw material trading house based in Mumbai. We specialize in high-performance polymers that drive industrial innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:border-gold-primary/30 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-gold-primary/20">
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl font-black text-industrial-dark mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-gold-primary uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-industrial-light">
                 <img 
                   src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=1000" 
                   alt="Industrial Office" 
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 gold-gradient rounded-[3rem] opacity-10 blur-3xl" />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-industrial-dark">Trusted Partner for <br /><span className="gold-text-gradient">Advanced Material Sourcing</span></h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2005 by industry visionaries, JAY PLAST began with a simple mission: to bridge the gap between global polymer manufacturers and the growing Indian industrial sector. Over two decades, we have evolved into a one-stop solution for all engineering plastic requirements.
                </p>
                <p>
                  Operating from the heart of Mumbai, we maintain a robust supply chain network that ensures technical grades are available when our clients need them most. Our expertise spans from common materials like Polycarbonate and Nylon to high-performance specialty polymers like PEEK and PPSU.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Authorized Distribution", icon: ShieldCheck },
                  { title: "Technical Support", icon: Building2 },
                ].map(item => (
                  <div key={item.title} className="flex items-center gap-4 p-4 rounded-2xl bg-industrial-light border border-gray-100">
                    <item.icon className="text-gold-primary" size={24} />
                    <span className="font-bold text-industrial-dark">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-industrial-dark">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Transparency", desc: "Full disclosure of material origins and batch documentation for complete peace of mind." },
              { title: "Reliability", desc: "Consistent supply even during global shortages, thanks to our strong sourcing network." },
              { title: "Innovation", desc: "Constant scouting for newer, more efficient polymer solutions for modern manufacturing." },
            ].map((value, i) => (
              <div key={i} className="p-10 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gold-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
