import ScrollExpand from "@/components/ScrollExpand";
import { IMG } from "@/lib/data";

export default function Showcase() {
  return (
    <section className="mt-16">
      <ScrollExpand
        mediaType="video"
        src="/showcase.mp4"
        poster={IMG.art}
        alt="Nail art by Soniya"
        title="Made for you"
        scrollHint="Scroll to explore"
        useWindowScroll
      >
        <h2 className="text-4xl font-medium text-white md:text-6xl">
          Every set, made just for you.
        </h2>
        <p className="mt-4 max-w-md text-base font-medium text-white md:text-lg">
          From clean everyday looks to detailed nail art, designed around what
          you want.
        </p>
        <a
          href="#contact"
          className="mt-8 rounded-full bg-black px-8 py-3 text-base font-semibold text-white transition hover:bg-teal-dark"
        >
          Book Now
        </a>
      </ScrollExpand>
    </section>
  );
}