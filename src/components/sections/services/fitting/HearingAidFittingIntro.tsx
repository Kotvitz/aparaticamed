type HearingAidFittingIntroProps = {
  data: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    highlightTitle: string;
    highlightParagraph1: string;
    highlightParagraph2: string;
  };
};

export default function HearingAidFittingIntro({
  data,
}: HearingAidFittingIntroProps) {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              {data.title}
            </h2>

            <div
              className="mt-5 space-y-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                {data.paragraph1}
              </p>

              <p>
                {data.paragraph2}
              </p>

              <p>
                {data.paragraph3}
              </p>
            </div>
          </div>

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
              {data.highlightTitle}
            </h3>

            <div
              className="mt-4 space-y-4 text-base leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                {data.highlightParagraph1}
              </p>

              <p>
                {data.highlightParagraph2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}