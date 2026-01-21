# 📐 Projects Layout Update - 2x2 Grid Design

## Perubahan Layout Projects

Portfolio projects section telah diupdate dengan layout grid yang lebih compact dan professional.

---

## 🎯 New Layout Structure

### Sebelum (Large Cards)
```
Mobile Projects (Full Width - Large)
├── Project 1 (Big card with phone mockup + details side by side)
└── Project 2 (Big card with phone mockup + details side by side)

Website Projects (Full Width - Large)
├── Project 1 (Big card with screenshot + details side by side)
└── Project 2 (placeholder)
```

### Sesudah (Compact Grid)
```
Projects Grid (2 Columns)
┌─────────────────────────────────────┐
│  Mobile 1      │  Mobile 2          │
│  (Vertical)    │  (Vertical)        │
│  Compact       │  Compact           │
├─────────────────────────────────────┤
│  Website 1     │  Website 2         │
│  (Horizontal)  │  (Horizontal)      │
│  Compact       │  Compact           │
└─────────────────────────────────────┘
```

---

## 📱 Mobile Projects (Vertikal - 2 Projects)

### Layout Komponen
```
┌───────────────────────┐
│  [Phone Mockup] (32px)│ ← Compact phone frame
├───────────────────────┤
│  [Mobile Badge]       │ ← Small badge
│  Project Name (lg)    │ ← Text lg
│  Short Description    │ ← Truncated
│                       │
│  Features:            │ ← Compact list
│  ✓ Feature 1 (xs)    │
│  ✓ Feature 2 (xs)    │
│  ✓ Feature 3 (xs)    │
│                       │
│  [Tech] [Tech] [...]  │ ← Small tech tags
│                       │
│  [View Button]        │ ← Compact button
└───────────────────────┘
```

### Styling Details
- Card padding: `p-5` (20px)
- Phone mockup width: `w-32` (128px)
- Title size: `text-lg`
- Font sizes: `text-xs`, `text-sm`
- Gap between items: `gap-6` (grid gap)
- Border radius: `rounded-xl`
- Shadow: `shadow-md` hover `shadow-lg`

---

## 💻 Website Projects (Horizontal - 2 Projects)

### Layout Komponen
```
┌───────────────────────────┐
│  [Website Screenshot]     │ ← h-40 (160px)
│  (Horizontal showcase)    │
├───────────────────────────┤
│  [Web App Badge]          │ ← Small badge
│  Project Name (lg)        │ ← Text lg
│  Short Description        │ ← Truncated
│                           │
│  Features:                │ ← Compact list
│  ✓ Feature 1 (xs)        │
│  ✓ Feature 2 (xs)        │
│  ✓ Feature 3 (xs)        │
│                           │
│  [Tech] [Tech] [...]      │ ← Small tech tags
│                           │
│  [View Button]            │ ← Compact button
└───────────────────────────┘
```

### Styling Details
- Card padding: `p-5` (20px)
- Screenshot height: `h-40` (160px)
- Screenshot width: Full card width
- Title size: `text-lg`
- Font sizes: `text-xs`, `text-sm`
- Aspect ratio: Auto (responsive)
- Border radius: `rounded-lg` (screenshot), `rounded-xl` (card)

---

## 📊 Responsive Grid

### Desktop (md: 768px+)
```
2 Columns Grid
┌─────────────┬─────────────┐
│  Project 1  │  Project 2  │
├─────────────┼─────────────┤
│  Project 3  │  Project 4  │
└─────────────┴─────────────┘
Gap: 24px (gap-6)
```

### Tablet (sm: 640px+)
```
2 Columns (smaller)
┌─────────────┬─────────────┐
│  Project 1  │  Project 2  │
├─────────────┼─────────────┤
│  Project 3  │  Project 4  │
└─────────────┴─────────────┘
```

### Mobile (< 640px)
```
1 Column Stack
┌─────────────────────────┐
│  Project 1              │
├─────────────────────────┤
│  Project 2              │
├─────────────────────────┤
│  Project 3              │
├─────────────────────────┤
│  Project 4              │
└─────────────────────────┘
```

---

## 🎨 Color & Styling

