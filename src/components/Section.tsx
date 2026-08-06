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
};

const densityClass = {
  compact: "py-14 md:py-20",
  comfortable: "py-20 md:py-28",
  statement: "py-24 md:py-32",
} as const;

export function Section({
  id,
  title,
  children,
  density = "comfortable",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-2xl px-5 sm:px-8 ${densityClass[density]}`}
    >
      {title ? (
        <h2 className="mb-8 font-[family-name:var(--font-display)] text-[0.6875rem] font-medium tracking-[0.16em] text-water uppercase md:mb-10 md:text-xs">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
