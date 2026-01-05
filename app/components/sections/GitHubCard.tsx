'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import {
  Github,
  MapPin,
  Building2,
  Link as LinkIcon,
  Users,
  Zap,
} from 'lucide-react';
import type { GitHubCardProps } from '@/app/lib/types';
import { GitHubCardSkeleton } from '@/app/components/ui/Skeleton';
import { ContributionCalendar } from '@/app/components/sections/ContributionCalendar';

/**
 * GitHubCard Component
 * Displays GitHub user profile with contributions, animations, and loading states
 * Implements industry-standard practices with proper TypeScript typing
 */
export function GitHubCard({ data, isLoading, isError }: GitHubCardProps) {
  // Framer Motion variants for professional animations
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delayChildren: 0.05,
          staggerChildren: 0.05,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 },
      },
    }),
    []
  );

  const iconVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 },
      },
    }),
    []
  );

  // Loading state
  if (isLoading) {
    return <GitHubCardSkeleton />;
  }

  // Error state
  if (isError || !data) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/50 p-6"
      >
        <p className="text-red-800 dark:text-red-200 font-medium">
          Failed to load GitHub data. Please try again later.
        </p>
      </motion.div>
    );
  }

  const { user, totalContributions } = data;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg transition-all hover:shadow-xl dark:hover:shadow-none"
    >
      {/* Background gradient accent */}
      <div className="h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="p-6 space-y-6">
        {/* Header Section - Avatar + Name */}
        <motion.div variants={itemVariants} className="flex items-start gap-4">
          <motion.img
            variants={iconVariants}
            src={user.avatarUrl}
            alt={user.name}
            className="w-16 h-16 rounded-full border-2 border-gray-200 dark:border-gray-700 object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
              {user.name}
            </h3>
            <a
              href={`https://github.com/${user.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              @{user.login}
            </a>
          </div>
        </motion.div>

        {/* Bio Section */}
        {user.bio && (
          <motion.p
            variants={itemVariants}
            className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
          >
            {user.bio}
          </motion.p>
        )}

        {/* Location & Company */}
        <motion.div variants={itemVariants} className="space-y-2">
          {user.location && (
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <MapPin size={16} className="shrink-0" />
              <span>{user.location}</span>
            </div>
          )}
          {user.company && (
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <Building2 size={16} className="shrink-0" />
              <span>{user.company}</span>
            </div>
          )}
        </motion.div>

        {/* Contributions Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Zap size={16} className="text-orange-500" />
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                Contributions
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {totalContributions.toLocaleString()}
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Users size={16} className="text-blue-500" />
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                Followers
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {data?.followers?.toLocaleString() || '0'}
            </p>
          </div>
        </motion.div>

        {/* External Links */}
        <motion.div variants={itemVariants} className="flex gap-3 pt-2">
          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github size={20} className="text-gray-900 dark:text-white" />
          </a>

          {user.websiteUrl && (
            <a
              href={user.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Website"
              title="Website"
            >
              <LinkIcon size={20} className="text-gray-900 dark:text-white" />
            </a>
          )}

          {user.twitterUsername && (
            <a
              href={`https://twitter.com/${user.twitterUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Twitter"
              title="Twitter"
            >
              <svg
                className="w-5 h-5 text-gray-900 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
              </svg>
            </a>
          )}
        </motion.div>

        {/* Contribution Calendar */}
        {data?.contributionCollection.contributionCalendar && (
          <motion.div variants={itemVariants} className="pt-6 border-t border-gray-200 dark:border-gray-800">
            <ContributionCalendar
              weeks={data.contributionCollection.contributionCalendar.weeks}
              userName={user.login}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
