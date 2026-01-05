# Portfolio Architecture Documentation

## 📁 Directory Structure

```
my-portfolio/
├── app/
│   ├── api/
│   │   └── github/
│   │       └── route.ts                 # GitHub GraphQL API endpoint
│   ├── components/
│   │   ├── sections/
│   │   │   └── GitHubCard.tsx          # GitHub profile card with animations
│   │   └── ui/
│   │       └── Skeleton.tsx            # Reusable skeleton loading components
│   ├── hooks/
│   │   └── useGitHubContributions.ts   # TanStack Query hook for GitHub data
│   ├── lib/
│   │   └── types.ts                    # TypeScript interfaces & types
│   ├── layout.tsx                      # Root layout with metadata
│   ├── page.tsx                        # Home page with QueryClientProvider
│   └── globals.css                     # Global styles
├── public/                             # Static assets
├── .env.local                          # GitHub token (DO NOT COMMIT)
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## 🏗️ Architecture Overview

### Data Flow

```
GitHub API (GraphQL)
        ↓
[/app/api/github/route.ts] (API Route with ISR)
        ↓
[useGitHubContributions Hook] (TanStack Query)
        ↓
[GitHubCard Component] (Client-side rendering)
        ↓
[User's Browser]
```

## 📋 Key Files & Their Responsibilities

### 1. **API Route** (`app/api/github/route.ts`)
- **Purpose**: Fetch GitHub data and cache it with ISR
- **ISR**: Revalidates every 3600 seconds (1 hour)
- **Features**:
  - GraphQL query for user data and contributions
  - Error handling with detailed logging
  - Response caching headers for optimal performance
  - Fully typed responses using TypeScript interfaces
  - Includes retry logic and error boundaries

### 2. **Types** (`app/lib/types.ts`)
- **Purpose**: Centralized TypeScript interfaces for the entire app
- **Includes**:
  - `GitHubContributionData`: Main data structure
  - `GitHubUser`: User profile information
  - `APISuccessResponse<T>`: Generic API success wrapper
  - `APIErrorResponse`: Standard error response
  - `GitHubCardProps`: Component prop types

### 3. **Custom Hook** (`app/hooks/useGitHubContributions.ts`)
- **Purpose**: Client-side data fetching with TanStack Query
- **Features**:
  - Automatic caching (1 hour stale time)
  - Retry logic (3 attempts with exponential backoff)
  - Loading states for UI feedback
  - Error handling with user-friendly messages

### 4. **Components**

#### **GitHubCard** (`app/components/sections/GitHubCard.tsx`)
- **Purpose**: Display GitHub profile with contribution data
- **Features**:
  - Framer Motion animations for smooth interactions
  - Responsive design with Tailwind CSS
  - Dark mode support
  - Skeleton loading state
  - Error state with fallback UI
  - Lucide React icons for professional look
  - External links to GitHub, website, Twitter

#### **Skeleton** (`app/components/ui/Skeleton.tsx`)
- **Purpose**: Loading placeholder components
- **Includes**:
  - Generic `Skeleton` component
  - `GitHubCardSkeleton` for the GitHub card layout
  - Customizable width, height, and border radius

### 5. **Layout** (`app/layout.tsx`)
- **Purpose**: Root layout with comprehensive metadata
- **Includes**:
  - SEO metadata (title, description, keywords)
  - OpenGraph tags for social sharing
  - Twitter card configuration
  - Viewport settings for responsive design
  - Dark mode color scheme

### 6. **Home Page** (`app/page.tsx`)
- **Purpose**: Main portfolio page
- **Features**:
  - React Query provider setup
  - Hero section with CTA buttons
  - Features showcase
  - GitHub data integration
  - Navigation and footer

## 🔒 Security Best Practices

### Environment Variables
```env
GITHUB_TOKEN=ghp_xxxxxxxxxxxxx  # Keep secure, never commit
```

**Location**: `.env.local` (git-ignored)

**Features**:
- Token only used server-side (API route)
- Never exposed to client
- Bearer token authentication with GitHub GraphQL API

## ⚡ Performance Optimizations

### 1. **ISR (Incremental Static Regeneration)**
```typescript
export const revalidate = 3600; // 1 hour
```
- Pages regenerate on-demand without full rebuilds
- Perfect for data that changes periodically

### 2. **HTTP Caching Headers**
```typescript
headers: {
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
}
```
- CDN caching for 1 hour
- Stale content served while revalidating for up to 24 hours

### 3. **TanStack Query Optimization**
- `staleTime`: 1 hour (no refetch during this period)
- `gcTime`: 24 hours (data kept in memory)
- Automatic retry with exponential backoff

### 4. **Code Splitting**
- Client components (`'use client'`) only load in browser
- Server components reduce JavaScript bundle

## 🎨 UI/UX Features

### Animations
- **Framer Motion**: Smooth, professional animations
- **Variants**: Staggered animations for visual hierarchy
- **Transitions**: 0.3-0.5s duration for imperceptible feel

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Dark Mode**: Automatic dark/light theme switching
- **Responsive**: Mobile-first responsive design
- **Accessibility**: Semantic HTML with ARIA labels

## 🔧 TypeScript Strict Mode

All files use strict TypeScript with:
- Explicit type annotations
- No implicit `any` types
- Generic types for reusable components
- Interface composition for maintainability

## 📊 API Response Structure

### Success Response
```json
{
  "data": {
    "user": {
      "login": "username",
      "name": "Full Name",
      "avatarUrl": "https://...",
      "bio": "...",
      "company": "...",
      "location": "...",
      "websiteUrl": "...",
      "twitterUsername": "..."
    },
    "totalContributions": 1234,
    "contributionCollection": {
      "contributionCalendar": {
        "totalContributions": 1234,
        "weeks": [...]
      }
    }
  },
  "timestamp": "2026-01-05T10:30:00.000Z"
}
```

### Error Response
```json
{
  "error": "Error message",
  "details": "Additional context (optional)",
  "timestamp": "2026-01-05T10:30:00.000Z"
}
```

## 🚀 Deployment Checklist

- [ ] Update metadata in `layout.tsx` with your info
- [ ] Add your GitHub username to pages
- [ ] Configure custom domain or Vercel deployment
- [ ] Set `GITHUB_TOKEN` in production environment
- [ ] Test dark mode across browsers
- [ ] Verify ISR revalidation works
- [ ] Check Core Web Vitals and Lighthouse scores

## 🔗 Useful Links

- [Next.js 14+ Docs](https://nextjs.org/docs)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [GitHub GraphQL API](https://docs.github.com/en/graphql)
- [Lucide React Icons](https://lucide.dev)

## 📝 Notes

This portfolio demonstrates:
✅ Industry-standard architecture
✅ Production-ready error handling
✅ Optimal performance with ISR & caching
✅ Professional UI/UX with animations
✅ Type-safe development with TypeScript
✅ SEO optimization with metadata
✅ Dark mode support
✅ Responsive design
