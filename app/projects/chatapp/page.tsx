'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Check,
  MessageCircle,
  PhoneCall,
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
              ChatApp
            </h1>
            <p className="text-2xl text-gray-700 mb-6">
              Real-time Chat with Flutter &amp; Firebase
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Project personal fullstack untuk membangun aplikasi chat 1-1 sederhana dengan alur
              autentikasi lengkap (email/password + OTP), setup profil, dan percakapan real‑time
              berbasis Firebase Auth &amp; Cloud Firestore.
            </p>
          </div>
        </ScrollReveal>

        {/* Key Stats */}
        <ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Peran', value: 'Fullstack (Solo)' },
              { label: 'Platform', value: 'Flutter (Mobile)' },
              { label: 'Status', value: 'Selesai' },
              { label: 'Periode', value: '11 Nov 2025 – 14 Des 2025' },
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
      title: 'Alur Awal & Otentikasi',
      icon: Shield,
      description:
        'Serangkaian screen yang mengatur alur login, verifikasi OTP, dan setup profil pertama kali.',
      items: [
        'AuthCheckScreen — home awal yang listen authStateChanges dan memutuskan ke login atau cek profil.',
        'CheckUserSetupScreen — cek apakah profil users/{uid} sudah ada di Firestore untuk bedakan user lama/baru.',
        'LoginScreen — login email & password dengan handling error user-not-found, wrong-password, dll.',
        'RegisterScreen — registrasi email/password + validasi konfirmasi password, lalu arahkan ke SetupProfileScreen.',
        'OtpScreen — verifikasi OTP 6 digit untuk login via nomor HP dengan AuthService.sendOtp & verifyOtp.',
        'SetupProfileScreen — isi nama lengkap & bio, simpan profil pertama kali ke Firestore sebelum masuk Home.',
      ],
    },
    {
      title: 'Halaman Utama & Navigasi',
      icon: Smartphone,
      description:
        'HomeScreen dengan bottom navigation sederhana agar fokus ke 2 area utama: chat dan profil.',
      items: [
        'HomeScreen — menyimpan selectedIndex dan men-switch body antara ChatListScreen dan ProfileScreen.',
      ],
    },
    {
      title: 'Halaman Chat',
      icon: MessageCircle,
      description:
        'Fokus ke percakapan 1-1 dengan UX yang familiar: list percakapan, bubble chat, auto-scroll, dan read receipt.',
      items: [
        'ChatListScreen — daftar semua percakapan user (chat_rooms) dengan state loading, error, dan empty state ramah.',
        'FAB "+" di ChatListScreen — dialog cari user by email untuk mulai chat baru, lengkap dengan error jika user tidak ditemukan atau email diri sendiri.',
        'ChatDetailScreen — halaman 1-1 chat dengan avatar, nama penerima, stream pesan real-time, dan input text.',
        'Penanda tanggal otomatis — separator seperti "Hari Ini", "Kemarin", atau d MMM yyyy di antara pesan.',
        'Read receipt — markMessagesAsRead dipanggil saat screen dibuka & saat ada pesan masuk yang belum dibaca.',
      ],
    },
    {
      title: 'Profil & Pengaturan',
      icon: Users,
      description:
        'Kumpulan screen untuk mengelola profil, password, preferensi chat, notifikasi, dan bantuan.',
      items: [
        'ProfileScreen — menampilkan avatar, nama, bio, serta menu ke Account, Chat Settings, Notifications, dan Help.',
        'AccountScreen — edit profil (display name, bio, foto profil) dengan upload ke Cloudinary.',
        'ChangePasswordScreen — ubah password dengan re-authenticate via EmailAuthProvider.',
        'ChatSettingsScreen — pengaturan tampilan chat (read receipts, typing indicator, font size; saat ini UI stub).',
        'NotificationsScreen — pengaturan push notification & sound (UI stub, siap dihubungkan ke FCM).',
        'HelpScreen — FAQ seputar login, lupa password, ganti profil, dan cara mulai chat baru.',
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Screens &amp; Navigasi Utama
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Setiap screen dirancang untuk membentuk alur yang jelas: mulai dari cek status login,
            setup profil, hingga percakapan 1-1 yang nyaman dipakai sehari‑hari.
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
 * Chat Flow & Features Section
 */
function ChatFlowSection() {
  const cards = [
    {
      title: 'Auth Flow yang Jelas',
      icon: Shield,
      description:
        'Menggabungkan email/password, OTP, dan setup profil dalam satu alur yang rapi sehingga user baru tidak bingung.',
      points: [
        'AuthCheckScreen menjadi pintu gerbang utama dan hanya menampilkan loading singkat sebelum mengarahkan user.',
        'CheckUserSetupScreen memastikan profil users/{uid} sudah ada sebelum user mendarat di HomeScreen.',
        'Login & Register Screen punya validasi dasar dan pesan error lokal berbahasa Indonesia.',
        'OtpScreen memakai TextField 6 digit untuk memudahkan input dan validasi OTP.',
        'SetupProfileScreen memaksa pengisian nama lengkap minimal satu kali sebelum user bisa mulai chat.',
      ],
    },
    {
      title: 'Pengalaman Chat 1-1',
      icon: MessageCircle,
      description:
        'Percakapan real-time dipresentasikan mirip aplikasi chat populer, dengan bubble, auto-scroll, dan read receipt.',
      points: [
        'ChatListScreen menggunakan stream Firestore untuk memantau koleksi chat_rooms milik user.',
        'Setiap item chat list di-render dengan ChatListTile agar tampilan konsisten dan mudah diubah.',
        'ChatDetailScreen menggunakan stream sub-koleksi messages di dalam chat_rooms/{chatRoomId}.',
        'Penanda tanggal otomatis membantu user memisahkan percakapan per hari (Hari Ini, Kemarin, dll.).',
        'Fungsi _sendMessage memastikan pesan kosong tidak akan terkirim dan mengosongkan input setelah sukses.',
      ],
    },
    {
      title: 'Profil & Media',
      icon: Users,
      description:
        'User bisa membangun identitasnya lewat profil dan foto, dengan upload gambar yang aman ke Cloudinary.',
      points: [
        'InitialAvatar dipakai di banyak tempat sebagai fallback ketika user belum punya foto profil.',
        'AccountScreen mendukung pilih gambar dari gallery via image_picker dan menampilkan preview lokal.',
        'CloudinaryService.uploadImage mengunggah foto ke folder khusus (chatapp/profile_images).',
        'ProfileScreen mendukung tampilan foto full-screen dalam Dialog + InteractiveViewer (zoom & pan).',
        'ChangePasswordScreen memastikan keamanan dengan re-authenticate sebelum update password.',
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Alur Chat &amp; Fitur Utama
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Fokus utama ChatApp adalah pengalaman chat 1-1 yang sederhana, predictable,
            dan mudah di-maintain untuk eksperimen pribadi dengan Flutter + Firebase.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
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
      name: 'Profil & Media',
      icon: Users,
      items: ['image_picker', 'Cloudinary', 'InitialAvatar widget'],
    },
    {
      name: 'UI & Experience',
      icon: BookOpen,
      items: ['Custom Theme', 'Form validation', 'SnackBar feedback'],
    },
    {
      name: 'Keamanan Account',
      icon: Shield,
      items: ['EmailAuthProvider', 'reauthenticateWithCredential', 'updatePassword'],
    },
    {
      name: 'Lainnya',
      icon: PhoneCall,
      items: ['OTP flow (AuthService)', 'Routing manual via Navigator'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Tech Stack</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Stack Flutter + Firebase yang ringan namun cukup lengkap untuk membangun
            aplikasi chat real-time dengan alur auth modern.
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
 * Architecture Section
 */
function ArchitectureSection() {
  const sections = [
    {
      path: 'screens/auth/',
      desc: 'AuthCheckScreen, Login, Register, OTP, dan SetupProfile.',
      items: ['auth_check_screen.dart', 'login_screen.dart', 'register_screen.dart', 'otp_screen.dart', 'setup_profile_screen.dart'],
    },
    {
      path: 'screens/chat/',
      desc: 'Chat list & detail untuk percakapan 1-1.',
      items: ['chat_list_screen.dart', 'chat_detail_screen.dart', 'widgets/chat_list_tile.dart', 'widgets/chat_bubble.dart'],
    },
    {
      path: 'screens/profile/',
      desc: 'Profil, account, change password, chat settings, notifications, help.',
      items: ['profile_screen.dart', 'account_screen.dart', 'change_password_screen.dart', 'chat_settings_screen.dart', 'notifications_screen.dart', 'help_screen.dart'],
    },
    {
      path: 'services/',
      desc: 'Abstraksi Firebase & eksternal service.',
      items: ['auth_service.dart', 'firestore_service.dart', 'cloudinary_service.dart'],
    },
    {
      path: 'widgets/',
      desc: 'Widget reusable seperti InitialAvatar, tombol, dll.',
      items: ['initial_avatar.dart', 'primary_button.dart'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Arsitektur &amp; Struktur Folder
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Struktur project dibuat sederhana namun terpisah per domain (auth, chat, profile)
            sehingga mudah dikembangkan menjadi aplikasi chat yang lebih kompleks ke depannya.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md font-mono text-sm">
            <div className="text-gray-700 mb-4">
              <div className="font-bold text-gray-900 mb-2">lib/</div>
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
      title: 'Memisahkan Alur Auth & Setup Profil',
      problem:
        'User baru dan user lama membutuhkan alur yang berbeda, tetapi tetap ingin memakai satu entry point di main.dart.',
      solution:
        'Membuat AuthCheckScreen dan CheckUserSetupScreen sebagai gerbang berlapis: pertama cek status login, lalu cek keberadaan dokumen profil di Firestore sebelum mengarahkan ke Home atau SetupProfile.',
      icon: Shield,
    },
    {
      title: 'Real-time Chat dengan Read Receipt',
      problem:
        'Perlu menampilkan pesan secara real-time sekaligus menandai pesan yang sudah dibaca oleh penerima.',
      solution:
        'Menggunakan stream Firestore untuk koleksi messages dan memanggil FirestoreService.markMessagesAsRead ketika screen aktif atau ada pesan baru yang ditujukan ke currentUser. Field isRead kemudian dipakai oleh ChatBubble untuk menampilkan indikator baca.',
      icon: MessageCircle,
    },
    {
      title: 'Manajemen Profil & Foto',
      problem:
        'User harus bisa memperbarui nama/bio/foto dengan UX yang baik tanpa mengorbankan performa.',
      solution:
        'Memisahkan AccountScreen sebagai halaman edit profil dengan alur: pilih gambar via image_picker → upload ke CloudinaryService → simpan URL ke Firestore. InitialAvatar dan preview lokal menjaga pengalaman visual tetap halus.',
      icon: Users,
    },
    {
      title: 'Keamanan Perubahan Password',
      problem:
        'Perubahan password harus aman dan mematuhi requirement Firebase (reauthenticate).',
      solution:
        'ChangePasswordScreen memaksa re-authenticate dengan EmailAuthProvider sebelum memanggil updatePassword, dengan pesan error yang jelas untuk wrong-password atau requires-recent-login.',
      icon: Shield,
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Tantangan Teknis &amp; Solusi
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Keputusan teknis utama yang saya ambil saat membangun ChatApp sebagai
            latihan membangun sistem chat end‑to‑end.
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
            Tertarik dengan ChatApp?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            ChatApp adalah project personal yang saya gunakan untuk mengasah skill Flutter &amp;
            Firebase dalam konteks real-time chat. Jika Anda ingin membangun aplikasi serupa,
            saya senang berdiskusi.
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
export default function ChatAppProjectPage() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth bg-white">
      <HeroSection />
      <ScreensSection />
      <ChatFlowSection />
      <TechStackSection />
      <ArchitectureSection />
      <ChallengesSection />
      <CTASection />
    </main>
  );
}
