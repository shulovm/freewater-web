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
    <Section id="faq" title="FAQ">
      <dl className="space-y-10">
        {faqs.map((item) => (
          <div key={item.q} className="border-t border-line pt-6">
            <dt className="text-base font-medium text-foreground">{item.q}</dt>
            <dd className="mt-3 text-base leading-relaxed text-muted">{item.a}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
