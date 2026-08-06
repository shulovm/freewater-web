import { CONTACT_EMAIL } from "../../lib/site";
import { Section } from "../Section";

export function Join() {
  return (
    <Section id="join" title="協力する" density="comfortable">
      <ul className="space-y-7 text-[0.9375rem] leading-relaxed sm:text-base">
        <li>
          <p className="text-foreground">スポンサー</p>
          <p className="mt-1.5 text-muted">
            活動を支える側として、名前を出せます。
          </p>
        </li>
        <li>
          <p className="text-foreground">イベント</p>
          <p className="mt-1.5 text-muted">会場で水を配る協力ができます。</p>
        </li>
      </ul>

      <div className="mt-12 border-t border-line pt-8">
        <p className="text-sm text-muted">連絡先</p>
        <a
          className="mt-2 inline-block text-base text-foreground underline-offset-4 hover:underline"
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Free Water について")}`}
        >
          {CONTACT_EMAIL}
        </a>
        <p className="mt-4 max-w-sm text-sm text-muted">
          件名に「スポンサー」または「イベント」と書いてください。
        </p>
      </div>
    </Section>
  );
}
