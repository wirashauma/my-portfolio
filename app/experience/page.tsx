'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Navigation Component
 */
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-gray-900">wira</span>
          <span className="text-emerald-600">shauma</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition">
            Home
          </Link>
          <Link
            href="/experience"
            className="text-emerald-600 font-bold transition hover:text-emerald-700"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 hover:text-emerald-600 font-medium transition"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

/**
 * Experience Section
 */
function ExperienceSection() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Dinas Pendidikan Bukittinggi',
      period: '2025 - Present',
      location: 'Bukittinggi, Indonesia',
      description:
        'Developed and maintained a comprehensive education management system serving multiple schools. Implemented responsive interfaces with React and Next.js, improving administrative efficiency by 40%. Collaborated with backend team to integrate complex features including student information management, grade tracking, and parent communication portals.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'TypeScript'],
      achievements: [
        'Reduced page load time by 35% through optimization',
        'Implemented responsive design supporting 10,000+ daily active users',
        'Led UI/UX improvements increasing user satisfaction by 45%',
        'Mentored 2 junior developers',
      ],
      color: 'emerald',
    },
    {
      id: 2,
      title: 'Mobile Engineer',
      company: 'Barasiah App',
      period: '2025 - Present',
      location: 'Remote',
      description:
        'Built a feature-rich cleaning service marketplace platform connecting service providers with customers. Developed mobile applications using Flutter and React Native with real-time notifications, secure payment processing, and service tracking capabilities.',
      technologies: ['Flutter', 'React Native', 'Supabase', 'Node.js', 'Dart', 'TypeScript'],
      achievements: [
        'Achieved 4.8/5 app store rating',
        'Implemented real-time tracking with 500+ concurrent users',
        'Integrated Stripe payment processing',
        'Built cross-platform solution reducing development time by 40%',
      ],
      color: 'blue',
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white pt-32">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">{t.experience.title}</h1>
          <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto text-lg">
            {t.experience.subtitle}
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.25}>
          {experiences.map((exp) => (
            <StaggerItem key={exp.id}>
              <motion.div
                whileHover={{ x: 8 }}
                className="mb-8 relative pl-8 pb-12 border-l-4 border-emerald-600 last:border-l-transparent last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-6 top-0 w-5 h-5 bg-emerald-600 rounded-full border-4 border-white shadow-lg" />

                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-emerald-600 font-semibold text-lg mt-1">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span>📅 {exp.period}</span>
                      <span>📍 {exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-emerald-600">★</span> {t.experience.keyAchievements}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement) => (
                        <motion.div
                          key={achievement}
                          whileHover={{ x: 4 }}
                          className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200"
                        >
                          <span className="text-emerald-600 font-bold mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">{t.experience.technologies}</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 text-sm font-semibold bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/**
 * Education Section
 */
function EducationSection() {
  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      school: 'Universitas Negeri Padang',
      year: '2021 - Present',
      focus: 'Focus on Mobile Development & Backend Systems',
      details:
        'Specialized in building scalable mobile and web applications with emphasis on user experience and performance optimization.',
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Education</h2>
        </ScrollReveal>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-emerald-600 font-semibold text-lg mt-1">{edu.school}</p>
                  <p className="text-gray-600 mt-2">📅 {edu.year}</p>
                </div>

                <div className="mb-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-emerald-700 font-semibold flex items-center gap-2">
                    <span>📚</span> {edu.focus}
                  </p>
                </div>

                <p className="text-gray-700">{edu.details}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Skills Summary Section
 */
function SkillsSummarySection() {
  const skillCategories = [
    {
      category: 'Mobile Development',
      skills: ['Flutter', 'React Native', 'Dart', 'iOS/Android Development'],
    },
    {
      category: 'Web Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'PostgreSQL', 'API Design', 'Database Optimization'],
    },
    {
      category: 'Tools & Services',
      skills: ['Git', 'Supabase', 'Firebase', 'Stripe Integration'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Technical Skills</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-600 rounded-full" />
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 text-gray-700 rounded-full hover:border-emerald-600 hover:text-emerald-600 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * CTA Section
 */
function CTASection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-6">Interested in Working Together?</h2>
          <p className="text-gray-300 mb-8">
            Let&apos;s discuss how I can help bring your project to life
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Main Experience Page
 */
export default function ExperiencePage() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth bg-white">
      <Navigation />
      <ExperienceSection />
      <EducationSection />
      <SkillsSummarySection />
      <CTASection />
    </main>
  );
}
