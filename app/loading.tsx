'use client';

import { Skeleton } from './components/ui/Skeleton';

/**
 * Root Loading Component for Next.js App Router
 * Renders a premium, cohesive skeleton page layout during route transitions
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Skeleton */}
        <div className="space-y-3">
          <Skeleton width="w-48" height="h-10" />
          <Skeleton width="w-72" height="h-5" />
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200" />

        {/* Content Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
              <Skeleton width="w-1/3" height="h-6" />
              <div className="space-y-2">
                <Skeleton width="w-full" height="h-4" />
                <Skeleton width="w-full" height="h-4" />
                <Skeleton width="w-5/6" height="h-4" />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
              <Skeleton width="w-1/4" height="h-6" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Skeleton width="w-12" height="h-12" className="rounded-lg shrink-0" />
                    <div className="flex-1 space-y-2">
                      <Skeleton width="w-1/3" height="h-4" />
                      <Skeleton width="w-2/3" height="h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Stats Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
              <Skeleton width="w-1/2" height="h-6" />
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton width="w-12" height="h-8" />
                    <Skeleton width="w-16" height="h-3" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
              <Skeleton width="w-1/2" height="h-6" />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Skeleton width="w-16" height="h-4" />
                  <Skeleton width="w-8" height="h-4" />
                </div>
                <Skeleton width="w-full" height="h-2" className="rounded-full" />
                
                <div className="flex justify-between">
                  <Skeleton width="w-24" height="h-4" />
                  <Skeleton width="w-8" height="h-4" />
                </div>
                <Skeleton width="w-full" height="h-2" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
