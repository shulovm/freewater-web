import { Section } from "../Section";

/** Activity explanation — not a restatement of the Hero line */
export function About() {
  return (
    <Section id="about" title="Free Waterとは" density="statement" titleTight>
      <p className="max-w-md text-lg leading-[1.7] tracking-tight text-foreground sm:text-xl sm:leading-[1.65]">
        日本の安全な飲料水を、誰でも無料で受け取れる活動です。
      </p>
    </Section>
  );
}
