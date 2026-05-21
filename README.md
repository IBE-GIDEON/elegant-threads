# Elegance Stitches

Premium one-page portfolio and business website for a female seamstress and tailoring brand, built with Next.js and Tailwind CSS.

## Highlights

- Elegant hero, about, services, gallery, process, testimonials, and contact sections
- Premium serif/sans typography pairing and mature fashion-focused styling
- Responsive layout for desktop, tablet, and mobile
- Tailored contact form with a local API stub ready for real email or CRM integration
- Royalty-free Pexels photography wired into the gallery and feature sections

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Customization notes

- Brand/contact placeholders live in `src/app/page.tsx`
- Contact form UI lives in `src/components/contact-form.tsx`
- Contact API stub lives in `src/app/api/contact/route.ts`
- Global color, texture, and animation styling lives in `src/app/globals.css`
