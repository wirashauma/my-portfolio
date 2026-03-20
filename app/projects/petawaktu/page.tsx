'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Brain,
  CalendarDays,
  Check,
  Database,
  LayoutDashboard,
  Shield,
  Smartphone,
  Users,
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
              Mobile App Case Study
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              PetaWaktu
            </h1>
            <p className="text-2xl text-gray-700 mb-6">
              Gamified History Timeline & Quiz App
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A personal full‑stack Flutter app for learning history melalui kuis interaktif,
              leaderboard, dan peta waktu. Role utama: siswa, guru, dan admin dengan alur
              autentikasi dan dashboard masing‑masing, dibangun di atas Firebase dan arsitektur
              by‑feature.
            </p>
          </div>
        </ScrollReveal>

        {/* Key Stats */}
        <ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Peran', value: 'Fullstack (Solo)' },
              { label: 'Platform', value: 'Flutter (Android, iOS, Web, Desktop)' },
              { label: 'Status', value: 'On-going (Personal Project)' },
              { label: 'Periode', value: '24 Nov 2025 – 23 Des 2026' },
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
 * Screens Overview Section
 */
function ScreensSection() {
  const groups = [
    {
      title: 'Auth & Core',
      icon: Smartphone,
      description:
        'Alur autentikasi, cek status login, dan routing awal sebelum user masuk ke dashboard.',
      items: [
        'SplashScreen — cek login & role, redirect ke Login / Dashboard / AuthGate.',
        'LoginScreen — login email/password via Firebase Auth, siap untuk sosial login.',
        'RegisterScreen — registrasi user baru dan simpan profil dasar ke Firestore.',
        'AuthGate — dengar authStateChanges dan arahkan ke halaman sesuai role.',
        'DashboardScreen — bottom navigation + body dinamis berdasarkan tab & role.',
      ],
    },
    {
      title: 'Admin',
      icon: Users,
      description:
        'Manajemen user dan role (siswa / guru / admin) langsung dari aplikasi.',
      items: [
        'AdminUserListScreen — daftar user dari Firestore dengan opsi filter dan detail.',
        'AdminEditUserScreen — edit nama, role, status, dan simpan ke Firestore.',
      ],
    },
    {
      title: 'Profile & Settings',
      icon: BookOpen,
      description:
        'Area personal untuk mengatur profil, password, preferensi, dan melihat riwayat kuis.',
      items: [
        'ProfileScreen — info profil (nama, email, role, foto).',
        'EditProfileScreen — form edit profil + upload foto ke Cloudinary.',
        'ChangePasswordScreen — ubah password via Firebase Auth / reset email.',
        'SettingsScreen — pengaturan akun (logout, tema sederhana, dll).',
        'FAQScreen — konten statis berisi pertanyaan umum.',
        'HistoryQuizScreen — riwayat kuis, skor, dan waktu pengerjaan.',
      ],
    },
    {
      title: 'Quiz — Guru',
      icon: LayoutDashboard,
      description:
        'Fitur khusus guru untuk membuat, mengelola, dan memonitor kuis serta event sejarah.',
      items: [
        'GuruQuizListScreen — daftar kuis yang dibuat guru dari koleksi quizzes.',
        'CreateQuizScreen — buat/edit kuis lengkap dengan soal dinamis dan periode.',
        'QuizLeaderboardScreen — leaderboard berdasarkan skor & waktu submit.',
        'AddEventScreen — menambah event ke timeline sejarah (peta waktu).',
        'QuizScreen — halaman kuis dummy/sederhana untuk eksperimen awal.',
      ],
    },
    {
      title: 'Quiz — User',
      icon: Users,
      description:
        'Pengalaman mengerjakan kuis untuk siswa, lengkap dengan timer, hasil, dan review.',
      items: [
        'UserQuizListScreen — daftar kuis yang bisa diambil user + status progres.',
        'QuizPlayScreen — pengerjaan kuis dengan timer per soal & blocking back button.',
        'QuizResultScreen — skor akhir, ringkasan benar/salah, dan mode review soal.',
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Screens & Navigasi Utama
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Struktur layar dibagi per feature dan role sehingga alur belajar sejarah
            terasa natural: mulai dari login, pilih kuis, mengerjakan, hingga review hasil.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <ScrollReveal key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-linear-to-br from-emerald-50 to-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-emerald-200"
                >
                  <div className="bg-linear-to-r from-emerald-500 to-emerald-600 px-6 py-5 text-white">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6" />
                      <div>
                        <h3 className="text-xl font-bold mb-1">{group.title}</h3>
                        <p className="text-emerald-100 text-sm">{group.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2 text-sm text-gray-700">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                          <span>{item}</span>
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
 * Quiz Flow & Fitur Detail Section
 */
function QuizFlowSection() {
  const cards = [
    {
      title: 'Alur Quiz Guru',
      icon: Brain,
      description:
        'Guru mendesain pengalaman belajar: mulai dari membuat kuis, mengatur periode, hingga melihat leaderboard dan riwayat hasil.',
      points: [
        'CreateQuizScreen menyimpan dokumen kuis di `quizzes` dan subkoleksi `questions` dengan batch Firestore.',
        'QuestionFormModel memuat teks soal, explanation, opsi A–D, jawaban benar, dan time limit per soal.',
        'Integrasi GroqService untuk bantuan AI (generate soal / penjelasan otomatis).',
        'QuizLeaderboardScreen menarik data dari `quiz_results` lalu sortir berdasarkan skor & waktu.',
        'AddEventScreen menambah event sejarah yang akan ditautkan ke peta waktu (timeline).',
      ],
    },
    {
      title: 'Alur Quiz User',
      icon: Smartphone,
      description:
        'User fokus ke pengalaman mengerjakan kuis dengan feedback jelas, timer, dan mode review setelah selesai.',
      points: [
        'UserQuizListScreen menampilkan status kuis: belum dikerjakan vs sudah selesai (dengan skor & ikon trophy).',
        'QuizPlayScreen fetch soal dari `quizzes/{quizId}/questions` dengan timer 30 detik per soal.',
        'Jawaban user disimpan sebagai `Map<int,int>` dan dihitung skornya di akhir.',
        'Hasil dikirim ke `quiz_results` berisi `score`, `quizId`, `userId`, dan `completedAt` (serverTimestamp).',
        'QuizResultScreen menampilkan skor, jumlah benar/salah/tidak jawab, dan grid nomor soal berwarna.',
      ],
    },
    {
      title: 'Dashboard & Role Logic',
      icon: LayoutDashboard,
      description:
        'Satu DashboardScreen menangani banyak tab dan role sekaligus, sehingga mudah di-maintain dan dikembangkan.',
      points: [
        'AuthGate listen ke `FirebaseAuth.instance.authStateChanges()` untuk mengarahkan user.',
        'Jika belum login → arahkan ke LoginScreen; jika sudah → ke DashboardScreen sesuai role.',
        'DashboardScreen menentukan body berdasarkan tab aktif + role (guru vs siswa).',
        'Untuk guru: tab tertentu menampilkan GuruQuizListScreen + tombol FAB "Tambah Peristiwa".',
        'Setelah kembali dari AddEventScreen, event timeline di-refresh otomatis.',
      ],
    },
    {
      title: 'Profil, History, dan Admin',
      icon: Users,
      description:
        'Fitur pendukung yang membuat aplikasi terasa lengkap: profil rapi, riwayat quiz jelas, dan kontrol admin yang aman.',
      points: [
        'HistoryQuizScreen mengambil riwayat hasil kuis dari koleksi hasil dan fetch metadata dari `quizzes`.',
        'ProfileScreen dan EditProfileScreen mengelola data profil termasuk foto profil via Cloudinary.',
        'ChangePasswordScreen memanfaatkan Firebase Auth (update password / reset email).',
        'AdminUserListScreen & AdminEditUserScreen memudahkan pengaturan role dan status user.',
        'FAQScreen menyajikan konten statis untuk menjawab pertanyaan umum pengguna.',
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Alur Kuis & Pengalaman Belajar
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            PetaWaktu dirancang agar guru mudah merancang kuis dan event sejarah,
            sementara siswa fokus ke pengalaman mengerjakan kuis yang jelas dan menyenangkan.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {card.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span>{point}</span>
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
 * Tech Stack Section
 */
function TechStackSection() {
  const categories = [
    {
      name: 'Bahasa & Framework',
      icon: Smartphone,
      items: ['Flutter', 'Dart', 'Material Design'],
    },
    {
      name: 'Backend & Auth',
      icon: Shield,
      items: ['firebase_core', 'firebase_auth', 'cloud_firestore'],
    },
    {
      name: 'Login Sosial',
      icon: Users,
      items: ['google_sign_in', 'flutter_facebook_auth'],
    },
    {
      name: 'UI & Experience',
      icon: BookOpen,
      items: ['GoogleFonts.poppinsTextTheme', 'Custom Theme', 'InputDecorationTheme', 'ElevatedButtonTheme'],
    },
    {
      name: 'Media & Storage',
      icon: Database,
      items: ['image_picker', 'cloudinary_public'],
    },
    {
      name: 'Konfigurasi & Env',
      icon: CalendarDays,
      items: ['flutter_dotenv', 'firebase_options.dart'],
    },
    {
      name: 'Networking & Layanan',
      icon: Brain,
      items: ['http', 'GroqService (LLM API)'],
    },
    {
      name: 'Platform Target',
      icon: LayoutDashboard,
      items: ['Android', 'iOS', 'Web', 'Windows', 'macOS', 'Linux'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Tech Stack</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Stack Flutter + Firebase yang simpel namun cukup fleksibel untuk multi‑platform
            dan integrasi layanan eksternal seperti Cloudinary dan Groq API.
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
 * Architecture Section
 */
function ArchitectureSection() {
  const sections = [
    {
      path: 'features/auth/',
      desc: 'Halaman login, register, splash, dan helper autentikasi.',
      items: ['models/', 'screens/', 'services/', 'widgets/'],
    },
    {
      path: 'features/dashboard/',
      desc: 'Dashboard utama dengan bottom navigation & tab by-role.',
      items: ['screens/dashboard_screen.dart', 'widgets/', 'services/'],
    },
    {
      path: 'features/profile/',
      desc: 'Profil, edit profil, ubah password, pengaturan, FAQ, history quiz.',
      items: ['screens/', 'services/profile_service.dart', 'widgets/'],
    },
    {
      path: 'features/admin/',
      desc: 'Manajemen user oleh admin (list, edit, ubah role).',
      items: ['screens/', 'services/admin_service.dart'],
    },
    {
      path: 'features/quiz/guru/',
      desc: 'Fitur kuis untuk guru: pembuatan, leaderboard, dan event timeline.',
      items: ['models/question_form_model.dart', 'screens/', 'services/quiz_service.dart'],
    },
    {
      path: 'features/quiz/user/',
      desc: 'Fitur kuis untuk user: list, play, dan result/review.',
      items: ['screens/', 'widgets/', 'services/quiz_play_service.dart'],
    },
    {
      path: 'features/core/',
      desc: 'AuthGate, routing helper, dan service umum (GroqService, dsb.).',
      items: ['auth_gate.dart', 'services/', 'utils/'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Arsitektur & Struktur Folder
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Codebase diorganisasi by‑feature sehingga setiap domain (auth, quiz, profile,
            admin) punya models, screens, services, dan widgets sendiri.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md font-mono text-sm">
            <div className="text-gray-700 mb-4">
              <div className="font-bold text-gray-900 mb-2">lib/</div>
              <div className="ml-4 text-gray-700 mb-2">├── features/</div>
            </div>
            <div className="space-y-4 ml-4">
              {sections.map((section, index) => (
                <div key={index}>
                  <div className="text-emerald-600 font-semibold mb-1">
                    ├── {section.path}
                  </div>
                  <p className="text-gray-600 text-xs ml-4 mb-1">{section.desc}</p>
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
function ChallengesSection() {
  const items = [
    {
      title: 'Menggabungkan Timeline Sejarah dengan Kuis',
      problem:
        'Setiap event sejarah perlu terhubung ke kuis tertentu, namun data event dan data kuis tersimpan di koleksi berbeda.',
      solution:
        'Mendesain skema Firestore dengan `quizzes`, subkoleksi `questions`, dan koleksi event timeline terpisah yang menyimpan referensi ke quizId. Query dirancang agar tetap efisien ketika menampilkan peta waktu dan daftar kuis.',
      icon: CalendarDays,
    },
    {
      title: 'Role Management (Siswa, Guru, Admin)',
      problem:
        'Setiap role punya layar dan hak akses berbeda, tetapi tetap memakai satu sistem auth yang sama.',
      solution:
        'Menyimpan field role di dokumen user Firestore dan menggunakan AuthGate + guard di DashboardScreen untuk mengarahkan ke UI yang tepat. Komponen UI dibangun dengan conditional rendering sederhana agar mudah dirawat.',
      icon: Shield,
    },
    {
      title: 'Timer per Soal & Pengalaman Kuis',
      problem:
        'Perlu timer per soal, blok tombol back, dan penyimpanan hasil yang konsisten di seluruh platform.',
      solution:
        'Membuat controller kuis khusus yang mengatur index soal, timer, dan state Map<int,int> jawaban. Saat kuis selesai, controller menyimpan hasil ke `quiz_results` dengan serverTimestamp dan melakukan pushReplacement ke QuizResultScreen.',
      icon: Smartphone,
    },
    {
      title: 'Integrasi Layanan Eksternal (Groq, Cloudinary)',
      problem:
        'Memanggil API LLM dan upload media berpotensi lambat dan rawan error jaringan.',
      solution:
        'Membuat service terpisah (GroqService, CloudinaryService) dengan error handling terpusat, timeout, dan fallback UI (loading, retry). Variabel rahasia dikelola via flutter_dotenv dan .env.',
      icon: Brain,
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Tantangan Teknis & Solusi
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Beberapa keputusan arsitektur yang saya ambil selama membangun PetaWaktu
            sebagai project personal full‑stack.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex gap-4">
                    <Icon className="w-8 h-8 text-emerald-600 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Permasalahan:</span> {item.problem}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Solusi:</span> {item.solution}
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
            Tertarik dengan PetaWaktu?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            PetaWaktu adalah project personal yang terus saya kembangkan untuk
            mengeksplorasi Flutter, Firebase, dan integrasi AI di konteks edukasi sejarah.
            Jika Anda ingin membangun aplikasi serupa, saya senang berdiskusi.
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
export default function PetaWaktuProjectPage() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth bg-white">
      <HeroSection />
      <ScreensSection />
      <QuizFlowSection />
      <TechStackSection />
      <ArchitectureSection />
      <ChallengesSection />
      <CTASection />
    </main>
  );
}
