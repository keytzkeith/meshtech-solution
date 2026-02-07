# MESHTECH QUALITY SOLUTION Website

Official marketing and quote-request website for **MESHTECH QUALITY SOLUTION** built with Next.js.

## Features

- Home page with services, about, contact, and location map sections
- Quote request page that submits directly to WhatsApp
- Contact form on home page that opens WhatsApp with prefilled message
- SEO basics: metadata, `robots.txt`, and `sitemap.xml`
- Optimized media assets (`webp` images + compressed hero video)
- Smooth section navigation without hash (`#`) in URL

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Vercel Analytics

## Project Structure

- `app/` - routes, layout, metadata routes
- `components/` - page and UI components
- `public/` - static assets (logo, images, video)

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value is used by `app/robots.ts` and `app/sitemap.ts`.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Deployment (Vercel)

1. Push project to GitHub.
2. Import repo in Vercel.
3. Confirm framework is detected as **Next.js**.
4. Add environment variable in Vercel Project Settings:
   - `NEXT_PUBLIC_SITE_URL=https://your-vercel-or-custom-domain`
5. Deploy.

After deploying, verify:

- Home page and quote page render correctly
- WhatsApp submission works from both forms
- `/robots.txt` and `/sitemap.xml` use correct domain

## Notes

- Replace `NEXT_PUBLIC_SITE_URL` after buying a custom domain.
- If you add social media links later, update footer links in `components/site-footer.tsx`.
