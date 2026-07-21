import { siteConfig } from "@/config/site";

export default function Gallery() {
  const section = siteConfig.homeSections.gallery;

  return (
    <section className="bg-[var(--color-background)] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            {section.eyebrow}
          </p>

          <h2 className="font-serif text-4xl font-bold text-stone-800 md:text-5xl">
            {section.title}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {section.items.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}