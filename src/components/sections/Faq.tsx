import { Section } from "../Section";

const faqs = [
  {
    q: "本当に無料ですか？",
    a: "はい。飲む人から料金は取りません。",
  },
  {
    q: "誰でも飲めますか？",
    a: "はい。どなたでもどうぞ。",
  },
  {
    q: "寄付ですか？",
    a: "寄付をお願いする活動ではありません。",
  },
] as const;

export function Faq() {
  return (
    <Section id="faq" title="FAQ" density="compact">
      <div className="divide-y divide-line border-t border-line">
        {faqs.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="cursor-pointer list-none text-sm text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-baseline justify-between gap-4">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="shrink-0 text-muted/60 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 pr-8 text-sm leading-relaxed text-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
