# 📋 Panduan Customization

Dokumentasi lengkap untuk melakukan customization pada portfolio redesign.

---

## 🔧 Customization Umum

### 1. Mengubah Warna Accent (Emerald ke warna lain)

**File**: `app/globals.css`

```css
/* Current: Emerald Green */
:root {
  --primary-green: #10b981;
  --dark-green: #059669;
  --light-green: #d1fae5;
}

/* Jika ingin ganti ke Blue, contoh: */
:root {
  --primary-blue: #3b82f6;
  --dark-blue: #1d4ed8;
  --light-blue: #dbeafe;
}
```

**Update di Files**: Ganti semua `emerald-600` → `blue-600`, `emerald-100` → `blue-100`, dll

**Tailwind Classes yang perlu diubah:**
- `bg-emerald-600` → `bg-blue-600`
- `text-emerald-600` → `text-blue-600`
- `border-emerald-300` → `border-blue-300`
- `hover:bg-emerald-700` → `hover:bg-blue-700`

---

### 2. Mengubah Logo/Branding

**File**: `app/page.tsx`, `app/projects/page.tsx`, `app/experience/page.tsx`

Navigation Logo:
```tsx
// Sebelum
<span className="text-gray-900">wira</span>
<span className="text-emerald-600">shauma</span>

// Sesudah (contoh)
<span className="text-gray-900">your</span>
<span className="text-emerald-600">name</span>
```

---

### 3. Mengubah Social Links

**File**: `app/page.tsx` (Hero Section)

```tsx
// Update di section ini
<motion.a
  href="https://github.com/YOUR_USERNAME"  // ← Ubah disini
  target="_blank"
  rel="noopener noreferrer"
  ...
>
```

Tempat social links:
- Home page: Hero section dan Contact section
- Experience page: Contact CTA
- Projects page: Navigation

---

### 4. Mengubah Email Contact

**File**: `app/page.tsx`, `app/experience/page.tsx`

```tsx
// Cari dan ganti
href="mailto:wirashauma@gmail.com"

// Ke
href="mailto:your-email@domain.com"
```

---

### 5. Mengubah Konten About/Bio

**File**: `app/page.tsx` (AboutSection)

```tsx
<h3 className="text-2xl font-bold text-gray-900 mb-4">
  Your University/Institution
</h3>
<p className="text-gray-700 mb-4 leading-relaxed">
  Your bio here...
</p>
```

---

## 📝 Mengubah Projects

### Tambah Project Mobile Baru

**File**: `app/projects/page.tsx`

```tsx
const mobileProjects = [
  {
    id: 1,
    name: 'Sumatrans - Travel App',
    description: '...',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Dart'],
    image: '/projects/sumatrans-screenshot.png',
    link: '#',
    highlights: [
      'Real-time destination recommendations',
      'Offline map support',
    ],
  },
  // ← Tambah object baru disini
  {
    id: 3,
    name: 'Your New Project',
    description: 'Description here',
    technologies: ['Flutter', 'Firebase'],
    image: '/projects/your-project.png',
    link: '#',
    highlights: ['Feature 1', 'Feature 2'],
  },
];
```

### Tambah Project Website Baru

**File**: `app/projects/page.tsx` (WebProjectsSection)

```tsx
const webProjects = [
  {
    id: 1,
    name: 'Education Management System',
    // ... existing
  },
  // ← Tambah disini
  {
    id: 2,
    name: 'Your Web Project',
    description: 'Description',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
    image: '/projects/your-web-project.png',
    link: '#',
    highlights: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
];
```

---

## 💼 Mengubah Experience

**File**: `app/experience/page.tsx`

### Tambah Experience Baru

```tsx
const experiences = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Dinas Pendidikan Bukittinggi',
    period: '2025 - Present',
    location: 'Bukittinggi, Indonesia',
    description: '...',
    technologies: ['React', 'Next.js', ...],
    achievements: [
      'Reduced page load time by 35%',
      ...
    ],
  },
  // ← Tambah experience baru disini
  {
    id: 3,
    title: 'Your Position',
    company: 'Your Company',
    period: '2024 - 2025',
    location: 'Your Location',
    description: 'Your description',
    technologies: ['Tech1', 'Tech2'],
    achievements: ['Achievement 1', 'Achievement 2'],
  },
];
```

### Mengubah Education

**File**: `app/experience/page.tsx` (EducationSection)

```tsx
const education = [
  {
    degree: 'Your Degree',
    school: 'Your University',
    year: '2020 - Present',
    focus: 'Your Focus',
    details: 'Your details here',
  },
];
```

