'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Store for theme preference (force light theme only)
let themeStore: Theme = 'light';
const themeListeners = new Set<() => void>();

function getThemeSnapshot(): Theme {
  return themeStore;
}

function getServerSnapshot(): Theme {
  return 'light';
}

function subscribeToTheme(callback: () => void): () => void {
  themeListeners.add(callback);
  return () => themeListeners.delete(callback);
}

function applyThemeToDOM() {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    // Always enforce light mode
    root.classList.add('light');
    root.classList.remove('dark');
  }
}

function setThemeStore() {
  // Persist but always store light theme
  themeStore = 'light';
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', 'light');
  }
  applyThemeToDOM();
  themeListeners.forEach(listener => listener());
}

// Initialize from localStorage on module load (client-side only)
if (typeof window !== 'undefined') {
  // Force light theme regardless of previous preference or system setting
  themeStore = 'light';
  localStorage.setItem('theme', 'light');
  applyThemeToDOM();
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerSnapshot
  );

  // Apply theme on mount to ensure DOM matches
  useEffect(() => {
    applyThemeToDOM();
  }, [theme]);

  const setTheme = () => {
    // Ignore requested theme and keep light
    setThemeStore();
  };

  const toggleTheme = () => {
    // Dark mode disabled – always keep light theme
    setTheme();
  };

  return (
    <ThemeContext.Provider value={{ theme: 'light', setTheme, toggleTheme, isDark: false }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
