import React from 'react';
import { Camera, Compass, Disc, Sparkles, Sliders } from 'lucide-react';

export default function CinematicCameraHud({ scrollDegree = 0, currentScene = 1 }) {
  // Map 0 - 360 degrees
  const angle = Math.round(scrollDegree);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 flex flex-col justify-between p-4 md:p-8">

      {/* Top Camera HUD Bar */}
      <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-gold-400/90">

        {/* Left: Recording & Resolution */}
        <div className="flex items-center gap-3 glass-panel px-3.5 py-1.5 rounded-full border-gold-500/30">
          <div className="flex items-center gap-1.5 text-red-500 font-bold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>REC</span>
          </div>
          <span className="text-slate-400">|</span>
          <span className="text-slate-200">RAW 4K UHD 60FPS</span>
          <span className="text-slate-400">|</span>
          <span className="text-gold-400 font-bold">ETHIOPIA 360° CAM</span>
        </div>

        {/* Center: Camera Lens Info */}
        <div className="hidden md:flex items-center gap-4 glass-panel px-4 py-1.5 rounded-full border-gold-500/30 text-slate-300">
          <span>ISO 100</span>
          <span>•</span>
          <span>85mm f/1.4</span>
          <span>•</span>
          <span>1/500s</span>
          <span>•</span>
          <span className="text-gold-400 font-bold">5600K WB</span>
        </div>

        {/* Right: 360° Angle Gauge */}
        <div className="flex items-center gap-2 glass-panel px-3.5 py-1.5 rounded-full border-gold-500/30 text-slate-200">
          <Compass className="w-4 h-4 text-gold-400 animate-spin-slow" />
          <span>CAM ORBIT:</span>
          <span className="font-bold text-gold-400 font-mono text-xs">{angle}°</span>
        </div>

      </div>

      {/* Center Viewfinder Target Reticle */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <div className="w-64 h-64 border border-dashed border-gold-500/60 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 border border-gold-500/80 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
          </div>
        </div>
        {/* Frame Corners */}
        <div className="absolute top-12 left-12 w-6 h-6 border-t-2 border-l-2 border-gold-400"></div>
        <div className="absolute top-12 right-12 w-6 h-6 border-t-2 border-r-2 border-gold-400"></div>
        <div className="absolute bottom-12 left-12 w-6 h-6 border-b-2 border-l-2 border-gold-400"></div>
        <div className="absolute bottom-12 right-12 w-6 h-6 border-b-2 border-r-2 border-gold-400"></div>
      </div>

      {/* Bottom Camera Compass & Story Mode Dial Bar */}
      <div className="flex items-center justify-between text-[11px] font-mono tracking-widest">

        {/* Active Scene Indicator */}
        <div className="glass-panel px-4 py-2 rounded-xl border-gold-500/30 text-slate-200 flex items-center gap-2">
          <Disc className="w-4 h-4 text-gold-400 animate-spin" />
          <span>STORY MODE:</span>
          <span className="font-bold text-gold-400">SCENE 0{currentScene} / 04</span>
        </div>

        {/* 360° Orbit Slider Dial */}
        <div className="hidden lg:flex items-center gap-3 glass-panel px-6 py-2 rounded-xl border-gold-500/30 text-slate-300">
          <span>0° TEFF</span>
          <div className="w-32 bg-dark-950 h-1.5 rounded-full overflow-hidden border border-gold-500/30">
            <div
              className="bg-gradient-to-r from-gold-500 to-ochre-500 h-full transition-all duration-150"
              style={{ width: `${(scrollDegree / 360) * 100}%` }}
            ></div>
          </div>
          <span>360° DINING</span>
        </div>

      </div>

    </div>
  );
}
