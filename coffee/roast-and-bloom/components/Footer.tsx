import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-stone-900 px-6 py-16 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-bold"
            >
              {siteConfig.name}
            </Link>

            <p className="mt-5 max-w-xs leading-7 text-white/60">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-white/60">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold">
              Opening Hours
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              {siteConfig.openingHours.map((entry) => (
                <p key={entry.day}>
                  {entry.day}: {entry.hours}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Get in Touch
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <p>
            Crafted with care.
          </p>
        </div>

      </div>
    </footer>
  );
}