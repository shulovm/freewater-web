import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  /**
   * bridge: After Hero — open top, soft close into the next beat
   * note: Thin field note — sits close to what came before
   * focus: Deepest stop — room for the diagram to sink in
   * soft: Calm structure without sales weight
   * whisper: Optional appendix — almost already leaving
   */
  density?: "bridge" | "note" | "focus" | "soft" | "whisper";
  /** Tighter gap between section title and body */
  titleTight?: boolean;
  /** Heading presence along the scroll arc */
  titleTone?: "entry" | "structure" | "quiet";
  className?: string;
};

const densityClass = {
  bridge: "pt-20 pb-8 md:pt-28 md:pb-10",
  note: "pt-6 pb-14 md:pt-8 md:pb-16",
  focus: "py-24 md:py-32",
  soft: "py-16 pb-20 md:py-20 md:pb-24",
  whisper: "pt-10 pb-6 md:pt-12 md:pb-8",
} as const;

const titleToneClass = {
  entry:
    "font-[family-name:var(--font-display)] text-[0.6875rem] font-medium tracking-[0.16em] text-water uppercase md:text-xs",
  structure:
    "font-[family-name:var(--font-display)] text-[0.625rem] font-medium tracking-[0.18em] text-water/90 uppercase md:text-[0.6875rem]",
  quiet:
    "font-[family-name:var(--font-display)] text-[0.5625rem] font-medium tracking-[0.2em] text-muted uppercase md:text-[0.625rem]",
} as const;

export function Section({
  id,
  title,
  children,
  density = "soft",
  titleTight = false,
  titleTone = "structure",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-xl px-6 sm:max-w-2xl sm:px-10 ${densityClass[density]} ${className}`}
    >
      {title ? (
        <h2
          className={`${titleToneClass[titleTone]} ${
            titleTight ? "mb-3 md:mb-3.5" : "mb-6 md:mb-7"
          }`}
        >
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
