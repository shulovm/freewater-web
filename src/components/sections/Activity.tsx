import { Section } from "../Section";

/** Present-tense field note — sits close under About, not a second definition */
export function Activity() {
  return (
    <Section
      id="activity"
      title="現在の活動"
      density="note"
      titleTone="entry"
      titleTight
    >
      <p className="max-w-sm text-sm leading-[1.8] text-muted sm:text-[0.9375rem]">
        いまは、イベントなどで無料の水を渡しています。
      </p>
    </Section>
  );
}
