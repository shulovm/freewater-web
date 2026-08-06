import { Section } from "../Section";

export function How() {
  return (
    <Section id="how" title="Free Waterの仕組み">
      <ol className="space-y-0 text-lg text-foreground">
        {[
          "安全な水",
          "無料で届ける",
          "続ける協力",
        ].map((step, i, arr) => (
          <li key={step} className="flex flex-col items-start">
            <span className="py-3 tracking-tight">{step}</span>
            {i < arr.length - 1 ? (
              <span
                aria-hidden
                className="ml-1 h-8 w-px bg-line"
              />
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-12 max-w-md text-base leading-relaxed text-muted">
        水は売っていません。
        <br />
        活動は、協力に支えられています。
      </p>
    </Section>
  );
}
