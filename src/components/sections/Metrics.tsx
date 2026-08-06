import { Section } from "../Section";

const metrics = [
  { label: "配布した水", value: "—" },
  { label: "実施した場", value: "—" },
] as const;

export function Metrics() {
  return (
    <Section id="metrics" title="活動実績" density="compact">
      <dl className="flex flex-col gap-8 sm:flex-row sm:gap-16">
        {metrics.map((item) => (
          <div key={item.label}>
            <dt className="text-sm text-muted">{item.label}</dt>
            <dd className="mt-2 font-[family-name:var(--font-display)] text-2xl font-normal tracking-wide text-foreground/70">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-10 text-sm text-muted">最終更新：—</p>
      <p className="mt-3 text-sm text-muted">
        数字は活動に合わせて更新します。
      </p>
    </Section>
  );
}
