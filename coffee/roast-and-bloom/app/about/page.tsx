import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F3ED]">

      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-stone-900">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        {/* <Navbar /> */}

        <div className="relative z-10 px-6 text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Our story
          </p>

          <h1 className="font-serif text-5xl font-bold md:text-7xl">
            Made with purpose.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Great coffee, good food, and a place where people can feel at
            home.
          </p>
        </div>

      </section>

      {/* Story */}
      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop"
              alt="Barista preparing coffee"
              className="h-[550px] w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              Where it all began
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight text-stone-800 md:text-5xl">
              Built around the simple joy of a great cup of coffee.
            </h2>

            <p className="mt-6 leading-8 text-stone-500">
              Roast & Bloom began with a simple idea: create a space where
              people could enjoy carefully made coffee, delicious food, and
              good company.
            </p>

            <p className="mt-5 leading-8 text-stone-500">
              From the beans we carefully select to the pastries we serve
              fresh each morning, we believe that the little details matter.
            </p>

            <p className="mt-5 leading-8 text-stone-500">
              Whether you are catching up with a friend, working quietly in
              the corner, or simply enjoying a moment to yourself, our doors
              are always open.
            </p>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F3ED] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              What matters to us
            </p>

            <h2 className="font-serif text-4xl font-bold text-stone-800 md:text-5xl">
              Our values
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <ValueCard
              icon="☕"
              title="Quality"
              description="We care about every ingredient, every cup, and every detail that goes into what we serve."
            />

            <ValueCard
              icon="🤝"
              title="Community"
              description="We believe cafés are more than places to eat. They are places where people connect."
            />

            <ValueCard
              icon="🌱"
              title="Sustainability"
              description="We are always looking for better ways to support our planet and our local community."
            />

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5C3A21] px-6 py-24 text-center text-white lg:px-10">
        <h2 className="font-serif text-4xl font-bold md:text-5xl">
          Come and experience Roast & Bloom.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-white/70">
          We would love to welcome you in for a coffee, a bite to eat, or
          simply a moment to slow down.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-amber-200 px-7 py-3.5 font-semibold text-stone-900 transition hover:bg-amber-100"
        >
          Find Us
        </Link>
      </section>
        {/* <Footer /> */}

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