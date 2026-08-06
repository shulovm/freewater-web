import { Section } from "../Section";

const metrics = [
  { label: "配布した水", value: "—" },
  { label: "実施した場", value: "—" },
] as const;

export function Metrics() {
  return (
    <Section id="metrics" title="活動実績">
      <dl className="grid gap-10 sm:grid-cols-2">
        {metrics.map((item) => (
          <div key={item.label} className="border-t border-line pt-5">
            <dt className="text-sm text-muted">{item.label}</dt>
            <dd className="mt-3 font-[family-name:var(--font-display)] text-4xl font-normal tracking-tight text-foreground">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-12 text-sm text-muted">最終更新：—</p>
      <p className="mt-4 text-sm text-muted">
        数字は活動に合わせて更新します。
      </p>
    </Section>
  );
}
