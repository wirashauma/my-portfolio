'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Search, Filter, Award, Calendar, Building2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: 'Course' | 'Internship' | 'Professional' | 'Competition' | 'Workshop';
  category: 'Mobile' | 'Web' | 'Backend' | 'Cloud' | 'AI/ML' | 'General' | 'Freelance';
  credentialId?: string;
  image?: string;
}

// Sample achievements data - 56+ certificates
const achievements: Certificate[] = [
  // Professional Certificates
  { id: 1, title: 'Backend Developer Internship - Parto.id', issuer: 'Affan Technology Indonesia', date: 'July 2025', type: 'Professional', category: 'Backend', credentialId: '196/EKS/HCLGA/ATI/VIII/2025' },
  { id: 2, title: 'E-book Petunjuk Pro: Freelance Web Developer & Kerja Remote', issuer: 'Build With Angga', date: 'September 2025', type: 'Course', category: 'Freelance', credentialId: 'BWA-2025-09' },
  { id: 3, title: 'Belajar Membuat Aplikasi Android dengan Jetpack Compose', issuer: 'Dicoding Indonesia', date: 'January 2025', type: 'Course', category: 'Mobile', credentialId: '81P2LGL38ZOY' },
  { id: 4, title: 'Bangkit Academy 2024 - Mobile Development Path', issuer: 'Google, Tokopedia, Gojek & Traveloka', date: 'December 2024', type: 'Professional', category: 'Mobile' },
  { id: 5, title: 'Bangkit Academy Certificate of Completion', issuer: 'Bangkit Academy', date: 'December 2024', type: 'Professional', category: 'Mobile' },
  { id: 6, title: 'Flutter Development Bootcamp', issuer: 'Udemy', date: 'November 2024', type: 'Course', category: 'Mobile' },
  { id: 7, title: 'React Native Fundamentals', issuer: 'Meta', date: 'October 2024', type: 'Course', category: 'Mobile' },
  { id: 8, title: 'Next.js 14 Complete Guide', issuer: 'Udemy', date: 'October 2024', type: 'Course', category: 'Web' },
  { id: 9, title: 'TypeScript Advanced Patterns', issuer: 'Frontend Masters', date: 'September 2024', type: 'Course', category: 'Web' },
  { id: 10, title: 'Node.js Backend Masterclass', issuer: 'Udemy', date: 'September 2024', type: 'Course', category: 'Backend' },
  { id: 11, title: 'PostgreSQL for Developers', issuer: 'Coursera', date: 'August 2024', type: 'Course', category: 'Backend' },
  { id: 12, title: 'Firebase Complete Guide', issuer: 'Google Cloud', date: 'August 2024', type: 'Course', category: 'Cloud' },
  { id: 13, title: 'Supabase Development', issuer: 'Supabase', date: 'July 2024', type: 'Course', category: 'Backend' },
  { id: 14, title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: 'July 2024', type: 'Professional', category: 'Cloud' },
  { id: 15, title: 'Google Cloud Fundamentals', issuer: 'Google Cloud', date: 'June 2024', type: 'Course', category: 'Cloud' },
  { id: 16, title: 'Machine Learning Basics', issuer: 'Coursera', date: 'June 2024', type: 'Course', category: 'AI/ML' },
  { id: 17, title: 'TensorFlow Developer Certificate', issuer: 'Google', date: 'May 2024', type: 'Professional', category: 'AI/ML' },
  { id: 18, title: 'Python for Data Science', issuer: 'DataCamp', date: 'May 2024', type: 'Course', category: 'AI/ML' },
  { id: 19, title: 'Git & GitHub Mastery', issuer: 'Udemy', date: 'April 2024', type: 'Course', category: 'General' },
  { id: 20, title: 'Docker Fundamentals', issuer: 'Docker', date: 'April 2024', type: 'Course', category: 'Cloud' },
  { id: 21, title: 'Kubernetes Basics', issuer: 'Linux Foundation', date: 'March 2024', type: 'Course', category: 'Cloud' },
  { id: 22, title: 'Figma UI/UX Design', issuer: 'Figma', date: 'March 2024', type: 'Course', category: 'General' },
  { id: 23, title: 'Tailwind CSS Mastery', issuer: 'Tailwind Labs', date: 'February 2024', type: 'Course', category: 'Web' },
  { id: 24, title: 'React Advanced Patterns', issuer: 'Epic React', date: 'February 2024', type: 'Course', category: 'Web' },
  { id: 25, title: 'GraphQL Complete Guide', issuer: 'Apollo', date: 'January 2024', type: 'Course', category: 'Backend' },
  { id: 26, title: 'REST API Design', issuer: 'Postman', date: 'January 2024', type: 'Course', category: 'Backend' },
  { id: 27, title: 'Mobile App Hackathon Winner', issuer: 'Tech Community', date: 'December 2023', type: 'Competition', category: 'Mobile' },
  { id: 28, title: 'Web Development Bootcamp', issuer: 'Dicoding Indonesia', date: 'December 2023', type: 'Course', category: 'Web' },
  { id: 29, title: 'Dart Programming Language', issuer: 'Google', date: 'November 2023', type: 'Course', category: 'Mobile' },
  { id: 30, title: 'JavaScript Algorithms', issuer: 'freeCodeCamp', date: 'November 2023', type: 'Course', category: 'Web' },
  { id: 31, title: 'CSS Flexbox & Grid', issuer: 'CSS-Tricks', date: 'October 2023', type: 'Course', category: 'Web' },
  { id: 32, title: 'HTML5 Fundamentals', issuer: 'W3Schools', date: 'October 2023', type: 'Course', category: 'Web' },
  { id: 33, title: 'Android Studio Essentials', issuer: 'Google', date: 'September 2023', type: 'Course', category: 'Mobile' },
  { id: 34, title: 'Kotlin for Android', issuer: 'JetBrains', date: 'September 2023', type: 'Course', category: 'Mobile' },
  { id: 35, title: 'Swift Programming', issuer: 'Apple', date: 'August 2023', type: 'Course', category: 'Mobile' },
  { id: 36, title: 'iOS Development Basics', issuer: 'Apple', date: 'August 2023', type: 'Course', category: 'Mobile' },
  { id: 37, title: 'Agile Development', issuer: 'Atlassian', date: 'July 2023', type: 'Course', category: 'General' },
  { id: 38, title: 'Scrum Fundamentals', issuer: 'Scrum.org', date: 'July 2023', type: 'Professional', category: 'General' },
  { id: 39, title: 'Clean Code Principles', issuer: 'Robert C. Martin', date: 'June 2023', type: 'Course', category: 'General' },
  { id: 40, title: 'Design Patterns', issuer: 'Refactoring Guru', date: 'June 2023', type: 'Course', category: 'General' },
  { id: 41, title: 'Software Architecture', issuer: 'Pluralsight', date: 'May 2023', type: 'Course', category: 'General' },
  { id: 42, title: 'Testing & QA', issuer: 'Test Automation University', date: 'May 2023', type: 'Course', category: 'General' },
  { id: 43, title: 'DevOps Fundamentals', issuer: 'GitLab', date: 'April 2023', type: 'Course', category: 'Cloud' },
  { id: 44, title: 'CI/CD Pipelines', issuer: 'GitHub', date: 'April 2023', type: 'Course', category: 'Cloud' },
  { id: 45, title: 'MongoDB Developer', issuer: 'MongoDB University', date: 'March 2023', type: 'Course', category: 'Backend' },
  { id: 46, title: 'Redis Fundamentals', issuer: 'Redis University', date: 'March 2023', type: 'Course', category: 'Backend' },
  { id: 47, title: 'Microservices Architecture', issuer: 'Udemy', date: 'February 2023', type: 'Course', category: 'Backend' },
  { id: 48, title: 'System Design', issuer: 'Educative', date: 'February 2023', type: 'Course', category: 'General' },
  { id: 49, title: 'Data Structures & Algorithms', issuer: 'LeetCode', date: 'January 2023', type: 'Course', category: 'General' },
  { id: 50, title: 'Problem Solving Certificate', issuer: 'HackerRank', date: 'January 2023', type: 'Competition', category: 'General' },
  { id: 51, title: 'Full Stack Development Workshop', issuer: 'Tech Meetup', date: 'December 2022', type: 'Workshop', category: 'Web' },
  { id: 52, title: 'Mobile App Development Workshop', issuer: 'Google Developer Groups', date: 'November 2022', type: 'Workshop', category: 'Mobile' },
  { id: 53, title: 'Cloud Computing Workshop', issuer: 'AWS Community', date: 'October 2022', type: 'Workshop', category: 'Cloud' },
  { id: 54, title: 'Introduction to Programming', issuer: 'Coursera', date: 'September 2022', type: 'Course', category: 'General' },
  { id: 55, title: 'Computer Science Fundamentals', issuer: 'edX', date: 'August 2022', type: 'Course', category: 'General' },
  { id: 56, title: 'Web Development Fundamentals', issuer: 'Codecademy', date: 'July 2022', type: 'Course', category: 'Web' },
];

