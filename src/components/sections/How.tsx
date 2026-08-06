import { Section } from "../Section";

const nodes = ["企業・団体", "Free Water", "無料で届ける", "みんな"] as const;

/** Deepest stop — the diagram carries understanding before any sentence */
export function How() {
  return (
    <Section
      id="how"
      title="Free Waterの仕組み"
      density="focus"
      titleTone="structure"
    >
      <ol className="mx-auto flex max-w-xs list-none flex-col items-center p-0">
        {nodes.map((label, i) => {
          const isHub = label === "Free Water";
          const isAction = label === "無料で届ける";

          return (
            <li key={label} className="flex w-full flex-col items-center">
              <p
                className={
                  isHub
                    ? "font-[family-name:var(--font-display)] text-sm tracking-[0.22em] text-water sm:text-[0.9375rem]"
                    : isAction
                      ? "text-base tracking-tight text-foreground sm:text-[1.0625rem]"
                      : "text-sm tracking-tight text-muted/85"
                }
              >
                {label}
              </p>
              {i < nodes.length - 1 ? (
                <span
                  aria-hidden
                  className="mt-4 mb-4 flex flex-col items-center"
                >
                  <span className="h-7 w-px bg-line" />
                  <span className="text-[0.5rem] leading-none text-muted/35">
                    ▼
                  </span>
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>

      <p className="mx-auto mt-14 max-w-sm text-center text-sm leading-[1.8] text-muted/70">
        この活動は、協力によって続いています。
      </p>
    </Section>
  );
}
