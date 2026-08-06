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
