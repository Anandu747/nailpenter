import Card from "@/components/ui/Card";
import { LuHeart, LuPalette, LuShieldCheck } from "react-icons/lu";

const PILLARS = [
  {
    icon: LuHeart,
    title: "Our Story",
    text: "Nailbento started with Soniya's love for nail art, right here in Kochi. What began as designing sets for friends grew into a studio where every client gets a look made just for her.",
  },
  {
    icon: LuPalette,
    title: "What We Do",
    text: "Nail extensions, gel and nail art, lashes and more. We also make handmade press-on nails, so you can wear a salon-style set at home.",
  },
  {
    icon: LuShieldCheck,
    title: "Our Promise",
    text: "Sterilized tools, clean space and non-toxic, cruelty-free products. And if you don't love your set, we'll fix it. Free.",
  },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="mt-16 px-6 md:px-10">
      <span className="inline-block rounded-full border border-teal/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-dark">
        Who We Are
      </span>
      <h2 className="mt-5 text-4xl font-medium leading-[1.05] text-ink md:text-6xl">
        A Kochi studio for
        <br />
        nails you&apos;ll love.
      </h2>
      <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-ink/75 md:text-lg">
        We&apos;re a small, passionate nail studio. No rush, no copy-paste
        designs, just clean work, honest prices and a finish you&apos;re proud
        to show off.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {PILLARS.map((p) => (
          <Card key={p.title} className="bg-mint p-6 md:p-8">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/80 text-teal">
              <p.icon size={26} />
            </span>
            <h3 className="mt-5 text-2xl font-medium text-ink">{p.title}</h3>
            <p className="mt-2 text-base font-medium leading-relaxed text-ink/75">
              {p.text}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}