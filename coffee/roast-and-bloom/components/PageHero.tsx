type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-stone-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6 text-center text-white">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            {eyebrow}
          </p>
        )}

        <h1 className="font-serif text-5xl font-bold md:text-7xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}