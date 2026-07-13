'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Building2,
  Globe,
  Laptop,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

interface Experience {
  id: number;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  period: string;
  duration: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Freelance';
  mode: 'Remote' | 'Onsite' | 'Hybrid';
  description?: string;
  achievements?: string[];
  technologies?: string[];
}

const modeIcons: Record<string, React.ReactNode> = {
  Remote: <Globe className="w-4 h-4" />,
  Onsite: <Building2 className="w-4 h-4" />,
  Hybrid: <Laptop className="w-4 h-4" />,
};

const modeColors: Record<string, string> = {
  Remote: 'bg-blue-100 text-blue-700',
  Onsite: 'bg-emerald-100 text-emerald-700',
  Hybrid: 'bg-purple-100 text-purple-700',
};

const typeColors: Record<string, string> = {
  'Full-time': 'bg-emerald-100 text-emerald-700',
  'Part-time': 'bg-amber-100 text-amber-700',
  Internship: 'bg-blue-100 text-blue-700',
  Freelance: 'bg-purple-100 text-purple-700',
};

function TimelineItem({ exp, index }: { exp: Experience; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
      
      {/* Timeline Dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-md"
      />

      {/* Card */}
      <motion.div
        whileHover={{ x: 4 }}
        className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
            <p className="text-emerald-600 font-semibold">{exp.company}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full ${typeColors[exp.type] || 'bg-gray-100 text-gray-700'}`}>
              {exp.type}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full ${modeColors[exp.mode] || 'bg-gray-100 text-gray-700'}`}>
              {modeIcons[exp.mode]}
              {exp.mode}
            </span>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {exp.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {exp.period}
          </span>
          <span className="text-gray-400">• {exp.duration}</span>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-emerald-600 transition-colors cursor-pointer"
        >
          {isExpanded ? (
            <>
              {t.about.hideDetails} <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              {t.about.showDetails} <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-100 mt-4">
                {/* Description */}
                {exp.description && (
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                )}

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-emerald-600">★</span> {t.about.keyAchievements}
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t.about.technologies}</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  const experiences = t.about.experiencesList.map((exp) => ({
    ...exp,
    type: exp.type as Experience['type'],
    mode: exp.mode as Experience['mode'],
    technologies: exp.technologies || ['Next.js', 'TypeScript', 'Flutter', 'Kotlin', 'Node.js', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
  }));
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.about.title}</h1>
            <p className="text-gray-600">{t.about.subtitle}</p>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-8" />

        {/* Bio Section */}
        <ScrollReveal delay={0.1}>
          <div className="prose prose-gray max-w-none mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-semibold">
              {t.about.greeting}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {t.about.intro}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {t.about.expertise}
            </p>

            {/* What I Bring to the Table */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.about.whatIBring}</h3>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <span className="font-semibold text-emerald-600">{t.about.mobileDev}</span> {t.about.mobileDevDesc}
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <span className="font-semibold text-emerald-600">{t.about.webDev}</span> {t.about.webDevDesc}
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              <span className="font-semibold text-emerald-600">{t.about.backendDev}</span> {t.about.backendDevDesc}
            </p>

            {/* Signature */}
            <div className="flex flex-col items-start">
              <p className="text-gray-600 mb-2">{t.about.bestRegards}</p>
              <span className="font-signature text-4xl text-emerald-600 italic font-bold">
                Wira Shauma Ardhana
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-8" />

        {/* Career Section */}
        <ScrollReveal delay={0.2}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-gray-700" />
              <h2 className="text-2xl font-bold text-gray-900">{t.about.career}</h2>
            </div>
            <p className="text-gray-600 mb-8">{t.about.careerSubtitle}</p>

            {/* Timeline */}
            <div className="relative">
              {experiences.map((exp, index) => (
                <TimelineItem key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
