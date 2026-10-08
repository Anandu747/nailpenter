import { LuStar } from "react-icons/lu";

type Review = { name: string; text: string };

const REVIEWS: Review[] = [
  {
    name: "Danitta D'cruz",
    text: "Absolutely loved my floral luxe nails. The design turned out exactly how I wanted, the gel polish finish is flawless, and the service was so warm and welcoming. Highly recommend!",
  },
  {
    name: "Sevi 368",
    text: "I done my lashes here. The work was amazing. If you are looking for a perfect lash extension you definitely try this salon. Once you try here, you will definitely love it.",
  },
  {
    name: "Revathy K",
    text: "It was overall good experience and great service by team and owner Soniya, she is very friendly. Overall great experience, I recommend to everyone.",
  },
  {
    name: "juvana celine",
    text: "I had such a wonderful experience getting my nail extensions here! The staff was so friendly, patient, and professional, and they paid great attention to every little detail.",
  },
  {
    name: "Riya Dominic",
    text: "It's too good, I loved the nail art and extension. The work was neat and they paid attention to every little detail, they did just like I have shown in the reference. Definitely recommended!",
  },
  {
    name: "Janaki Mantra",
    text: "I'm in love with their work! Such a cosy and warm place to make your nails even more fabulous. The staff are so friendly and welcoming, and a big thanks to Aswathi for making my nails this beautiful.",
  },
  {
    name: "Leya Boby",
    text: "This was the first time I got my nails done and I am extremely satisfied by the services provided! The staff was kind enough to answer all my queries patiently, being a first timer!",
  },
];

const ROW_ONE = REVIEWS.slice(0, 4);
const ROW_TWO = REVIEWS.slice(4);

function ReviewCard({ r }: { r: Review }) {
  return (
    // pr (not gap) so the -50% marquee loop is perfectly seamless
    <div className="shrink-0 pr-10 md:pr-16">
      <article className="w-[290px] border-l border-ink/15 pl-7 md:w-[400px] md:pl-9">
        <div className="flex gap-1 text-teal">
          {Array.from({ length: 5 }).map((_, i) => (
            <LuStar key={i} size={14} className="fill-current" />
          ))}
        </div>
        <p className="mt-5 font-display text-xl font-normal leading-snug text-ink md:text-2xl">
          &ldquo;{r.text}&rdquo;
        </p>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-ink">
          {r.name}
        </p>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
          Google review
        </p>
      </article>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Review[];
  reverse?: boolean;
}) {
  // Duplicated so the loop is seamless (track moves -50%)
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="reviews-marquee overflow-hidden">
      <div
        className={`reviews-track flex w-max ${
          reverse ? "reviews-track-reverse" : ""
        }`}
      >
        {loop.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="mt-28 md:mt-40">
      {/* Header */}
      <div className="mx-auto grid max-w-[1440px] gap-6 px-6 md:grid-cols-2 md:items-end md:gap-20 md:px-16 lg:px-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
            Reviews
          </p>
          <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-ink md:text-7xl">
            Loved by
            <br />
            our clients.
          </h2>
        </div>
        <p className="max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
          Real words from real clients, straight from Google.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="reviews-fade mt-14 flex flex-col gap-12 md:mt-20 md:gap-16">
        <MarqueeRow items={ROW_ONE} />
        <MarqueeRow items={ROW_TWO} reverse />
      </div>
    </section>
  );
}