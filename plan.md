# Dream House Company homepage plan

## Implementation

Build one responsive Next.js App Router homepage using TypeScript, `next/image`, lucide-react and a small CSS system. The homepage is organized into navigation, hero, company introduction, five services, extracted project gallery, reasons to choose the company, founder, service area/contact CTA and footer. All navigation remains on-page via anchors.

## Asset strategy

Use deterministic crops from the repository flyer: the DHC emblem in original, transparent and white-background variants; Isaac Toku's founder portrait; and individual interior, furniture, tiling and roofing project crops. No invented people, locations, testimonials, statistics or certifications are used.

## Design direction

**Movement:** editorial architectural minimalism. The page uses a deep navy / metallic gold / cyan palette, large serif display type paired with restrained sans-serif utility text, asymmetric image-led compositions, fine rules and subtle hover movement. The brand should feel dependable, crafted and premium rather than template-like.

**Brand essence:** a construction and interior finishing partner for clients who want careful workmanship and a finished space with character. Personality: precise, warm, assured.

**Brand voice:** confident and practical, with lines such as “Your vision. Our craftsmanship.” and “Real work. Real character.”

## Structure

- `app/page.tsx`: homepage sections and structured content.
- `app/components/mobile-nav.tsx`: responsive client-only navigation.
- `app/globals.css`: responsive visual system and interaction states.
- `public/images/branding`, `founder`, `furniture`, `tiling`, `roofing`: extracted assets.
- `public/manus-routes.json`: single-page route declaration.
