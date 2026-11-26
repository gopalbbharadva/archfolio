# Vinayak Studio: Interior & Architecture

Portfolio website for **Vinayak Studio**, an interior design and architecture practice in Surat.

Built with [Next.js 14](https://nextjs.org/) (App Router), [Tailwind CSS](https://tailwindcss.com/) and `next/image`.

## Pages

| Route       | What it shows                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------- |
| `/`         | Hero slideshow, studio intro, project categories, moving gallery, services list, process        |
| `/about-us` | Studio story, values, contact details                                                            |
| `/services` | The six services, each with an image and highlights                                              |
| `/projects` | Filterable gallery (`?filter=residential \| commercial \| salon`) with a full-screen lightbox    |

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3001
pnpm build && pnpm start
```

## Editing content

- **Contact details, social links, nav**: `app/config.ts`
- **Project images & titles**: `app/data/projects.ts`. Put the image in `app/assets/projects/<category>/`, import it, and add an entry to `projectImages`.
- **Services**: `app/data/services.ts`
- **Brand colours & fonts**: `tailwind.config.js` (`bronze`, `ink`, `ivory`, `night`) and `app/layout.tsx` (Cormorant Garamond + Geist)

Images are imported statically, so Next.js generates blur placeholders and responsive sizes automatically. Prefer images at least **1400px wide** for full-width slots.

## Animations

- `app/components/reveal.tsx`: scroll-triggered reveal (`up`, `left`, `right`, `scale`, `fade`, `curtain`)
- Keyframes (Ken Burns, marquee, word rise, etc.) live in `tailwind.config.js`
- All motion is disabled automatically for users with _reduce motion_ enabled.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) so canonical URLs, the sitemap and Open Graph tags point at the right domain. On Vercel the production URL is detected automatically.
