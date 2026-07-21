# Roast and Bloom Template (Reusable Coffee Shop Website)

This project is a reusable coffee shop website template built with Next.js App Router.

The key idea is simple: most customization is done in two files.

- `config/site.ts` for brand, theme colors, hero content, section copy, contact details, opening hours, and page-level text.
- `data/menu.ts` for menu items and categories.

## Run Locally

From this folder:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quick Rebrand For A New Coffee Shop

1. Duplicate the `roast-and-bloom` folder to a new name.
2. Update `config/site.ts`:
	- `name`, `tagline`, `description`, `location`
	- `theme` colors
	- `navigation` and `navigationCta`
	- `contact` and `openingHours`
	- `homeHero`, `homeSections`, and `pages` copy
3. Update `data/menu.ts` with that shop's items.
4. Replace images in `public/images/*` and update matching paths in `config/site.ts`.

## Reusable Content Model

The following are now config-driven and reusable across shops:

- Home hero (title, subtitle, image, action buttons)
- Featured menu heading text
- Home about section copy and badge
- Gallery heading and image list
- Testimonials block
- Visit/contact teaser block
- Full About page (hero, story, values, CTA)
- Full Menu page hero
- Full Contact page hero + form text
- Navbar CTA button
- Footer brand text and opening hours
- Global metadata (title/description)
- Theme colors via CSS variables

## Notes

- Lint currently shows `next/no-img-element` warnings for image tags in UI components.
- You can migrate to `next/image` later if you want automatic image optimization.
