import { Section } from "../Section";

/** Activity explanation — lands softly after the Hero declaration */
export function About() {
  return (
    <Section
      id="about"
      title="Free Waterとは"
      density="bridge"
      titleTight
      titleTone="entry"
      className="text-center sm:text-left"
    >
      <p className="mx-auto max-w-md text-lg leading-[1.75] tracking-tight text-foreground sm:mx-0 sm:text-xl sm:leading-[1.7]">
        日本の安全な飲料水を、誰でも無料で受け取れる活動です。
      </p>
    </Section>
  );
}
