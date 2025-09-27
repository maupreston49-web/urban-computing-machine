# Image Setup Guide

## Adding Your Dog Images

To add your actual dog photos to the website, follow these steps:

### 1. Your Specific Images

You have three perfect dog images that showcase TrekSnout's services:

1. **dog-1.jpg** - Dog with GPS tracker lying on grass (shows tracking technology)
2. **dog-2.jpg** - Two dogs playing in water (shows water adventures and joy)  
3. **dog-3.jpg** - Two focused dogs with Jeep in background (shows professional equipment and adventure readiness)

### 2. Image Specifications

- **Format**: JPG or PNG
- **Size**: 800x600 pixels (or similar aspect ratio)
- **Quality**: High resolution for web display
- **File Size**: Optimize for web (under 500KB each)

### 3. Adding Images to the Project

1. Place your images in the `/public/images/` directory
2. Name them exactly as:
   - `dog-1.jpg`
   - `dog-2.jpg` 
   - `dog-3.jpg`

### 4. Update Image Sources

Once you've added your images, update the `src/App.tsx` file to use local images instead of Unsplash:

```tsx
// Change from:
src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop&crop=center"

// To:
src: "/images/dog-1.jpg"
```

### 5. Image Placement

The images are strategically placed throughout the homepage:

- **After Hero Section**: "Adventure in Action" - Shows GPS tracking
- **After Why Choose Us**: "Mission Success" - Shows dogs in action
- **After Getting Started**: "Professional Training" - Shows equipment and focus

### 6. Features

Each image includes:
- ✅ Scroll-triggered animations
- ✅ Hover effects with scaling
- ✅ Caption overlays
- ✅ Lazy loading for performance
- ✅ Responsive design
- ✅ Decorative elements on hover

### 7. Customization

You can easily customize:
- Image sizes by changing `maxWidth` prop
- Background colors by changing `bgColor` prop
- Captions and titles in the `ImageSection` components
- Animation delays and effects in `ScrollImage.tsx`

The images will automatically animate into view as users scroll down the page, creating an engaging visual experience that showcases your dog adventure services!
