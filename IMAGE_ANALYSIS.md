# Image & Asset Analysis Report

## Summary

This document lists all image and SVG placeholders in the codebase, what exists, and what's missing.

---

## 📊 Current Status

### ✅ Images That Exist (7 sector images)

- `public/assets/images/sectors/airport.jpg`
- `public/assets/images/sectors/data-centre.jpg`
- `public/assets/images/sectors/industrial.jpg`
- `public/assets/images/sectors/metro.jpg`
- `public/assets/images/sectors/residential.jpg`
- `public/assets/images/sectors/solar.jpg`

### ✅ Icons That Exist (12 PNG files - should be SVG)

**Note:** These are currently PNG files but the code expects SVG files!

- `public/assets/icons/Airport I.png`
- `public/assets/icons/Commercial I.png`
- `public/assets/icons/Data Centre I.png`
- `public/assets/icons/Hospital I.png`
- `public/assets/icons/Hotel I.png`
- `public/assets/icons/Industrial I.png`
- `public/assets/icons/Institute I.png`
- `public/assets/icons/Mall I.png`
- `public/assets/icons/Metro I.png`
- `public/assets/icons/Residential I.png`
- `public/assets/icons/Solar I.png`
- `public/assets/icons/T&D I.png`

### ✅ Certificate Images (3 PNG files)

- `public/assets/ehs-image-1.png`
- `public/assets/ehs-image-2.png`
- `public/assets/ehs-image-3.png`

---

## ❌ Missing Images

### 1. Hero Section Images (2 missing)

**Location:** `src/components/organisms/HeroSection.tsx`

- **`/assets/images/hero-overlay.png`** (Line 27)
  - Used as: Background overlay for hero section
  - Size: Full viewport width
  - Purpose: Decorative background with 80% opacity
- **`/assets/images/hero-card.jpg`** (Line 72)
  - Used as: Main hero card image
  - Size: Responsive (h-64 sm:h-80 lg:h-96)
  - Purpose: Primary visual in hero section

### 2. Logo Strip Image (1 missing)

**Location:** `src/components/organisms/LogoTickerSection.tsx`, `Navbar.tsx`, `AboutSection.tsx`

- **`/assets/logo-strip.png`** (Used in 3 places)
  - LogoTickerSection.tsx (Line 18)
  - Navbar.tsx (Line 25)
  - AboutSection.tsx (Line 95)
  - Purpose: Company logo / Partner logos ticker
  - Size: Full width, height 10 (2.5rem)

### 3. Sector Images (6 missing)

**Location:** `src/data/sectors.ts`

- **`/assets/images/sectors/commercial.jpg`** (Line 111)
  - Sector: COMMERCIAL
  - Projects: 10 listed
- **`/assets/images/sectors/td.jpg`** (Line 145)
  - Sector: T&D (Transmission & Distribution)
  - Projects: 12 listed
- **`/assets/images/sectors/institute.jpg`** (Line 166)
  - Sector: INSTITUTE
  - Projects: Placeholder (to be attached)
- **`/assets/images/sectors/hotel-resort.jpg`** (Line 176)
  - Sector: HOTEL & RESORT
  - Projects: Placeholder (to be attached)
- **`/assets/images/sectors/hospital.jpg`** (Line 186)
  - Sector: HOSPITAL
  - Projects: 7 listed
- **`/assets/images/sectors/mall.jpg`** (Line 202)
  - Sector: MALL
  - Projects: Placeholder (to be attached)

### 4. Duplicate Solar Image Reference

**Location:** `src/data/sectors.ts` (Line 64)

- **`/assets/images/solar.jpg`** (incorrect path)
  - Should be: `/assets/images/sectors/solar.jpg` (which already exists)
  - This is a duplicate entry with wrong path

---

## 🔧 Icon Format Issue

### Problem: Icons are PNG but code expects SVG

**Code Reference:** `src/components/organisms/SectorsWeServeSection.tsx` (Line 123)

```tsx
src={`/assets/icons/${sector.icon_path}.svg`}
```

**Current Files:** All icons are `.png` format with names like "Airport I.png"

**Expected Icon Names (from sectors.ts):**

1. `icon-metro-train.svg` → Currently: "Metro I.png"
2. `icon-solar-panel.svg` → Currently: "Solar I.png"
3. `icon-data-centre.svg` → Currently: "Data Centre I.png"
4. `icon-factory.svg` → Currently: "Industrial I.png"
5. `icon-airplane.svg` → Currently: "Airport I.png"
6. `icon-office-building.svg` → Currently: "Commercial I.png"
7. `icon-house.svg` → Currently: "Residential I.png"
8. `icon-pylon.svg` → Currently: "T&D I.png"
9. `icon-institute.svg` → Currently: "Institute I.png"
10. `icon-hotel.svg` → Currently: "Hotel I.png"
11. `icon-hospital.svg` → Currently: "Hospital I.png"
12. `icon-mall.svg` → Currently: "Mall I.png"

### Required Actions:

1. **Convert PNG icons to SVG format** (or update code to use .png)
2. **Rename files** to match the expected naming convention
3. **Remove spaces** from filenames

---

## 📋 Complete Missing Assets Checklist

### High Priority (Breaking functionality)

