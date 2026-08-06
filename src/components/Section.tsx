import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  /** Extra vertical space (hero already fills viewport) */
  spacious?: boolean;
};

export function Section({ id, title, children, spacious = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-2xl px-6 ${spacious ? "py-24 md:py-32" : "py-16"}`}
    >
      {title ? (
        <h2 className="mb-10 font-[family-name:var(--font-display)] text-sm font-medium tracking-[0.14em] text-water uppercase">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
