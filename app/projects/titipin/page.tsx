'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Check,
  MapPin,
  MessageCircle,
  ShoppingBag,
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
              Titipin
            </h1>
            <p className="text-2xl text-gray-700 mb-6">
              Titip Beli &amp; Antar Makanan dengan Sistem Penawaran Ongkir
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Project personal fullstack Flutter untuk layanan titip beli makanan dan jajanan.
              Titipin menghubungkan user dan deliverer dengan alur pesanan, penawaran ongkir,
              rating, dan chat realtime per pesanan, dibangun di atas Firebase dan arsitektur
              berbasis fitur.
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
              { label: 'Periode', value: '1 Okt 2025 – 12 Des 2025' },
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
      title: 'Entry & Auth',
      icon: Shield,
      description:
        'Dari splash animasi, onboarding, hingga auth gate yang membedakan alur user dan deliverer.',
      items: [
        'SplashScreen — animasi logo (scale + fade) dengan dekorasi lingkaran, auto navigate ke OnboardingScreen setelah 3 detik.',
        'OnboardingScreen — PageView 3 slide (gambar + title + deskripsi) dengan dot indicator, tombol Continue, Get started, dan Skip yang mengarah ke AuthGate.',
        'AuthGate — listen FirebaseAuth.instance.authStateChanges(), cek dokumen users/{uid}, paksa ProfileCompleteScreen jika username kosong, lalu routing ke MainScreen / DelivererMainScreen berdasarkan role.',
        'WelcomeScreen — halaman sambutan dengan ilustrasi dan tombol Sign in / Sign up.',
        'SignInScreen — form login email + password (show/hide), checkbox Remember me, tombol Forgot password (belum aktif), login via FirebaseAuth.signInWithEmailAndPassword dan routing berdasarkan role, plus snackbar untuk admin yang belum diimplementasi.',
        'SignUpScreen — registrasi email + password, dropdown role (user / deliverer), createUserWithEmailAndPassword, inisialisasi dokumen users (email, role, uid, createdAt, rating awal untuk deliverer), lalu kembali ke SignInScreen dengan snackbar sukses.',
      ],
    },
    {
      title: 'Profil User',
      icon: Users,
      description:
        'Screen untuk melengkapi dan menampilkan profil user, termasuk mekanisme paksa-lengkap sebelum masuk aplikasi.',
      items: [
        'ProfileCompleteScreen — form username, firstName, lastName, dateOfBirth (string bebas, hint dd-mm-yyyy), menyimpan ke users/{uid} dengan merge dan mengarahkan ke ProfileSuccessScreen.',
        'ProfileSuccessScreen — layar konfirmasi setelah profil lengkap (tampilan sukses).',
        'ProfileViewScreen — menampilkan username, nama lengkap, tanggal lahir, email, role; jika data belum ada mengajak user ke ProfileCompleteScreen, dengan AppBar untuk Edit profil dan Logout (signOut + kembali ke AuthGate).',
      ],
    },
    {
      title: 'Main App – User',
      icon: Smartphone,
      description:
        'Alur utama untuk role user: eksplor menu, kelola keranjang, buat pesanan, menunggu penawaran, riwayat, dan chat.',
      items: [
        'MainScreen — bottom navigation dengan 4 tab (Explore, OrderHistory, UserChatList, ProfileView) dan FAB tengah ke CartScreen.',
        'ExploreScreen — header "What we offer", search bar UI, banner promo, dan list produk per kategori (Main dishes, Fast food, Salad, Fruit) dari koleksi products di Firestore.',
        'ProductDetailScreen — detail produk dengan gambar besar (network + loading/error placeholder), deskripsi, rating (averageRating & ratingCount), selector jumlah, total harga dinamis, dan tombol Add to cart yang membuka dialog catatan lalu memanggil CartService.addToCart.',
        'CartScreen — stream isi keranjang dari carts/{userId}/items, menampilkan item lengkap dengan gambar, quantity +/- (CartService.updateItemQuantity), alamat pengantaran wajib, subtotal, dan tombol Buat Pesanan yang membuat dokumen orders dan mengosongkan keranjang.',
        'WaitingForOffersScreen — menampilkan order menunggu penawaran deliverer dan list offers realtime dari subkoleksi offers, dengan tombol Terima untuk memilih penawaran, mengupdate order, membuat ruang chat, dan menavigasi ke ChatScreen.',
        'OrderHistoryScreen — tab "Dalam Proses" dan "Selesai" untuk daftar pesanan user, dengan fitur Pesan lagi (re-import ke carts) dan form rating pesanan (deliverer + tiap produk) yang mengupdate agregat rating.',
        'UserChatListScreen — daftar semua chat untuk user (filter by userId), last message + waktu, tap ke ChatScreen.',
        'ChatScreen — ruang chat per order dengan bubble user/deliverer, pesan sistem, background image, dan input kirim pesan via ChatService.sendMessage.',
      ],
    },
    {
      title: 'Main App – Deliverer',
      icon: MapPin,
      description:
        'Alur operasional untuk deliverer: melihat pesanan yang butuh penawaran, mengelola order aktif, chat, dan profil dengan rating.',
      items: [
        'DelivererMainScreen — bottom nav 4 tab: AvailableOrders, ActiveOrders, DelivererChatList, DelivererProfile.',
        'AvailableOrdersScreen — list orders berstatus menunggu_penawaran, dengan tombol Tawar Ongkir untuk mengirim offers di subkoleksi orders/{orderId}/offers.',
        'ActiveOrdersScreen — daftar pesanan aktif untuk deliverer (status dalam_proses / makanan_diambil) dengan aksi Chat User, Makanan Diambil, dan Selesai Antar.',
        'DelivererChatListScreen — daftar chat untuk deliverer (filter by delivererId), mirip UserChatListScreen.',
        'DelivererProfileScreen — menampilkan profil deliverer dan agregat rating (delivererTotalRating & delivererRatingCount) dengan tampilan RatingBarIndicator dan jumlah penilaian.',
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
            Titipin memisahkan alur untuk user dan deliverer namun tetap memakai satu codebase dan
            sistem auth yang sama, sehingga mudah di-maintain dan dikembangkan.
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
 * Order & Chat Flow Section
 */
function FlowSection() {
  const cards = [
    {
      title: 'Dari Keranjang ke Penawaran Ongkir',
      icon: ShoppingBag,
      description:
        'Alur pesanan didesain agar user selalu paham status pesanan: dari memilih produk, mengisi alamat, hingga menunggu penawaran.',
      points: [
        'User memilih produk dari ExploreScreen dan menambahkannya ke CartScreen dengan catatan spesifik per item.',
        'CartScreen mengumpulkan seluruh item dari carts/{userId}/items dan menghitung subtotal secara realtime.',
        'Saat user menekan Buat Pesanan, aplikasi membuat dokumen baru di koleksi orders dengan status menunggu_penawaran.',
        'Alamat pengantaran wajib diisi dan lokasi jemput diambil dari catatan item, sehingga deliverer punya konteks jelas.',
      ],
    },
    {
      title: 'Deliverer Menawar, User Memilih',
      icon: MapPin,
      description:
        'Deliverer melihat daftar pesanan yang butuh penawaran, mengirim offer, dan menunggu keputusan user.',
      points: [
        'AvailableOrdersScreen menampilkan semua order berstatus menunggu_penawaran dengan ringkasan lokasi dan item.',
        'Deliverer menginput ongkir yang diinginkan; data disimpan sebagai dokumen di subkoleksi offers di bawah orders/{orderId}.',
        'WaitingForOffersScreen pada sisi user menampilkan daftar offers ini secara realtime.',
        'Saat user menerima satu offer, aplikasi mengupdate order (status dalam_proses, delivererTerpilihId, ongkirFinal, dsb.) dan memulai ruang chat.',
      ],
    },
    {
      title: 'Chat Realtime Per Pesanan',
      icon: MessageCircle,
      description:
        'Titipin menggunakan satu ruang chat per order agar konteks percakapan selalu jelas untuk kedua belah pihak.',
      points: [
        'Setiap order yang dikonfirmasi membuat dokumen di koleksi chats dengan orderId sebagai identifier.',
        'Pesan disimpan sebagai subkoleksi messages di bawah chats/{orderId}, diurutkan berdasarkan timestamp.',
        'ChatScreen membedakan bubble pesan user, deliverer, dan pesan sistem (misalnya konfirmasi pesanan).',
        'Timestamp chat dan lastMessageTime di list chat diformat dengan intl untuk tampilan yang konsisten.',
      ],
    },
    {
      title: 'Rating & Feedback Dua Arah',
      icon: Users,
      description:
        'Setelah pesanan selesai, user dapat memberikan rating ke deliverer dan tiap produk untuk meningkatkan kualitas layanan.',
      points: [
        'OrderHistoryScreen memunculkan form rating untuk pesanan berstatus selesai dan belum dirating.',
        'flutter_rating_bar dipakai untuk input rating deliverer dan rating per produk (1–5 bintang).',
        'Rating deliverer disimpan secara kumulatif di users/{delivererId} melalui field delivererTotalRating & delivererRatingCount.',
        'Rating produk diupdate di dokumen products/{productId} melalui totalRating & ratingCount, sehingga averageRating bisa dihitung.',
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Alur Pesanan &amp; Chat
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Fokus utama Titipin adalah alur titip beli yang jelas: user tahu siapa yang
            mengambil pesanan, berapa ongkirnya, dan bisa memberikan feedback setelah selesai.
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
      items: [
        'Dart',
        'Flutter (MaterialApp, ThemeData, Scaffold)',
        'Multi-platform support (Android, iOS, Web, Windows, macOS, Linux)',
      ],
    },
    {
      name: 'Backend & Firebase',
      icon: Shield,
      items: [
        'firebase_core (inisialisasi Firebase + firebase_options.dart)',
        'firebase_auth (email/password, authStateChanges, per-role routing)',
        'cloud_firestore (users, orders, carts, products, chats, offers, messages)',
        'firebase_storage (penyimpanan gambar produk yang diambil via URL)',
      ],
    },
    {
      name: 'Data & Model',
      icon: BookOpen,
      items: [
        'Model Product dengan rating & kategori',
        'Model Order dengan status, items, ongkir, isRated',
        'Model untuk Offer & ChatMessage di subkoleksi',
      ],
    },
    {
      name: 'UI & Experience',
      icon: Users,
      items: [
        'PageView onboarding dengan dot indicator',
        'AnimationController, Tween, FadeTransition, ScaleTransition di SplashScreen',
        'flutter_rating_bar untuk input & tampilan rating bintang',
      ],
    },
    {
      name: 'Utility & Lainnya',
      icon: MapPin,
      items: [
        'intl untuk format tanggal & jam (chat, order history)',
        'cupertino_icons sebagai set ikon tambahan',
        'image_picker (disiapkan untuk upload gambar)',
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Tech Stack</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Stack Flutter + Firebase yang dirancang untuk menangani alur pesanan, penawaran,
            rating, dan chat realtime di satu aplikasi mobile.
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
      path: 'features/splash/',
      desc: 'SplashScreen dengan animasi logo dan navigasi awal.',
      items: ['splash_screen.dart'],
    },
    {
      path: 'features/onboarding/',
      desc: 'Onboarding 3 halaman dengan PageView.',
      items: ['onboarding_screen.dart'],
    },
    {
      path: 'features/auth/',
      desc: 'AuthGate, welcome, sign in, sign up untuk email/password.',
      items: ['screens/auth_gate.dart', 'screens/welcome_screen.dart', 'screens/signin_screen.dart', 'screens/signup_screen.dart'],
    },
    {
      path: 'features/profile/',
      desc: 'Lengkapi profil, view profil, dan layar sukses.',
      items: ['screens/profile_complete_screen.dart', 'screens/profile_success_screen.dart', 'screens/profile_view_screen.dart'],
    },
    {
      path: 'features/home/',
      desc: 'MainScreen untuk user dengan bottom navigation.',
      items: ['screens/main_screen.dart'],
    },
    {
      path: 'features/explore/',
      desc: 'Eksplorasi produk & detail produk.',
      items: ['screens/explore_screen.dart', 'screens/product_detail_screen.dart'],
    },
    {
      path: 'features/cart/',
      desc: 'Keranjang dan proses pembuatan pesanan.',
      items: ['screens/cart_screen.dart'],
    },
    {
      path: 'features/orders/',
      desc: 'Menunggu penawaran & riwayat pesanan.',
      items: ['screens/waiting_for_offers_screen.dart', 'screens/order_history_screen.dart'],
    },
    {
      path: 'features/chat/',
      desc: 'Chat list & chat per order untuk user dan deliverer.',
      items: ['screens/user_chat_list_screen.dart', 'screens/deliverer_chat_list_screen.dart', 'screens/chat_screen.dart'],
    },
    {
      path: 'features/deliverer/',
      desc: 'Alur utama deliverer: orders tersedia, aktif, chat, dan profil.',
      items: ['screens/deliverer_main_screen.dart', 'screens/available_orders_screen.dart', 'screens/active_orders_screen.dart', 'screens/deliverer_profile_screen.dart'],
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
            Codebase diorganisasi per fitur (auth, explore, cart, orders, chat, deliverer, dll.)
            sehingga alur user dan deliverer tetap terpisah namun berbagi model dan layanan yang sama.
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
      title: 'Memisahkan Alur User & Deliverer',
      problem:
        'User dan deliverer memiliki layar dan journey yang berbeda, namun harus berbagi sistem auth dan data yang sama.',
      solution:
        'Menggunakan AuthGate untuk membaca dokumen users/{uid} dan field role, lalu mengarahkan ke MainScreen atau DelivererMainScreen. Dengan pendekatan ini, logika auth tetap satu tetapi UI bisa sangat berbeda per role.',
      icon: Shield,
    },
    {
      title: 'Sistem Penawaran Ongkir yang Fleksibel',
      problem:
        'User ingin memilih penawaran ongkir terbaik, sementara banyak deliverer bisa menawar sekaligus pada pesanan yang sama.',
      solution:
        'Menyimpan penawaran di subkoleksi offers di bawah orders/{orderId} dan menampilkan realtime di WaitingForOffersScreen. Saat user memilih satu offer, order diupdate dengan delivererTerpilihId & ongkirFinal, sementara offer lain dibiarkan sebagai riwayat.',
      icon: ShoppingBag,
    },
    {
      title: 'Rating Agregat untuk Deliverer & Produk',
      problem:
        'Perlu menghitung rata-rata rating tanpa membaca semua dokumen rating setiap kali.',
      solution:
        'Menggunakan pola totalRating + ratingCount di dokumen users (deliverer) dan products, lalu menghitung averageRating di client. Setiap submit rating hanya menambah total dan count, sehingga operasi tetap ringan.',
      icon: Users,
    },
    {
      title: 'Konteks Chat Per Pesanan',
      problem:
        'Jika semua percakapan disimpan di satu koleksi global, sulit menjaga konteks antara pesanan dan chat.',
      solution:
        'Mengikat chat ke orderId (chats/{orderId}/messages) sehingga setiap percakapan selalu terkait satu pesanan. Hal ini menyederhanakan query untuk UserChatListScreen dan DelivererChatListScreen, sekaligus memudahkan debugging.',
      icon: MessageCircle,
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
            Beberapa keputusan arsitektur yang saya ambil saat merancang Titipin sebagai
            aplikasi titip beli end-to-end dengan dua role utama.
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
            Tertarik dengan Titipin?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Titipin adalah project personal yang saya gunakan untuk mengeksplorasi arsitektur
            dua-role (user &amp; deliverer), alur pesanan, dan chat realtime di atas Flutter &amp; Firebase.
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
export default function TitipinProjectPage() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth bg-white">
      <HeroSection />
      <ScreensSection />
      <FlowSection />
      <TechStackSection />
      <ArchitectureSection />
      <ChallengesSection />
      <CTASection />
    </main>
  );
}
