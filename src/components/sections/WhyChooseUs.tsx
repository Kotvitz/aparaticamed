import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const ICONS = [HeartHandshake, ShieldCheck, Sparkles, Users];

type WhyChooseUsProps = {
  data: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
};

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((feature, index) => {
            const Icon = ICONS[index] ?? HeartHandshake;

            return (
              <div
                key={`${feature.title}-${index}`}
                className="rounded-2xl border p-6 transition-all duration-200 hover:shadow-md"
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
                  {feature.title}
                </h3>

                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}