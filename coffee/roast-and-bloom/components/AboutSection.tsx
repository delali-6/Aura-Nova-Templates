import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function AboutSection() {
  const section = siteConfig.homeSections.about;

  return (
    <section className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={section.image}
              alt={section.imageAlt}
              className="h-[550px] w-full object-cover"
            />
          </div>

          {/* Decorative Card */}
          <div className="absolute -bottom-8 -right-4 hidden rounded-2xl bg-[var(--color-primary)] p-6 text-white shadow-xl sm:block md:-right-8">
            <p className="font-serif text-3xl font-bold">{section.badge.value}</p>
            <p className="mt-1 text-sm text-white/70">
              {section.badge.label}
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              {section.eyebrow}
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-stone-800 md:text-5xl">
              {section.title}
          </h2>

            {section.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "mt-6 leading-8 text-stone-500" : "mt-5 leading-8 text-stone-500"}
              >
                {paragraph}
              </p>
            ))}

          <Link
              href={section.linkHref}
              className="mt-8 inline-block rounded-full bg-[var(--color-primary)] px-7 py-3.5 font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
              {section.linkLabel}
          </Link>
        </div>

      </div>
    </section>
  );
}