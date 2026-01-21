# 🎨 Color Palette & Design System

## Emerald Green Palette (Primary Colors)

### Emerald Shades

| Shade | Hex Code | Usage | Tailwind |
|-------|----------|-------|----------|
| Emerald 50 | #f0fdf4 | Light backgrounds, hover states | `bg-emerald-50` |
| Emerald 100 | #d1fae5 | Badges, section accents | `bg-emerald-100` |
| Emerald 200 | #a7f3d0 | Border colors | `border-emerald-200` |
| Emerald 600 | #059669 | Buttons, primary actions | `bg-emerald-600` |
| Emerald 700 | #047857 | Hover states | `hover:bg-emerald-700` |

## Neutral Palette (Grayscale)

| Shade | Hex Code | Usage | Tailwind |
|-------|----------|-------|----------|
| White | #ffffff | Main background | `bg-white` |
| Gray 50 | #f9fafb | Section backgrounds | `bg-gray-50` |
| Gray 100 | #f3f4f6 | Card backgrounds | `bg-gray-100` |
| Gray 200 | #e5e7eb | Borders | `border-gray-200` |
| Gray 700 | #374151 | Body text | `text-gray-700` |
| Gray 900 | #111827 | Headings | `text-gray-900` |

## Dark Palette (Minimal Use)

| Color | Hex Code | Usage | Tailwind |
|-------|----------|-------|----------|
| Gray 800 | #1f2937 | Dark backgrounds (contacts) | `bg-gray-800` |
| Gray 900 | #111827 | Very dark backgrounds | `bg-gray-900` |

---

## Component Color Usage

### Navigation Bar
```
Background: White with opacity (bg-white/95)
Border: Gray 200
Text: Gray 700
Active Link: Emerald 600
Button: Emerald 600 (bg-emerald-600)
```

### Hero Section
```
Background: White
Text: Gray 900
Accent Badge: Emerald 100 (bg) with Emerald 700 (text)
Primary Button: Emerald 600
Secondary Button: Gray 200
```

### Cards
```
Background: White or Gray 50
Border: Gray 200 (border-gray-200)
Hover: Emerald 300 (border-emerald-300)
Shadow: Subtle gray shadow
```

### Timeline (Experience)
```
Line Color: Emerald 600
Dot Background: Emerald 600
Text: Gray 900 (headings) / Gray 700 (body)
```

### Tags/Badges
```
Background: Emerald 100 (bg-emerald-100)
Text: Emerald 700 (text-emerald-700)
Hover: Emerald 200 (hover:bg-emerald-200)
```

### Section Backgrounds
```
Default: White (bg-white)
Alternate: Gray 50 (bg-gray-50)
Dark: Gray 900 (bg-gray-900) - hanya untuk contact
```

---

## Spacing System

Based on Tailwind default spacing scale:

```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
```

### Common Padding
- Section padding: `py-20` (80px)
- Card padding: `p-6` atau `p-8` (24px or 32px)
- Container padding: `px-4 sm:px-6 lg:px-8`

---

## Typography

### Headings
- H1: text-5xl sm:text-6xl lg:text-7xl - **text-gray-900**
- H2: text-4xl sm:text-5xl - **text-gray-900**
- H3: text-2xl sm:text-3xl - **text-gray-900**
- H4: text-lg - **text-gray-900**

### Body Text
- Large: text-lg - **text-gray-700**
- Normal: text-base - **text-gray-700**
- Small: text-sm - **text-gray-600**

### Accent Text
- Emerald text: **text-emerald-600**
- Emerald semibold: **text-emerald-600 font-semibold**

---

## Hover & Active States

### Buttons
```
Default: bg-emerald-600 text-white
Hover: bg-emerald-700
Active: bg-emerald-800
Focus: ring-2 ring-emerald-500
```

### Cards
```
Default: shadow-lg
Hover: shadow-xl, y-offset: -8px (translate-y)
Border: border-gray-200
Hover Border: border-emerald-300
```

### Links
```
Default: text-emerald-600
Hover: text-emerald-700, underline
```

---

## Shadow System

```
Soft: shadow-md (0 4px 6px rgba(0, 0, 0, 0.1))
Medium: shadow-lg (0 10px 15px rgba(0, 0, 0, 0.1))
Emphasized: shadow-xl (0 20px 25px rgba(0, 0, 0, 0.1))
Hover Shadow: shadow-2xl (0 25px 50px rgba(0, 0, 0, 0.15))
```

### Emerald Shadows (Special)
```
hover:shadow-emerald-200 (Subtle green tint)
```

---

## Border Radius

```
Small: rounded-lg (0.5rem)
Medium: rounded-xl (0.75rem)
Large: rounded-2xl (1rem)
Full: rounded-full (9999px) - badges
```

---

## Transitions & Animations

### Standard Transitions
```
Duration: transition-all
Fast: 200ms
Normal: 300ms
Slow: 500ms
```

### Common Effects
```
Hover Scale: hover:scale-105
Hover Translate: hover:y-[-8px] / hover:x-[4px]
Smooth Color Change: transition-colors
```

---

## Accessibility

### Contrast Ratios
- Text on White (Emerald 600): 4.5:1 ✓ (WCAG AA)
- Text on Gray 50 (Emerald 600): 4.5:1 ✓ (WCAG AA)
- Headings on White (Gray 900): 21:1 ✓ (AAA)
- Body on White (Gray 700): 10:1 ✓ (AAA)

### Focus States
- All interactive elements have clear focus states
- Ring color: emerald-500 with ring-2

---

## Quick CSS Classes Reference

```css
/* Primary Colors */
.btn-primary { @apply px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all; }
.btn-secondary { @apply px-8 py-4 bg-gray-200 text-gray-900 rounded-xl font-semibold hover:bg-gray-300 transition-all; }

/* Cards */
.card { @apply p-6 lg:p-8 bg-white rounded-2xl shadow-lg border border-gray-200; }
.card-hover { @apply hover:shadow-xl hover:border-emerald-300 hover:y-[-8px] transition-all; }

/* Badge */
.badge { @apply px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700 rounded-full; }

/* Section */
.section-default { @apply w-full py-20 px-4 sm:px-6 lg:px-8 bg-white; }
.section-alt { @apply w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50; }
.section-dark { @apply w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-900; }
```

---

## 📐 Responsive Breakpoints

```
Mobile: < 640px (sm)
Tablet: 640px - 1024px (md)
Desktop: > 1024px (lg)
```

All color values remain consistent across breakpoints.

---

**Last Updated**: 2024
**Palette**: Emerald Green (#10b981) & White
**Status**: ✅ Live and Implemented
