export const siteConfig = {
  name: "Roast & Bloom",

  shortName: "R&B",

  tagline: "Your Daily Cup of Comfort",

  description:
    "Freshly brewed coffee, delicious food, and a welcoming atmosphere made for slow mornings and meaningful moments.",

  location: "Gloucester, UK",

  locale: "en-GB",

  theme: {
    primary: "#5C3A21",
    primaryDark: "#432916",
    accent: "#F3D39B",
    background: "#F8F3ED",
    text: "#292524",
    muted: "#78716C",
    surface: "#FFFFFF",
  },

  navigation: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Menu",
      href: "/menu",
    },
    {
      name: "Our Story",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],

  navigationCta: {
    label: "Visit Us",
    href: "/contact",
  },

  contact: {
    address: "24 Market Street, Gloucester",
    phone: "01234 567890",
    email: "hello@roastandbloom.co.uk",
  },

  socialLinks: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },

  seo: {
    title: "Roast & Bloom | Your Daily Cup of Comfort",
    description:
      "Freshly brewed coffee, delicious food, and a welcoming atmosphere made for slow mornings and meaningful moments.",
  },

  openingHours: [
    { day: "Monday", hours: "7:30 AM - 5:00 PM" },
    { day: "Tuesday", hours: "7:30 AM - 5:00 PM" },
    { day: "Wednesday", hours: "7:30 AM - 5:00 PM" },
    { day: "Thursday", hours: "7:30 AM - 5:00 PM" },
    { day: "Friday", hours: "7:30 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 4:00 PM" },
  ],

  homeHero: {
    title: "Your Daily Cup of Comfort",
    subtitle:
      "Freshly brewed. Carefully made. Made for slow mornings and meaningful moments.",
    image: "/images/hero/coffee-hero.jpg",
    actions: [
      { label: "Explore Our Menu", href: "/menu", variant: "solid" },
      { label: "Our Story", href: "/about", variant: "outline" },
    ],
  },

  homeSections: {
    featuredMenu: {
      eyebrow: "Made with love",
      title: "Our Favourites",
      description:
        "From your first morning coffee to a slow afternoon brunch, there is always something delicious waiting for you.",
      linkLabel: "View Full Menu",
      linkHref: "/menu",
    },

    about: {
      eyebrow: "More than just coffee",
      title: "A place to slow down, connect, and enjoy the moment.",
      paragraphs: [
        "At Roast & Bloom, we believe that the best moments often begin with something simple - a warm cup of coffee, a freshly baked pastry, and good company.",
        "We source quality ingredients, work with passionate local suppliers, and create a space where everyone feels welcome.",
      ],
      image: "/images/about/cafe-interior.jpg",
      imageAlt: "Coffee shop interior",
      badge: {
        value: "10+",
        label: "Years of brewing",
      },
      linkLabel: "Discover Our Story",
      linkHref: "/about",
    },

    gallery: {
      eyebrow: "Take a look around",
      title: "Moments at Roast & Bloom",
      items: [
        { src: "/images/gallery/gallery-1.jpg", alt: "Freshly brewed coffee" },
        { src: "/images/gallery/gallery-2.jpg", alt: "Fresh pastries" },
        { src: "/images/gallery/gallery-3.jpg", alt: "Coffee shop interior" },
        { src: "/images/gallery/gallery-4.jpg", alt: "Cafe seating area" },
      ],
    },

    testimonials: {
      eyebrow: "Kind words",
      title: "Loved by our community",
      items: [
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
            "One of the best independent cafes around. You can tell how much care goes into everything they do.",
          name: "Sophie M.",
          role: "Coffee enthusiast",
        },
      ],
    },

    visit: {
      eyebrow: "Come and see us",
      title: "Your table is waiting.",
      description:
        "Whether you are joining us for your morning coffee, a relaxed brunch, or an afternoon catch-up, we would love to welcome you.",
    },
  },

  pages: {
    menu: {
      hero: {
        eyebrow: "Something delicious awaits",
        title: "Our Menu",
        description:
          "Freshly prepared food, beautifully brewed coffee, and treats made for every kind of day.",
        image: "/images/hero/menu-hero.jpg",
      },
    },

    about: {
      hero: {
        eyebrow: "Our story",
        title: "Made with purpose.",
        description:
          "Great coffee, good food, and a place where people can feel at home.",
        image: "/images/hero/about-hero.jpg",
      },
      story: {
        eyebrow: "Where it all began",
        title: "Built around the simple joy of a great cup of coffee.",
        paragraphs: [
          "Roast & Bloom began with a simple idea: create a space where people could enjoy carefully made coffee, delicious food, and good company.",
          "From the beans we carefully select to the pastries we serve fresh each morning, we believe that the little details matter.",
          "Whether you are catching up with a friend, working quietly in the corner, or simply enjoying a moment to yourself, our doors are always open.",
        ],
        image: "/images/about/barista.jpg",
        imageAlt: "Barista preparing coffee",
      },
      values: {
        eyebrow: "What matters to us",
        title: "Our values",
        items: [
          {
            icon: "Q",
            title: "Quality",
            description:
              "We care about every ingredient, every cup, and every detail that goes into what we serve.",
          },
          {
            icon: "C",
            title: "Community",
            description:
              "We believe cafes are more than places to eat. They are places where people connect.",
          },
          {
            icon: "S",
            title: "Sustainability",
            description:
              "We are always looking for better ways to support our planet and our local community.",
          },
        ],
      },
      cta: {
        title: "Come and experience our cafe.",
        description:
          "We would love to welcome you in for a coffee, a bite to eat, or simply a moment to slow down.",
        buttonLabel: "Find Us",
        buttonHref: "/contact",
      },
    },

    contact: {
      hero: {
        eyebrow: "Get in touch",
        title: "Come say hello.",
        description:
          "Questions, bookings, events, or just want to say hi? We would love to hear from you.",
        image: "/images/hero/contact-hero.jpg",
      },
      details: {
        eyebrow: "Visit us",
        title: "We would love to hear from you.",
      },
      form: {
        labels: {
          name: "Your name",
          email: "Email address",
          message: "Message",
          submit: "Send Message",
        },
        placeholders: {
          name: "Your name",
          email: "you@example.com",
          message: "How can we help?",
        },
        success: {
          title: "Message sent!",
          description:
            "Thank you for getting in touch. We will get back to you as soon as possible.",
        },
      },
    },
  },
};