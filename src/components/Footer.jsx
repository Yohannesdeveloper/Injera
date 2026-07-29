import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold-500/20 bg-black/20 pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/Logo (2).jpg"
              alt="Zedagm"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-display text-xl font-black text-gold-400">Zedagm</h4>
              <p className="text-sm text-slate-400">ዘ፟-ዳግም</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h4 className="font-display text-lg font-black text-gold-400 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="#products" className="hover:text-gold-400 transition-colors">Products</a></li>
            <li><a href="#about" className="hover:text-gold-400 transition-colors">About</a></li>
            <li><a href="#process" className="hover:text-gold-400 transition-colors">Process</a></li>
            <li><a href="#quality" className="hover:text-gold-400 transition-colors">Quality</a></li>
            <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
            <li><a href="#faq" className="hover:text-gold-400 transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Location */}
        <div className="space-y-4">
          <h4 className="font-display text-lg font-black text-gold-400 uppercase tracking-widest">Location</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>Addis Ababa, Ethiopia</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-display text-lg font-black text-gold-400 uppercase tracking-widest">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>Email: <a href="mailto:export@company.com" className="hover:text-gold-400 transition-colors">export@company.com</a></li>
            <li>Phone: +251 XXX XXX XXX</li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© 2026 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
