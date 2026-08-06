import { CONTACT_EMAIL, SECTIONS } from "../../lib/site";

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="border-t border-line bg-surface px-6 py-16"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-12">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.35em] text-water uppercase">
            Free Water
          </p>
          <p className="mt-4 text-sm text-muted">運営：Free Water</p>
        </div>

        <nav aria-label="フッターナビ" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-foreground">
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm text-muted">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hover:text-foreground"
          >
            お問い合わせ
          </a>
          {/* External company page TBD — keep the slot, avoid GROUND copy on this site */}
          <span className="text-line">会社概要（準備中）</span>
          <span className="text-line">Instagram（準備中）</span>
        </div>
      </div>
    </footer>
  );
}
