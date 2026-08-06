import { CONTACT_EMAIL } from "../../lib/site";
import { Section } from "../Section";

export function Join() {
  return (
    <Section id="join" title="協力する" density="comfortable">
      <ul className="space-y-7 text-[0.9375rem] leading-relaxed sm:text-base">
        <li>
          <p className="text-foreground">スポンサー</p>
          <p className="mt-1.5 text-muted">
            水の調達や配布に協力する企業・団体を募集しています。
          </p>
        </li>
        <li>
          <p className="text-foreground">イベント</p>
          <p className="mt-1.5 text-muted">
            水を配布できる場所やイベントについてご相談いただけます。
          </p>
        </li>
      </ul>

      <div className="mt-12 border-t border-line pt-8">
        <p className="text-sm text-muted">連絡先</p>
        {CONTACT_EMAIL ? (
          <a
            className="mt-2 inline-block text-base text-foreground underline-offset-4 hover:underline"
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Free Water について")}`}
          >
            {CONTACT_EMAIL}
          </a>
        ) : (
          <p className="mt-2 text-base text-foreground">
            お問い合わせ窓口は準備中です。
          </p>
        )}
      </div>
    </Section>
  );
}
