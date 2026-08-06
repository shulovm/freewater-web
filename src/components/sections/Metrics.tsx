import { Section } from "../Section";

const metrics = [
  { label: "配布した水", value: "—" },
  { label: "実施した場", value: "—" },
] as const;

export function Metrics() {
  return (
    <Section id="metrics" title="活動実績" density="compact">
      <dl className="flex flex-col gap-5 sm:flex-row sm:gap-12">
        {metrics.map((item) => (
          <div key={item.label}>
            <dt className="text-sm leading-normal text-muted">{item.label}</dt>
            <dd className="mt-1 font-[family-name:var(--font-display)] text-lg font-normal tracking-wide text-foreground/60">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-7 text-sm leading-normal text-muted">最終更新：—</p>
    </Section>
  );
}
