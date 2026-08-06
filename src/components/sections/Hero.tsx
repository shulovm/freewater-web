export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-8 sm:px-12"
      aria-label="Free Water"
    >
      {/* Optical lift: more air below than above */}
      <div className="relative z-10 -mt-[4vh] flex max-w-md flex-col items-center text-center sm:max-w-lg">
        <p className="fw-fade-up font-[family-name:var(--font-display)] text-[0.8125rem] font-medium tracking-[0.48em] text-water uppercase sm:text-sm sm:tracking-[0.52em]">
          FREE WATER
        </p>
        <h1 className="fw-fade-up-delay mt-14 text-balance text-[1.375rem] font-normal leading-[1.55] tracking-tight text-foreground sm:mt-16 sm:text-[1.75rem] sm:leading-[1.5] md:text-[1.875rem]">
          日本の安全な水を、無料で。
        </h1>
      </div>

      <a
        href="#about"
        className="fw-fade-in absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[0.55rem] tracking-[0.4em] text-muted/35 no-underline sm:bottom-8"
      >
        ↓
        <span className="sr-only">次のセクションへ</span>
      </a>
    </section>
  );
}
