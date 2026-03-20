'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Brain,
  Database,
  Globe,
  LayoutDashboard,
  Server,
  Shield,
  Users,
  Check,
} from 'lucide-react';
import { ScrollReveal, StaggerItem } from '../../components/ScrollReveal';

/**
 * Hero Section
 */
function HeroSection() {
  return (
    <section className="w-full pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Web App Case Study
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              IceBot Platform
            </h1>
            <p className="text-2xl text-gray-700 mb-6">
              Project-Based Learning Platform for Campus
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              IceBot adalah platform PjBL end-to-end untuk kampus yang menggabungkan
              dashboard mahasiswa & dosen, SQL lab interaktif, builder aplikasi CRUD,
              serta feedback berbasis AI untuk membantu proses belajar yang lebih
              terstruktur dan terukur.
            </p>
          </div>
        </ScrollReveal>

        {/* Key Stats */}
        <ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Peran', value: 'Backend Engineer' },
              { label: 'Platform', value: 'Web (Next.js + Node.js)' },
              { label: 'Status', value: 'On-going Iteration' },
              { label: 'Tahun', value: '2024 - 2025' },
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
      name: 'Frontend',
      icon: Globe,
      items: ['Next.js (App Router)', 'React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      name: 'Form & State',
      icon: BookOpen,
      items: ['React Hook Form', 'Zod', 'Zustand', '@tanstack/react-query'],
    },
    {
      name: 'Backend & Database',
      icon: Server,
      items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    },
    {
      name: 'Realtime & Collaboration',
      icon: Database,
      items: ['Socket.IO', 'Firebase', 'SQL.js (lab)', 'Monaco Editor'],
    },
    {
      name: 'AI & Automation',
      icon: Brain,
      items: ['OpenAI', 'Groq', 'AI feedback engine', 'Reflection analyzer'],
    },
    {
      name: 'Keamanan & Infrastruktur',
      icon: Shield,
      items: ['JWT Auth', 'bcryptjs', 'Helmet', 'AWS S3', 'Nodemailer'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Tech Stack</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Kombinasi stack modern untuk mendukung alur belajar berbasis project
            yang kompleks namun tetap nyaman dipakai sehari-hari.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
 * Routing & Halaman Section
 */
function RoutingSection() {
  const groups = [
    {
      title: 'Halaman Publik',
      icon: Globe,
      description:
        'Akses umum untuk landing page, informasi sistem, dan dukungan user sebelum login.',
      routes: [
        '/ (login utama mahasiswa & dosen)',
        '/faq',
        '/kontak',
        '/tentang',
        '/privacy-policy',
        '/terms-of-service',
        '/forgot-password',
        '/reset-password',
      ],
    },
    {
      title: 'Group (auth)',
      icon: Shield,
      description:
        'Layout khusus halaman autentikasi dengan UI yang lebih fokus dan tanpa distraksi dashboard.',
      routes: ['(auth)/layout.tsx untuk login, forgot-password, reset-password, dll.'],
    },
    {
      title: 'Dashboard Mahasiswa',
      icon: LayoutDashboard,
      description:
        'Area utama mahasiswa untuk mengelola project PjBL, progres modul, dan submission tugas.',
      routes: [
        '/dashboard',
        '/dashboard/onboarding',
        '/dashboard/introduction',
        '/dashboard/profile',
        '/dashboard/edit-profile',
        '/dashboard/settings',
        '/dashboard/modules/(initiation|planning|develop|evaluation)',
        '/dashboard/projects',
        '/dashboard/submissions',
      ],
    },
    {
      title: 'Dashboard Dosen',
      icon: Users,
      description:
        'Panel khusus dosen untuk monitoring kelas, menilai submission, dan menganalisis pemakaian AI.',
      routes: [
        '/lecturer',
        '/lecturer/dashboard',
        '/lecturer/students',
        '/lecturer/submissions',
        '/lecturer/analytics',
        '/lecturer/ai-logs',
        '/lecturer/debugging',
        '/lecturer/notifications',
        '/lecturer/penilaian',
        '/lecturer/presentasi',
        '/lecturer/profile',
        '/lecturer/settings',
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Struktur Halaman & Routing
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Seluruh route diatur dengan App Router Next.js sehingga mudah
            memisahkan pengalaman mahasiswa, dosen, dan pengunjung umum tanpa
            mengulang logika layout.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <ScrollReveal key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200"
                >
                  <div className="bg-linear-to-r from-emerald-500 to-emerald-600 px-6 py-6 text-white">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6" />
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{group.title}</h3>
                        <p className="text-emerald-100 text-sm">{group.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2 font-mono text-xs text-gray-700">
                      {group.routes.map((route) => (
                        <li key={route} className="flex gap-2">
                          <span className="text-emerald-500">▹</span>
                          <span>{route}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Modul Develop & SQL Lab Section
 */
function DevelopModuleSection() {
  const items = [
    {
      title: 'Database Lab / SQL Editor',
      description:
        'Mahasiswa menulis dan menjalankan query SQL langsung dari browser dengan history, schema, dan status kelengkapan modul.',
      points: [
        'Dynamic import komponen SQLEditor berbasis Monaco.',
        'Penyimpanan sqlSchema & sqlHistory di backend.',
        'Guard agar student hanya bisa mengakses jika project dan modul sebelumnya sudah valid.',
      ],
    },
    {
      title: 'Application Builder (CRUD App)',
      description:
        'Bagian application tab yang mengecek apakah fungsi CRUD sudah lulus dari log app builder.',
      points: [
        'Tracking otomatis create/read/update/delete untuk tiap project.',
        'Status kelengkapan applicationComplete dikirim ke backend.',
      ],
    },
    {
      title: 'Realtime Submission & Reflection',
      description:
        'Submission dua tahap (SQL dan Aplikasi) dengan update realtime dan refleksi berbasis AI.',
      points: [
        'useRealtimeSubmissions + Socket.IO untuk live update.',
        'Integration dengan submissionService untuk cek status, submit, dan revisi.',
        'Tab refleksi dengan pertanyaan terstruktur dan feedback AI yang dirender kembali ke UI.',
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Modul Develop & Database Lab
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Inti dari platform ini adalah modul develop yang
            menggabungkan SQL lab, builder aplikasi CRUD, dan refleksi
            pembelajaran dalam satu alur yang diawasi AI.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Challenges & Solutions Section
 */
function ChallengesSection() {
  const challenges = [
    {
      title: 'Multi-role routing & guard yang kompleks',
      problem:
        'Mahasiswa dan dosen memiliki dashboard, modul, dan flow yang berbeda, tetapi tetap harus berada dalam satu codebase dan sesi auth yang sama.',
      solution:
        'Mendesain sistem grouping route ((auth), (dashboard), (lecturer)) dan guard berbasis role + status project aktif. Logic akses dikonsolidasikan di middleware, store auth, dan service helper sehingga mudah diuji.',
      icon: Shield,
    },
    {
      title: 'SQL Lab realtime tanpa mengorbankan keamanan',
      problem:
        'Menjalankan query SQL dari browser raw berpotensi berbahaya dan berat untuk database produksi.',
      solution:
        'Memisahkan environment lab menggunakan sql.js / sandbox database serta validasi tipe SQL di backend. Hanya subset perintah yang diizinkan dan setiap eksekusi dilog untuk kebutuhan evaluasi.',
      icon: Database,
    },
    {
      title: 'Integrasi AI (OpenAI + Groq) yang terkontrol',
      problem:
        'Platform menggunakan AI untuk refleksi, analisis ERD/SQL, dan debugging. Jika tidak dibatasi, bisa memicu biaya dan latency yang tinggi.',
      solution:
        'Membuat lapisan AI service dengan caching, rate limiting per user, dan template prompt yang konsisten. Hasil AI diringkas sebelum dikirim ke frontend sehingga tetap ringan.',
      icon: Brain,
    },
    {
      title: 'Menghubungkan banyak layanan eksternal',
      problem:
        'Satu project mengakses email (Nodemailer), push notification (Firebase), penyimpanan file (AWS S3), dan autentikasi JWT.',
      solution:
        'Menerapkan pola modular service pada backend (authService, mailService, storageService, notificationService) dengan interface yang jelas dan testable sehingga penambahan fitur baru tidak merusak flow lama.',
      icon: Server,
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Permasalahan & Solusi
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Beberapa tantangan teknis utama yang saya hadapi sebagai backend
            engineer, serta pendekatan solusi yang saya implementasikan.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {challenges.map((item, index) => {
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
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Permasalahan:</span>{' '}
                        {item.problem}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Solusi:</span>{' '}
                        {item.solution}
                      </p>
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
            Tertarik dengan IceBot?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Saya fokus di sisi backend: desain arsitektur API, keamanan, dan
            integrasi AI. Jika Anda ingin membangun platform serupa, mari
            berdiskusi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Hubungi Saya
            </motion.a>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800 transition border border-emerald-600"
            >
              Kembali ke Projects
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
export default function IceBotProjectPage() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth bg-white">
      <HeroSection />
      <TechStackSection />
      <RoutingSection />
      <DevelopModuleSection />
      <ChallengesSection />
      <CTASection />
    </main>
  );
}
