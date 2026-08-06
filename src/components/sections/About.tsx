import { Section } from "../Section";

/** Definition of the activity — one clear statement */
export function About() {
  return (
    <Section id="about" title="Free Waterとは" density="statement">
      <p className="max-w-lg text-xl leading-relaxed tracking-tight text-foreground sm:text-2xl sm:leading-snug">
        安全な水を、無料で配っています。
      </p>
    </Section>
  );
}
