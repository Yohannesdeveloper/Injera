import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function AudioEngine({ activeScene = 0 }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const sizzleNodeRef = useRef(null);

  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
      
      // Master Gain
      const masterGain = audioCtxRef.current.createGain();
      masterGain.gain.setValueAtTime(0.15, audioCtxRef.current.currentTime);
      masterGain.connect(audioCtxRef.current.destination);
      gainNodeRef.current = masterGain;

      // Soft ambient tone oscillator (432Hz harmonic)
      const osc = audioCtxRef.current.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(144, audioCtxRef.current.currentTime);
      
      const oscGain = audioCtxRef.current.createGain();
      oscGain.gain.setValueAtTime(0.08, audioCtxRef.current.currentTime);
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
    }

    if (isPlaying) {
      audioCtxRef.current.suspend();
      setIsPlaying(false);
    } else {
      audioCtxRef.current.resume();
      setIsPlaying(true);
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full border backdrop-blur-xl transition-all duration-300 flex items-center gap-2.5 shadow-2xl ${
        isPlaying
          ? 'bg-gold-500/20 border-gold-400 text-gold-300 gold-border-glow'
          : 'bg-elevated/80 border-slate-800 text-slate-400 hover:text-black dark:hover:text-white'
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-5 h-5 text-gold-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider">Audio On</span>
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping"></span>
        </>
      ) : (
        <>
          <VolumeX className="w-5 h-5" />
          <span className="text-xs font-medium uppercase tracking-wider">Audio Ambient</span>
        </>
      )}
    </button>
  );
}
