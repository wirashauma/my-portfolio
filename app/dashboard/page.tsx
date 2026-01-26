'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Github,
  Clock,
  Calendar,
  TrendingUp,
  Award,
  Activity,
  Code2,
  Timer,
} from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { Skeleton } from '../components/ui/Skeleton';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  subtitle?: string;
  color?: string;
}

function StatCard({ title, value, icon, subtitle, color = 'emerald' }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <span className={`text-${color}-500`}>{icon}</span>
      </div>
      <p className={`text-3xl font-bold text-${color}-600`}>{value}</p>
      {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
    </motion.div>
  );
}

function StatCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-2">
        <Skeleton width="w-20" height="h-4" />
        <Skeleton width="w-6" height="h-6" />
      </div>
      <Skeleton width="w-16" height="h-8" className="mt-2" />
    </div>
  );
}

// WakaTime mock data
interface WakaTimeData {
  startDate: string;
  endDate: string;
  averageDailyTime: string;
  totalTime: string;
  languages: { name: string; percent: number; color: string }[];
  dailyActivity: { day: string; hours: number }[];
}

const mockWakaTimeData: WakaTimeData = {
  startDate: 'January 17, 2026',
  endDate: 'January 23, 2026',
  averageDailyTime: '1 hr 34 mins',
  totalTime: '7 hrs 51 mins',
  languages: [
    { name: 'TypeScript', percent: 45, color: '#3178c6' },
    { name: 'JavaScript', percent: 20, color: '#f7df1e' },
    { name: 'Dart', percent: 15, color: '#0175c2' },
    { name: 'Python', percent: 10, color: '#3776ab' },
    { name: 'Other', percent: 10, color: '#6b7280' },
  ],
  dailyActivity: [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.2 },
    { day: 'Wed', hours: 0.8 },
    { day: 'Thu', hours: 1.5 },
    { day: 'Fri', hours: 0.5 },
    { day: 'Sat', hours: 0.8 },
    { day: 'Sun', hours: 0.5 },
  ],
};

function WakaTimeBarChart({ data }: { data: WakaTimeData }) {
  const maxHours = Math.max(...data.dailyActivity.map(d => d.hours));

  return (
    <div className="flex items-end justify-between h-40 gap-2">
      {data.dailyActivity.map((day, index) => {
        const heightPercent = (day.hours / maxHours) * 100;
        return (
          <motion.div
            key={day.day}
            initial={{ height: 0 }}
            animate={{ height: `${heightPercent}%` }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex-1 flex flex-col items-center gap-2"
          >
            <div
              className="w-full bg-linear-to-t from-emerald-500 to-emerald-400 rounded-t-md min-h-1"
              style={{ height: `${heightPercent}%` }}
            />
            <span className="text-xs text-gray-500">{day.day}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

function LanguageBar({ languages }: { languages: WakaTimeData['languages'] }) {
  return (
    <div className="space-y-3">
      {languages.map((lang, index) => (
        <motion.div
          key={lang.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="space-y-1"
        >
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700">{lang.name}</span>
            <span className="text-gray-500">{lang.percent}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${lang.percent}%` }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="h-full rounded-full"
              style={{ backgroundColor: lang.color }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [githubStats, setGithubStats] = useState({
    total: 0,
    thisWeek: 0,
    best: 0,
    average: 0,
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setGithubStats({
        total: 599,
        thisWeek: 6,
        best: 50,
        average: 2,
      });
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const githubUsername = 'wirashauma';

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">
              My personal dashboard built with Next.js API routes, visualizing development statistics and contributions in real-time.
            </p>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-8" />

        {/* GitHub Contributions Section */}
        <ScrollReveal delay={0.1}>
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-bold text-gray-900">GitHub Contributions</h2>
              </div>
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-emerald-600 transition-colors"
              >
                @{githubUsername}
              </a>
            </div>
            <p className="text-gray-500 text-sm mb-6">My GitHub activity over the past year.</p>

            {/* Stats Cards */}
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {isLoading ? (
                  <>
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                    <StatCardSkeleton />
                  </>
                ) : (
                  <>
                    <StaggerItem>
                      <StatCard
                        title="Total"
                        value={githubStats.total}
                        icon={<TrendingUp className="w-5 h-5" />}
                      />
                    </StaggerItem>
                    <StaggerItem>
                      <StatCard
                        title="This week"
                        value={githubStats.thisWeek}
                        icon={<Calendar className="w-5 h-5" />}
                      />
                    </StaggerItem>
                    <StaggerItem>
                      <StatCard
                        title="Best"
                        value={githubStats.best}
                        icon={<Award className="w-5 h-5" />}
                      />
                    </StaggerItem>
                    <StaggerItem>
                      <StatCard
                        title="Average"
                        value={`${githubStats.average}`}
                        subtitle="/ day"
                        icon={<Activity className="w-5 h-5" />}
                      />
                    </StaggerItem>
                  </>
                )}
              </div>
            </StaggerContainer>

            {/* GitHub Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 p-6 overflow-x-auto"
            >
              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton width="w-full" height="h-32" />
                </div>
              ) : (
                <GitHubCalendar
                  username={githubUsername}
                  colorScheme="light"
                  blockSize={12}
                  blockMargin={4}
                  fontSize={12}
                  theme={{
                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                  }}
                />
              )}
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-8" />

        {/* WakaTime Stats Section */}
        <ScrollReveal delay={0.2}>
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-bold text-gray-900">WakaTime Stats</h2>
              </div>
              <span className="text-sm text-gray-400">Last Update: 2 days ago</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">Coding activity over the past 7 days.</p>

            {/* WakaTime Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl border border-gray-200 p-4"
              >
                <p className="text-sm text-gray-500 mb-1">Start Date</p>
                <p className="font-semibold text-gray-900">{mockWakaTimeData.startDate}</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl border border-gray-200 p-4"
              >
                <p className="text-sm text-gray-500 mb-1">End Date</p>
                <p className="font-semibold text-gray-900">{mockWakaTimeData.endDate}</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl border border-gray-200 p-4"
              >
                <p className="text-sm text-gray-500 mb-1">Average Daily Coding Time</p>
                <p className="font-semibold text-gray-900">{mockWakaTimeData.averageDailyTime}</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl border border-gray-200 p-4"
              >
                <p className="text-sm text-gray-500 mb-1">Total This Week</p>
                <p className="font-semibold text-gray-900">{mockWakaTimeData.totalTime}</p>
              </motion.div>
            </div>

            {/* Charts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Daily Activity Bar Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Timer className="w-4 h-4 text-gray-500" />
                  <h3 className="font-semibold text-gray-900">Daily Activity</h3>
                </div>
                <WakaTimeBarChart data={mockWakaTimeData} />
              </motion.div>

              {/* Languages Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-4 h-4 text-gray-500" />
                  <h3 className="font-semibold text-gray-900">Languages Used</h3>
                </div>
                <LanguageBar languages={mockWakaTimeData.languages} />
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
