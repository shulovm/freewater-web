import { Section } from "../Section";

const steps = ["安全な水", "無料で届ける", "続ける協力"] as const;

export function How() {
  return (
    <Section id="how" title="Free Waterの仕組み" density="comfortable">
      <ol className="max-w-sm">
        {steps.map((step, i) => (
          <li key={step} className="flex gap-5">
            <div className="flex w-6 shrink-0 flex-col items-center">
              <span className="font-[family-name:var(--font-display)] text-[0.6875rem] leading-6 tracking-[0.08em] text-water tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              {i < steps.length - 1 ? (
                <span aria-hidden className="mt-1 w-px flex-1 bg-line" />
              ) : null}
            </div>
            <p
              className={`text-base tracking-tight text-foreground sm:text-lg ${
                i < steps.length - 1 ? "pb-8" : ""
              }`}
            >
              {step}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-md text-sm leading-relaxed text-muted">
        水は売っていません。
        <br />
        活動は、協力に支えられています。
      </p>
    </Section>
  );
}
