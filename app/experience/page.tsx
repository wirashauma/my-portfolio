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
  const { t } = useLanguage();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-gray-900">wira</span>
          <span className="text-emerald-600">shauma</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition">
            {t.nav.home}
          </Link>
          <Link
            href="/experience"
            className="text-emerald-600 font-bold transition hover:text-emerald-700"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 hover:text-emerald-600 font-medium transition"
          >
            {t.nav.projects}
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
  
  const experiences = t.experience.experiencesList.map((exp: any) => ({
    ...exp,
    technologies: exp.technologies || (exp.id === 1
      ? ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'TypeScript']
      : ['Flutter', 'React Native', 'Supabase', 'Node.js', 'Dart', 'TypeScript']),
    color: exp.color || (exp.id === 1 ? 'emerald' : exp.id === 3 ? 'indigo' : 'blue'),
  }));

  const colorMap = {
    emerald: {
      border: 'border-emerald-600',
      hoverBorder: 'hover:border-emerald-300',
      dot: 'bg-emerald-600',
      companyText: 'text-emerald-600',
      star: 'text-emerald-600',
      check: 'text-emerald-600',
      badge: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
    },
    blue: {
      border: 'border-blue-600',
      hoverBorder: 'hover:border-blue-300',
      dot: 'bg-blue-600',
      companyText: 'text-blue-600',
      star: 'text-blue-600',
      check: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    },
    indigo: {
      border: 'border-indigo-600',
      hoverBorder: 'hover:border-indigo-300',
      dot: 'bg-indigo-600',
      companyText: 'text-indigo-600',
      star: 'text-indigo-600',
      check: 'text-indigo-600',
      badge: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
    },
  };

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
          {experiences.map((exp) => {
            const colors = colorMap[exp.color as keyof typeof colorMap] || colorMap.emerald;
            return (
              <StaggerItem key={exp.id}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className={`mb-8 relative pl-8 pb-12 border-l-4 ${colors.border} last:border-l-transparent last:pb-0`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-6 top-0 w-5 h-5 ${colors.dot} rounded-full border-4 border-white shadow-lg`} />

                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`bg-gray-50 rounded-2xl p-8 border border-gray-200 ${colors.hoverBorder} hover:shadow-xl transition-all`}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                          <p className={`${colors.companyText} font-semibold text-lg mt-1`}>{exp.company}</p>
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
                        <span className={colors.star}>★</span> {t.experience.keyAchievements}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement: string) => (
                          <motion.div
                            key={achievement}
                            whileHover={{ x: 4 }}
                            className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200"
                          >
                            <span className={`${colors.check} font-bold mt-1`}>✓</span>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">{t.experience.technologies}</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech: string) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className={`px-4 py-2 text-sm font-semibold ${colors.badge} rounded-lg transition`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/**
 * Education Section
 */
function EducationSection() {
  const { t } = useLanguage();
  const education = t.experience.educationList;

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">{t.experience.educationTitle}</h2>
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
  const { t } = useLanguage();
  const skillCategories = t.experience.skillsCategories;

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">{t.experience.skillsTitle}</h2>
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
  const { t } = useLanguage();
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-6">{t.experience.ctaTitle}</h2>
          <p className="text-gray-300 mb-8">
            {t.experience.ctaSubtitle}
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition cursor-pointer"
          >
            {t.experience.ctaButton} <ArrowRight className="w-5 h-5" />
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
