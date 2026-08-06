import { METRICS, METRICS_UPDATED_AT } from "../../lib/site";
import { Section } from "../Section";

/**
 * Quiet proof slot. Grid accepts 2–4 metrics without redesign.
 * Values use a stable measure so "—" → real figures won't buckle the row.
 */
export function Metrics() {
  return (
    <Section
      id="metrics"
      title="活動実績"
      density="whisper"
      titleTone="quiet"
      titleTight
    >
      <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-[repeat(auto-fit,minmax(7.5rem,1fr))] sm:gap-x-10">
        {METRICS.map((item) => (
          <div key={item.label} className="min-w-0">
            <dt className="text-sm leading-normal text-muted/80">{item.label}</dt>
            <dd className="mt-1 min-h-[1.75rem] font-[family-name:var(--font-display)] text-base font-normal tabular-nums tracking-wide text-foreground/45">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-sm leading-normal text-muted/70">
        最終更新：{METRICS_UPDATED_AT}
      </p>
    </Section>
  );
}
