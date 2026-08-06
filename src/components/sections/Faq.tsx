import { Section } from "../Section";

const faqs = [
  {
    q: "本当に無料ですか？",
    a: "はい。水を受け取る人から料金は取りません。",
  },
  {
    q: "水は安全ですか？",
    a: "日本国内で製造された市販の飲料水を使用します。",
  },
  {
    q: "誰でも飲めますか？",
    a: "はい。どなたでも受け取れます。",
  },
] as const;

/** For those who still need a check — soft exit, not a second briefing */
export function Faq() {
  return (
    <Section
      id="faq"
      title="FAQ"
      density="whisper"
      titleTone="quiet"
      titleTight
    >
      <div className="divide-y divide-line/70 border-t border-line/70">
        {faqs.map((item) => (
          <details key={item.q} className="group py-3">
            <summary className="cursor-pointer list-none text-sm leading-snug text-foreground/80 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-baseline justify-between gap-4">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="shrink-0 text-muted/40 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-2 pr-8 text-sm leading-[1.7] text-muted/80">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
