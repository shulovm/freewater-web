import { CONTACT_EMAIL } from "../../lib/site";
import { Section } from "../Section";

/** A calm option after understanding — not a sales close */
export function Join() {
  return (
    <Section id="join" title="協力する" density="soft" titleTone="structure">
      <ul className="space-y-5 text-sm leading-[1.8] sm:text-[0.9375rem]">
        <li>
          <p className="text-foreground/90">スポンサー</p>
          <p className="mt-1 text-muted">
            水の調達や配布に協力する企業・団体を募集しています。
          </p>
        </li>
        <li>
          <p className="text-foreground/90">イベント</p>
          <p className="mt-1 text-muted">
            水を配布できる場所やイベントについてご相談いただけます。
          </p>
        </li>
      </ul>

      <div className="mt-9 border-t border-line/80 pt-6">
        <p className="text-sm leading-normal text-muted/80">連絡先</p>
        {CONTACT_EMAIL ? (
          <a
            className="mt-1.5 inline-block text-[0.9375rem] leading-snug text-foreground/90 underline-offset-4 hover:underline"
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Free Water について")}`}
          >
            {CONTACT_EMAIL}
          </a>
        ) : (
          <p className="mt-1.5 text-[0.9375rem] leading-snug text-muted">
            お問い合わせ窓口は準備中です。
          </p>
        )}
      </div>
    </Section>
  );
}
