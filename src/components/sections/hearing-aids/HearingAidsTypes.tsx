import Link from "next/link";
import { ArrowRight, Ear, HatGlasses, Smartphone, Wallet } from "lucide-react";

const ICONS = [Ear, HatGlasses, Smartphone, Wallet];

type HearingAidsTypesProps = {
  data: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    moreLabel: string;
    items: {
      title: string;
      description: string;
      href: string;
    }[];
  };
};

export default function HearingAidsTypes({ data }: HearingAidsTypesProps) {
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
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item, index) => {
            const Icon = ICONS[index] ?? Ear;

            return (
            <article
              key={`${item.title}-${index}`}
              className="group rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--brand-border)",
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "var(--brand-light)",
                  color: "var(--brand-ink)",
                }}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3
                className="mt-5 text-lg font-semibold"
                style={{ color: "var(--text)" }}
              >
                {item.title}
              </h3>

              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {item.description}
              </p>

              <Link
                href={item.href}
                className="site-link site-focus mt-5 inline-flex items-center gap-2 text-sm font-semibold"
              >
                {data.moreLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </article>
          );
          })}
        </div>
      </div>
    </section>
  );
}
