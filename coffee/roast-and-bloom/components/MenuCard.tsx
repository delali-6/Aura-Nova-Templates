import { MenuItem } from "@/data/menu";

type MenuCardProps = {
  item: MenuItem;
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl font-bold text-stone-800">
            {item.name}
          </h3>

          <span className="font-semibold text-amber-700">
            {item.price}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-stone-500">
          {item.description}
        </p>
      </div>
    </article>
  );
}