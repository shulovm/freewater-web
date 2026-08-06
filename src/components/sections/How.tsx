import { Section } from "../Section";

const nodes = ["企業・団体", "Free Water", "無料で届ける", "みんな"] as const;

export function How() {
  return (
    <Section id="how" title="Free Waterの仕組み" density="comfortable">
      <ol className="mx-auto flex max-w-xs list-none flex-col items-center p-0">
        {nodes.map((label, i) => {
          const isHub = label === "Free Water";
          const isAction = label === "無料で届ける";

          return (
            <li key={label} className="flex w-full flex-col items-center">
              <p
                className={
                  isHub
                    ? "font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-water"
                    : isAction
                      ? "text-[0.9375rem] tracking-tight text-foreground sm:text-base"
                      : "text-sm tracking-tight text-muted"
                }
              >
                {label}
              </p>
              {i < nodes.length - 1 ? (
                <span
                  aria-hidden
                  className="mt-3 mb-3 flex flex-col items-center text-line"
                >
                  <span className="h-5 w-px bg-line" />
                  <span className="text-[0.55rem] leading-none text-muted/40">
                    ▼
                  </span>
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>

      <p className="mx-auto mt-10 max-w-md text-center text-sm leading-[1.75] text-muted/80">
        この活動は、協力によって続いています。
      </p>
    </Section>
  );
}
