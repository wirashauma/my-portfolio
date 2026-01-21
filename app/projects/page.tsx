'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggerItem } from '../components/ScrollReveal';

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
            className="text-gray-700 hover:text-emerald-600 font-medium transition"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="text-emerald-600 font-bold transition hover:text-emerald-700"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

/**
 * Mobile Projects Section (Vertical Layout)
 */
function MobileProjectsSection() {
  const mobileProjects = [
    {
      id: 1,
      name: 'Sumatrans - Travel App',
      description: 'A beautiful travel companion app for exploring Sumatran destinations.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Dart'],
      image: '/projects/sumatrans-screenshot.png',
      link: '/projects/sumatrans',
      highlights: [
        'Real-time recommendations',
        'Offline maps',
        'Itinerary planning',
      ],
    },
    {
      id: 2,
      name: 'Barasiah - Service Marketplace',
      description: 'On-demand cleaning service marketplace with real-time tracking.',
      technologies: ['React Native', 'Supabase', 'Node.js'],
      image: '/projects/barasiah-screenshot.png',
      link: '/projects/barasiah',
      highlights: [
        'Real-time tracking',
        'Secure payments',
        'Rating system',
      ],
    },
  ];

  return (
    <section id="mobile" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white pt-32">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Mobile Projects
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Cross-platform mobile applications
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {mobileProjects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="p-5">
                  {/* Phone Mockup - Compact */}
                  <div className="flex justify-center mb-4">
                    <motion.div whileHover={{ scale: 1.05 }} className="relative w-32">
                      <div className="bg-black rounded-2xl p-1 shadow-lg">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-2xl z-20" />
                        <div className="bg-gray-100 rounded-xl overflow-hidden aspect-9/16">
                          <div className="w-full h-full bg-linear-to-br from-emerald-50 to-emerald-100" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold mb-2">
                    Mobile
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.name}</h3>

                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold text-xs mt-0.5">✓</span>
                          <span className="text-gray-700 text-xs">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded hover:bg-emerald-100 hover:text-emerald-700 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.id === 2 ? '/projects/barasiah' : project.link}
                    whileHover={{ x: 2 }}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold text-sm hover:bg-emerald-700 transition"
                  >
                    View <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Website Projects Section (Horizontal Layout)
 */
function WebProjectsSection() {
  const webProjects = [
    {
      id: 1,
      name: 'Education Management System',
      description: 'Comprehensive platform for school administration with student management and reporting.',
      technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
      image: '/projects/education-system.png',
      link: '#',
      highlights: [
        'Student management',
        'Grade reporting',
        'Attendance tracking',
      ],
    },
    {
      id: 2,
      name: 'E-Commerce Platform',
      description: 'Full-featured online store with product management and secure checkout.',
      technologies: ['React', 'Stripe', 'Firebase', 'TypeScript'],
      image: '/projects/ecommerce-platform.png',
      link: '#',
      highlights: [
        'Product catalog',
        'Secure payments',
        'Order tracking',
      ],
    },
  ];

  return (
    <section id="web" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Website Projects
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Full-stack web applications with modern architecture
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {webProjects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="p-5">
                  {/* Website Screenshot - Horizontal */}
                  <div className="relative rounded-lg overflow-hidden bg-gray-200 h-40 mb-4">
                    <div className="w-full h-full bg-linear-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
                      <p className="text-gray-600 font-semibold text-center px-4 text-sm">
                        {project.name}
                      </p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold mb-2">
                    Web App
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.name}</h3>

                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold text-xs mt-0.5">✓</span>
                          <span className="text-gray-700 text-xs">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded hover:bg-emerald-100 hover:text-emerald-700 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    whileHover={{ x: 2 }}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold text-sm hover:bg-emerald-700 transition"
                  >
                    View <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Main Projects Page
 */
export default function ProjectsPage() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth bg-white">
      <Navigation />
      <MobileProjectsSection />
      <WebProjectsSection />
    </main>
  );
}
