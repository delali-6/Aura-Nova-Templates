"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site";
import PageHero from "@/components/PageHero";


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const contactPage = siteConfig.pages.contact;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <main className="bg-[var(--color-background)]">
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        description={contactPage.hero.description}
        image={contactPage.hero.image}
      />

      {/* Contact Content */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

          {/* Information */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              {contactPage.details.eyebrow}
            </p>

            <h2 className="font-serif text-4xl font-bold text-stone-800 md:text-5xl">
              {contactPage.details.title}
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
                  {contactPage.form.success.title}
                </h3>

                <p className="mt-4 max-w-sm text-stone-500">
                  {contactPage.form.success.description}
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
                    {contactPage.form.labels.name}
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-amber-700"
                    placeholder={contactPage.form.placeholders.name}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-stone-700"
                  >
                    {contactPage.form.labels.email}
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-amber-700"
                    placeholder={contactPage.form.placeholders.email}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-stone-700"
                  >
                    {contactPage.form.labels.message}
                  </label>

                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full resize-none rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-amber-700"
                    placeholder={contactPage.form.placeholders.message}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--color-primary)] px-6 py-3.5 font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
                >
                  {contactPage.form.labels.submit}
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