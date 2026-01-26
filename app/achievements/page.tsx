'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, Building2 } from 'lucide-react';
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

// Dummy achievements data - 3 empty cards
const achievements: Certificate[] = [
  { 
    id: 1, 
    title: 'Coming Soon', 
    issuer: 'To be announced', 
    date: '-', 
    type: 'Professional', 
    category: 'General',
  },
  { 
    id: 2, 
    title: 'Coming Soon', 
    issuer: 'To be announced', 
    date: '-', 
    type: 'Course', 
    category: 'Mobile',
  },
  { 
    id: 3, 
    title: 'Coming Soon', 
    issuer: 'To be announced', 
    date: '-', 
    type: 'Professional', 
    category: 'Web',
  },
];

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
  const { t } = useLanguage();

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

        {/* Total Count */}
        <ScrollReveal delay={0.1}>
          <p className="text-gray-500 mb-6">
            {t.achievements.total}: <span className="font-semibold text-gray-900">{achievements.length}</span>
          </p>
        </ScrollReveal>

        {/* Certificates Grid */}
        <StaggerContainer staggerDelay={0.05}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((cert) => (
              <StaggerItem key={cert.id}>
                <CertificateCard cert={cert} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </div>
  );
}
