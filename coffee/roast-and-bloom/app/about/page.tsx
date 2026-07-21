import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  const aboutPage = siteConfig.pages.about;

  return (
    <main className="bg-[var(--color-background)]">
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        description={aboutPage.hero.description}
        image={aboutPage.hero.image}
      />

      {/* Story */}
      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src={aboutPage.story.image}
              alt={aboutPage.story.imageAlt}
              className="h-[550px] w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              {aboutPage.story.eyebrow}
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight text-stone-800 md:text-5xl">
              {aboutPage.story.title}
            </h2>

            {aboutPage.story.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "mt-6 leading-8 text-stone-500" : "mt-5 leading-8 text-stone-500"}
              >
                {paragraph}
              </p>
            ))}
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-background)] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              {aboutPage.values.eyebrow}
            </p>

            <h2 className="font-serif text-4xl font-bold text-stone-800 md:text-5xl">
              {aboutPage.values.title}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {aboutPage.values.items.map((value) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] px-6 py-24 text-center text-white lg:px-10">
        <h2 className="font-serif text-4xl font-bold md:text-5xl">
          {aboutPage.cta.title}
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-white/70">
          {aboutPage.cta.description}
        </p>

        <Link
          href={aboutPage.cta.buttonHref}
          className="mt-8 inline-block rounded-full bg-amber-200 px-7 py-3.5 font-semibold text-stone-900 transition hover:bg-amber-100"
        >
          {aboutPage.cta.buttonLabel}
        </Link>
      </section>
    </main>
  );
}

type ValueCardProps = {
  icon: string;
  title: string;
  description: string;
};

function ValueCard({
  icon,
  title,
  description,
}: ValueCardProps) {
  return (
    <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-5 font-serif text-2xl font-bold text-stone-800">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-stone-500">
        {description}
      </p>
    </div>
  );
}