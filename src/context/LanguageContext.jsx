import React, { createContext, useContext, useState, useCallback } from 'react';
import translations from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'am' : 'en');
  }, []);

  const t = useCallback((path) => {
    const keys = path.split('.');
    let val = translations[language];
    for (const key of keys) {
      if (val === undefined || val === null) return path;
      val = val[key];
    }
    return val ?? path;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
