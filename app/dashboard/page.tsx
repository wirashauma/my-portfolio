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
import { useLanguage } from '../contexts/LanguageContext';

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
      whileHover={{ y: -2 }}
      className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <span className={`p-2 rounded-lg bg-${color}-50 text-${color}-600`}>{icon}</span>
      </div>
      <p className={`text-2xl font-bold text-gray-900`}>{value}</p>
      {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
    </motion.div>
  );
}

function StatCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-3">
        <Skeleton width="w-20" height="h-4" />
        <Skeleton width="w-8" height="h-8" className="rounded-lg" />
      </div>
      <Skeleton width="w-16" height="h-7" />
    </div>
  );
}

function WakaTimeCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center gap-2 mb-3">
        <Skeleton width="w-4" height="h-4" className="rounded-full" />
        <Skeleton width="w-20" height="h-4" />
      </div>
      <Skeleton width="w-24" height="h-6" />
    </div>
  );
}

function WakaTimeBarChartSkeleton() {
  const heights = ['h-12', 'h-24', 'h-16', 'h-32', 'h-8', 'h-20', 'h-14'];
  return (
    <div className="flex items-end justify-between h-40 gap-2">
      {heights.map((h, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-2 w-full">
          <Skeleton width="w-full" height={h} className="rounded-t-md" />
          <Skeleton width="w-8" height="h-3" />
        </div>
      ))}
    </div>
  );
}

function LanguageBarSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between">
            <Skeleton width="w-20" height="h-4" />
            <Skeleton width="w-8" height="h-4" />
          </div>
          <Skeleton width="w-full" height="h-2" className="rounded-full" />
        </div>
      ))}
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
  const { t } = useLanguage();
  const maxHours = Math.max(...data.dailyActivity.map(d => d.hours));

  return (
    <div className="flex items-end justify-between h-40 gap-2">
      {data.dailyActivity.map((day, index) => {
        const heightPercent = (day.hours / maxHours) * 100;
        const dayLabel = t.dashboard.days[day.day as keyof typeof t.dashboard.days] || day.day;
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
            <span className="text-xs text-gray-500">{dayLabel}</span>
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
  const { t, language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [githubStats, setGithubStats] = useState({
    total: 0,
    thisWeek: 0,
    best: 0,
    average: 0,
  });

  const formatMockDate = (dateStr: string, isIndonesian: boolean) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(isIndonesian ? 'id-ID' : 'en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  const formatMockTime = (hours: number, minutes: number) => {
    return t.dashboard.timeFormat
      .replace('{hours}', String(hours))
      .replace('{minutes}', String(minutes));
  };

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
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.dashboard.title}</h1>
            <p className="text-gray-600">
              {t.dashboard.subtitle}
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
                <h2 className="text-xl font-bold text-gray-900">{t.dashboard.githubContributions}</h2>
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
            <p className="text-gray-500 text-sm mb-6">{t.dashboard.githubSubtitle}</p>
 
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
                        title={t.dashboard.total}
                        value={githubStats.total}
                        icon={<TrendingUp className="w-5 h-5" />}
                      />
                    </StaggerItem>
                    <StaggerItem>
                      <StatCard
                        title={t.dashboard.thisWeek}
                        value={githubStats.thisWeek}
                        icon={<Calendar className="w-5 h-5" />}
                      />
                    </StaggerItem>
                    <StaggerItem>
                      <StatCard
                        title={t.dashboard.best}
                        value={githubStats.best}
                        icon={<Award className="w-5 h-5" />}
                      />
                    </StaggerItem>
                    <StaggerItem>
                      <StatCard
                        title={t.dashboard.average}
                        value={`${githubStats.average}`}
                        subtitle={t.dashboard.perDay}
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
                <h2 className="text-xl font-bold text-gray-900">{t.dashboard.wakatimeStats}</h2>
              </div>
              <span className="text-sm text-gray-400">{t.dashboard.lastUpdate}: 2 {t.dashboard.ago}</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">{t.dashboard.wakatimeSubtitle}</p>
 
            {/* WakaTime Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {isLoading ? (
                <>
                  <WakaTimeCardSkeleton />
                  <WakaTimeCardSkeleton />
                  <WakaTimeCardSkeleton />
                  <WakaTimeCardSkeleton />
                </>
              ) : (
                <>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-500">{t.dashboard.startDate}</p>
                    </div>
                    <p className="font-semibold text-gray-900">{formatMockDate('2026-01-17', language === 'id')}</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-500">{t.dashboard.endDate}</p>
                    </div>
                    <p className="font-semibold text-gray-900">{formatMockDate('2026-01-23', language === 'id')}</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Timer className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-500">{t.dashboard.avgDailyCoding}</p>
                    </div>
                    <p className="font-semibold text-gray-900">{formatMockTime(1, 34)}</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-500">{t.dashboard.totalThisWeek}</p>
                    </div>
                    <p className="font-semibold text-gray-900">{formatMockTime(7, 51)}</p>
                  </motion.div>
                </>
              )}
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
                  <h3 className="font-semibold text-gray-900">{t.dashboard.dailyActivity}</h3>
                </div>
                {isLoading ? (
                  <WakaTimeBarChartSkeleton />
                ) : (
                  <WakaTimeBarChart data={mockWakaTimeData} />
                )}
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
                  <h3 className="font-semibold text-gray-900">{t.dashboard.languagesUsed}</h3>
                </div>
                {isLoading ? (
                  <LanguageBarSkeleton />
                ) : (
                  <LanguageBar languages={mockWakaTimeData.languages} />
                )}
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
