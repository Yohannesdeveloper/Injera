import React from 'react';

export default function LoadingFallback({ message = 'Loading...' }) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gold-400 font-bold text-sm">{message}</p>
      </div>
    </div>
  );
}