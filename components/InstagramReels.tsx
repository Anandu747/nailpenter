/* eslint-disable @next/next/no-img-element */
"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
} from "react";
import _FlexCarousel from "@/components/FlexCarousel";
import FadeUp from "@/components/FadeUp";
import { LuArrowRight, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { CONTACT } from "@/lib/data";

// true aakkiyaal ellarkkum simple carousel (WebGL off). Hang aayaal ithu true aakki ship cheyyuka.
const FORCE_FALLBACK = false;

type CarouselItem = {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  url?: string;
};

type CarouselProps = {
  items?: CarouselItem[];
  preset?: string;
  intro?: string;
  cardHeight?: number;
  gap?: number;
  radius?: number;
  fit?: string;
  bend?: number;
  dispersion?: number;
  squeeze?: number;
  focusOnClick?: boolean;
  captureWheel?: boolean;
  onSelect?: (index: number, item: CarouselItem) => void;
  onError?: (err?: unknown) => void;
  className?: string;
  style?: CSSProperties;
};

const FlexCarousel = _FlexCarousel as unknown as (
  props: CarouselProps
) => ReactElement;

const thumb = (url: string) => `/api/ig-thumb?url=${encodeURIComponent(url)}`;

// Puthiya reel venel ivide oru item koodi add cheythaal mathi
const REELS: CarouselItem[] = [
  {
    alt: "Nail art reel",
    title: "Floral luxe set",
    subtitle: "Tap to watch on Instagram",
    url: "https://www.instagram.com/reel/DeE46ulzh1t/",
    src: thumb("https://www.instagram.com/reel/DeE46ulzh1t/"),
  },
  {
    alt: "Nail extensions reel",
    title: "Nail extensions",
    subtitle: "Tap to watch on Instagram",
    url: "https://www.instagram.com/reel/DeD9A5HsJIs/",
    src: thumb("https://www.instagram.com/reel/DeD9A5HsJIs/"),
  },
  {
    alt: "Lash extensions reel",
    title: "Lash extensions",
    subtitle: "Tap to watch on Instagram",
    url: "https://www.instagram.com/reel/Dd6bDoqTOik/",
    src: thumb("https://www.instagram.com/reel/Dd6bDoqTOik/"),
  },
  {
    alt: "Press-on nails reel",
    title: "Press-on nails",
    subtitle: "Tap to watch on Instagram",
    url: "https://www.instagram.com/reel/DdjcMhhxYY3/",
    src: thumb("https://www.instagram.com/reel/DdjcMhhxYY3/"),
  },
  {
    alt: "Lash extensions reel",
    title: "Lash extensions",
    subtitle: "Tap to watch on Instagram",
    url: "https://www.instagram.com/reel/DdJJGD7p445/",
    src: thumb("https://www.instagram.com/reel/DdJJGD7p445/"),
  },
];

// WebGL2 undo, athu software (CPU) rendering alla ennu check cheyyunnu
function supportsGoodWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2");
    if (!gl) return false;

    let software = false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    if (info) {
      const renderer = String(
        gl.getParameter(info.UNMASKED_RENDERER_WEBGL)
      ).toLowerCase();
      software = /swiftshader|llvmpipe|software|basic render/.test(renderer);
    }
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !software;
  } catch {
    return false;
  }
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

// Screen-il varumbol mathram true aavum
function useInView<T extends HTMLElement>(enabled: boolean) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled]);
  return [ref, seen] as const;
}

// WebGL illaatha devices-nu simple carousel.
// Width heading-nte content width thanne (left/right edges align aavum).
// Desktop 4 cards, tablet 3, mobile 1 + peek.
function ReelsSlider({ reels }: { reels: CarouselItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement | undefined;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.offsetWidth + gap : 300;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="mx-auto mt-8 max-w-[1440px] px-6 md:mt-10 md:px-16 lg:px-24">
      <div className="relative">
        {/* Arrows (desktop): card-nte edge-il half purathu */}
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous reels"
          className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md transition hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-0 md:flex"
        >
          <LuChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next reels"
          className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md transition hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-0 md:flex"
        >
          <LuChevronRight size={22} />
        </button>

        {/* Track */}
        <div
          ref={scrollerRef}
          onScroll={update}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto [scrollbar-width:none] md:gap-5 [&::-webkit-scrollbar]:hidden"
        >
          {reels.map((r, i) => (
            <a
              key={r.url ?? i}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${r.title ?? "Reel"} - watch on Instagram`}
              className="group relative aspect-[9/16] w-[72%] shrink-0 snap-start overflow-hidden rounded-2xl bg-mint md:w-[calc((100%_-_2.5rem)/3)] lg:w-[calc((100%_-_3.75rem)/4)]"
            >
              <img
                src={r.src}
                alt={r.alt}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
                <p className="text-sm font-medium text-white">{r.title}</p>
                <p className="text-xs text-white/70">{r.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InstagramReels() {
  const mobile = useIsMobile();
  // null = check cheyyunnu, true = WebGL carousel, false = simple carousel
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [boxRef, seen] = useInView<HTMLDivElement>(webgl === true);

  useEffect(() => {
    // ?carousel=1 koduthaal check skip cheythu WebGL carousel force cheyyam (testing-nu)
    const forced =
      new URLSearchParams(window.location.search).get("carousel") === "1";
    const okCpu = (navigator.hardwareConcurrency ?? 8) >= 4;
    setWebgl(!FORCE_FALLBACK && (forced || (okCpu && supportsGoodWebGL())));
  }, []);

  return (
    <section className="mt-20 md:mt-28">
      {/* Header (padded) */}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between md:px-16 lg:px-24">
        <div>
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
              On Instagram
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h3 className="mt-4 font-display text-4xl font-normal uppercase tracking-[0.04em] text-ink md:text-5xl">
              Watch our work
            </h3>
          </FadeUp>
        </div>

        <FadeUp delay={200}>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-teal"
          >
            {CONTACT.handle}
            <LuArrowRight size={16} />
          </a>
        </FadeUp>
      </div>

      {webgl === null ? (
        /* check cheyyunna samayam layout jump varaathirikkaan */
        <div className="mt-8 h-[500px] w-full md:mt-10 md:h-[660px]" />
      ) : webgl === false ? (
        <ReelsSlider reels={REELS} />
      ) : (
        <div
          ref={boxRef}
          className="relative mt-8 h-[500px] w-full md:mt-10 md:h-[660px]"
        >
          {seen && (
            <FlexCarousel
              items={REELS}
              preset="liquid"
              intro="rise"
              cardHeight={mobile ? 0.62 : 0.68}
              gap={mobile ? 12 : 16}
              radius={16}
              fit="natural"
              bend={mobile ? 0.12 : 0.34}
              dispersion={mobile ? 0.2 : 0.45}
              squeeze={mobile ? 0.1 : 0.2}
              focusOnClick={false}
              captureWheel={false}
              onError={() => setWebgl(false)}
              onSelect={(_: number, item: CarouselItem) => {
                if (item.url)
                  window.open(item.url, "_blank", "noopener,noreferrer");
              }}
            />
          )}
        </div>
      )}
    </section>
  );
}