### Card Styling
```css
Base: bg-white
Border: border-gray-200 (1px)
Padding: p-5 (20px)
Radius: rounded-xl (12px)
Shadow: shadow-md (normal)
         shadow-lg (hover)
Hover: y: -4px (translate up)
```

### Badge Styling
```css
Badge: bg-emerald-100 text-emerald-700
Padding: px-3 py-1
Font: text-xs font-semibold
Radius: rounded-full
```

### Button Styling
```css
Button: bg-emerald-600 text-white
Padding: px-4 py-2
Radius: rounded-lg
Font: font-semibold text-sm
Hover: bg-emerald-700
Icon: w-4 h-4 (small)
Gap: gap-1 (between icon and text)
```

### Tech Tags
```css
Tag: bg-gray-100 text-gray-800
Padding: px-2 py-1
Font: text-xs font-semibold
Radius: rounded
Hover: bg-emerald-100 text-emerald-700
Gap: gap-1 (between tags)
```

---

## 📝 Text Hierarchy

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Badge | `text-xs` | `font-semibold` | Emerald |
| Title | `text-lg` | `font-bold` | Gray 900 |
| Description | `text-sm` | `normal` | Gray 700 |
| Feature Label | `text-sm` | `font-bold` | Gray 900 |
| Feature Item | `text-xs` | `normal` | Gray 700 |
| Tech Tag | `text-xs` | `font-semibold` | Gray 800 |
| Button | `text-sm` | `font-semibold` | White |

---

## 🎯 Total Projects

- **Mobile Projects**: 2
  - Sumatrans - Travel App
  - Barasiah - Service Marketplace
  
- **Website Projects**: 2 (baru ditambah)
  - Education Management System
  - E-Commerce Platform

**Total: 4 projects** (2 mobile vertikal + 2 web horizontal)

---

## ✨ Benefits

✅ **Compact Design**
- Less scrolling
- More information visible
- Better overview

✅ **Professional Appearance**
- Clean grid layout
- Consistent styling
- Modern aesthetics

✅ **Better Organization**
- 2x2 grid layout
- Clear separation
- Mobile vs Web distinction

✅ **Mobile Responsive**
- Adapts to screen size
- Stack on mobile
- Grid on tablet/desktop

✅ **Performance**
- Faster rendering
- Smaller cards
- Better load time

---

## 🔄 Changes Made

### Before
- Large full-width cards
- Phone mockup + details side by side
- Only 3 projects shown
- Long scrolling required

### After
- Compact grid cards (2 columns)
- Phone mockup centered above details
- 4 projects shown (2 new added)
- Better overview at a glance
- Smaller padding and fonts
- More compact descriptions

---

## 📱 Device Preview

### Desktop (1024px+)
```
┌─────────────────────────────────────────────────────┐
│                  MOBILE PROJECTS                    │
├──────────────────────┬──────────────────────────────┤
│   Project 1          │   Project 2                  │
│   (Compact Card)     │   (Compact Card)             │
├──────────────────────┼──────────────────────────────┤
│                WEBSITE PROJECTS                     │
├──────────────────────┬──────────────────────────────┤
│   Project 3          │   Project 4                  │
│   (Compact Card)     │   (Compact Card)             │
└──────────────────────┴──────────────────────────────┘
```

### Tablet (640px+)
```
Similar 2x2 layout, smaller spacing
```

### Mobile (< 640px)
```
┌──────────────────────┐
│  Project 1           │
├──────────────────────┤
│  Project 2           │
├──────────────────────┤
│  Project 3           │
├──────────────────────┤
│  Project 4           │
└──────────────────────┘
```

---

## 🎓 Technical Specs

- **Grid**: `md:grid-cols-2` (2 columns on medium+)
- **Gap**: `gap-6` (24px between cards)
- **Card Height**: Auto (content-based)
- **Screenshot Height**: `h-40` (160px)
- **Phone Mockup Width**: `w-32` (128px)
- **Animations**: `whileHover={{ y: -4 }}`
- **Transitions**: `transition-all` (smooth)

---

**Layout Updated Successfully! ✅**

Projects section now displays 4 projects in a clean 2x2 grid with:
- 2 Mobile projects (vertical layout, compact)
- 2 Website projects (horizontal layout, compact)
- Better organization and visual hierarchy
