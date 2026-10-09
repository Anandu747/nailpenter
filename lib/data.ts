export const IMG = {
  hero: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&q=80",
  gel: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
  art: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  pedi: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80",
  ext: "https://images.unsplash.com/photo-1612887390768-fb02affea7a6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  owner: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Faq", href: "#faq" },
];

export const FEATURES = [
  { title: "Hygienic", sub: "Sterilized tools & clean space" },
  { title: "Best Products", sub: "Non-toxic & cruelty-free" },
  { title: "Expert Artist", sub: "Skilled & passionate" },
];

export const SERVICES = [
  {
    name: "Gel Manicure",
    img: IMG.gel,
    desc: "Glossy, chip-resistant colour that lasts for weeks. Clean shaping, careful prep and a finish that looks fresh every day.",
  },
  {
    name: "Nail Art",
    img: IMG.art,
    desc: "Hand-designed art made around your idea, from subtle accents to full statement sets. Bring a reference and we'll recreate it.",
  },
  {
    name: "Pedicure",
    img: IMG.pedi,
    desc: "A relaxing clean-up for your feet, with sterilized tools, gentle care and a neat polish finish.",
  },
  {
    name: "Nail Extensions",
    img: IMG.ext,
    desc: "Length and shape exactly the way you want it, built to feel light and look natural.",
  },
  {
    name: "Press-on Nails",
    img: IMG.gel,
    desc: "Handmade, reusable sets made to your size and style. Wear a salon-style look at home in minutes.",
  },
  {
    name: "Lash Extensions",
    img: IMG.art,
    desc: "Classic and hybrid lashes that lift your eyes and still look like you. Applied with care and non-toxic products.",
  },
];

export const HOURS = [
  ["Monday - Friday", "9:00 AM - 7:00 PM"],
  ["Saturday", "9:00 AM - 5:00 PM"],
  ["Sunday", "Closed"],
];

export const CONTACT = {
  phone: "8111897359",
  phoneDisplay: "+91 81118 97359",
  instagram: "https://www.instagram.com/thenailpenter/",
  handle: "@thenailpenter",
  location: "Kochi, Kerala",
};

export const ABOUT_STATS = [
  { value: "1.2K+", label: "Instagram family" },
  { value: "Handmade", label: "Press-on nails" },
  { value: "Kochi", label: "Based in" },
];

export const ABOUT_TAGS = ["Nails", "Lashes", "Press-on Nails", "Nail Art"];

export const CATEGORIES = [
  {
    title: "Nails",
    desc: "Gel manicures, nail art and extensions, designed around what you want.",
    price: "₹499",
    img: IMG.gel,
    bg: "bg-mint",
  },
  {
    title: "Lashes",
    desc: "A lift for your own lashes, or classic and hybrid extensions that still look like you.",
    price: "₹999",
    img: IMG.art,
    bg: "bg-[#d6ece7]",
  },
  {
    title: "Press-on Nails",
    desc: "Handmade, reusable sets made to your size and style, ready to wear at home.",
    price: "₹599",
    img: IMG.ext,
    bg: "bg-mint",
  },
];