import { Section } from "../Section";

const metrics = [
  { label: "配布した水", value: "—" },
  { label: "実施した場", value: "—" },
] as const;

export function Metrics() {
  return (
    <Section id="metrics" title="活動実績" density="compact">
      <dl className="flex flex-col gap-6 sm:flex-row sm:gap-14">
        {metrics.map((item) => (
          <div key={item.label}>
            <dt className="text-sm text-muted">{item.label}</dt>
            <dd className="mt-1.5 font-[family-name:var(--font-display)] text-xl font-normal tracking-wide text-foreground/65">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-sm text-muted">最終更新：—</p>
    </Section>
  );
}
