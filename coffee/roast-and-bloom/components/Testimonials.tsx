import { siteConfig } from "@/config/site";

export default function Testimonials() {
  const section = siteConfig.homeSections.testimonials;

  return (
    <section className="bg-[var(--color-primary)] px-6 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
            {section.eyebrow}
          </p>

          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            {section.title}
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          {section.items.map((testimonial, index) => (
            <article
              key={index}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="mb-5 text-amber-200">
                ★ ★ ★ ★ ★
              </div>

              {/* Quote */}
              <p className="leading-8 text-white/80">
                “{testimonial.quote}”
              </p>

              {/* Customer */}
              <div className="mt-8">
                <p className="font-semibold">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-white/60">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}