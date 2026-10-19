/* eslint-disable @next/next/no-img-element */
import FadeUp from "@/components/FadeUp";

// Ithu venel "@/lib/data"-yilekku maatham (SERVICES pole ACADEMY_COURSES aayi)
const COURSES = [
  {
    name: "Nail Class",
    desc: "Learn manicure basics, gel and acrylic application, shaping and nail art from hands-on practice with professional tools and products.",
    img: "/nail.jpg", // ninte image path 
  },
  {
    name: "Lashes Class",
    desc: "Learn classic and volume lash extensions, lash mapping, safe application and aftercare with guided practice on real clients.",
    img: "/lashes.jpg", // ninte image path 
  },
];

// Country code sahitham number kodukku, "+" illa, space illa (eg: 919876543210)
const WHATSAPP_NUMBER = "918111897359";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'd like more details about the Nailpenter Academy classes."
)}`;

export default function Academy() {
  return (
    <section
      id="academy"
      className="mx-auto mt-24 max-w-[1440px] px-6 md:mt-32 md:px-16 lg:px-24"
    >
      {/* Header */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <FadeUp>
            <h2 className="font-display text-5xl font-normal leading-[1.05] text-ink md:text-7xl">
              Nailpenter Academy
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="mt-6 max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
              Learn the craft from the people who do it every day. Small
              batches, real practice, and a certificate when you finish.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={200}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block shrink-0 rounded-full bg-teal-dark px-8 py-3.5 text-[15px] font-semibold text-white transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
          >
            More
          </a>
        </FadeUp>
      </div>

      {/* Classes */}
      <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-12">
        {COURSES.map((c, i) => (
          <FadeUp key={c.name} delay={i * 100}>
            <div className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-mint">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-display text-4xl font-normal uppercase tracking-[0.04em] text-ink md:text-5xl">
                {c.name}
              </h3>
              <p className="mt-4 max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
                {c.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* DM CTA */}
      <FadeUp>
        <div className="relative mt-16 flex flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl bg-mint px-8 py-10 md:mt-24 md:flex-row md:items-center md:px-14 md:py-14">
          {/* Watermark (public/review-watermark.png) */}
          <img
            src="/review-watermark.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-[50%_35%] opacity-25 mix-blend-multiply"
          />
          <div className="relative">
            <h3 className="font-display text-3xl font-normal text-ink md:text-5xl">
              Want more details?
            </h3>
            <p className="mt-3 max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
              DM us on WhatsApp for fees, batch dates and timings.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex shrink-0 items-center gap-3 rounded-full bg-teal-dark px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
            </svg>
            DM on WhatsApp
          </a>
        </div>
      </FadeUp>
    </section>
  );
}