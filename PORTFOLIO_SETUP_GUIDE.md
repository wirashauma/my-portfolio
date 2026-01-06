# Portfolio Setup Guide

## 📁 Image Directory Structure

Place your images in the `/public` folder with the following structure:

```
public/
├── projects/
│   ├── sumatrans-screenshot.png      (Mobile screenshot - 9:16 aspect ratio)
│   ├── barasiah-screenshot.png       (Mobile screenshot - 9:16 aspect ratio)
│   └── education-system.png          (Web app screenshot)
└── [other assets]
```

## 📱 Mobile Screenshot Specifications

### For Sumatrans & Barasiah (Mobile Apps):
- **Aspect Ratio**: 9:16 (portrait)
- **Recommended Size**: 540px × 960px or 1080px × 1920px
- **Format**: PNG or JPG
- **Content**: Full phone UI screenshots

The component automatically wraps these in a beautiful iPhone mockup frame with:
- Black phone bezel
- Notch simulation
- Shadow effects
- Glass-like appearance

### For Education System (Web App):
- **Aspect Ratio**: 16:9 (landscape) or custom
- **Recommended Size**: 1200px × 675px minimum
- **Format**: PNG or JPG
- **Content**: Desktop UI screenshot with gradient overlay

## 🎨 Component Features

### ScrollReveal Component
Located in: `app/components/ScrollReveal.tsx`

Features:
- **Fade-in + Slide Animation**: Elements animate on scroll
- **Professional Viewport Triggering**: Fires once with margin detection
- **Customizable**: Direction (up/down/left/right), delay, duration, distance
- **Stagger Support**: Built-in `StaggerContainer` and `StaggerItem` for sequential animations

Usage:
```tsx
<ScrollReveal delay={0.2} direction="up" distance={30}>
  <YourComponent />
</ScrollReveal>

<StaggerContainer staggerDelay={0.15}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <ItemComponent />
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Page Sections

#### 1. **Hero Section**
- Animated background glows
- Rotating icon
- Gradient text
- CTA buttons
- Social links
- Scroll indicator

#### 2. **Biodata Section**
- Education info (Universitas Negeri Padang)
- Specialization (Mobile & Backend)
- Focus areas (UX & Performance)
- Hover animations on cards

#### 3. **Experience Section**
- Timeline layout with visual connectors
- Two experiences displayed:
  - Frontend Developer @ Dinas Pendidikan Bukittinggi
  - Mobile Engineer @ Barasiah App
- Technology tags for each role
- Hover effects

#### 4. **Projects Gallery**
- Responsive grid layout
- **Mobile Phone Mockups**:
  - iPhone frame with notch
  - Automatic 9:16 aspect ratio
  - Shadow effects
- **Web App Display**:
  - Direct image with overlay
- Project details, tech stack, and external links
- Hover lift animations

#### 5. **Skills Section**
- 12 core technologies with proficiency levels
- Emoji icons for visual appeal
- Grid layout (2-4 columns responsive)
- Hover scale animation

#### 6. **Contact Section**
- Call-to-action buttons
- Social media links
- Professional footer

## 🎯 Customization Points

### Update Personal Information:
1. **Hero Section** - "Your Name" in email/footer
2. **Biodata** - Education institution and details
3. **Contact** - Email address in `mailto:` links
4. **Social Links** - GitHub/LinkedIn URLs
5. **Footer** - Copyright name and year

### Update Project Information:
Edit the `projects` array in `ProjectsSection()`:
```tsx
const projects = [
  {
    id: 1,
    name: 'Project Name',
    description: 'Description',
    technologies: ['Tech1', 'Tech2'],
    image: '/projects/screenshot.png',
    link: 'https://github.com/...',
    category: 'Mobile App' | 'Web App',
    isMobileApp: true, // false for web apps
  },
  // ...
];
```

### Update Experience:
Edit the `experiences` array in `ExperienceSection()`:
```tsx
const experiences = [
  {
    title: 'Job Title',
    company: 'Company Name',
    period: 'YYYY - YYYY',
    description: 'Description',
    technologies: ['Tech1', 'Tech2'],
    icon: IconComponent,
  },
  // ...
];
```

### Update Skills:
Edit the `skills` array in `SkillsSection()`:
```tsx
const skills = [
  { name: 'Skill Name', level: 'Expert|Advanced|Intermediate', icon: '🎯' },
  // ...
];
```

## 🚀 Performance Features

- **Framer Motion**: Smooth, GPU-accelerated animations
- **Next.js 14 App Router**: Server-side rendering optimizations
- **Tailwind CSS**: Utility-first CSS for minimal bundle
- **Lazy Animations**: Viewport-triggered (only animate when visible)
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Full theme support with `dark:` prefixes

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: 1024px+ (lg)

All components are fully responsive and tested across all breakpoints.

## 🔗 Key Technologies Used

- **React 19.2.3** - UI library
- **Next.js 16.1.1** - Framework with App Router
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion 12.23.26** - Animations
- **Lucide React 0.562.0** - Icons

## 🎬 Animation Details

### Default Animation Timings:
- **Duration**: 0.8s (customizable)
- **Easing**: `[0.25, 0.46, 0.45, 0.94]` (professional curve)
- **Stagger Delay**: 0.1s-0.15s between items
- **Viewport Margin**: 100px below fold for early triggers

### Interaction Animations:
- **Hover Scale**: 1.05 (5% increase)
- **Tap Scale**: 0.95 (on mobile buttons)
- **Y-axis Movement**: -8px (subtle lift)
- **Glow Shadow**: Blue/purple tinted shadows

## 💡 Tips for Best Results

1. **Screenshot Quality**: Use high-DPI screenshots (2x or 3x)
2. **Consistency**: Keep a uniform color scheme in all screenshots
3. **Vertical Spacing**: Screenshots should show the app in a representative state
4. **Loading State**: Avoid screenshots with loading states
5. **Light/Dark**: Match your app's design philosophy
6. **No Overlays**: Avoid screenshot overlays; the mockup handles the frame
7. **File Optimization**: Compress images without losing quality (80-90% quality)

## 🔧 Troubleshooting

### Images not showing?
- Verify path is `/projects/filename.png` (case-sensitive on Linux)
- Check file exists in `/public/projects/`
- Ensure correct image format (PNG/JPG/WEBP)

### Animations stuttering?
- Check browser's GPU acceleration (Chrome DevTools > Rendering)
- Reduce animation complexity on lower-end devices
- Disable animations in reduced-motion prefers setting

### Layout breaking?
- Verify Tailwind CSS is properly configured
- Check TypeScript errors in terminal
- Clear Next.js cache: `rm -rf .next`

## 📦 Build & Deploy

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Lint
npm run lint
```

The portfolio is fully optimized for deployment to Vercel, Netlify, or any Next.js-compatible host.