- [ ] `/assets/logo-strip.png` - Used in 3 components
- [ ] `/assets/images/hero-overlay.png` - Hero section background
- [ ] `/assets/images/hero-card.jpg` - Hero section main image
- [ ] Convert/rename all 12 sector icons to SVG format with correct names

### Medium Priority (Sector images)

- [ ] `/assets/images/sectors/commercial.jpg`
- [ ] `/assets/images/sectors/hospital.jpg`
- [ ] `/assets/images/sectors/td.jpg`

### Low Priority (Sectors with placeholder projects)

- [ ] `/assets/images/sectors/institute.jpg`
- [ ] `/assets/images/sectors/hotel-resort.jpg`
- [ ] `/assets/images/sectors/mall.jpg`

### Code Fixes Needed

- [ ] Fix duplicate solar sector entry in `sectors.ts` (line 59-71)
- [ ] Fix incorrect path `/assets/images/solar.jpg` → `/assets/images/sectors/solar.jpg`

---

## 📁 Recommended File Structure

```
public/
└── assets/
    ├── logo-strip.png                    # ❌ MISSING
    ├── ehs-image-1.png                   # ✅ EXISTS
    ├── ehs-image-2.png                   # ✅ EXISTS
    ├── ehs-image-3.png                   # ✅ EXISTS
    ├── icons/
    │   ├── icon-metro-train.svg          # ❌ NEEDS CONVERSION/RENAME
    │   ├── icon-solar-panel.svg          # ❌ NEEDS CONVERSION/RENAME
    │   ├── icon-data-centre.svg          # ❌ NEEDS CONVERSION/RENAME
    │   ├── icon-factory.svg              # ❌ NEEDS CONVERSION/RENAME
    │   ├── icon-airplane.svg             # ❌ NEEDS CONVERSION/RENAME
    │   ├── icon-office-building.svg      # ❌ NEEDS CONVERSION/RENAME
    │   ├── icon-house.svg                # ❌ NEEDS CONVERSION/RENAME
    │   ├── icon-pylon.svg                # ❌ NEEDS CONVERSION/RENAME
    │   ├── icon-institute.svg            # ❌ NEEDS CONVERSION/RENAME
    │   ├── icon-hotel.svg                # ❌ NEEDS CONVERSION/RENAME
    │   ├── icon-hospital.svg             # ❌ NEEDS CONVERSION/RENAME
    │   └── icon-mall.svg                 # ❌ NEEDS CONVERSION/RENAME
    └── images/
        ├── hero-overlay.png              # ❌ MISSING
        ├── hero-card.jpg                 # ❌ MISSING
        └── sectors/
            ├── metro.jpg                 # ✅ EXISTS
            ├── solar.jpg                 # ✅ EXISTS
            ├── data-centre.jpg           # ✅ EXISTS
            ├── industrial.jpg            # ✅ EXISTS
            ├── airport.jpg               # ✅ EXISTS
            ├── commercial.jpg            # ❌ MISSING
            ├── residential.jpg           # ✅ EXISTS
            ├── td.jpg                    # ❌ MISSING
            ├── institute.jpg             # ❌ MISSING
            ├── hotel-resort.jpg          # ❌ MISSING
            ├── hospital.jpg              # ❌ MISSING
            └── mall.jpg                  # ❌ MISSING
```

---

## 🎯 Image Specifications

### Hero Images

- **hero-overlay.png**: Full viewport, decorative pattern/texture, 80% opacity
- **hero-card.jpg**: Responsive (256px to 384px height), showcasing engineering/infrastructure

### Logo Strip

- **logo-strip.png**: Wide horizontal strip, height ~40px, containing partner/client logos

### Sector Images

- **Format**: JPG
- **Aspect Ratio**: Should be consistent (appears to be landscape)
- **Content**: Representative images of each sector (metro stations, solar panels, data centers, etc.)
- **Size**: Optimized for web (recommend 800-1200px width)

### Icons

- **Format**: SVG (scalable vector graphics)
- **Style**: Should match design system (likely line icons or simple filled icons)
- **Size**: SVG (scalable), but displayed at various sizes
- **Naming**: Lowercase with hyphens (e.g., `icon-metro-train.svg`)

---

## 🔄 Quick Fix Options

### Option 1: Convert PNG icons to SVG

Use a tool like:

- Adobe Illustrator
- Inkscape (free)
- Online converters (vectorizer.io, convertio.co)

### Option 2: Update code to use PNG icons

Change in `SectorsWeServeSection.tsx`:

```tsx
// From:
src={`/assets/icons/${sector.icon_path}.svg`}

// To:
src={`/assets/icons/${sector.icon_path}.png`}
```

And update `sectors.ts` icon_path values to match existing filenames.

---

## 📝 Notes

1. **Duplicate Solar Sector**: There are two "SOLAR" entries in the sectors array (lines 36-48 and 59-71). The second one has an incorrect image path.

2. **Icon Naming Mismatch**: The existing PNG icons use title case with spaces (e.g., "Airport I.png"), but the code expects lowercase with hyphens and .svg extension.

3. **Missing Project Lists**: Some sectors (Data Centre, Institute, Hotel & Resort, Mall) have placeholder project lists that need to be filled in.

4. **Image Optimization**: Consider using Next.js Image Optimization and WebP format for better performance.
