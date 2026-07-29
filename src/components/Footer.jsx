import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold-500/20 bg-black/20 pt-16 pb-12 px-6 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        {/* Navigation Links */}
        <div className="space-y-3">
          <h4 className="font-display text-xs font-black text-slate-100 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li><a href="#products" className="hover:text-gold-400 transition-colors">Products</a></li>
            <li><a href="#about" className="hover:text-gold-400 transition-colors">About</a></li>
            <li><a href="#process" className="hover:text-gold-400 transition-colors">Process</a></li>
            <li><a href="#quality" className="hover:text-gold-400 transition-colors">Quality</a></li>
            <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
            <li><a href="#faq" className="hover:text-gold-400 transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Location */}
        <div className="space-y-3">
          <h4 className="font-display text-xs font-black text-slate-100 uppercase tracking-widest">Location</h4>
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li>Addis Ababa, Ethiopia</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="font-display text-xs font-black text-slate-100 uppercase tracking-widest">Contact</h4>
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li>Email: <a href="mailto:export@company.com" className="hover:text-gold-400 transition-colors">export@company.com</a></li>
            <li>Phone: +251 XXX XXX XXX</li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
        <p>© 2026 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
