'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { GitHubCard } from './components/sections/GitHubCard';
import { useGitHubContributions } from './hooks/useGitHubContributions';

/**
 * GitHub Data Provider Component
 * Wraps the page content with React Query provider
 */
function GitHubDataSection() {
  const { data, isLoading, isError } = useGitHubContributions();

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          GitHub Contributions
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Real-time data fetched from GitHub API with ISR caching
        </p>
      </div>
      <GitHubCard data={data} isLoading={isLoading} isError={isError} />
    </section>
  );
}

/**
 * Home Page Component
 * Demonstrates industry-standard practices:
 * - Server-side rendering with metadata
 * - Client-side state management with TanStack Query
 * - TypeScript with strict typing
 * - Responsive Tailwind CSS design
 * - Framer Motion animations
 * - ISR for optimal performance
 */
export default function Home() {
  // Initialize React Query client with optimized settings
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 60, // 1 hour
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
            retry: 3,
            retryDelay: (attemptIndex) =>
              Math.min(1000 * 2 ** attemptIndex, 30000),
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
          <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#github" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                GitHub
              </a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Welcome to My Portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              A high-performance personal portfolio built with modern web technologies.
              Featuring industry-standard practices, optimal performance, and professional design.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                View on GitHub
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* GitHub Data Section */}
        <div id="github">
          <GitHubDataSection />
        </div>

        {/* Features Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h3 className="text-3xl font-bold mb-12">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h4 className="text-lg font-semibold mb-2">⚡ Performance</h4>
              <p className="text-gray-600 dark:text-gray-400">
                ISR for optimal caching, server components, and lazy loading
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h4 className="text-lg font-semibold mb-2">🔐 Type Safety</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Fully typed with TypeScript interfaces for all API responses
              </p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h4 className="text-lg font-semibold mb-2">🎨 Beautiful UI</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Tailwind CSS with Framer Motion animations and dark mode support
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
              <p>&copy; 2026 My Portfolio. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
