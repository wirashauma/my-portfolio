'use client';

import { motion } from 'framer-motion';
import { Image as ImageIcon, Code2, Smartphone, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from './components/ScrollReveal';

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

// Skills data with icons
const skills = [
  { name: 'HTML5', icon: '🌐', color: 'bg-orange-100' },
  { name: 'CSS3', icon: '🎨', color: 'bg-blue-100' },
  { name: 'Bootstrap', icon: '📦', color: 'bg-purple-100' },
  { name: 'Tailwind', icon: '🌊', color: 'bg-cyan-100' },
  { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-100' },
  { name: 'TypeScript', icon: '📘', color: 'bg-blue-100' },
  { name: 'React', icon: '⚛️', color: 'bg-cyan-100' },
  { name: 'Vue.js', icon: '💚', color: 'bg-emerald-100' },
  { name: 'NuxtJS', icon: '🟢', color: 'bg-green-100' },
  { name: 'Next.js', icon: '▲', color: 'bg-gray-100' },
  { name: 'Framer', icon: '🎭', color: 'bg-pink-100' },
  { name: 'Figma', icon: '🎨', color: 'bg-purple-100' },
  { name: 'Redux', icon: '📊', color: 'bg-violet-100' },
  { name: 'Prisma', icon: '🔺', color: 'bg-indigo-100' },
  { name: 'Supabase', icon: '⚡', color: 'bg-emerald-100' },
  { name: 'Firebase', icon: '🔥', color: 'bg-amber-100' },
  { name: 'Vercel', icon: '▲', color: 'bg-gray-100' },
  { name: 'Node.js', icon: '🟢', color: 'bg-green-100' },
  { name: 'Express', icon: '🚀', color: 'bg-gray-100' },
  { name: 'Go', icon: '🐹', color: 'bg-cyan-100' },
  { name: 'PHP', icon: '🐘', color: 'bg-indigo-100' },
  { name: 'Laravel', icon: '🔴', color: 'bg-red-100' },
  { name: 'Kotlin', icon: '📱', color: 'bg-purple-100' },
  { name: 'Flutter', icon: '💙', color: 'bg-blue-100' },
  { name: 'React Native', icon: '⚛️', color: 'bg-cyan-100' },
  { name: 'MySQL', icon: '🐬', color: 'bg-blue-100' },
  { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-100' },
  { name: 'MongoDB', icon: '🍃', color: 'bg-green-100' },
  { name: 'Redis', icon: '🔴', color: 'bg-red-100' },
  { name: 'Docker', icon: '🐳', color: 'bg-blue-100' },
  { name: 'Git', icon: '📝', color: 'bg-orange-100' },
  { name: 'GitHub', icon: '🐙', color: 'bg-gray-100' },
];

/**
 * Hero Section
 */
function HeroSection() {
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
              Hi, I&apos;m Wira Shauma
            </h1>
            
            {/* Location & Status */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                Based in Padang, Indonesia 🇮🇩
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                Onsite
              </span>
            </div>

            {/* Bio */}
            <p className="text-lg text-gray-700 mb-4 leading-relaxed max-w-3xl">
              Software Engineer and coding content creator dedicated to building impactful digital solutions. I specialize in developing scalable web platforms and mobile applications using a modern tech stack, primarily Next.js, TypeScript, and Native Android (Kotlin).
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl">
              My focus is on crafting software architecture that is well-structured, maintainable, and aligned with business goals. I combine technical expertise with proactive communication and leadership to ensure every project delivers logical clarity and a meaningful real-world impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get In Touch
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
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <Code2 className="w-5 h-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          </div>
          <p className="text-gray-600 mb-8">My professional skills.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`w-12 h-12 rounded-full ${skill.color} flex items-center justify-center text-xl cursor-pointer shadow-sm hover:shadow-md transition-all`}
                title={skill.name}
              >
                {skill.icon}
              </motion.div>
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
                <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
              </div>
              <p className="text-gray-600">A showcase of my recent work.</p>
            </div>
            <Link
              href="/projects"
              className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 transition-colors"
            >
              View all
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
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs"
                          title={tech}
                        >
                          {tech === 'TypeScript' && '📘'}
                          {tech === 'Tailwind' && '🌊'}
                          {tech === 'React' && '⚛️'}
                          {tech === 'Next.js' && '▲'}
                          {tech === 'Supabase' && '⚡'}
                          {tech === 'Kotlin' && '📱'}
                          {tech === 'Android' && '🤖'}
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
