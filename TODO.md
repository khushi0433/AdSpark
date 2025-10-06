# Performance Optimization Tasks

## Files to Update
- [x] app/components/HeroSection.tsx: Replace 7 <img> tags with Next.js <Image>, update 2 <video> tags with width, height, preload="metadata"
- [x] app/components/Navigation.tsx: Replace 1 <img> tag with Next.js <Image>
- [ ] app/components/Footer.tsx: Replace 1 <img> tag with Next.js <Image>, update 1 <video> tag with width, height, preload="metadata"
- [ ] app/components/PortfoiloSection.tsx: Replace 4 <img> tags with Next.js <Image>
- [ ] app/components/TestimonialsSection.tsx: Replace 3 <img> tags with Next.js <Image>

## Details
- Import Next.js Image component where needed
- Add explicit width and height to prevent CLS
- Add loading="lazy" for offscreen images, priority for above-the-fold
- Keep Tailwind CSS classes intact
- Ensure proper alt text
- For videos: add width, height, preload="metadata"

## Followup
- Test the site to verify images and videos load correctly
- Verify no layout shifts (CLS)
- Check accessibility with alt texts
