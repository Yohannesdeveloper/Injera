import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { KineticText } from './KineticText';

export default function ContactSection({ onRequestQuote }) {
  return (
    <section id="contact" className="py-24 px-6 relative z-10 max-w-4xl mx-auto space-y-16">
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          Contact Us
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-slate-100">
          <KineticText text="Get in" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Touch" as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-bold text-xl">
          Ready to partner with us? Reach out to our export team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center space-y-4 p-8 bg-black/10 backdrop-blur-sm rounded-[25px] border border-slate-800/50">
          <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-black text-slate-100">Email</h3>
          <a href="mailto:export@company.com" className="text-slate-300 font-bold hover:text-gold-400 transition-colors">
            export@company.com
          </a>
        </div>

        <div className="text-center space-y-4 p-8 bg-black/10 backdrop-blur-sm rounded-[25px] border border-slate-800/50">
          <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-black text-slate-100">Phone</h3>
          <p className="text-slate-300 font-bold">+251 XXX XXX XXX</p>
        </div>

        <div className="text-center space-y-4 p-8 bg-black/10 backdrop-blur-sm rounded-[25px] border border-slate-800/50">
          <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-black text-slate-100">Location</h3>
          <p className="text-slate-300 font-bold">Addis Ababa, Ethiopia</p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onRequestQuote}
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-gold-500 to-ochre-500 text-black font-bold text-xs uppercase tracking-wider hover:from-gold-400 hover:to-ochre-400 transition-all"
        >
          Send Us a Message
        </button>
      </div>
    </section>
  );
}