const typeOptions = ['All', 'Course', 'Internship', 'Professional', 'Competition', 'Workshop'];
const categoryOptions = ['All', 'Mobile', 'Web', 'Backend', 'Cloud', 'AI/ML', 'General', 'Freelance'];

const typeColors: Record<string, string> = {
  Course: 'bg-blue-100 text-blue-700',
  Internship: 'bg-purple-100 text-purple-700',
  Professional: 'bg-emerald-100 text-emerald-700',
  Competition: 'bg-amber-100 text-amber-700',
  Workshop: 'bg-rose-100 text-rose-700',
};

const categoryColors: Record<string, string> = {
  Mobile: 'bg-pink-100 text-pink-700',
  Web: 'bg-cyan-100 text-cyan-700',
  Backend: 'bg-indigo-100 text-indigo-700',
  Cloud: 'bg-sky-100 text-sky-700',
  'AI/ML': 'bg-violet-100 text-violet-700',
  General: 'bg-gray-100 text-gray-700',
  Freelance: 'bg-orange-100 text-orange-700',
};

function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all"
    >
      {/* Image Placeholder */}
      <div className="h-40 bg-linear-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
        <Award className="w-16 h-16 text-emerald-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Credential ID */}
        {cert.credentialId && (
          <p className="text-xs text-gray-400 mb-2 font-mono">{cert.credentialId}</p>
        )}

        {/* Title */}
        <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{cert.title}</h3>

        {/* Issuer */}
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
          <Building2 className="w-3.5 h-3.5" />
          <span className="line-clamp-1">{cert.issuer}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${typeColors[cert.type]}`}>
            {cert.type}
          </span>
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${categoryColors[cert.category]}`}>
            {cert.category}
          </span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Calendar className="w-3.5 h-3.5" />
          <span>Issued on {cert.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function AchievementsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredAchievements = useMemo(() => {
    return achievements.filter((cert) => {
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = typeFilter === 'All' || cert.type === typeFilter;
      const matchesCategory = categoryFilter === 'All' || cert.category === categoryFilter;
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [searchQuery, typeFilter, categoryFilter]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Achievements</h1>
            <p className="text-gray-600">
              A curated collection of certificates and badges I&apos;ve earned throughout my professional and academic journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-8" />

        {/* Search & Filters */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Type Filter */}
            <div className="relative">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="appearance-none w-full md:w-48 px-4 py-3 pr-10 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer"
              >
                {typeOptions.map((type) => (
                  <option key={type} value={type}>
                    {type === 'All' ? 'Filter by Type' : type}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="appearance-none w-full md:w-48 px-4 py-3 pr-10 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer"
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'Filter by Category' : category}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-500 mb-6">
            Total: <span className="font-semibold text-gray-900">{filteredAchievements.length}</span>
          </p>
        </ScrollReveal>

        {/* Certificates Grid */}
        <StaggerContainer staggerDelay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((cert) => (
              <StaggerItem key={cert.id}>
                <CertificateCard cert={cert} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No certificates found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
