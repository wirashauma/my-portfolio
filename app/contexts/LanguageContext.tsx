'use client';

import React, { createContext, useContext, ReactNode, useSyncExternalStore } from 'react';
import { translations, Language, TranslationKey } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Store for language preference
let languageStore: Language = 'en';
const languageListeners = new Set<() => void>();

function getLanguageSnapshot(): Language {
  return languageStore;
}

function getServerSnapshot(): Language {
  return 'en';
}

function subscribeToLanguage(callback: () => void): () => void {
  languageListeners.add(callback);
  return () => languageListeners.delete(callback);
}

function setLanguageStore(lang: Language) {
  languageStore = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
  languageListeners.forEach(listener => listener());
}

// Initialize from localStorage on module load (client-side only)
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('language') as Language;
  if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
    languageStore = savedLang;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerSnapshot
  );

  const setLanguage = (lang: Language) => {
    setLanguageStore(lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'id' : 'en';
    setLanguage(newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
