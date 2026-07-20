import FeaturedMenu from "@/components/FeaturedMenu";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import VisitSection from "@/components/VisitSection";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
  className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-stone-900"
  style={{
    backgroundImage: `url('${siteConfig.hero.image}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
    <div className="max-w-3xl text-white">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
        Welcome to {siteConfig.name}
      </p>

      <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-8xl">
        {siteConfig.hero.title}
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
        {siteConfig.hero.subtitle}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/menu"
          className="rounded-full bg-amber-200 px-7 py-3.5 font-semibold text-stone-900 transition hover:bg-amber-100"
        >
          Explore Our Menu
        </a>

        <a
          href="/about"
          className="rounded-full border border-white/60 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-stone-900"
        >
          Our Story
        </a>
      </div>
    </div>
  </div>
</section>

      <FeaturedMenu />

      <AboutSection />

      <Gallery />

      <Testimonials />

      <VisitSection />
    </main>
  );
}