import Link from "next/link";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menu";

export default function FeaturedMenu() {
  const featuredItems = menuItems.filter((item) => item.featured);

  return (
    <section className="bg-[#F8F3ED] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              Made with love
            </p>

            <h2 className="font-serif text-4xl font-bold text-stone-800 md:text-5xl">
              Our Favourites
            </h2>

            <p className="mt-4 max-w-xl text-stone-500">
              From your first morning coffee to a slow afternoon brunch,
              there is always something delicious waiting for you.
            </p>
          </div>

          <Link
            href="/menu"
            className="font-semibold text-amber-700 transition hover:text-amber-900"
          >
            View Full Menu →
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