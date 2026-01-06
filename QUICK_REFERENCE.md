# 🚀 Quick Reference Card - Portfolio

## ✅ Files Created

```
✨ app/components/ScrollReveal.tsx (149 lines)
   └── Reusable animation components

🎨 app/page.tsx (582 lines)  
   └── Complete portfolio with 6 sections
```

## 📸 Image Setup (5 minutes)

```bash
# Create folder
mkdir public/projects -Force    # Windows
mkdir -p public/projects        # macOS/Linux

# Copy 3 files there:
# sumatrans-screenshot.png      (9:16 portrait)
# barasiah-screenshot.png       (9:16 portrait)
# education-system.png          (16:9 landscape)
```

## 🎨 Update Your Info (10 minutes)
       const data = await fetchData();
       return NextResponse.json({ data }, {
         headers: {
           'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
         },
       });
     } catch (error) {
       return NextResponse.json(
         { error: 'Failed to fetch' },
         { status: 500 }
       );
     }
   }
   ```

### Creating a New Custom Hook

1. **Create hook file**:
   ```typescript
   // app/hooks/useFeature.ts
   'use client';
   
   import { useQuery } from '@tanstack/react-query';
   
   async function fetchFeature() {
     const response = await fetch('/api/feature-name');
     if (!response.ok) throw new Error('Failed to fetch');
     return response.json();
   }
   
   export function useFeature() {
     return useQuery({
       queryKey: ['feature'],
       queryFn: fetchFeature,
       staleTime: 1000 * 60 * 60,
       gcTime: 1000 * 60 * 60 * 24,
     });
   }
   ```

2. **Use in component**:
   ```typescript
   'use client';
   import { useFeature } from '@/app/hooks/useFeature';
   
   export function MyComponent() {
     const { data, isLoading, isError } = useFeature();
     
     if (isLoading) return <Skeleton />;
     if (isError) return <ErrorState />;
     
     return <div>{/* Use data */}</div>;
   }
   ```

### Adding Type Definitions

```typescript
// app/lib/types.ts

// Add new interfaces
export interface Feature {
  id: string;
  name: string;
  description: string;
}

export interface FeatureResponse {
  data: Feature[];
  timestamp: string;
}

// Add component prop types
export interface FeatureComponentProps {
  data?: Feature;
  isLoading?: boolean;
  isError?: boolean;
}
```

### Creating a Reusable Component

```typescript
// app/components/ui/FeatureCard.tsx
'use client';

import type { FeatureComponentProps } from '@/app/lib/types';

export function FeatureCard({ 
  data, 
  isLoading, 
  isError 
}: FeatureComponentProps) {
  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorCard />;
  if (!data) return null;
  
  return (
    <div className="p-6 rounded-lg border border-gray-200">
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </div>
  );
}
```

## 🎨 Tailwind CSS Classes Reference

### Common Patterns

**Responsive Grid**:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

**Card Design**:
```jsx
<div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow">
```

**Text Hierarchy**:
```jsx
<h1 className="text-4xl font-bold">Heading 1</h1>
<h2 className="text-2xl font-semibold">Heading 2</h2>
<p className="text-gray-600 dark:text-gray-400">Body text</p>
```

**Dark Mode Toggle**:
```jsx
<div className="text-gray-900 dark:text-white bg-white dark:bg-gray-950">
```

**Flex Layouts**:
```jsx
{/* Center content */}
<div className="flex items-center justify-center">

{/* Space between */}
<div className="flex items-center justify-between">

{/* Column layout */}
<div className="flex flex-col gap-4">

{/* Responsive flex */}
<div className="flex flex-col md:flex-row gap-4">
```

## 🎬 Framer Motion Patterns

### Basic Animation
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

### Container with Stagger
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
  <motion.div variants={itemVariants}>Item 3</motion.div>
</motion.div>
```

### Hover Effects
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

## 🧪 Testing Commands

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Lint code
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 🔍 Debugging Tips

### Console Logging in Server Components
```typescript
// app/api/github/route.ts
export async function GET() {
  console.log('Fetching GitHub data...'); // Logs to server terminal
  
  const response = await fetch('...');
  console.log('Response status:', response.status);
}
```

### React DevTools Debugging
```typescript
// app/hooks/useGitHubContributions.ts
export function useGitHubContributions() {
  const query = useQuery({...});
  
  // Use React Query DevTools
  console.log('Query state:', query);
  
  return query;
}
```

### Network Inspection
1. Open DevTools → Network tab
2. Filter by `api/github`
3. Check:
   - Response headers (cache headers)
   - Response time
   - Status code

### Check Cache Headers
```bash
curl -i http://localhost:3000/api/github

# Look for:
# Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400
```

## 🚨 Error Handling Checklist

- ✅ API errors return proper HTTP status codes
- ✅ Client shows loading skeleton during fetch
- ✅ Client shows error message on failure
- ✅ Errors don't crash the app
- ✅ Failed requests retry automatically
- ✅ Error messages are user-friendly
- ✅ Errors are logged for debugging

## 📦 Environment Variables

### Add New Variable
1. **In `.env.local`**:
   ```env
   GITHUB_TOKEN=ghp_xxxxx
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

2. **Use in code**:
   ```typescript
   // Server-side (only)
   const token = process.env.GITHUB_TOKEN;
   
   // Client-side (must be NEXT_PUBLIC_)
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
   ```

## 🎯 Performance Checklist

- [ ] ISR set for API routes
- [ ] Cache headers configured
- [ ] TanStack Query staleTime set
- [ ] Images optimized with `next/image`
- [ ] Code splitting enabled (default in Next.js)
- [ ] Lazy loading for heavy components
- [ ] Minified production build
- [ ] CDN configured (Vercel, Cloudflare, etc.)

## 📱 Responsive Breakpoints (Tailwind)

| Class | Breakpoint |
|-------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

**Usage**:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 🔗 Useful Commands

```bash
# Install new package
npm install package-name

# Install dev dependency
npm install --save-dev package-name

# Update all packages
npm update

# Check for vulnerabilities
npm audit

# Clear Next.js cache
rm -rf .next

# Format code with Prettier
npm run format

# Check TypeScript
npx tsc --noEmit
```

## 📚 File Structure Quick Reference

```
Want to add:                    → Create in:
─────────────────────────────────────────────
New API endpoint                app/api/feature/route.ts
New data hook                   app/hooks/useFeature.ts
New component                   app/components/sections/Feature.tsx
Reusable UI element             app/components/ui/Element.tsx
Type definitions                app/lib/types.ts
Utility functions               app/lib/utils.ts
```

---

**Remember**: This structure is designed to scale! Keep components small, hooks focused, and types centralized.
