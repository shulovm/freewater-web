import { Section } from "../Section";

/** Activity explanation — not a restatement of the Hero line */
export function About() {
  return (
    <Section id="about" title="Free Waterとは" density="statement" titleTight>
      <p className="max-w-lg text-xl leading-relaxed tracking-tight text-foreground sm:text-2xl sm:leading-snug">
        日本の安全な飲料水を、誰でも無料で受け取れる活動です。
      </p>
    </Section>
  );
}
