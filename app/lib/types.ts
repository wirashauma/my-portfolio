/**
 * GitHub GraphQL API Response Types
 */

export interface GitHubUser {
  login: string;
  name: string;
  avatarUrl: string;
  bio?: string;
  company?: string;
  location?: string;
  websiteUrl?: string;
  twitterUsername?: string;
}

export interface ContributionDay {
  date: string;
  contributionCount: number;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export interface ContributionCollection {
  contributionCalendar: ContributionCalendar;
}

export interface GitHubContributionData {
  user: GitHubUser;
  totalContributions: number;
  followers: number;
  following: number;
  contributionCollection: ContributionCollection;
}

/**
 * API Response Types
 */

export interface APISuccessResponse<T> {
  data: T;
  timestamp: string;
}

export interface APIErrorResponse {
  error: string;
  details?: unknown;
  timestamp: string;
}

/**
 * Component Props Types
 */

export interface GitHubCardProps {
  isLoading?: boolean;
  isError?: boolean;
  data?: GitHubContributionData;
}

export interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}
