# TrekSnout Landing Page

A React + Tailwind CSS landing page scaffold for **TrekSnout**, the adventure club for dogs who crave the trail. The project is organized for rapid iteration with modular components, brand-aligned design tokens, and a modern developer experience powered by Vite.

## ✨ Highlights

- **React 18 + TypeScript** with functional components and hooks for interactivity
- **Tailwind CSS** configured with TrekSnout brand colors and reusable tokens
- **Modular component library** inside `src/components` for clear section ownership
- **Responsive-first layout** featuring hero, features, timeline, testimonials, FAQ, and CTA sections
- **Lucide icons** for lightweight illustrative accents

## 🧱 Project Structure

```
src/
├── components/
│   ├── AdventureShowcase.tsx   # Signature trek cards
│   ├── Button.tsx              # Reusable CTA styles
│   ├── CallToAction.tsx        # Closing CTA banner
│   ├── FAQ.tsx                 # Interactive accordion using hooks
│   ├── FeatureSection.tsx      # Core feature highlights
│   ├── Footer.tsx              # Footer with contact links
│   ├── Header.tsx              # Responsive navigation with mobile menu
│   ├── Hero.tsx                # Above-the-fold storytelling
│   ├── JourneyTimeline.tsx     # Step-by-step itinerary overview
│   ├── Partners.tsx            # Social proof band
│   ├── SectionHeading.tsx      # Shared heading pattern
│   ├── StatsSection.tsx        # Data-backed proof points
│   └── Testimonials.tsx        # Customer quotes
├── App.tsx                     # Page composition
├── index.css                   # Global styles & font import
└── main.tsx                    # Application entry point
```

## 🎨 Design Tokens

`tailwind.config.js` extends Tailwind with TrekSnout’s palette:

| Token     | Hex       | Usage                                |
|-----------|-----------|--------------------------------------|
| `primary` | `#009688` | Call-to-action buttons, highlights   |
| `secondary` | `#222F3E` | Headings, text, footer background   |
| `accent`  | `#FFC107` | Badges, hover accents, detail glows  |
| `bg`      | `#F8F9FA` | Page background and light surfaces   |

A custom `glow` shadow is also available for elevated UI moments.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

- Development server: http://localhost:5173
- Build for production: `npm run build`
- Preview build: `npm run preview`

## 📄 License

Private project scaffold for TrekSnout marketing initiatives.

---
Crafted with care for adventurous pups and their people. 🐾
