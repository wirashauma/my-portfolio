'use client';

import { motion } from 'framer-motion';
import { Image as ImageIcon, Code2, Smartphone, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from './components/ScrollReveal';
import { useLanguage } from './contexts/LanguageContext';

/**
 * Safe Image Component with Fallback
 */
function SafeImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (imageError || !src) {
    return (
      <div className={`${className} bg-linear-to-br from-emerald-50 to-emerald-100 flex items-center justify-center`}>
        <ImageIcon className="w-12 h-12 text-emerald-300" />
      </div>
    );
  }

  return (
    <div className={`${className} relative bg-gray-100`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      {!imageLoaded && (
        <div className="absolute inset-0 bg-linear-to-br from-emerald-50 to-emerald-100 animate-pulse" />
      )}
    </div>
  );
}

// Skills data - text only
const skills = [
  { name: 'Flutter', color: 'bg-blue-50 text-blue-700' },
  { name: 'Dart', color: 'bg-sky-50 text-sky-700' },
  { name: 'React Native', color: 'bg-cyan-50 text-cyan-700' },
  { name: 'Supabase', color: 'bg-emerald-50 text-emerald-700' },
  { name: 'Firebase', color: 'bg-amber-50 text-amber-700' },
  { name: 'PostgreSQL', color: 'bg-blue-50 text-blue-700' },
  { name: 'Node.js', color: 'bg-green-50 text-green-700' },
  { name: 'Next.js', color: 'bg-gray-100 text-gray-700' },
  { name: 'TypeScript', color: 'bg-blue-50 text-blue-700' },
  { name: 'Tailwind CSS', color: 'bg-cyan-50 text-cyan-700' },
  { name: 'React.js', color: 'bg-cyan-50 text-cyan-700' },
];

/**
 * Hero Section
 */
function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-emerald-50/30 to-white flex items-center py-20">
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t.home.greeting}
            </h1>
            
            {/* Location & Status */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                {t.home.location} 🇮🇩
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                {t.home.status}
              </span>
            </div>

            {/* Bio */}
            <p className="text-lg text-gray-700 mb-4 leading-relaxed max-w-3xl">
              {t.home.bio1}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl">
              {t.home.bio2}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  {t.home.viewWork}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  {t.home.getInTouch}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Skills Section
 */
function SkillsSection() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <Code2 className="w-5 h-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">{t.home.skills}</h2>
          </div>
          <p className="text-gray-600 mb-8">{t.home.skillsSubtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -1 }}
                className={`px-3 py-1.5 rounded-lg ${skill.color} text-sm font-medium cursor-pointer shadow-sm hover:shadow-md transition-all`}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Featured Projects Preview
 */
function FeaturedProjectsSection() {
  const { t } = useLanguage();
  
  const featuredProjects = [
    {
      id: 1,
      name: 'Personal Portfolio',
      description: 'Personal website & portfolio, built from scratch using Next.js, TypeScript, Tailwind...',
      technologies: ['TypeScript', 'Tailwind', 'React', 'Next.js', 'Supabase'],
      image: '/projects/portfolio.png',
      featured: true,
      type: 'web',
    },
    {
      id: 2,
      name: 'Barasiah',
      description: 'On-demand cleaning service marketplace with real-time tracking and secure payments.',
      technologies: ['Kotlin', 'Android'],
      image: '/projects/barasiah.png',
      featured: true,
      type: 'mobile',
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="w-5 h-5 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">{t.home.featuredProjects}</h2>
              </div>
              <p className="text-gray-600">{t.home.featuredSubtitle}</p>
            </div>
            <Link
              href="/projects"
              className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 transition-colors"
            >
              {t.home.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-200"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-linear-to-br from-emerald-100 to-cyan-100">
                    <SafeImage
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full"
                    />
                    {project.featured && (
                      <span className="absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-md flex items-center gap-1">
                        📌 Featured
                      </span>
                    )}
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center"
                    >
                      <Link
                        href="/projects"
                        className="flex items-center gap-2 text-white font-medium hover:underline"
                      >
                        View Project <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-emerald-600 mb-2">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

/**
 * Quick Stats Section
 */
function QuickStatsSection() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Certificates Earned', value: '56+' },
    { label: 'GitHub Contributions', value: '599+' },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center p-6 bg-linear-to-br from-emerald-50 to-white rounded-xl border border-emerald-100"
                >
                  <p className="text-3xl font-bold text-emerald-600 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

/**
 * Main Home Page Component
 */
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth bg-white">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <QuickStatsSection />
    </main>
  );
}
