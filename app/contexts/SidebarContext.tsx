'use client';

import React, { createContext, useContext, useSyncExternalStore } from 'react';

interface SidebarContextType {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  setIsCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

let isCollapsedStore = false;
const sidebarListeners = new Set<() => void>();

function getSidebarSnapshot(): boolean {
  return isCollapsedStore;
}

function getServerSnapshot(): boolean {
  return false;
}

function subscribeToSidebar(callback: () => void): () => void {
  sidebarListeners.add(callback);
  return () => sidebarListeners.delete(callback);
}

function setIsCollapsedStore(collapsed: boolean) {
  isCollapsedStore = collapsed;
  if (typeof window !== 'undefined') {
    localStorage.setItem('sidebar-collapsed', String(collapsed));
  }
  sidebarListeners.forEach((listener) => listener());
}

// Initialize from localStorage on module load (client-side only)
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('sidebar-collapsed');
  if (saved === 'true') {
    isCollapsedStore = true;
  }
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const isCollapsed = useSyncExternalStore(
    subscribeToSidebar,
    getSidebarSnapshot,
    getServerSnapshot
  );

  const setIsCollapsed = (collapsed: boolean) => {
    setIsCollapsedStore(collapsed);
  };

  const toggleCollapse = () => {
    setIsCollapsedStore(!isCollapsed);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapse, setIsCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}
