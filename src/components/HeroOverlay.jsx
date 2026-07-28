import React from 'react';

export default function HeroOverlay() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Full-screen video background */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/Video_4.mp4"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

    </section>
  );
}
