import { Section } from "../Section";

const metrics = [
  { label: "配布した水", value: "—" },
  { label: "実施した場", value: "—" },
] as const;

/** Quiet present tense of proof — not a climax */
export function Metrics() {
  return (
    <Section
      id="metrics"
      title="活動実績"
      density="whisper"
      titleTone="quiet"
      titleTight
    >
      <dl className="flex flex-col gap-4 sm:flex-row sm:gap-10">
        {metrics.map((item) => (
          <div key={item.label}>
            <dt className="text-sm leading-normal text-muted/80">{item.label}</dt>
            <dd className="mt-0.5 font-[family-name:var(--font-display)] text-base font-normal tracking-wide text-foreground/45">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-sm leading-normal text-muted/70">最終更新：—</p>
    </Section>
  );
}
