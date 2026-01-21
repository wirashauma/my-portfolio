'use client';

import { motion } from 'framer-motion';
import { Check, Package, Shield, Zap, MapPin, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal, StaggerItem } from '../../components/ScrollReveal';

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
            href="/projects"
            className="text-gray-700 hover:text-emerald-600 font-medium transition"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="text-gray-700 hover:text-emerald-600 font-medium transition"
          >
            Experience
          </Link>
        </div>
      </div>
    </nav>
  );
}

/**
 * Hero Section
 */
function HeroSection() {
  return (
    <section className="w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Mobile App Case Study
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Barasiah
            </h1>
            <p className="text-2xl text-gray-700 mb-6">
              On-Demand Cleaning Service Marketplace
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive mobile application connecting customers with professional cleaning service providers. Built with Flutter for cross-platform delivery with real-time tracking, secure payments, and role-based features.
            </p>
          </div>
        </ScrollReveal>

        {/* Phone Mockup */}
        <ScrollReveal>
          <div className="flex justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} className="relative w-48">
              <div className="bg-linear-to-b from-gray-900 to-black rounded-3xl p-2 shadow-2xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-3xl z-20" />
                <div className="bg-white rounded-2xl overflow-hidden aspect-9/16">
                  <div className="w-full h-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">B</div>
                      <div className="text-sm text-white font-semibold">Barasiah</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Key Stats */}
        <ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Role', value: 'Lead Developer' },
              { label: 'Platform', value: 'Flutter' },
              { label: 'Status', value: 'In Progress' },
              { label: 'Year', value: '2024' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-white rounded-lg p-4 border border-gray-200 text-center"
              >
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Tech Stack Section
 */
function TechStackSection() {
  const categories = [
    {
      name: 'Core Framework',
      icon: Package,
      items: ['Flutter', 'Dart'],
    },
    {
      name: 'State Management',
      icon: Zap,
      items: ['Provider', 'GoRouter'],
    },
    {
      name: 'Network & API',
      icon: Package,
      items: ['Dio', 'Connectivity Plus'],
    },
    {
      name: 'Storage',
      icon: Shield,
      items: ['Flutter Secure Storage', 'Shared Preferences'],
    },
    {
      name: 'Location Services',
      icon: MapPin,
      items: ['Geolocator', 'Geocoding', 'Permission Handler'],
    },
    {
      name: 'UI Components',
      icon: Package,
      items: ['Google Fonts', 'Cached Network Image', 'Shimmer', 'Lottie'],
    },
    {
      name: 'Media',
      icon: Package,
      items: ['Image Picker', 'Video Player', 'Image Compression'],
    },
    {
      name: 'Firebase & Push',
      icon: Zap,
      items: ['Firebase Core', 'FCM', 'Push Notifications'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Tech Stack
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Modern technologies and libraries for robust mobile development
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-linear-to-br from-emerald-50 to-white rounded-xl p-6 border border-emerald-200 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Features by Role Section
 */
function FeaturesSection() {
  const roleFeatures = [
    {
      role: 'Customer',
      icon: '👤',
      description: 'End users booking and managing cleaning services',
      features: [
        { name: 'Service Browsing', desc: 'Browse services with ratings and pricing' },
        { name: 'Search & Filter', desc: 'Find services by category and location' },
        { name: 'Order Management', desc: 'Create, track, and manage orders' },
        { name: 'Real-time Tracking', desc: 'Track CS (Cleaning Service) provider in real-time' },
        { name: 'Secure Payment', desc: 'Midtrans payment integration' },
        { name: 'Rating System', desc: 'Rate and review service providers' },
        { name: 'Push Notifications', desc: 'Real-time order updates' },
        { name: 'Profile Management', desc: 'Edit profile and preferences' },
      ],
    },
    {
      role: 'CS Provider',
      icon: '🧹',
      description: 'Service providers managing their operations',
      features: [
        { name: 'CS Registration', desc: 'Register with skills and equipment details' },
        { name: 'Document Verification', desc: 'Upload KTP, NPWP, certificates' },
        { name: 'KTP Scanner', desc: 'OCR-based ID scanning' },
        { name: 'Face Verification', desc: 'Biometric verification on login' },
        { name: 'GPS Tracking', desc: 'Real-time location sharing to admin' },
        { name: 'Order Management', desc: 'Accept and manage incoming orders' },
        { name: 'Dashboard', desc: 'Statistics and performance overview' },
        { name: 'Location Toggle', desc: 'Control when to share location' },
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Features by Role
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Distinct features tailored for different user types
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {roleFeatures.map((roleGroup, index) => (
            <ScrollReveal key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200"
              >
                {/* Header */}
                <div className="bg-linear-to-r from-emerald-500 to-emerald-600 px-6 py-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{roleGroup.role}</h3>
                  <p className="text-emerald-100">{roleGroup.description}</p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <div className="space-y-4">
                    {roleGroup.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex gap-3">
                        <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                          <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
 * Key Features Detailed Section
 */
function KeyFeaturesSection() {
  const features = [
    {
      icon: MapPin,
      title: 'Real-time Location Tracking',
      description: 'GPS-based tracking system allowing customers to see CS providers location in real-time with background location sharing capabilities.',
      technologies: ['Geolocator', 'Geocoding', 'Permission Handler'],
    },
    {
      icon: CreditCard,
      title: 'Secure Payment Integration',
      description: 'Integrated Midtrans payment gateway supporting multiple payment methods including e-wallet, virtual accounts, and credit cards.',
      technologies: ['WebView Flutter', 'Midtrans Snap', 'Payment Service'],
    },
    {
      icon: Shield,
      title: 'Document Verification',
      description: 'Secure document upload with OCR scanning for KTP verification, automated image compression, and retry logic for failed uploads.',
      technologies: ['Image Picker', 'Image Compression', 'OCR Scanner'],
    },
    {
      icon: Zap,
      title: 'Push Notifications',
      description: 'Real-time Firebase Cloud Messaging with in-app notification center, unread badges, and smart filtering.',
      technologies: ['Firebase Core', 'FCM', 'Notification Service'],
    },
    {
      icon: Package,
      title: 'Role-based Navigation',
      description: 'Smart routing system that adapts user experience based on role (Customer vs CS Provider) with appropriate navigation paths.',
      technologies: ['GoRouter', 'Provider', 'Auth Service'],
    },
    {
      icon: Shield,
      title: 'Security & Authentication',
      description: 'JWT token management with secure storage, platform detection headers, and role-based access control.',
      technologies: ['Secure Storage', 'JWT Tokens', 'Auth Guards'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Key Features Detailed
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Deep-dive into core functionality
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all"
                >
                  <Icon className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-emerald-100 text-emerald-700 rounded font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Project Structure Section
 */
function ProjectStructureSection() {
  const structure = [
    {
      path: 'core/',
      desc: 'Core services and configurations',
      items: ['config/', 'constants/', 'network/', 'services/', 'storage/'],
    },
    {
      path: 'data/',
      desc: 'Data models and repositories',
      items: ['models/', 'repositories/'],
    },
    {
      path: 'presentation/',
      desc: 'UI screens and widgets',
      items: ['screens/', 'widgets/'],
    },
    {
      path: 'routes/',
      desc: 'Navigation and routing',
      items: ['app_router.dart'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Project Architecture
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Well-organized codebase following clean architecture patterns
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md">
            <div className="font-mono text-sm space-y-4">
              <div className="text-gray-700">
                <div className="font-bold text-gray-900 mb-3">mobile/lib/</div>
              </div>

              {structure.map((section, index) => (
                <div key={index} className="ml-4">
                  <div className="text-emerald-600 font-semibold mb-2">
                    ├── {section.path}
                  </div>
                  <p className="text-gray-600 text-xs ml-4 mb-2">{section.desc}</p>
                  <div className="ml-4 space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-gray-700">
                        {itemIndex === section.items.length - 1 ? '└── ' : '├── '}
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}



/**
 * Challenges & Solutions Section
 */
function ChallengesSolutionsSection() {
  const items = [
    {
      challenge: 'Real-time Location Tracking',
      solution: 'Implemented background location service with Geolocator package, handling permissions and battery optimization.',
      icon: MapPin,
    },
    {
      challenge: 'Secure Payment Processing',
      solution: 'Integrated Midtrans WebView with proper status polling and error handling for multiple payment methods.',
      icon: CreditCard,
    },
    {
      challenge: 'Document Verification',
      solution: 'Built OCR scanning with image compression and automatic retry logic for unreliable networks.',
      icon: Shield,
    },
    {
      challenge: 'State Management at Scale',
      solution: 'Used Provider package for efficient state management across multiple user roles and features.',
      icon: Package,
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Challenges & Solutions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Technical challenges tackled during development
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex gap-4">
                    <Icon className="w-8 h-8 text-emerald-600 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.challenge}
                      </h3>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
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
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-emerald-600 to-emerald-700">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-white mb-4">
            Interested in this project?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let&apos;s discuss how I can help with your mobile development needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800 transition border border-emerald-600"
            >
              Back to Projects
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Main Page
 */
export default function BarasiaProjectPage() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth bg-white">
      <Navigation />
      <HeroSection />
      <TechStackSection />
      <FeaturesSection />
      <KeyFeaturesSection />
      <ProjectStructureSection />
      <ChallengesSolutionsSection />
      <CTASection />
    </main>
  );
}