---

## 🎨 Mengubah Design Elements

### Mengubah Spacing (Padding/Margin)

**Default sections:**
```tsx
// Section padding
className="w-full py-20 px-4 sm:px-6 lg:px-8"

// Jika ingin tambah spacing:
className="w-full py-24 px-4 sm:px-6 lg:px-8"  // py-20 → py-24
```

### Mengubah Border Radius

**Default:**
```tsx
className="rounded-2xl"  // 1rem (16px)

// Opsi:
rounded-lg    // 0.5rem (8px)
rounded-xl    // 0.75rem (12px)
rounded-2xl   // 1rem (16px)
rounded-3xl   // 1.5rem (24px)
```

### Mengubah Shadow

**Default:**
```tsx
className="shadow-lg hover:shadow-xl"

// Opsi:
shadow-md   // Subtle
shadow-lg   // Default
shadow-xl   // Emphasized
shadow-2xl  // Very emphasized
```

---

## 🖼️ Menambah Project Images

### Image Structure

```
public/
└── projects/
    ├── sumatrans-screenshot.png
    ├── barasiah-screenshot.png
    ├── education-system.png
    └── your-project.png
```

### Update Image Path

**File**: `app/projects/page.tsx`

```tsx
{
  image: '/projects/your-project.png',  // ← Pastikan file ada di folder public/projects
}
```

### Image Optimization Tips
- Use `.png` atau `.webp` format
- Ukuran recommended: 800x600px untuk web, 1080x1920px untuk mobile
- Compress sebelum upload

---

## 🔗 Update Metadata (SEO)

**File**: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your portfolio description",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name", url: "https://github.com/yourname" }],
  creator: "Your Name",
  // ... update fields lainnya
};
```

---

## 🎯 Mengubah Featured Projects di Home

**File**: `app/page.tsx` (FeaturedProjectsSection)

```tsx
const projects = [
  {
    id: 1,
    name: 'Sumatrans - Travel App',
    description: '...',
    type: 'Mobile App',
    link: '/projects#mobile',  // ← Link ke projects page
  },
  // Atur ulang atau ubah projects yang ditampilkan
];
```

---

## 🚀 Deployment Updates

### Sebelum Deploy:

1. **Update URL Metadata**
   ```tsx
   metadataBase: new URL("https://your-actual-domain.com")
   ```

2. **Update Social Links**
   - GitHub URL
   - LinkedIn URL
   - Email address

3. **Update Images**
   - Pastikan semua project images ada
   - Add og-image untuk SEO

4. **Test Build**
   ```bash
   npm run build
   ```

---

## 📱 Mobile Customization

### Responsive Font Sizes

```tsx
// Heading sizes sudah responsive:
className="text-5xl sm:text-6xl lg:text-7xl"

// Jika ingin ubah:
className="text-4xl sm:text-5xl lg:text-6xl"  // Smaller
className="text-6xl sm:text-7xl lg:text-8xl"  // Larger
```

### Grid Layout

```tsx
// Default 2 columns on medium+
className="grid md:grid-cols-2 gap-8"

// Ubah ke 3 columns
className="grid md:grid-cols-3 gap-6"

// Ubah gap
className="gap-8"  // 2rem
className="gap-6"  // 1.5rem
className="gap-4"  // 1rem
```

---

## ✅ Checklist Customization

- [ ] Update social links (GitHub, LinkedIn)
- [ ] Update email address
- [ ] Change logo/branding text
- [ ] Update About Me section
- [ ] Add your projects (mobile & web)
- [ ] Update work experience
- [ ] Add education info
- [ ] Update technical skills
- [ ] Add project images
- [ ] Update SEO metadata
- [ ] Test build: `npm run build`
- [ ] Test dev: `npm run dev`
- [ ] Check mobile responsiveness
- [ ] Deploy to production

---

## 🆘 Troubleshooting

### Issue: Build error setelah changes
**Solution**: 
```bash
npm run build
```
Lihat error message secara teliti, biasanya ada typo atau missing import.

### Issue: Styling tidak berubah
**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server: `npm run dev`
- Hard refresh: Ctrl+Shift+R

### Issue: Images tidak tampil
**Solution**:
- Pastikan image file ada di `/public/projects/`
- Gunakan path yang benar: `/projects/filename.png`
- Check file name case sensitivity

---

## 📞 Support

Untuk pertanyaan lebih lanjut atau membutuhkan bantuan customization:
- Review file-file documentation yang sudah ada
- Check kode comments di setiap file
- Run dev server dan inspect elements

Selamat mengkustomisasi! 🎉
