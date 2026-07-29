import React, { useState } from 'react';
import { Calculator, Plane, Ship, ArrowRight, ShieldCheck } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';

const DESTINATIONS = [
  { id: 'us_east', name: 'North America — Washington IAD / New York JFK', mode: 'Air Cargo', days: '24-48 Hours', temp: '+4°C Chilled' },
  { id: 'us_west', name: 'North America — Los Angeles / Toronto YYZ', mode: 'Air Cargo', days: '36-48 Hours', temp: '+4°C Chilled' },
  { id: 'eu_central', name: 'Europe — Frankfurt FRA / London LHR', mode: 'Air Cargo', days: '24 Hours', temp: '+4°C Chilled' },
  { id: 'uae_dubai', name: 'Middle East — Dubai DXB / Riyadh RUH', mode: 'Air Cargo', days: '12-24 Hours', temp: '+4°C Chilled' },
  { id: 'sea_reefer', name: 'Global Seaports — 20ft Reefer Ocean Container', mode: 'Sea Reefer', days: '14-21 Days', temp: '-18°C Frozen' }
];

export default function ExportCalculator({ onRequestQuote }) {
  const [dest, setDest] = useState(DESTINATIONS[0]);
  const [quantity, setQuantity] = useState(1000);

  const grossWeight = (quantity * 1.2 * 1.15).toFixed(0);
  const injeraPieces = (quantity * 5).toLocaleString();

  return (
    <section id="logistics" className="py-24 px-6 relative z-10 max-w-6xl mx-auto">
      <BorderGlow className="p-8 md:p-12 space-y-8" borderRadius={28} colors={['#D4AF37', '#F4C430', '#C87D32']} glowColor="43 80 80">
        
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            B2B Logistics Estimator
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-100">
            <KineticText text="Global Cold-Chain" as="span" className="inline flex-wrap" />{' '}
            <span className="gold-gradient-text"><KineticText text="Logistics" as="span" className="inline flex-wrap" /></span>
          </h2>
          <p className="text-slate-300 font-light text-sm">
            Estimate gross shipping weights and transit timeframes for air freight and ocean reefer container shipments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Inputs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                1. Select Destination Hub:
              </label>
              <select
                value={dest.id}
                onChange={(e) => setDest(DESTINATIONS.find(d => d.id === e.target.value))}
                className="w-full px-4 py-3.5 rounded-xl bg-surface border border-gold-500/30 text-slate-100 text-xs font-semibold focus:border-gold-500 focus:outline-none"
              >
                {DESTINATIONS.map((d) => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Order Quantity (Packs):
                </label>
                <span className="text-sm font-bold text-gold-400">{quantity.toLocaleString()} Packs</span>
              </div>
              <input
                type="range"
                min="500"
                max="20000"
                step="500"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-gold-500 bg-slate-800 rounded-lg h-2"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>500 MOQ (Air)</span>
                <span>10,000 (20ft Reefer)</span>
                <span>20,000 (40ft Reefer)</span>
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="lg:col-span-6">
            <BorderGlow className="p-6 space-y-6" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
              <h4 className="text-xs font-bold text-gold-400 uppercase tracking-wider flex items-center justify-between">
                <span>Logistics Freight Summary</span>
                <ShieldCheck className="w-4 h-4 text-gold-400" />
              </h4>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3.5 rounded-xl bg-elevated/80 border border-slate-800">
                  <p className="text-[9px] text-slate-400 uppercase font-semibold">Total Injera Discs</p>
                  <p className="text-lg font-bold text-slate-100 mt-0.5">{injeraPieces} Pieces</p>
                </div>
                <div className="p-3.5 rounded-xl bg-elevated/80 border border-slate-800">
                  <p className="text-[9px] text-slate-400 uppercase font-semibold">Est. Gross Weight</p>
                  <p className="text-lg font-bold text-gold-400 mt-0.5">{grossWeight} kg</p>
                </div>
                <div className="p-3.5 rounded-xl bg-elevated/80 border border-slate-800">
                  <p className="text-[9px] text-slate-400 uppercase font-semibold">Cold-Chain Temp</p>
                  <p className="text-lg font-bold text-slate-200 mt-0.5">{dest.temp}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-elevated/80 border border-slate-800">
                  <p className="text-[9px] text-slate-400 uppercase font-semibold">Est. Transit Time</p>
                  <p className="text-lg font-bold text-gold-400 mt-0.5">{dest.days}</p>
                </div>
              </div>

              <button
                onClick={onRequestQuote}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-ochre-500 hover:from-gold-400 hover:to-ochre-400 text-dark-950 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Quotation for this Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </BorderGlow>
          </div>

        </div>

      </BorderGlow>
    </section>
  );
}
