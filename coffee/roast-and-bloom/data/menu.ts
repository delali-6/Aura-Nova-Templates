export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
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
      "/images/menu/cappuccino.jpg",
    featured: true,
  },

  {
    id: 2,
    name: "Almond Croissant",
    description: "A buttery, flaky pastry filled with rich almond cream.",
    price: "£3.20",
    category: "Pastries",
    image:
      "/images/menu/almond-croissant.jpg",
    featured: true,
  },

  {
    id: 3,
    name: "Avocado Toast",
    description: "Smashed avocado, sourdough bread, chilli flakes and fresh herbs.",
    price: "£8.95",
    category: "Brunch",
    image: "/images/menu/avocado-toast.jpg",
    featured: true,
  },

  {
    id: 4,
    name: "Iced Latte",
    description: "Smooth espresso, chilled milk and plenty of ice.",
    price: "£4.00",
    category: "Coffee",
    image: "/images/menu/iced-latte.jpg",
  },

  {
    id: 5,
    name: "Berry Pancakes",
    description: "Fluffy pancakes served with seasonal berries and maple syrup.",
    price: "£9.50",
    category: "Brunch",
    image: "/images/menu/berry-pancakes.jpg",
  },
];