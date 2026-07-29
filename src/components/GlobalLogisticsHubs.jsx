import React from 'react';
import { Plane, Ship, MapPin, ShieldCheck, Thermometer, Clock } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { KineticText } from './KineticText';
import { InteractiveHoverButton } from './InteractiveHoverButton';

const LOGISTICS_ROUTES = [
  {
    destination: 'North America — East Coast',
    hubs: 'Washington Dulles (IAD) / New York (JFK)',
    mode: 'Daily Air Cargo',
    transit: '24 – 36 Hours',
    temp: '+4°C Chilled',
    frequency: '7 Flights / Week'
  },
  {
    destination: 'North America — West & Canada',
    hubs: 'Los Angeles (LAX) / Toronto Pearson (YYZ)',
    mode: 'Express Air Cargo',
    transit: '36 – 48 Hours',
    temp: '+4°C Chilled',
    frequency: '5 Flights / Week'
  },
  {
    destination: 'Europe — Central & UK',
    hubs: 'Frankfurt (FRA) / London Heathrow (LHR)',
    mode: 'Daily Air Cargo',
    transit: '18 – 24 Hours',
    temp: '+4°C Chilled',
    frequency: '7 Flights / Week'
  },
  {
    destination: 'Middle East & Gulf Region',
    hubs: 'Dubai (DXB) / Riyadh (RUH) / Doha (DOH)',
    mode: 'Direct Air Cargo',
    transit: '12 – 18 Hours',
    temp: '+4°C Chilled',
    frequency: '14 Flights / Week'
  },
  {
    destination: 'Global Seaports (Bulk Container)',
    hubs: 'Port of Djibouti → Global Reefers',
    mode: '20ft / 40ft Ocean Reefer',
    transit: '14 – 21 Days',
    temp: '-18°C Deep Frozen',
    frequency: 'Weekly Vessel Sailings'
  }
];

export default function GlobalLogisticsHubs({ onRequestQuote }) {
  return (
    <section id="network" className="py-24 px-6 relative z-10 max-w-6xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
          International Trade Network
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-100">
          <KineticText text="Global Air & Sea" as="span" className="inline flex-wrap" />{' '}
          <span className="gold-gradient-text"><KineticText text="Logistics Hubs" as="span" className="inline flex-wrap" /></span>
        </h2>
        <p className="text-slate-300 font-medium text-base">
          Cold-chain freight routes from Addis Ababa to airports and seaports worldwide.
        </p>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOGISTICS_ROUTES.map((route, idx) => (
          <BorderGlow key={idx} className="p-6 space-y-5 flex flex-col justify-between" borderRadius={24} colors={['#D4AF37', '#F4C430', '#C87D32']}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 font-mono">
                  {route.mode}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface text-[10px] font-bold text-slate-300 border border-slate-800">
                  {route.frequency}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-slate-100">{route.destination}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{route.hubs}</span>
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-elevated/60 border border-slate-800">
                <p className="text-[9px] text-slate-400 uppercase font-semibold">Transit Time</p>
                <p className="font-bold text-gold-400 mt-0.5">{route.transit}</p>
              </div>
              <div className="p-2 rounded-lg bg-elevated/60 border border-slate-800">
                <p className="text-[9px] text-slate-400 uppercase font-semibold">Temp Regime</p>
                <p className="font-bold text-slate-200 mt-0.5">{route.temp}</p>
              </div>
            </div>
          </BorderGlow>
        ))}
      </div>

      {/* Logistics CTA */}
      <BorderGlow className="p-8 flex flex-col md:flex-row items-center justify-between gap-6" borderRadius={28} colors={['#D4AF37', '#F4C430', '#C87D32']} glowColor="43 80 80">
        <div>
          <h4 className="font-display text-xl font-bold text-slate-100">Need Custom Destination Freight Rates?</h4>
          <p className="text-sm text-slate-300 font-medium mt-1">
            Full phytosanitary docs, FDA notice, customs, and door-to-door insurance.
          </p>
        </div>
        <InteractiveHoverButton
          onClick={onRequestQuote}
          className="shrink-0"
        >
          Check Destination Freight Rates
        </InteractiveHoverButton>
      </BorderGlow>

    </section>
  );
}
