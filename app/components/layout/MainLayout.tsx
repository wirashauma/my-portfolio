'use client';

import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Main Layout Component
 * Wraps pages with sidebar navigation
 * Handles responsive layout adjustments
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      {/* Main Content Area */}
      <main className="lg:ml-64 min-h-screen">
        {/* Add top padding for mobile header */}
        <div className="pt-14 lg:pt-0">
          {children}
        </div>
      </main>
    </div>
  );
}
