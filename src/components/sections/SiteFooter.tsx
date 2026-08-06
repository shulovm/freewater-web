import { FOOTER_LINKS, SECTIONS } from "../../lib/site";

/**
 * Open ending — slots for company / social continue outward.
 * Ready links replace pending spans without reshaping the footer.
 */
export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-line/50 px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-14">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-8 sm:max-w-2xl sm:gap-9">
        <p className="font-[family-name:var(--font-display)] text-[0.625rem] tracking-[0.35em] text-water/90 uppercase">
          Free Water
        </p>

        <nav
          aria-label="フッターナビ"
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm leading-normal text-muted/80"
        >
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-foreground">
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5 text-sm leading-normal">
          {FOOTER_LINKS.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="text-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ) : (
              <span key={item.label} className="text-muted/40">
                {item.pending ? `${item.label}（準備中）` : item.label}
              </span>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
