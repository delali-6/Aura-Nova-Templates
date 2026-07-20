"use client";

import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menu";

const categories = ["All", "Coffee", "Pastries", "Brunch"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="bg-[#F8F3ED]">

      {/* Header */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-stone-900">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        {/* <Navbar /> */}

        <div className="relative z-10 px-6 text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Something delicious awaits
          </p>

          <h1 className="font-serif text-5xl font-bold md:text-7xl">
            Our Menu
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Freshly prepared food, beautifully brewed coffee, and treats
            made for every kind of day.
          </p>
        </div>

      </section>

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
                    ? "bg-[#5C3A21] text-white"
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

      {/* <Footer /> */}

    </main>
  );
}