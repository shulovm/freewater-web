import { CONTACT_EMAIL, SECTIONS } from "../../lib/site";

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-line px-6 py-12 sm:px-10">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-8 sm:max-w-2xl">
        <p className="font-[family-name:var(--font-display)] text-[0.6875rem] tracking-[0.35em] text-water uppercase">
          Free Water
        </p>

        <nav
          aria-label="フッターナビ"
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm leading-normal text-muted"
        >
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-foreground">
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm leading-normal">
          {CONTACT_EMAIL ? (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-muted hover:text-foreground"
            >
              お問い合わせ
            </a>
          ) : (
            <span className="text-muted">お問い合わせ</span>
          )}
          <span className="text-muted/45">会社概要（準備中）</span>
          <span className="text-muted/45">Instagram（準備中）</span>
        </div>
      </div>
    </footer>
  );
}
