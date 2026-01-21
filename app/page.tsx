'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from './components/ScrollReveal';

/**
 * Navigation Component
 */
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
          <span className="text-gray-900">wira</span>
          <span className="text-emerald-600">shauma</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition">
            Home
          </Link>
          <Link
            href="/experience"
            className="text-gray-700 hover:text-emerald-600 font-medium transition"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 hover:text-emerald-600 font-medium transition"
          >
            Projects
          </Link>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

/**
 * Hero Section Component
 */
function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-40"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-30"
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
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full font-semibold text-sm">
              Welcome to my portfolio
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="up" distance={30}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Mobile Engineer &
            <span className="block text-emerald-600 mt-2">Full-Stack Developer</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up" distance={30}>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building beautiful, performant mobile apps and web experiences with
            <span className="text-emerald-600 font-semibold"> Flutter • React Native • Node.js</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} direction="up" distance={30}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200"
            >
              View My Work <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-200 text-gray-900 rounded-xl font-semibold hover:bg-gray-300 transition-all"
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
              className="p-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-emerald-100 hover:text-emerald-600 transition-all"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-emerald-100 hover:text-emerald-600 transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:wirashauma@gmail.com"
              whileHover={{ y: -5 }}
              className="p-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-emerald-100 hover:text-emerald-600 transition-all"
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
        <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-emerald-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

/**
 * About Section
 */
function AboutSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.1}>
            <motion.div whileHover={{ y: -8 }} className="p-8 rounded-2xl bg-white shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Universitas Negeri Padang</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Software Engineering Student with a passion for building high-performance mobile
                applications and robust backend systems. Specialized in cross-platform development
                and full-stack solutions.
              </p>
              <div className="space-y-2">
                <p className="text-emerald-600 font-semibold">
                  ✓ Mobile Development (Flutter & React Native)
                </p>
                <p className="text-emerald-600 font-semibold">✓ Full-Stack Web Development</p>
                <p className="text-emerald-600 font-semibold">✓ Backend Systems & APIs</p>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 8 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Focus Areas</h4>
                <p className="text-gray-700">
                  Creating delightful digital experiences with clean, maintainable code and
                  performance-first approach.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ x: 8 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Tech Stack</h4>
                <p className="text-gray-700">
                  Dart, Flutter, React Native, Node.js, Next.js, TypeScript, PostgreSQL, Supabase
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/**
 * Featured Projects Preview
 */
function FeaturedProjectsSection() {
  const projects = [
    {
      id: 1,
      name: 'Sumatrans - Travel App',
      description: 'A beautiful travel companion app for exploring Sumatran destinations',
      type: 'Mobile App',
      link: '/projects#mobile',
    },
    {
      id: 2,
      name: 'Barasiah - Service Marketplace',
      description: 'On-demand cleaning service marketplace with real-time tracking',
      type: 'Mobile App',
      link: '/projects#mobile',
    },
    {
      id: 3,
      name: 'Education Management System',
      description: 'Comprehensive platform for school administration and management',
      type: 'Web App',
      link: '/projects#web',
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-700 max-w-2xl">
                Showcasing my best work across mobile and web development
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.a
                  href={project.link}
                  whileHover={{ y: -8 }}
                  className="block p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all group"
                >
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold mb-4">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                    Learn More <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.a>
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
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all mb-8 shadow-lg"
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
                className="p-4 bg-gray-800 text-white rounded-lg hover:bg-emerald-600 transition-all"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="p-4 bg-gray-800 text-white rounded-lg hover:bg-emerald-600 transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <p className="text-gray-500 mt-12 text-sm">
            © 2024 Wira Shauma. All rights reserved. | Built with Next.js, Tailwind CSS & Framer
            Motion
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Main Page Component
 */
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <ContactSection />
    </main>
  );
}
