import { PhoneCall, AudioLines, Ear, HeartHandshake } from "lucide-react";

const ICONS = [PhoneCall, AudioLines, Ear, HeartHandshake];

type HowItWorksProps = {
  data: {
    title: string;
    description: string;
    items: {
      number: string;
      title: string;
      description: string;
    }[];
  };
};

export default function HowItWorks({ data }: HowItWorksProps) {
  return (
    <section
      className="px-4 py-14 md:py-20"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            {data.title}
          </h2>

          <p
            className="mt-4 text-base md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {data.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data.items.map((step, index) => {
            const Icon = ICONS[index] ?? PhoneCall;

            return (
              <article
                key={`${step.number}-${step.title}`}
                className="rounded-2xl border p-6"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--brand-border)",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: "var(--brand-light)",
                      color: "var(--brand-ink)",
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--brand)" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="mt-5 text-lg font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {step.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
