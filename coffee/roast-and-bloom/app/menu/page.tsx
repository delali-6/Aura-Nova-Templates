"use client";

import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menu";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/config/site";

const categories = [
  "All",
  ...Array.from(new Set(menuItems.map((item) => item.category))),
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const menuPage = siteConfig.pages.menu;

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="bg-[var(--color-background)]">
      <PageHero
        eyebrow={menuPage.hero.eyebrow}
        title={menuPage.hero.title}
        description={menuPage.hero.description}
        image={menuPage.hero.image}
      />

      {/* Menu */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* Categories */}
          <div className="mb-14 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-white text-stone-600 hover:bg-stone-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}