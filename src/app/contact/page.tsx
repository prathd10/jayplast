"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#FAF5E8] to-[#E3D2B4] min-h-screen">
      {/* Hero Header */}
      <section className="bg-industrial-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full gold-gradient opacity-10 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-sm uppercase tracking-[0.4em] font-black text-gold-accent mb-6">Connect With Us</h1>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Let&apos;s Build Your <br /><span className="gold-text-gradient">Material Solution</span></h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our technical sales team is ready to assist you with material selection, pricing, and logistical support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 -mt-16 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {[
                { icon: Phone, title: "Call Us", details: ["+91 98213 74466", "+91 88790 92007"] },
                { icon: Mail, title: "Email Us", details: ["kalpesh29desai@gmail.com", "sales@jayplast.com"] },
                { icon: MapPin, title: "Visit Office", details: ["3/603, Vishranti CHS, Subashnagar,", "Chembur, Mumbai - 400071"] },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-white mb-6 shadow-lg shadow-gold-primary/20">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-industrial-dark mb-4">{item.title}</h3>
                  {item.details.map((line, idx) => (
                    <p key={idx} className="text-muted-foreground font-medium">{line}</p>
                  ))}
                </motion.div>
              ))}

              {/* GST Card */}
              <div className="p-8 gold-gradient text-white rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10" />
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={20} className="text-white" />
                  <h3 className="text-xl font-bold">Official Verification</h3>
                </div>
                <p className="text-white/80 text-sm mb-2">GST Registration:</p>
                <p className="text-2xl font-black tracking-tight">27AAFPD2860G1ZZ</p>
                <p className="text-xs text-white/60 mt-4 leading-relaxed">
                  Registered entity under the laws of Maharashtra & Government of India.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="h-52 bg-industrial-light rounded-[2rem] overflow-hidden relative border border-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={36} className="text-gold-primary mx-auto mb-3" />
                    <p className="text-sm font-bold text-industrial-dark">Chembur, Mumbai</p>
                    <p className="text-xs text-muted-foreground">Maharashtra 400071</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-white p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-industrial-dark mb-2">Send an Inquiry</h3>
              <p className="text-muted-foreground mb-10">Fill out the form and our material experts will respond within 24 hours.</p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gold-primary uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-industrial-light rounded-2xl border-none focus:ring-2 focus:ring-gold-primary transition-all text-industrial-dark"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gold-primary uppercase tracking-widest ml-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-6 py-4 bg-industrial-light rounded-2xl border-none focus:ring-2 focus:ring-gold-primary transition-all text-industrial-dark"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold-primary uppercase tracking-widest ml-1">Company Name</label>
                  <input
                    type="text"
                    placeholder="Industrial Solutions Pvt Ltd"
                    className="w-full px-6 py-4 bg-industrial-light rounded-2xl border-none focus:ring-2 focus:ring-gold-primary transition-all text-industrial-dark"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold-primary uppercase tracking-widest ml-1">Material Interest</label>
                  <select className="w-full px-6 py-4 bg-industrial-light rounded-2xl border-none focus:ring-2 focus:ring-gold-primary transition-all text-industrial-dark appearance-none">
                    <option>Polycarbonate Granules</option>
                    <option>Nylon (PA6 / PA66)</option>
                    <option>ABS Granules</option>
                    <option>PBT Granules</option>
                    <option>Specialty Polymers (PEEK / PPSU)</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold-primary uppercase tracking-widest ml-1">Message / Requirements</label>
                  <textarea
                    rows={5}
                    placeholder="Please describe your material requirements, grade specifications, and estimated quantity..."
                    className="w-full px-6 py-4 bg-industrial-light rounded-2xl border-none focus:ring-2 focus:ring-gold-primary transition-all text-industrial-dark resize-none"
                  />
                </div>

                <button className="w-full py-5 gold-gradient text-white font-bold rounded-2xl shadow-xl hover:shadow-gold-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
                  Submit Inquiry
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <div className="flex items-center gap-4">
                  <div className="h-px flex-grow bg-gray-100" />
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Or</span>
                  <div className="h-px flex-grow bg-gray-100" />
                </div>

                <a
                  href="https://wa.me/919821374466"
                  target="_blank"
                  className="w-full py-4 border-2 border-[#25D366] text-[#25D366] font-bold rounded-2xl hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare size={20} />
                  Chat on WhatsApp
                </a>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
