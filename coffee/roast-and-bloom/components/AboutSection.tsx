import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1200&auto=format&fit=crop"
              alt="Coffee shop interior"
              className="h-[550px] w-full object-cover"
            />
          </div>

          {/* Decorative Card */}
          <div className="absolute -bottom-8 -right-4 hidden rounded-2xl bg-[#5C3A21] p-6 text-white shadow-xl sm:block md:-right-8">
            <p className="font-serif text-3xl font-bold">10+</p>
            <p className="mt-1 text-sm text-white/70">
              Years of brewing
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            More than just coffee
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-stone-800 md:text-5xl">
            A place to slow down, connect, and enjoy the moment.
          </h2>

          <p className="mt-6 leading-8 text-stone-500">
            At Roast & Bloom, we believe that the best moments often begin
            with something simple — a warm cup of coffee, a freshly baked
            pastry, and good company.
          </p>

          <p className="mt-5 leading-8 text-stone-500">
            We source quality ingredients, work with passionate local
            suppliers, and create a space where everyone feels welcome.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block rounded-full bg-[#5C3A21] px-7 py-3.5 font-semibold text-white transition hover:bg-[#432916]"
          >
            Discover Our Story
          </Link>
        </div>

      </div>
    </section>
  );
}