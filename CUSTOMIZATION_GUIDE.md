# Portfolio Customization Examples

## Quick Reference for Common Changes

### 1. Update Hero Section Text

**File**: `app/page.tsx` - Line ~70

```tsx
// Change the main headline
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
  Your Title Here &
  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
    Your Subtitle Here
  </span>
</h1>

// Change the description
<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
  Your description with <span className="text-blue-400 font-semibold">highlighted tech</span>
</p>
```

### 2. Update Social Links

**File**: `app/page.tsx` - Multiple locations (Hero, Contact sections)

```tsx
// Change GitHub link
<motion.a
  href="https://github.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  // ...
>

// Change LinkedIn link
<motion.a
  href="https://linkedin.com/in/yourprofile"
  target="_blank"
  rel="noopener noreferrer"
  // ...
>

// Change email
<motion.a
  href="mailto:your.email@example.com"
  // ...
>
```

### 3. Change Color Scheme

The portfolio uses Tailwind color utilities. Common color classes:

**Current Gradient**: Blue → Purple → Pink

To change globally, search and replace:
- `from-blue-500` → `from-cyan-500` (or any other color)
- `to-purple-500` → `to-teal-500`
- `bg-blue-500/20` → `bg-cyan-500/20`

Example color combinations:
```
Blue → Purple (Current): Professional, Modern
Cyan → Teal: Tech, Fresh
Orange → Pink: Warm, Creative
Green → Emerald: Natural, Growth
```

### 4. Add Another Experience

**File**: `app/page.tsx` - Line ~330 in `ExperienceSection()`

```tsx
const experiences = [
  // ... existing experiences
  {
    title: 'Job Title',
    company: 'Company Name',
    period: '2023 - 2024',
    description:
      'Describe what you did, impact metrics, key achievements.',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    icon: Briefcase, // or Zap, Code2, etc from lucide-react
  },
];
```

### 5. Add Another Project

**File**: `app/page.tsx` - Line ~420 in `ProjectsSection()`

```tsx
const projects = [
  // ... existing projects
  {
    id: 4,
    name: 'Project Name',
    description: 'Brief description of what it does',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: '/projects/project-screenshot.png',
    link: 'https://github.com/username/project',
    category: 'Mobile App', // or 'Web App'
    isMobileApp: true, // false if web app
  },
];
```

### 6. Add More Skills

**File**: `app/page.tsx` - Line ~580 in `SkillsSection()`

```tsx
const skills = [
  // ... existing skills
  { name: 'Vue.js', level: 'Advanced', icon: '🟢' },
  { name: 'GraphQL', level: 'Intermediate', icon: '◆' },
  { name: 'Docker', level: 'Intermediate', icon: '🐳' },
];
```

Available Proficiency Levels:
- `'Expert'` - Uses, teaches others
- `'Advanced'` - Professional production use
- `'Intermediate'` - Comfortable, can build projects
- `'Beginner'` - Learning

### 7. Create New Project Images Folder Structure

```bash
# In your terminal, create the projects folder
mkdir -p public/projects

# Place your screenshots there:
# public/projects/sumatrans-screenshot.png (9:16 aspect)
# public/projects/barasiah-screenshot.png (9:16 aspect)
# public/projects/education-system.png (16:9 aspect)
```

### 8. Disable Mobile Mockup Frame (Show Full Screenshots)

**File**: `app/page.tsx` - Line ~470, change project object:

```tsx
// OLD: isMobileApp: true
// NEW: isMobileApp: false

// This will display the image full-width instead of in phone frame
```

### 9. Change Animation Timings

**File**: `app/components/ScrollReveal.tsx`

```tsx
// Global animation duration (default: 0.8s)
transition: {
  duration: 1.2, // Slower (1.2s)
  delay,
  ease: [0.25, 0.46, 0.45, 0.94],
},

// Stagger timing (default: 0.1s)
transition: {
  staggerChildren: 0.2, // 200ms between items
}
```

### 10. Add Custom Sections

Example: Adding a "Testimonials" section:

```tsx
/**
 * Testimonials Section Component
 */
function TestimonialsSection() {
  const testimonials = [
    {
      author: 'Name',
      role: 'Position @ Company',
      quote: 'What they said about you',
      image: '/testimonials/person.jpg',
    },
    // ... more testimonials
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            What People Say
          </h2>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <motion.div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
                <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// Then add it to the main page:
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth">
      <HeroSection />
      <BiodataSection />
      <ExperienceSection />
      <TestimonialsSection /> {/* Add here */}
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
```

### 11. Change Footer Copyright

**File**: `app/page.tsx` - Line ~680 in `ContactSection()`

```tsx
<p className="text-gray-400 mt-12 text-sm">
  © 2024 Your Name. All rights reserved. | Built with Next.js, Tailwind CSS & Framer Motion
</p>
```

### 12. Add Navigation Header (Optional)

If you want a sticky header with navigation links:

```tsx
/**
 * Navigation Header Component
 */
function NavigationHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Your Name</h1>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}

// Then add to main page:
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth">
      <NavigationHeader />
      <HeroSection />
      {/* ... rest of sections */}
    </main>
  );
}
```

### 13. Dark Mode Toggle (Optional)

The portfolio already supports dark mode via CSS. To add a toggle button:

```tsx
'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700"
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
```

### 14. Change Aspect Ratio for Mobile Mockup

**File**: `app/page.tsx` - Line ~505

```tsx
// Current: aspect-[9/16] for vertical phone
// Options:
// aspect-[9/16] - iPhone (portrait)
// aspect-[16/9] - Wide format
// aspect-square - Square format

<div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden aspect-[9/16]">
```

## 🎨 Animation Customization Examples

### Make Animations Faster
```tsx
// In ScrollReveal delay={0.2} direction="up" distance={30} duration={0.6}>
// Reduce duration from 0.8 to 0.6
```

### Disable Animations on Mobile
```tsx
// Add at top of component
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Then use in Framer Motion:
animate={prefersReducedMotion ? false : {...}}
```

### Customize Easing
```tsx
// Linear (no acceleration)
ease: 'linear'

// Smooth (current)
ease: [0.25, 0.46, 0.45, 0.94]

// Bouncy
ease: 'easeInOut'

// Custom cubic bezier
ease: [0.17, 0.67, 0.83, 0.67]
```

## 🚀 Performance Tips

1. **Image Optimization**:
   - Use next/image for automatic optimization
   - Compress before uploading (TinyPNG, ImageOptim)
   - Use WebP format when possible

2. **Animation Performance**:
   - Keep animations on opacity and transforms (GPU accelerated)
   - Avoid animating top/left/width (CPU intensive)
   - Use `will-change` CSS for better performance

3. **Bundle Size**:
   - Portfolio is ~50KB gzipped
   - Lucide React icons are tree-shakeable
   - Next.js automatically code-splits sections

---

## Need Help?

Refer to:
- [Framer Motion Docs](https://www.framer.com/motion)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Lucide React Icons](https://lucide.dev)
- [Next.js Documentation](https://nextjs.org/docs)
