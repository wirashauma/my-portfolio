'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Image as ImageIcon, Github, ArrowRight, Search, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Safe Image Component with Fallback
 */
function SafeProjectImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
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
    <div className={`${className} relative bg-(--card-bg)`}>
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

type Platform = 'Mobile' | 'Web';
type Origin = 'Client' | 'Personal';
type Role = 'Frontend' | 'Backend' | 'Full Stack';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  platform: Platform;
  origin: Origin;
  role: Role;
  /** Optional start date of the project (ISO string) */
  startDate?: string;
  /** Optional end / completion date of the project (ISO string) */
  endDate?: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  // Client Projects (Howarts Studio)
  {
    id: 1,
    name: 'Barasiah App',
    description: 'On-demand cleaning service marketplace connecting customers with professional cleaners. Features real-time booking, tracking, and secure payments.',
    technologies: ['Flutter', 'Node.js', 'Supabase', 'PostgreSQL'],
    image: '/projects/barasiah.png',
    platform: 'Mobile',
    origin: 'Client',
    role: 'Full Stack',
    startDate: '2025-12-13',
    endDate: '2026-01-25',
    link: '/projects/barasiah',
  },
  {
    id: 2,
    name: 'Sumatrans App',
    description: 'Integrated transportation management system for bus operators in Sumatera. Handles ticketing, scheduling, and fleet management.',
    technologies: ['Flutter', 'Kotlin', 'Node.js', 'PostgreSQL'],
    image: '/projects/sumatrans.png',
    platform: 'Mobile',
    origin: 'Client',
    role: 'Full Stack',
    startDate: '2025-12-18',
    endDate: '2025-12-19',
  },
  {
    id: 3,
    name: 'BukuInduk App',
    description: 'Comprehensive school record management system for Dinas Pendidikan Bukittinggi. Manages student data, grades, and administrative records.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    image: '/projects/bukuinduk.png',
    platform: 'Web',
    origin: 'Client',
    role: 'Frontend',
    startDate: '2026-01-02',
    endDate: '2026-01-27',
  },
  // Personal Projects
  {
    id: 4,
    name: 'Personal Portfolio',
    description: 'Modern personal website & portfolio built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, i18n, and GitHub integration.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/portfolio.png',
    platform: 'Web',
    origin: 'Personal',
    role: 'Full Stack',
    endDate: '2024-12-01',
    link: 'https://wirashauma.dev',
    github: 'https://github.com/wirashauma/my-portfolio',
  },
  {
    id: 5,
    name: 'IceBot Platform',
    description:
      'Full-stack project-based learning platform for campus with dashboard mahasiswa & dosen, SQL lab, AI feedback, dan manajemen project end-to-end.',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Prisma', 'PostgreSQL', 'Socket.IO'],
    image: '/projects/icebot.png',
    platform: 'Web',
    origin: 'Client',
    role: 'Backend',
    startDate: '2026-01-20',
    endDate: '2026-03-15',
    link: '/projects/icebot',
  },
  {
    id: 6,
    name: 'PetaWaktu',
    description:
      'Gamified timeline & quiz app untuk belajar sejarah. Menggabungkan kuis interaktif, leaderboard, dan peta waktu dengan role guru, siswa, dan admin.',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Auth',
      'Cloud Firestore',
      'Groq API',
      'Cloudinary',
    ],
    image: '/projects/petawaktu.png',
    platform: 'Mobile',
    origin: 'Personal',
    role: 'Full Stack',
    startDate: '2025-11-24',
    endDate: '2026-12-23',
    link: '/projects/petawaktu',
  },
  {
    id: 7,
    name: 'ChatApp',
    description:
      'Simple real-time chat app dengan alur auth lengkap (OTP, setup profil) dan percakapan 1-1 berbasis Firebase Auth & Firestore.',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Auth',
      'Cloud Firestore',
      'Cloudinary',
      'image_picker',
    ],
    image: '/projects/chatapp.png',
    platform: 'Mobile',
    origin: 'Personal',
    role: 'Full Stack',
    startDate: '2025-11-11',
    endDate: '2025-12-14',
    link: '/projects/chatapp',
  },
];

// Filter badge colors
const platformColors: Record<Platform, string> = {
  Mobile: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Web: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
};

const originColors: Record<Origin, string> = {
  Client: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Personal: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
};

