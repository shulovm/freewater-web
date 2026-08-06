import {
  CONTACT_EMAIL,
  JOIN_WAYS,
  PARTNERS,
  PLACEMENTS,
} from "../../lib/site";
import { Section } from "../Section";

/**
 * Calm vessel for participation.
 * Ways → (optional partners) → (optional placements) → single contact.
 * Grows by filling arrays in site.ts — never by adding sales chrome.
 */
export function Join() {
  return (
    <Section id="join" title="協力する" density="soft" titleTone="structure">
      <ul className="space-y-5 text-sm leading-[1.8] sm:text-[0.9375rem]">
        {JOIN_WAYS.map((way) => (
          <li key={way.title}>
            <p className="text-foreground/90">{way.title}</p>
            <p className="mt-1 text-muted">{way.body}</p>
          </li>
        ))}
      </ul>

      {/* Reserved: named partners as a quiet text list when facts exist */}
      {PARTNERS.length > 0 ? (
        <ul className="mt-10 space-y-2 border-t border-line/60 pt-7 text-sm leading-normal text-muted">
          {PARTNERS.map((p) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ul>
      ) : (
        <div className="mt-8" aria-hidden />
      )}

      {/* Reserved: placement references (e.g. 掲載イメージ) — text/links only */}
      {PLACEMENTS.length > 0 ? (
        <ul className="mt-8 space-y-2 text-sm leading-normal text-muted">
          {PLACEMENTS.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <a href={item.href} className="hover:text-foreground">
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-10 border-t border-line/80 pt-6">
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
