import { Section } from "../Section";

/** Current field work — quieter, documentary spacing vs definition */
export function Activity() {
  return (
    <Section id="activity" title="現在の活動" density="compact">
      <p className="max-w-sm text-[0.9375rem] leading-relaxed text-muted sm:text-base">
        いまは、イベントなどで無料の水を渡しています。
      </p>
    </Section>
  );
}
