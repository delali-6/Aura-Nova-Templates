import Link from "next/link";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menu";
import { siteConfig } from "@/config/site";

export default function FeaturedMenu() {
  const featuredItems = menuItems.filter((item) => item.featured);
  const section = siteConfig.homeSections.featuredMenu;

  return (
    <section className="bg-[var(--color-background)] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              {section.eyebrow}
            </p>

            <h2 className="font-serif text-4xl font-bold text-stone-800 md:text-5xl">
              {section.title}
            </h2>

            <p className="mt-4 max-w-xl text-stone-500">
              {section.description}
            </p>
          </div>

          <Link
            href={section.linkHref}
            className="font-semibold text-amber-700 transition hover:text-amber-900"
          >
            {section.linkLabel} →
          </Link>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}