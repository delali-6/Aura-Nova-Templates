"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site";


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <main className="bg-[#F8F3ED]">

      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-stone-900">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        {/* <Navbar /> */}

        <div className="relative z-10 px-6 text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
            Get in touch
          </p>

          <h1 className="font-serif text-5xl font-bold md:text-7xl">
            Come say hello.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Questions, bookings, events, or just want to say hi? We would
            love to hear from you.
          </p>
        </div>

      </section>

      {/* Contact Content */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

          {/* Information */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              Visit us
            </p>

            <h2 className="font-serif text-4xl font-bold text-stone-800 md:text-5xl">
              We would love to hear from you.
            </h2>

            <div className="mt-10 space-y-6">

              <ContactInfo
                title="Address"
                value={siteConfig.contact.address}
              />

              <ContactInfo
                title="Phone"
                value={siteConfig.contact.phone}
              />

              <ContactInfo
                title="Email"
                value={siteConfig.contact.email}
              />

            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">

            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="text-5xl">
                  ✓
                </div>

                <h3 className="mt-5 font-serif text-3xl font-bold text-stone-800">
                  Message sent!
                </h3>

                <p className="mt-4 max-w-sm text-stone-500">
                  Thank you for getting in touch. We will get back to you
                  as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-stone-700"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-amber-700"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-stone-700"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-amber-700"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-stone-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full resize-none rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-amber-700"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#5C3A21] px-6 py-3.5 font-semibold text-white transition hover:bg-[#432916]"
                >
                  Send Message
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

     

    </main>
  );
}

type ContactInfoProps = {
  title: string;
  value: string;
};

function ContactInfo({
  title,
  value,
}: ContactInfoProps) {
  return (
    <div>
      <h3 className="font-semibold text-stone-800">
        {title}
      </h3>

      <p className="mt-1 text-stone-500">
        {value}
      </p>
    </div>
  );
}