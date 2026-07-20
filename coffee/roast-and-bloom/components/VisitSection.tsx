import { siteConfig } from "@/config/site";

export default function VisitSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

        {/* Location */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Come and see us
          </p>

          <h2 className="font-serif text-4xl font-bold text-stone-800 md:text-5xl">
            Your table is waiting.
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-stone-500">
            Whether you are joining us for your morning coffee, a relaxed
            brunch, or an afternoon catch-up, we would love to welcome you.
          </p>

          <div className="mt-8 space-y-4 text-stone-600">
            <p>
              <strong>📍 Address</strong>
              <br />
              {siteConfig.contact.address}
            </p>

            <p>
              <strong>📞 Phone</strong>
              <br />
              {siteConfig.contact.phone}
            </p>

            <p>
              <strong>✉ Email</strong>
              <br />
              {siteConfig.contact.email}
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="rounded-3xl bg-[#F8F3ED] p-8 md:p-12">
          <h3 className="font-serif text-3xl font-bold text-stone-800">
            Opening Hours
          </h3>

          <div className="mt-8 space-y-5">
            <OpeningHour day="Monday" hours={siteConfig.openingHours.monday} />
            <OpeningHour day="Tuesday" hours={siteConfig.openingHours.tuesday} />
            <OpeningHour day="Wednesday" hours={siteConfig.openingHours.wednesday} />
            <OpeningHour day="Thursday" hours={siteConfig.openingHours.thursday} />
            <OpeningHour day="Friday" hours={siteConfig.openingHours.friday} />
            <OpeningHour day="Saturday" hours={siteConfig.openingHours.saturday} />
            <OpeningHour day="Sunday" hours={siteConfig.openingHours.sunday} />
          </div>
        </div>

      </div>
    </section>
  );
}

type OpeningHourProps = {
  day: string;
  hours: string;
};

function OpeningHour({ day, hours }: OpeningHourProps) {
  return (
    <div className="flex items-center justify-between border-b border-stone-200 pb-3">
      <span className="font-medium text-stone-700">
        {day}
      </span>

      <span className="text-sm text-stone-500">
        {hours}
      </span>
    </div>
  );
}