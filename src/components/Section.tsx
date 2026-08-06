import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  /**
   * compact: thin content — keep the site from feeling long
   * comfortable: default reading rhythm
   * statement: definition / weight (e.g. About)
   */
  density?: "compact" | "comfortable" | "statement";
  /** Tighter gap between section title and body */
  titleTight?: boolean;
};

const densityClass = {
  compact: "py-12 md:py-16",
  comfortable: "py-16 md:py-20",
  statement: "py-20 md:py-24",
} as const;

export function Section({
  id,
  title,
  children,
  density = "comfortable",
  titleTight = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-xl px-6 sm:max-w-2xl sm:px-10 ${densityClass[density]}`}
    >
      {title ? (
        <h2
          className={`font-[family-name:var(--font-display)] text-[0.625rem] font-medium tracking-[0.18em] text-water uppercase md:text-[0.6875rem] ${
            titleTight ? "mb-3.5 md:mb-4" : "mb-6 md:mb-7"
          }`}
        >
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
