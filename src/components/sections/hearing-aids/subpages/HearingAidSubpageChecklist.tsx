import { CheckCircle2 } from "lucide-react";

type HearingAidSubpageChecklistProps = {
  title: string;
  description?: string;
  items: readonly string[];
  asideTitle?: string;
  asideParagraph?: string;
};

export default function HearingAidSubpageChecklist({
  title,
  description,
  items,
  asideTitle,
  asideParagraph,
}: HearingAidSubpageChecklistProps) {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              {title}
            </h2>

            {description ? (
              <p
                className="mt-4 max-w-3xl text-base leading-8 md:text-lg"
                style={{ color: "var(--text-muted)" }}
              >
                {description}
              </p>
            ) : null}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item}
                  className="site-card flex items-start gap-3 p-5"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--brand-border)",
                  }}
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />

                  <p
                    className="text-sm leading-7 md:text-base"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {asideTitle && asideParagraph ? (
            <aside
              className="site-card p-6 md:p-7"
              style={{
                backgroundColor: "var(--brand-light)",
                borderColor: "var(--brand-border)",
              }}
            >
              <h3
                className="text-xl font-semibold md:text-2xl"
                style={{ color: "var(--text)" }}
              >
                {asideTitle}
              </h3>

              <p
                className="mt-4 text-base leading-7"
                style={{ color: "var(--text-muted)" }}
              >
                {asideParagraph}
              </p>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}