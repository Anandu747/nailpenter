import { IMG as D } from "@/lib/data";

export type PriceItem = {
  name: string;
  desc?: string;
  price: number;
  from?: boolean; // "onwards" / "+" prices
  unit?: string; // "per toe", "per strand" ...
};

export type PriceGroup = {
  title: string;
  desc?: string;
  img: string;
  items: PriceItem[];
};

export type PriceSection = {
  id: string;
  title: string;
  intro: string;
  groups: PriceGroup[];
};

const fmt = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const formatPrice = (it: PriceItem) =>
  `${it.from ? "from " : ""}₹${fmt(it.price)}${it.unit ? ` ${it.unit}` : ""}`;

/* Images ellaam lib/data.ts-ile IMG-ilninnu (D.xxx).
   Oru card-inte image maattan avide `img: D.xxx` maattiyal mathi,
   puthiya image venamenkil data.ts-ile IMG-il add cheythu ivide D.newName ennu use cheyyuka. */

export const PRICING: PriceSection[] = [
  {
    id: "nails",
    title: "Nails",
    intro: "Extensions, shellac, pedicures and add-ons for hands and feet.",
    groups: [
      {
        title: "Nail Extensions",
        desc: "Permanent lasts 5 weeks + refills. Semi-permanent lasts about 5 weeks, no refill. Temporary lasts 5 to 10 days.",
        img: D.nail,
        items: [
          { name: "Acrylic (permanent)", price: 3499 },
          { name: "Gel (permanent)", price: 3499 },
          { name: "Polygel, no glue (permanent)", price: 3999 },
          { name: "Soft gel extension (semi-permanent)", price: 2799 },
          { name: "Glue extension (temporary)", price: 1799 },
        ],
      },
      {
        title: "Shellac",
        desc: "On natural nails.",
        img: D.shellac,
        items: [
          { name: "Gel manicure", price: 599, unit: "per hand" },
          { name: "BIAB (strength treatment)", price: 799, unit: "per hand" },
          { name: "Overlay", price: 799, unit: "per hand" },
        ],
      },
      {
        title: "Feet",
        img: D.feet,
        items: [
          { name: "Toe extension", price: 499, unit: "per toe" },
          { name: "Full feet set", price: 1999 },
          { name: "Gel polish feet", price: 999 },
          { name: "BIAB", price: 1499 },
          { name: "Overlay", price: 1499 },
        ],
      },
      {
        title: "Pedicure",
        img: D.pedi,
        items: [
          { name: "NP Classic Pedicure", price: 1200 },
          {
            name: "Bubble Gum Pedi",
            desc: "45 mins. Fizzing bomb soak, whipped scrub and a strawberry vanilla marshmallow cream massage.",
            price: 1799,
          },
          {
            name: "Jelly Pedicure",
            desc: "50 mins. Warm jelly soak, massage, exfoliation and a smooth cream massage.",
            price: 1899,
          },
          {
            name: "Wax Candle Pedicure",
            desc: "60 mins. For dry and flaky skin, cracked heels and warm relaxation.",
            price: 2499,
          },
        ],
      },
      {
        title: "Manicure",
        img: D.mani,
        items: [
          { name: "NP Classic Manicure", price: 1200 },
          { name: "Bubble Gum Mani", price: 1399 },
          { name: "Jelly Manicure", price: 1499 },
          { name: "Wax Candle Manicure", price: 1999 },
        ],
      },
      {
        title: "Nail Add-ons",
        img: D.gel,
        items: [
          { name: "Dry manicure (hand)", price: 599 },
          { name: "Cut & file", price: 299 },
          { name: "Normal polish", price: 199 },
          { name: "Extension removal", price: 999 },
          { name: "Gel polish removal", price: 499 },
        ],
      },
    ],
  },
  {
    id: "lashes-brows",
    title: "Lashes & Brows",
    intro: "From an everyday mascara look to full drama.",
    groups: [
      {
        title: "Classic Lash",
        desc: "Perfect for an everyday mascara look.",
        img: D.lashes,
        items: [
          { name: "Full set", price: 3499 },
          { name: "1 to 2 week refill", price: 1749 },
        ],
      },
      {
        title: "YY Fluffy Lash Set",
        desc: "Soft, textured and cross-woven effect, with a soft, full and cloud-like look.",
        img: D.lash,
        items: [
          { name: "Full set", price: 3999 },
          { name: "1 to 2 week refill", price: 1999 },
        ],
      },
      {
        title: "Mega Volume",
        desc: "Perfect to create drama.",
        img: D.mega,
        items: [
          { name: "Full set", price: 4999 },
          { name: "1 to 2 week refill", price: 2499 },
          {
            name: "Customised sets",
            desc: "Final price after consultation.",
            price: 3999,
            from: true,
          },
        ],
      },
      {
        title: "Lash Lift & Tint",
        img: D.lifting,
        items: [
          { name: "Lash lifting + tint", price: 2999 },
          { name: "Lash lifting", price: 2499 },
          { name: "Lash tint", price: 599 },
          { name: "Lash removal", price: 499 },
        ],
      },
      {
        title: "Brows",
        img: D.brow,
        items: [
          { name: "Brow lamination + tint", price: 3499 },
          { name: "Brow lamination & styling", price: 2999 },
          { name: "Halal brows", price: 2999 },
          { name: "Mapping & removal", price: 499 },
          { name: "Brow wax", price: 199 },
        ],
      },
      {
        title: "Threading",
        img: D.thread,
        items: [
          { name: "Brow threading", price: 60 },
          { name: "Upper lip", price: 50 },
          { name: "Chin", price: 50 },
          { name: "Forehead", price: 50 },
          { name: "Full face", price: 299 },
        ],
      },
    ],
  },
  {
    id: "lips",
    title: "Lips",
    intro:
      "Every treatment includes a detailed shape and colour pigment consultation.",
    groups: [
      {
        title: "Lip Artistry",
        img: D.lip,
        items: [
          { name: "Lip blush / tinting", price: 5999 },
          { name: "Dark lip neutralization", price: 7499 },
          { name: "PMU lip consultation", price: 500 },
        ],
      },
    ],
  },
  {
    id: "hair",
    title: "Hair",
    intro: "Extensions and ritual therapy for your hair.",
    groups: [
      {
        title: "Hair Extensions",
        img: D.hair,
        items: [
          { name: "Tape-in extensions (base 100g)", price: 10000, from: true },
          { name: "Keratin tip / K-tip (base 100g)", price: 12000, from: true },
          { name: "Clip-in extension", price: 9500, from: true },
          { name: "Pop / volume", price: 250, unit: "per strand" },
          { name: "Removal, full head", price: 6000, from: true },
        ],
      },
      {
        title: "Ritual Therapy",
        img: D.rit,
        items: [
          { name: "Hair spa", price: 1500, from: true },
          { name: "Moroccan spa", price: 3500, from: true },
          { name: "Oil massage", price: 1200 },
          { name: "Hair wash", price: 799 },
          { name: "Wash & blow dry", price: 1699 },
          { name: "Hair setting", price: 800, from: true },
        ],
      },
    ],
  },
  {
    id: "skin",
    title: "Skin & Body",
    intro: "Facials, clean-ups, de-tan and waxing.",
    groups: [
      {
        title: "Facials",
        img: D.face,
        items: [
          { name: "Skin lightening", price: 3199 },
          { name: "Bio-vitamin C", price: 3499 },
          { name: "Gold facial", price: 2499 },
          { name: "Pearl", price: 1999 },
        ],
      },
      {
        title: "Clean-ups",
        desc: "Add-on mask available.",
        img: D.clean,
        items: [
          { name: "Clean up", price: 1499 },
          { name: "Tan clear", price: 2199 },
        ],
      },
      {
        title: "De-tan",
        img: D.detan,
        items: [
          { name: "Face & neck", price: 599 },
          { name: "Full hand", price: 1499 },
          { name: "Half hand", price: 649 },
          { name: "Half leg", price: 1499 },
          { name: "Back", price: 999 },
        ],
      },
      {
        title: "Face Waxing",
        img: D.wax,
        items: [
          { name: "Face wax", price: 499 },
          { name: "Upper lip", price: 120 },
          { name: "Chin", price: 120 },
          { name: "Forehead", price: 120 },
          { name: "Sides", price: 120 },
        ],
      },
      {
        title: "Body Waxing",
        img: D.bodywax,
        items: [
          { name: "Underarms", price: 499 },
          { name: "Full hand", price: 1299 },
          { name: "Half hand", price: 649 },
          { name: "Full leg", price: 1599 },
          { name: "Half leg", price: 799 },
          { name: "Bikini wax", price: 3999 },
          { name: "Full body", price: 5499 },
        ],
      },
    ],
  },
  {
    id: "combos",
    title: "Combos",
    intro: "Bundle your favourites and save.",
    groups: [
      {
        title: "Combo Packages",
        img: D.combo,
        items: [
          {
            name: "Classic Combo",
            desc: "Classic lash extension + soft gel extension + classic pedicure + hair spa.",
            price: 8900,
          },
          {
            name: "Advanced Combo",
            desc: "Volume lash extension + soft gel with 10 finger art + jelly pedicure + manicure + hair spa + clean-up.",
            price: 13999,
          },
        ],
      },
    ],
  },
];