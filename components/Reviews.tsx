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
    <article className="w-[300px] shrink-0 rounded-3xl bg-mint p-6 md:w-[380px] md:p-7">
      <div className="flex gap-1 text-teal">
        {Array.from({ length: 5 }).map((_, i) => (
          <LuStar key={i} size={18} className="fill-current" />
        ))}
      </div>
      <p className="mt-4 text-base font-medium leading-relaxed text-ink/80">
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/80 text-base font-semibold text-teal-dark">
          {r.name.charAt(0).toUpperCase()}
        </span>
        <div>
          <p className="text-base font-semibold text-ink">{r.name}</p>
          <p className="text-sm font-medium text-ink/60">Google review</p>
        </div>
      </div>
    </article>
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
        className={`reviews-track flex w-max gap-4 ${
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
    <section id="reviews" className="mt-16">
      <div className="px-6 md:px-10">
        <span className="inline-block rounded-full border border-teal/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-dark">
          Reviews
        </span>
        <h2 className="mt-5 text-4xl font-medium leading-[1.05] text-ink md:text-6xl">
          Loved by our clients.
        </h2>
        <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-ink/75 md:text-lg">
          Real words from real clients, straight from Google.
        </p>
      </div>

      <div className="reviews-fade mt-8 flex flex-col gap-4">
        <MarqueeRow items={ROW_ONE} />
        <MarqueeRow items={ROW_TWO} reverse />
      </div>
    </section>
  );
}