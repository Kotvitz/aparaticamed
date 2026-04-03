import type { LucideIcon } from "lucide-react";

type CardItem = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

type HearingAidSubpageCardsProps = {
  title: string;
  description?: string;
  items: CardItem[];
};

export default function HearingAidSubpageCards({
  title,
  description,
  items,
}: HearingAidSubpageCardsProps) {
  return (
    <section
      className="px-4 py-10 md:py-14"
      style={{ backgroundColor: "var(--surface-muted)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            {title}
          </h2>

          {description ? (
            <p
              className="mt-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map(({ title: itemTitle, description: itemDescription, Icon }) => (
            <article key={itemTitle} className="site-card p-6 md:p-7">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "var(--brand-light)" }}
              >
                <Icon
                  className="h-6 w-6"
                  style={{ color: "var(--brand-ink)" }}
                />
              </div>

              <h3
                className="mt-5 text-xl font-semibold md:text-2xl"
                style={{ color: "var(--text)" }}
              >
                {itemTitle}
              </h3>

              <p
                className="mt-3 text-base leading-7"
                style={{ color: "var(--text-muted)" }}
              >
                {itemDescription}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}