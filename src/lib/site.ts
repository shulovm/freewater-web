/**
 * Site content slots for Phase0 → growth.
 * Fill arrays / replace nulls as the activity matures —
 * page structure stays the same.
 */

/** Set a real address when the contact channel is decided. */
export const CONTACT_EMAIL: string | null = null;

/**
 * Activity metrics. Add rows (e.g. 活動回数) as facts exist.
 * Empty / "—" values are intentional in Phase0.
 */
export const METRICS: ReadonlyArray<{ label: string; value: string }> = [
  { label: "配布した水", value: "—" },
  { label: "実施した場", value: "—" },
];

export const METRICS_UPDATED_AT = "—";

/**
 * Ways to take part. Keep copy calm; avoid CTA buttons.
 * Append items (e.g. ボランティア) without changing Join layout.
 */
export const JOIN_WAYS: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "スポンサー",
    body: "水の調達や配布に協力する企業・団体を募集しています。",
  },
  {
    title: "イベント",
    body: "水を配布できる場所やイベントについてご相談いただけます。",
  },
];

/**
 * Named partners / supporters. Empty in Phase0.
 * When filled, Join renders a quiet text list — not a logo wall.
 */
export const PARTNERS: ReadonlyArray<{ name: string }> = [];

/**
 * Future placement (e.g. 広告掲載イメージ) can sit under Join ways
 * as a calm text/link list — keep empty until real materials exist.
 */
export const PLACEMENTS: ReadonlyArray<{ label: string; href?: string }> = [];

/** Footer continuity slots — swap href when pages exist. */
export const FOOTER_LINKS: ReadonlyArray<{
  label: string;
  href: string | null;
  pending?: boolean;
}> = [
  { label: "お問い合わせ", href: CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : null },
  { label: "会社概要", href: null, pending: true },
  { label: "Instagram", href: null, pending: true },
];

export const SECTIONS = [
  { id: "about", label: "Free Waterとは" },
  { id: "activity", label: "活動" },
  { id: "how", label: "仕組み" },
  { id: "metrics", label: "実績" },
  { id: "join", label: "協力" },
  { id: "faq", label: "FAQ" },
] as const;
