export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6"
      aria-label="Free Water"
    >
      {/* Quiet atmosphere — not a product shot; calm depth for a still brand */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,var(--water-soft)_0%,transparent_55%),linear-gradient(180deg,#fbfcfd_0%,var(--background)_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(107,138,154,0.06))]"
      />

      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        <p className="fw-fade-up font-[family-name:var(--font-display)] text-[0.7rem] font-medium tracking-[0.42em] text-water uppercase sm:text-xs">
          FREE WATER
        </p>
        <h1 className="fw-fade-up-delay mt-8 text-balance text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          日本の安全な水を、無料で。
        </h1>
      </div>

      <a
        href="#about"
        className="fw-fade-in fw-breathe absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.2em] text-muted no-underline"
      >
        ↓
        <span className="sr-only">次のセクションへ</span>
      </a>
    </section>
  );
}
