import { CONTACT_EMAIL, SECTIONS } from "../../lib/site";

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-line px-5 py-14 sm:px-8">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-10">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.35em] text-water uppercase">
            Free Water
          </p>
          <p className="mt-3 text-sm text-muted">運営：Free Water</p>
        </div>

        <nav
          aria-label="フッターナビ"
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"
        >
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-foreground">
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5 text-sm">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-muted hover:text-foreground"
          >
            お問い合わせ
          </a>
          <span className="text-muted/45" aria-disabled="true">
            会社概要（準備中）
          </span>
          <span className="text-muted/45" aria-disabled="true">
            Instagram（準備中）
          </span>
        </div>
      </div>
    </footer>
  );
}
