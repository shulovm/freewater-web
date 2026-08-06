export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 sm:px-8"
      aria-label="Free Water"
    >
      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        <p className="fw-fade-up font-[family-name:var(--font-display)] text-sm font-medium tracking-[0.38em] text-water uppercase sm:text-base sm:tracking-[0.42em]">
          FREE WATER
        </p>
        <h1 className="fw-fade-up-delay mt-10 text-balance text-[1.625rem] font-normal leading-snug tracking-tight text-foreground sm:mt-12 sm:text-3xl md:text-[2.125rem]">
          日本の安全な水を、無料で。
        </h1>
      </div>

      <a
        href="#about"
        className="fw-fade-in absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.65rem] tracking-[0.28em] text-muted/55 no-underline sm:bottom-10"
      >
        ↓
        <span className="sr-only">次のセクションへ</span>
      </a>
    </section>
  );
}
