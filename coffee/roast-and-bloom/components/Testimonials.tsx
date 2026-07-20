const testimonials = [
  {
    quote:
      "The perfect place for a quiet morning coffee. The atmosphere is beautiful and the cappuccino is incredible.",
    name: "Emily R.",
    role: "Regular customer",
  },
  {
    quote:
      "I absolutely love coming here for brunch. The food is delicious, the staff are lovely, and it feels so welcoming.",
    name: "James T.",
    role: "Local customer",
  },
  {
    quote:
      "One of the best independent cafés around. You can tell how much care goes into everything they do.",
    name: "Sophie M.",
    role: "Coffee enthusiast",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#5C3A21] px-6 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
            Kind words
          </p>

          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            Loved by our community
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
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