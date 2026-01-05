'use client';

import type { ContributionWeek } from '@/app/lib/types';

interface ContributionCalendarProps {
  weeks: ContributionWeek[];
  userName: string;
}

/**
 * Contribution Calendar Component
 * Displays a GitHub-style contribution calendar with colored squares
 */
export function ContributionCalendar({ weeks, userName }: ContributionCalendarProps) {
  // Function to determine color intensity based on contribution count
  const getContributionColor = (count: number): string => {
    if (count === 0) return 'bg-gray-100 dark:bg-gray-800';
    if (count <= 3) return 'bg-green-200 dark:bg-green-900';
    if (count <= 6) return 'bg-green-400 dark:bg-green-700';
    if (count <= 9) return 'bg-green-500 dark:bg-green-600';
    return 'bg-green-600 dark:bg-green-500';
  };

  // Get max contribution count for scale
  const maxContribution = Math.max(
    ...weeks.flatMap(w => w.contributionDays.map(d => d.contributionCount))
  );

  const getContributionTooltip = (date: string, count: number): string => {
    const dateObj = new Date(date);
    const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return `${count} contributions on ${dayName}, ${dateStr}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Contribution Calendar
        </h3>
        <a
          href={`https://github.com/${userName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        >
          View on GitHub
        </a>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto">
        <div className="inline-block p-2">
          <div className="space-y-1">
            {/* Day labels */}
            <div className="flex gap-1">
              <div className="w-6" />
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                i > 0 && (
                  <div key={day} className="w-6 text-center text-xs text-gray-500 dark:text-gray-400">
                    {day.slice(0, 1)}
                  </div>
                )
              ))}
            </div>

            {/* Contribution squares */}
            <div className="flex gap-1">
              {/* Month labels and contribution squares */}
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.contributionDays.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      title={getContributionTooltip(day.date, day.contributionCount)}
                      className={`
                        w-3 h-3 rounded-sm cursor-pointer transition-all
                        hover:ring-2 hover:ring-offset-1 hover:ring-blue-500
                        ${getContributionColor(day.contributionCount)}
                      `}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800" title="0 contributions" />
          <div className="w-3 h-3 rounded-sm bg-green-200 dark:bg-green-900" title="1-3 contributions" />
          <div className="w-3 h-3 rounded-sm bg-green-400 dark:bg-green-700" title="4-6 contributions" />
          <div className="w-3 h-3 rounded-sm bg-green-500 dark:bg-green-600" title="7-9 contributions" />
          <div className="w-3 h-3 rounded-sm bg-green-600 dark:bg-green-500" title="10+ contributions" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
