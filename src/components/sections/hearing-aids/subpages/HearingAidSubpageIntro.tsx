type HearingAidSubpageIntroProps = {
  title: string;
  paragraphs: readonly string[];
  asideTitle?: string;
  asideParagraphs?: readonly string[];
};

export default function HearingAidSubpageIntro({
  title,
  paragraphs,
  asideTitle,
  asideParagraphs = [],
}: HearingAidSubpageIntroProps) {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              {title}
            </h2>

            <div
              className="mt-5 space-y-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {asideTitle && asideParagraphs.length > 0 ? (
            <div
              className="site-card p-6 md:p-7"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--brand-border)",
              }}
            >
              <h3
                className="text-xl font-semibold md:text-2xl"
                style={{ color: "var(--text)" }}
              >
                {asideTitle}
              </h3>

              <div
                className="mt-4 space-y-4 text-base leading-7"
                style={{ color: "var(--text-muted)" }}
              >
                {asideParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}