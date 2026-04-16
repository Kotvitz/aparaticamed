import Link from "next/link";

type HomeVisitsHeroProps = {
  data: {
    title: string;
    lead: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    highlightTitle: string;
    highlightDescription: string;
  };
};

export default function HomeVisitsHero({ data }: HomeVisitsHeroProps) {
  return (
    <section
      className="overflow-hidden px-4 py-10 md:py-14"
      style={{
        background:
          "linear-gradient(to bottom, var(--brand-light), var(--surface))",
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-2xl">
          <h1
            className="text-4xl font-bold leading-tight md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            {data.title}
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {data.lead}
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {data.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="site-button-primary site-focus inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm"
            >
              {data.primaryButtonText}
            </Link>

            <Link
              href="/uslugi"
              className="site-button-secondary site-focus inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              {data.secondaryButtonText}
            </Link>
          </div>
        </div>

        <div
          className="site-card p-6 md:p-8"
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

          <p
            className="mt-4 text-base leading-7"
            style={{ color: "var(--text-muted)" }}
          >
            {data.highlightDescription}
          </p>
        </div>
      </div>
    </section>
  );
}