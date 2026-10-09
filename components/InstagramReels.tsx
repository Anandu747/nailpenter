"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
  type ReactElement,
} from "react";
import _FlexCarousel from "@/components/FlexCarousel";
import FadeUp from "@/components/FadeUp";
import { LuArrowRight } from "react-icons/lu";
import { CONTACT } from "@/lib/data";

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
  className?: string;
  style?: CSSProperties;
};

const FlexCarousel = _FlexCarousel as unknown as (
  props: CarouselProps
) => ReactElement;

const thumb = (url: string) => `/api/ig-thumb?url=${encodeURIComponent(url)}`;

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
];

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

export default function InstagramReels() {
  const mobile = useIsMobile();

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

      {/* Carousel (full width, caption-nu vendi extra height) */}
      <div className="relative mt-8 h-[500px] w-full md:mt-10 md:h-[660px]">
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
          onSelect={(_: number, item: CarouselItem) => {
            if (item.url) window.open(item.url, "_blank", "noopener,noreferrer");
          }}
        />
      </div>
    </section>
  );
}