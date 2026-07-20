export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
      alt: "Fresh coffee",
    },
    {
      src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop",
      alt: "Fresh pastry",
    },
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop",
      alt: "Coffee shop interior",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
      alt: "Cafe seating",
    },
  ];

  return (
    <section className="bg-[#F8F3ED] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Take a look around
          </p>

          <h2 className="font-serif text-4xl font-bold text-stone-800 md:text-5xl">
            Moments at Roast & Bloom
          </h2>
        </div>

        {/* Gallery */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
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