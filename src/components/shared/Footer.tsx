import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Camera, MessageSquare, Briefcase, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-dark text-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg gold-gradient shadow-lg">
                <span className="text-white font-bold text-xl">JP</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">
                  JAY <span className="gold-text-gradient">PLAST</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40 leading-tight">
                  Engineering Plastic Solutions
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Leading distributors of high-performance engineering plastic granules and polymer raw materials since 2005. Sourcing global quality for local innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-primary transition-colors border border-white/10 group">
                <Camera size={18} className="text-white/60 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-primary transition-colors border border-white/10 group">
                <Briefcase size={18} className="text-white/60 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-primary transition-colors border border-white/10 group">
                <MessageSquare size={18} className="text-white/60 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/catalog" className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><ExternalLink size={14} /> Browse Catalog</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><ExternalLink size={14} /> Our Story</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><ExternalLink size={14} /> Get in Touch</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><ExternalLink size={14} /> Manufacturers</Link></li>
            </ul>
          </div>

          {/* Materials */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Main Categories</h3>
            <ul className="space-y-4">
              <li className="text-white/60 hover:text-white transition-colors cursor-pointer">Polycarbonate Granules</li>
              <li className="text-white/60 hover:text-white transition-colors cursor-pointer">Nylon (PA6/PA66)</li>
              <li className="text-white/60 hover:text-white transition-colors cursor-pointer">ABS & PBT Granules</li>
              <li className="text-white/60 hover:text-white transition-colors cursor-pointer">Specialty Polymers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-white/40 mt-1 shrink-0" size={18} />
                <span className="text-white/60 text-sm">3/603, Vishranti CHS, Subashnagar, Chembur, Mumbai - 400071</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-white/40 shrink-0" size={18} />
                <span className="text-white/60 text-sm">+91 9821374466 / 8879092007</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-white/40 shrink-0" size={18} />
                <span className="text-white/60 text-sm">kalpesh29desai@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {currentYear} JAY PLAST. All rights reserved. GST: 27AAFPD2860G1ZZ
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
