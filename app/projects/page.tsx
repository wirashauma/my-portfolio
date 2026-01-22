'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Menu, X, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { ScrollReveal, StaggerItem } from '../components/ScrollReveal';

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

/**
 * Navigation Component
 */
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-gray-900">wira</span>
          <span className="text-emerald-600">shauma</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['home', 'experience', 'projects', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize font-medium transition ${
                activeSection === item
                  ? 'text-emerald-600 font-bold'
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {['home', 'experience', 'projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 capitalize font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

/**
 * Home Section
 */
function HomeSection() {
  return (
    <section id="home" className="w-full min-h-screen pt-32 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-emerald-50 to-white flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Wira Shauma Ardhana
            </h1>
            <p className="text-xl md:text-2xl text-emerald-600 font-semibold mb-6">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Web & Mobile Developer | Flutter • React Native • Next.js • React
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Experience Section
 */
function ExperienceSection() {
  const education = {
    school: 'Pendidikan Teknik Informatika',
    period: '2023 - 2027',
    description: 'Pursuing Computer Science Education at a leading university.',
  };

  const skills = [
    { category: 'Frontend Web', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Supabase', 'Firebase'] },
    { category: 'Mobile', items: ['Flutter', 'React Native', 'Dart'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Firebase'] },
  ];

  return (
    <section id="experience" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Experience & Skills
          </h2>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-bold text-gray-900">{education.school}</h4>
                <span className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                  {education.period}
                </span>
              </div>
              <p className="text-gray-700">{education.description}</p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, idx) => (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-md"
                  >
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">{skillGroup.category}</h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                          <span className="text-gray-700">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
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
      description: 'A beautiful travel companion app for exploring Sumatran destinations.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Dart'],
      image: '/projects/sumatrans-screenshot.png',
      role: 'Frontend Developer',
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
      role: 'Full Stack Developer',
      highlights: [
        'Real-time tracking',
        'Secure payments',
        'Rating system',
      ],
    },
    {
      id: 3,
      name: 'BukuInduk - Education App',
      description: 'Official student registry application for Bukittingi Education Department.',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      image: '/projects/bukuinduk-screenshot.png',
      role: 'Mobile Frontend Developer',
      highlights: [
        'Student data management',
        'Real-time sync',
        'Offline support',
      ],
    },
  ];

  return (
    <section id="mobile-projects" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Mobile Projects</h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mobileProjects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="p-5">
                  {/* Phone Mockup with Image */}
                  <div className="flex justify-center mb-4">
                    <motion.div whileHover={{ scale: 1.05 }} className="relative w-32">
                      <div className="bg-black rounded-2xl p-1 shadow-lg">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-2xl z-20" />
                        <div className="bg-gray-100 rounded-xl overflow-hidden aspect-9/16">
                          <SafeProjectImage 
                            src={project.image} 
                            alt={project.name}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold mb-2">
                    Mobile
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">{project.name}</h3>
                  <p className="text-xs text-emerald-600 font-semibold mb-2">{project.role}</p>

                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Highlights:</h4>
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
                    href={project.id === 2 ? '/projects/barasiah' : '#'}
                    whileHover={{ x: 2 }}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold text-sm hover:bg-emerald-700 transition"
                  >
                    Learn More <ExternalLink className="w-4 h-4" />
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
 * Website Projects Section
 */
function WebProjectsSection() {
  const webProjects = [
    {
      id: 1,
      name: 'Education Management System',
      description: 'Comprehensive platform for school administration with student management and reporting.',
      technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
      image: '/projects/education-system.png',
      role: 'Full Stack Developer',
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
      role: 'Full Stack Developer',
      highlights: [
        'Product catalog',
        'Secure payments',
        'Order tracking',
      ],
    },
  ];

  return (
    <section id="web-projects" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Web Projects</h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {webProjects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="p-5">
                  {/* Website Screenshot with Image */}
                  <div className="relative rounded-lg overflow-hidden bg-gray-200 h-40 mb-4">
                    <SafeProjectImage 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full"
                    />
                  </div>

                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold mb-2">
                    Web App
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">{project.name}</h3>
                  <p className="text-xs text-emerald-600 font-semibold mb-2">{project.role}</p>

                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Highlights:</h4>
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
                    href="#"
                    whileHover={{ x: 2 }}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold text-sm hover:bg-emerald-700 transition"
                  >
                    Learn More <ExternalLink className="w-4 h-4" />
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
 * Projects Section (Container)
 */
function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Projects
          </h2>
        </ScrollReveal>
      </div>
      <MobileProjectsSection />
      <WebProjectsSection />
    </section>
  );
}

/**
 * About Section
 */
function AboutSection() {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hi! I&apos;m Wira Shauma Ardhana, a passionate full-stack developer pursuing Computer Science Education at university. I specialize in building beautiful and functional web and mobile applications.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With expertise in both frontend and backend technologies, I&apos;ve worked on diverse projects ranging from travel applications to service marketplaces. I&apos;m particularly interested in creating seamless user experiences and scalable architectures.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I&apos;m not coding, I enjoy learning new technologies, contributing to open-source projects, and exploring innovative solutions to real-world problems.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg">▸</span>
                  <div>
                    <p className="font-bold text-gray-900">Name</p>
                    <p className="text-gray-700">Wira Shauma Ardhana</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg">▸</span>
                  <div>
                    <p className="font-bold text-gray-900">Education</p>
                    <p className="text-gray-700">Pendidikan Teknik Informatika (2023-2027)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg">▸</span>
                  <div>
                    <p className="font-bold text-gray-900">Specialization</p>
                    <p className="text-gray-700">Full Stack Web & Mobile Development</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg">▸</span>
                  <div>
                    <p className="font-bold text-gray-900">Expertise</p>
                    <p className="text-gray-700">React, Next.js, Flutter, React Native, Node.js</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/**
 * Contact Section
 */
function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Have a project in mind? Let&apos;s collaborate and create something amazing together!
          </p>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Email</p>
                <a href="mailto:your.email@example.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  your.email@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">LinkedIn</p>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐙</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">GitHub</p>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  github.com/yourprofile
                </a>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full mt-8 px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Send Me an Email
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Main Page
 */
export default function ProjectsPage() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth bg-white">
      <Navigation />
      <HomeSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
