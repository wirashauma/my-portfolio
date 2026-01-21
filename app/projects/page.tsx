'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

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
            className="text-gray-700 hover:text-emerald-600 font-medium transition font-bold text-emerald-600"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

/**
 * Mobile Projects Section
 */
function MobileProjectsSection() {
  const mobileProjects = [
    {
      id: 1,
      name: 'Sumatrans - Travel App',
      description:
        'A beautiful travel companion app for exploring Sumatran destinations with real-time recommendations, offline maps, and personalized itinerary planning.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Dart'],
      image: '/projects/sumatrans-screenshot.png',
      link: '#',
      highlights: [
        'Real-time destination recommendations',
        'Offline map support',
        'Personalized itinerary planning',
        'Community reviews integration',
      ],
    },
    {
      id: 2,
      name: 'Barasiah - Service Marketplace',
      description:
        'On-demand cleaning service marketplace with real-time tracking, secure payments, and customer satisfaction ratings.',
      technologies: ['React Native', 'Supabase', 'Node.js', 'TypeScript'],
      image: '/projects/barasiah-screenshot.png',
      link: '#',
      highlights: [
        'Real-time service tracking',
        'Secure payment integration',
        'Customer satisfaction ratings',
        'Service provider scheduling',
      ],
    },
  ];

  return (
    <section id="mobile" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white pt-32">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Mobile Projects
          </h2>
          <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto text-lg">
            Cross-platform mobile applications built with Flutter and React Native
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.2}>
          {mobileProjects.map((project, index) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -8 }}
                className="mb-12 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="grid md:grid-cols-2 gap-8 p-6 lg:p-10">
                  {/* Mobile Phone Mockup */}
                  <div className="flex items-center justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} className="relative w-full max-w-sm">
                      {/* Phone frame */}
                      <div className="bg-black rounded-3xl p-3 shadow-2xl">
                        {/* Phone notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-20" />
                        {/* Phone screen */}
                        <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[9/16]">
                          <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                            <p className="text-gray-600 font-semibold text-center px-4">
                              {project.name}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Phone shadow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-3xl blur-2xl -z-10" />
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                        Mobile App
                      </span>

                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h3>

                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-3">
                              <span className="text-emerald-600 font-bold mt-1">✓</span>
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 text-sm font-semibold bg-gray-100 text-gray-800 rounded-lg hover:bg-emerald-100 hover:text-emerald-700 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <motion.a
                          href={project.link}
                          whileHover={{ x: 4 }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
                        >
                          View Project <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
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
 * Website Projects Section
 */
function WebProjectsSection() {
  const webProjects = [
    {
      id: 1,
      name: 'Education Management System',
      description:
        'Comprehensive platform for school administration and management. Features student information system, grade management, attendance tracking, and parent communication portal.',
      technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Node.js', 'React'],
      image: '/projects/education-system.png',
      link: '#',
      highlights: [
        'Student information system',
        'Grade management and reporting',
        'Attendance tracking',
        'Parent communication portal',
        'Admin dashboard',
      ],
    },
  ];

  return (
    <section id="web" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Website Projects
          </h2>
          <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto text-lg">
            Full-stack web applications with modern architecture and scalable design
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.2}>
          {webProjects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -8 }}
                className="mb-12 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="grid md:grid-cols-2 gap-8 p-6 lg:p-10">
                  {/* Website Screenshot */}
                  <div className="relative rounded-xl overflow-hidden bg-gray-200 h-96">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
                      <p className="text-gray-600 font-semibold text-center px-4">
                        Website Screenshot Placeholder
                      </p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                        Web App
                      </span>

                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h3>

                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-3">
                              <span className="text-emerald-600 font-bold mt-1">✓</span>
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 text-sm font-semibold bg-gray-100 text-gray-800 rounded-lg hover:bg-emerald-100 hover:text-emerald-700 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <motion.a
                          href={project.link}
                          whileHover={{ x: 4 }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
                        >
                          View Project <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
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
