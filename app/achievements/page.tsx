'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, Building2, Search, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

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
  const { t } = useLanguage();
  
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
          <span>{t.achievements.issuedOn} {cert.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function AchievementsPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const achievements = useMemo(() => {
    return t.achievements.list.map((cert) => ({
      id: cert.id,
      title: cert.title,
      issuer: cert.issuer,
      date: '-',
      type: (cert.id === 2 ? 'Course' : 'Professional') as 'Course' | 'Internship' | 'Professional' | 'Competition' | 'Workshop',
      category: (cert.id === 1 ? 'General' : cert.id === 2 ? 'Mobile' : 'Web') as 'Mobile' | 'Web' | 'Backend' | 'Cloud' | 'AI/ML' | 'General' | 'Freelance',
    }));
  }, [t]);

  const filteredAchievements = useMemo(() => {
    return achievements.filter((cert) => {
      const matchesSearch = searchQuery === '' ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = typeFilter === 'all' || cert.type === typeFilter;
      const matchesCategory = categoryFilter === 'all' || cert.category === categoryFilter;
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [achievements, searchQuery, typeFilter, categoryFilter]);

  const clearFilters = () => {
    setSearchQuery('');
    setTypeFilter('all');
    setCategoryFilter('all');
  };

  const hasActiveFilters = searchQuery || typeFilter !== 'all' || categoryFilter !== 'all';

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.achievements.title}</h1>
            <p className="text-gray-600">
              {t.achievements.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-8" />

        {/* Search & Filters */}
        <ScrollReveal delay={0.05}>
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.achievements.search}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-gray-500">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">{t.projects.filters}</span>
                </div>

                {/* Type Filter */}
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">{t.achievements.filterByType}</option>
                  <option value="Course">{language === 'id' ? 'Kursus' : 'Course'}</option>
                  <option value="Professional">{language === 'id' ? 'Profesional' : 'Professional'}</option>
                  <option value="Internship">{language === 'id' ? 'Magang' : 'Internship'}</option>
                  <option value="Competition">{language === 'id' ? 'Kompetisi' : 'Competition'}</option>
                  <option value="Workshop">{language === 'id' ? 'Workshop' : 'Workshop'}</option>
                </select>

                {/* Category Filter */}
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">{t.achievements.filterByCategory}</option>
                  <option value="Mobile">{language === 'id' ? 'Seluler' : 'Mobile'}</option>
                  <option value="Web">Web</option>
                  <option value="Backend">Backend</option>
                  <option value="Cloud">Cloud</option>
                  <option value="AI/ML">AI/ML</option>
                  <option value="General">{language === 'id' ? 'Umum' : 'General'}</option>
                  <option value="Freelance">Freelance</option>
                </select>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="px-3 py-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer"
                  >
                    {t.projects.clearAll}
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Total Count */}
          <ScrollReveal delay={0.1}>
            <p className="text-gray-500 mb-6">
              {t.achievements.total}: <span className="font-semibold text-gray-900">{filteredAchievements.length}</span>
            </p>
          </ScrollReveal>

          {/* No Results */}
          {filteredAchievements.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.achievements.noResults}</h3>
              <p className="text-gray-600 mb-4">{t.achievements.tryAdjusting}</p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                {t.projects.clearAllFilters}
              </button>
            </div>
          )}

        {/* Certificates Grid */}
        {filteredAchievements.length > 0 && (
          <StaggerContainer staggerDelay={0.05}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAchievements.map((cert) => (
                <StaggerItem key={cert.id}>
                  <CertificateCard cert={cert} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        )}
      </div>
    </div>
  );
}