const roleColors: Record<Role, string> = {
  Frontend: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  Backend: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
  'Full Stack': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
};

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  const formatDate = (value: string) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString(undefined, {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const renderDateRange = () => {
    if (!project.startDate && !project.endDate) return null;
    if (project.startDate && project.endDate) {
      if (project.startDate === project.endDate) {
        return formatDate(project.startDate);
      }
      return `${formatDate(project.startDate)} – ${formatDate(project.endDate)} `;
    }
    return formatDate(project.startDate ?? project.endDate!);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-(--card-bg) rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-(--card-border) h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 bg-linear-to-br from-emerald-100 to-cyan-100 overflow-hidden">
        <SafeProjectImage
          src={project.image}
          alt={project.name}
          className="w-full h-full"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${platformColors[project.platform]}`}>
            {project.platform}
          </span>
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${originColors[project.origin]}`}>
            {project.origin}
          </span>
        </div>
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
        >
          {project.link && (
            <Link
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : undefined}
              className="flex items-center gap-2 text-white font-medium hover:underline px-4 py-2 bg-white/20 rounded-lg"
            >
              {t.projects.view} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-emerald-600">{project.name}</h3>
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${roleColors[project.role]}`}>
            {project.role}
          </span>
        </div>
        {renderDateRange() && (
          <p className="text-xs text-(--text-muted) mb-1">{renderDateRange()}</p>
        )}
        <p className="text-(--text-secondary) text-sm mb-4 flex-1 line-clamp-3">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md bg-(--hover-bg) text-xs font-medium text-(--text-secondary)"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {project.link && (
            <Link
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : undefined}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium text-sm hover:bg-emerald-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {t.projects.view}
            </Link>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-(--card-border) text-(--text-secondary) rounded-lg font-medium text-sm hover:bg-(--hover-bg) transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [platformFilter, setPlatformFilter] = useState<Platform | 'all'>('all');
  const [originFilter, setOriginFilter] = useState<Origin | 'all'>('all');
  const [roleFilter, setRoleFilter] = useState<Role | 'all'>('all');

  const filteredProjects = useMemo(() => {
    const result = projects.filter((project) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      // Platform filter
      const matchesPlatform = platformFilter === 'all' || project.platform === platformFilter;

      // Origin filter
      const matchesOrigin = originFilter === 'all' || project.origin === originFilter;

      // Role filter
      const matchesRole = roleFilter === 'all' || project.role === roleFilter;

      return matchesSearch && matchesPlatform && matchesOrigin && matchesRole;
    });

    // Sort by end date (or start date) descending – newest projects first
    return result.sort((a, b) => {
      const aTime = new Date(b.endDate ?? b.startDate ?? 0).getTime();
      const bTime = new Date(a.endDate ?? a.startDate ?? 0).getTime();
      return aTime - bTime;
    });
  }, [searchQuery, platformFilter, originFilter, roleFilter]);

  const clearFilters = () => {
    setSearchQuery('');
    setPlatformFilter('all');
    setOriginFilter('all');
    setRoleFilter('all');
  };

  const hasActiveFilters = searchQuery || platformFilter !== 'all' || originFilter !== 'all' || roleFilter !== 'all';

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-(--text-primary) mb-2">{t.projects.title}</h1>
            <p className="text-(--text-secondary)">{t.projects.subtitle}</p>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-dashed border-(--card-border) my-8" />

        {/* Search & Filters */}
        <ScrollReveal delay={0.05}>
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--text-muted)" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.projects.search}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-(--card-border) bg-(--card-bg) text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-(--text-muted)">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">{t.projects.filters}</span>
              </div>

              {/* Platform Filter */}
              <select
                value={platformFilter}
                onChange={(e) => setPlatformFilter(e.target.value as Platform | 'all')}
                className="px-3 py-2 rounded-lg border border-(--card-border) bg-(--card-bg) text-(--text-primary) text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">{t.projects.filterPlatform}</option>
                <option value="Mobile">{t.projects.mobile}</option>
                <option value="Web">{t.projects.web}</option>
              </select>

              {/* Origin Filter */}
              <select
                value={originFilter}
                onChange={(e) => setOriginFilter(e.target.value as Origin | 'all')}
                className="px-3 py-2 rounded-lg border border-(--card-border) bg-(--card-bg) text-(--text-primary) text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">{t.projects.filterOrigin}</option>
                <option value="Client">{t.projects.client}</option>
                <option value="Personal">{t.projects.personal}</option>
              </select>

              {/* Role Filter */}
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value as Role | 'all')}
                className="px-3 py-2 rounded-lg border border-(--card-border) bg-(--card-bg) text-(--text-primary) text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">{t.projects.filterRole}</option>
                <option value="Frontend">{t.projects.frontend}</option>
                <option value="Backend">{t.projects.backend}</option>
                <option value="Full Stack">{t.projects.fullStack}</option>
              </select>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-3 py-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  {t.projects.clearAll}
                </button>
              )}
            </div>

            {/* Results Count */}
            <p className="text-sm text-(--text-muted)">
              {t.projects.showing} {filteredProjects.length} {t.projects.of} {projects.length} {t.projects.projectsLabel}
            </p>
          </div>
        </ScrollReveal>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-(--hover-bg) flex items-center justify-center">
              <Search className="w-8 h-8 text-(--text-muted)" />
            </div>
            <h3 className="text-lg font-semibold text-(--text-primary) mb-2">{t.projects.noResults}</h3>
            <p className="text-(--text-secondary) mb-4">{t.projects.tryAdjusting}</p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              {t.projects.clearAllFilters}
            </button>
          </div>
        )}

        {/* All Projects */}
        {filteredProjects.length > 0 && (
          <>
            <ScrollReveal delay={0.2}>
              <h2 className="text-lg font-semibold text-(--text-primary) mb-6">{t.projects.allProjects}</h2>
            </ScrollReveal>

            <StaggerContainer staggerDelay={0.08}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </>
        )}
      </div>
    </div>
  );
}
