import ScrollExpand from "@/components/ScrollExpand";
import { IMG } from "@/lib/data";

export default function Showcase() {
  return (
    <section className="mt-16">
      <ScrollExpand
        src={IMG.art}
        alt="Nail art by Soniya"
        title="Made for you"
        scrollHint="Scroll to explore"
        useWindowScroll
      >
        <h2 className="text-4xl font-extralight text-white md:text-6xl">
          Every set, made just for you.
        </h2>
        <p className="mt-4 max-w-md text-sm text-white/80 md:text-base">
          From clean everyday looks to detailed nail art, designed around what
          you want.
        </p>
        <a
          href="#contact"
          className="mt-8 rounded-full bg-teal px-8 py-3 text-sm font-medium text-white transition hover:bg-teal-dark"
        >
          Book Now
        </a>
      </ScrollExpand>
    </section>
  );
}