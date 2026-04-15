import {
  BadgeCheck,
  PersonStanding,
  HandHelping,
  HeartPlus,
  RockingChair,
  ShieldCheck,
} from "lucide-react";

const ICONS = [
  BadgeCheck,
  PersonStanding,
  HandHelping,
  HeartPlus,
  RockingChair,
  ShieldCheck,
];

type ServicesBenefitsProps = {
  data: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
};

export default function ServicesBenefits({ data }: ServicesBenefitsProps) {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            {data.title}
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {data.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item, index) => {
            const Icon = ICONS[index] ?? BadgeCheck;

            return (
              <article
                key={`${item.title}-${index}`}
                className="site-card p-6 md:p-7"
              >
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
                  {item.title}
                </h3>

                <p
                  className="mt-3 text-base leading-7"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
