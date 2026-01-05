import type { SkeletonProps } from '@/app/lib/types';

/**
 * Reusable Skeleton loading component
 * Used for placeholder loading states while data is being fetched
 */
export function Skeleton({
  className = '',
  width = 'w-full',
  height = 'h-4',
  rounded = true,
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200 dark:bg-gray-700';
  const roundedClass = rounded ? 'rounded-md' : '';

  return (
    <div className={`${baseClasses} ${width} ${height} ${roundedClass} ${className}`} />
  );
}

/**
 * GitHub Card Skeleton - matches GitHubCard layout
 */
export function GitHubCardSkeleton() {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
      {/* Header with avatar */}
      <div className="flex items-center gap-4">
        <Skeleton className="shrink-0" width="w-16" height="h-16" rounded />
        <div className="flex-1 space-y-2">
          <Skeleton width="w-32" height="h-4" />
          <Skeleton width="w-24" height="h-3" />
        </div>
      </div>

      {/* Bio skeleton */}
      <div className="space-y-2">
        <Skeleton width="w-full" height="h-3" />
        <Skeleton width="w-5/6" height="h-3" />
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Skeleton width="w-16" height="h-3" />
          <Skeleton width="w-12" height="h-4" />
        </div>
        <div className="space-y-1">
          <Skeleton width="w-16" height="h-3" />
          <Skeleton width="w-12" height="h-4" />
        </div>
      </div>

      {/* Links skeleton */}
      <div className="flex gap-2 pt-2">
        <Skeleton width="w-10" height="h-10" rounded className="shrink-0" />
        <Skeleton width="w-10" height="h-10" rounded className="shrink-0" />
        <Skeleton width="w-10" height="h-10" rounded className="shrink-0" />
      </div>
    </div>
  );
}
