/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <section
      className="relative h-[100svh] min-h-[720px] max-h-[980px] overflow-hidden rounded-b-[40px]"
      style={{
        background:
          "radial-gradient(60% 55% at 50% 45%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%), linear-gradient(165deg, #d3ebe6 0%, #b3dbd3 60%, #98cdc2 100%)",
      }}
    >
      {/* Soft depth blobs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#1f9a89]/10 blur-3xl" />

      {/* Woman cutout, anchored to bottom center */}
      <img
        src="/hero1.png"
        alt="Nail care model"
        className="absolute bottom-0 left-1/2 z-10 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
      />

      {/* Bottom gradient so white text always pops */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/4 bg-gradient-to-t from-[#2f8678]/30 to-transparent" />

      {/* Big text, IN FRONT of the image */}
      <h2
        className="pointer-events-none absolute inset-x-0 bottom-[3%] z-20 whitespace-nowrap text-center text-[11vw] font-normal leading-none tracking-wide text-white md:text-[9vw]"
        style={{ textShadow: "0 4px 30px rgba(0,60,50,0.45)" }}
      >
        NAILS &amp; BEAUTY
      </h2>

      {/* Content */}
      <div className="pointer-events-none relative z-30 mx-auto h-full max-w-[1440px]">
        <div className="px-6 pt-32 md:px-10 md:pt-40">
          <h1 className="text-6xl font-medium leading-[1.02] text-white [text-shadow:0_2px_20px_rgba(0,60,50,0.55)] md:text-8xl md:text-ink md:[text-shadow:none]">
            Luxury
            <br />
            Nail Care
          </h1>
          <p className="mt-6 max-w-xs text-sm font-medium text-white [text-shadow:0_2px_12px_rgba(0,60,50,0.6)] md:text-ink md:[text-shadow:none]">
            Elegant nails. Effortless confidence.
            <br />
            Experience beauty, redefined.
          </p>
        </div>
      </div>
    </section>
  );
}