'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Flame,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Zap,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './components/ScrollReveal';

/**
 * Hero Section Component
 */
function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal delay={0} direction="down" distance={50}>
          <div className="mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl">
                <Code2 className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="up" distance={30}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Mobile Engineer &
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              Full-Stack Developer
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up" distance={30}>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building beautiful, performant mobile apps and web experiences with
            <span className="text-blue-400 font-semibold"> Flutter • React Native • Node.js</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} direction="up" distance={30}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              View My Work <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-700/50 border border-slate-600 text-white rounded-xl font-semibold hover:bg-slate-600/50 transition-all"
            >
              Get in Touch
            </motion.a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4} direction="up" distance={30}>
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-3 bg-slate-700/50 text-gray-300 rounded-lg hover:text-white hover:bg-slate-600/50 transition-all"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-3 bg-slate-700/50 text-gray-300 rounded-lg hover:text-white hover:bg-slate-600/50 transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:your@email.com"
              whileHover={{ y: -5 }}
              className="p-3 bg-slate-700/50 text-gray-300 rounded-lg hover:text-white hover:bg-slate-600/50 transition-all"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

/**
 * Biodata Section Component
 */
function BiodataSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Education Card */}
          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/50 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                Universitas Negeri Padang
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Software Engineering Student | Focused on Mobile Development & Backend Systems
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Specialization Card */}
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700/50 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Specialization</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                Mobile & Backend Engineering
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cross-platform development with Flutter & React Native, robust APIs with Node.js
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Focus Card */}
          <ScrollReveal delay={0.3}>
            <motion.div
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/20 border border-pink-200 dark:border-pink-700/50 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-pink-500 rounded-lg">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Focus Areas</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                User Experience & Performance
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Creating delightful digital experiences with clean, maintainable code
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/**
 * Experience Section Component
 */
function ExperienceSection() {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Dinas Pendidikan Bukittinggi',
      period: '2025 - Present',
      description:
        'Developed and maintained a comprehensive education management system using React and Next.js, improving administrative efficiency by 40%.',
      technologies: ['React Native', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      icon: Briefcase,
    },
    {
      title: 'Mobile Engineer',
      company: 'Barasiah App',
      period: '2025 - Present',
      description:
        'Built a feature-rich cleaning service marketplace using Flutter and React Native, handling real-time notifications and payments integration.',
      technologies: ['Flutter', 'Supabase', 'Node.js'],
      icon: Zap,
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            Professional Experience
          </h2>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15}>
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="relative pl-8 pb-12 border-l-2 border-blue-500 last:border-l-transparent last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-4 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800" />

                  <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <IconComponent className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
 * Projects Section with Mobile Phone Mockup Frames
 */
function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: 'Sumatrans - Travel App',
      description: 'A beautiful travel companion app for exploring Sumatran destinations',
      technologies: ['Flutter', 'Firebase', 'Google Maps API'],
      image: '/projects/sumatrans-screenshot.png',
      link: '#',
      category: 'Mobile App',
      isMobileApp: true,
    },
    {
      id: 2,
      name: 'Barasiah - Service Marketplace',
      description: 'On-demand cleaning service marketplace with real-time tracking',
      technologies: ['React Native', 'Supabase', 'Node.js'],
      image: '/projects/barasiah-screenshot.png',
      link: '#',
      category: 'Mobile App',
      isMobileApp: true,
    },
    {
      id: 3,
      name: 'Education Management System',
      description: 'Comprehensive platform for school administration and management',
      technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
      image: '/projects/education-system.png',
      link: '#',
      category: 'Web App',
      isMobileApp: false,
    },
  ];

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Showcasing my best work across mobile and web development
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700"
              >
                <div className="grid md:grid-cols-2 gap-6 p-6 lg:p-8">
                  {/* Mobile Phone Mockup Frame (for mobile apps) */}
                  {project.isMobileApp ? (
                    <div className="flex items-center justify-center">
                      <div className="relative w-full max-w-sm">
                        {/* Phone frame outer */}
                        <div className="bg-black rounded-3xl p-3 shadow-2xl">
                          {/* Phone notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-20" />

                          {/* Phone screen */}
                          <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden aspect-[9/16]">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Phone shadow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl blur-2xl -z-10" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  )}

                  {/* Project Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.name}
                      </h3>

                      <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 text-sm font-semibold bg-slate-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <motion.a
                        href={project.link}
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                      >
                        View Project <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/**
 * Skills Section - Technology Cloud
 */
function SkillsSection() {
  const skills = [
    { name: 'Dart', level: 'Expert', icon: '🎯' },
    { name: 'Flutter', level: 'Expert', icon: '📱' },
    { name: 'React Native', level: 'Advanced', icon: '⚛️' },
    { name: 'Node.js', level: 'Advanced', icon: '⚙️' },
    { name: 'Next.js', level: 'Advanced', icon: '▲' },
    { name: 'React', level: 'Expert', icon: '⚛️' },
    { name: 'TypeScript', level: 'Advanced', icon: '📘' },
    { name: 'PostgreSQL', level: 'Advanced', icon: '🗄️' },
    { name: 'Supabase', level: 'Advanced', icon: '🔐' },
    { name: 'Firebase', level: 'Intermediate', icon: '🔥' },
    { name: 'Tailwind CSS', level: 'Expert', icon: '🎨' },
    { name: 'Git', level: 'Expert', icon: '📦' },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Technical Skills
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16">
            Tools and technologies I work with daily
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.05}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <StaggerItem key={skill.name}>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="p-4 bg-white dark:bg-slate-700 rounded-xl border border-gray-200 dark:border-slate-600 shadow-md hover:shadow-lg transition-all cursor-default text-center"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{skill.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                    {skill.level}
                  </p>
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
 * Contact Section
 */
function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.1}>
          <StaggerItem>
            <motion.a
              href="mailto:wirashauma@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all mb-8"
            >
              <Mail className="w-5 h-5" />
              Send me an Email
            </motion.a>
          </StaggerItem>

          <StaggerItem>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="p-4 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600 transition-all"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="p-4 bg-slate-700/50 text-white rounded-lg hover:bg-slate-600 transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <p className="text-gray-400 mt-12 text-sm">
            © 2024 Your Name. All rights reserved. | Built with Next.js, Tailwind CSS & Framer
            Motion
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Main Page Component
 * Combines all sections with smooth scroll and responsive design
 */
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth">
      <HeroSection />
      <BiodataSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
