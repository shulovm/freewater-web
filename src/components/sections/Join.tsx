import { CONTACT_EMAIL } from "../../lib/site";
import { Section } from "../Section";

export function Join() {
  return (
    <Section id="join" title="協力する">
      <ul className="space-y-8 text-base leading-relaxed text-foreground">
        <li>
          <p className="font-medium">スポンサー</p>
          <p className="mt-1 text-muted">活動を支える側として、名前を出せます。</p>
        </li>
        <li>
          <p className="font-medium">イベント</p>
          <p className="mt-1 text-muted">会場で水を配る協力ができます。</p>
        </li>
      </ul>

      <p className="mt-14 text-base text-foreground">
        連絡先
        <br />
        <a
          className="mt-2 inline-block text-water underline-offset-4 hover:underline"
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Free Water について")}`}
        >
          {CONTACT_EMAIL}
        </a>
      </p>
      <p className="mt-4 max-w-sm text-sm text-muted">
        件名に「スポンサー」または「イベント」と書いてください。
      </p>
    </Section>
  );
}
