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

// Store for theme preference
let themeStore: Theme = 'dark';
const themeListeners = new Set<() => void>();

function getThemeSnapshot(): Theme {
  return themeStore;
}

function getServerSnapshot(): Theme {
  return 'dark';
}

function subscribeToTheme(callback: () => void): () => void {
  themeListeners.add(callback);
  return () => themeListeners.delete(callback);
}

function applyThemeToDOM(theme: Theme) {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }
}

function setThemeStore(theme: Theme) {
  themeStore = theme;
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
  applyThemeToDOM(theme);
  themeListeners.forEach(listener => listener());
}

// Initialize from localStorage on module load (client-side only)
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    themeStore = savedTheme;
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeStore = prefersDark ? 'dark' : 'light';
  }
  // Apply on initialization
  applyThemeToDOM(themeStore);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerSnapshot
  );

  // Apply theme on mount to ensure DOM matches
  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeStore(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark: theme === 'dark' }}>
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
