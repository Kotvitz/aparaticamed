import Link from "next/link";
import { ArrowRight, CircleHelp } from "lucide-react";

type RefundHeroProps = {
  data: {
    eyebrow: string;
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonHref: string;
    secondaryButtonText: string;
    secondaryButtonHref: string;
  };
};

export default function RefundHero({ data }: RefundHeroProps) {
  return (
    <section
      className="overflow-hidden px-4 py-10 md:py-14"
      style={{
        background:
          "linear-gradient(to bottom, var(--brand-light), var(--surface))",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p
            className="mb-4 inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold"
            style={{
              color: "var(--brand-ink)",
              backgroundColor: "var(--surface)",
              borderColor: "var(--brand-border)",
            }}
          >
            {data.eyebrow}
          </p>

          <h1
            className="text-4xl font-bold leading-tight md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            {data.title}
          </h1>

          <p
            className="mt-5 max-w-2xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {data.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={data.primaryButtonHref}
              className="site-button-primary site-focus inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold shadow-sm"
            >
              {data.primaryButtonText}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={data.secondaryButtonHref}
              className="site-button-secondary site-focus inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold"
            >
              <CircleHelp className="h-4 w-4" />
              {data.secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}