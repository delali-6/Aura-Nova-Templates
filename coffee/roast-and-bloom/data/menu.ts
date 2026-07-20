export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: "Coffee" | "Pastries" | "Brunch";
  image: string;
  featured?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Cappuccino",
    description: "Rich espresso topped with silky steamed milk and velvety foam.",
    price: "£3.50",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },

  {
    id: 2,
    name: "Almond Croissant",
    description: "A buttery, flaky pastry filled with rich almond cream.",
    price: "£3.20",
    category: "Pastries",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },

  {
    id: 3,
    name: "Avocado Toast",
    description: "Smashed avocado, sourdough bread, chilli flakes and fresh herbs.",
    price: "£8.95",
    category: "Brunch",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },

  {
    id: 4,
    name: "Iced Latte",
    description: "Smooth espresso, chilled milk and plenty of ice.",
    price: "£4.00",
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 5,
    name: "Berry Pancakes",
    description: "Fluffy pancakes served with seasonal berries and maple syrup.",
    price: "£9.50",
    category: "Brunch",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1000&auto=format&fit=crop",
  },
];