import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building, Mail, Phone, Globe, Package, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RequestQuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: 'United States',
    businessType: 'Supermarket Chain / Retailer',
    productInterest: 'Vacuum Export 5-Pack (MAP)',
    estimatedMonthlyVolume: '1,000 - 5,000 Packs',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl glass-panel-gold rounded-3xl border border-gold-500/40 p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-black dark:hover:text-white p-2 rounded-full hover:bg-elevated transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/40 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-100">
              Export Quotation Request Submitted!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you for contacting Zedagm ዘ፟-ዳግም Injera Export. Your request reference is <strong className="text-gold-400 font-mono">#RFQ-ETH-88492</strong>. Our international export team will contact you within 12 hours with wholesale pricing, sample shipping details, and freight quotes.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-3 rounded-xl bg-gold-500 text-dark-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition-colors"
            >
              Done / Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-[11px] font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>B2B Wholesale & Sample Orders</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-100 mt-2">
                Request Export Quotation & Samples
              </h3>
              <p className="text-slate-300 text-xs mt-1">
                Direct export pricing from our Addis Ababa production facility to your global distribution hub.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">Company / Importer Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Habesha Trade LLC"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-elevated border border-slate-800 text-slate-100 text-xs focus:border-gold-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">Contact Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Michael Abera"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-elevated border border-slate-800 text-slate-100 text-xs focus:border-gold-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">Business Email *</label>
                <input
                  required
                  type="email"
                  placeholder="import@habeshatrade.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-elevated border border-slate-800 text-slate-100 text-xs focus:border-gold-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 019-2831"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-elevated border border-slate-800 text-slate-100 text-xs focus:border-gold-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">Destination Country *</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-elevated border border-slate-800 text-slate-100 text-xs focus:border-gold-500 focus:outline-none"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other International Destination</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">Business Type</label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-elevated border border-slate-800 text-slate-100 text-xs focus:border-gold-500 focus:outline-none"
                >
                  <option value="Supermarket Chain / Retailer">Supermarket Chain / Retailer</option>
                  <option value="Food Distributor / Importer">Food Distributor / Importer</option>
                  <option value="Restaurant / Hotel Group">Restaurant / Hotel Group</option>
                  <option value="Catering / Airline Partner">Catering / Airline Partner</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">Additional Requirements / Sample Request Notes</label>
              <textarea
                rows={3}
                placeholder="Specify preferred delivery airport/port, sample requests, or custom labeling needs..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-elevated border border-slate-800 text-slate-100 text-xs focus:border-gold-500 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-ochre-500 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Export Quotation Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
