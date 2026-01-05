'use client';

import { useQuery } from '@tanstack/react-query';
import type { GitHubContributionData, APISuccessResponse } from '@/app/lib/types';

const GITHUB_DATA_QUERY_KEY = ['github', 'contributions'];
const QUERY_STALE_TIME = 1000 * 60 * 60; // 1 hour

async function fetchGitHubData(): Promise<GitHubContributionData> {
  const response = await fetch('/api/github', {
    next: { revalidate: 3600 }, // ISR on client side
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub data: ${response.statusText}`);
  }

  const data: APISuccessResponse<GitHubContributionData> = await response.json();
  return data.data;
}

/**
 * Hook to fetch GitHub contribution data using TanStack Query
 * Provides loading states, error handling, and automatic caching
 */
export function useGitHubContributions() {
  return useQuery({
    queryKey: GITHUB_DATA_QUERY_KEY,
    queryFn: fetchGitHubData,
    staleTime: QUERY_STALE_TIME,
    gcTime: 1000 * 60 * 60 * 24, // 24 hour cache time
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
