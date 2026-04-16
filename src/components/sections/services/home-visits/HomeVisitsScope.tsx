import { TrendingUpDown, Ear, Settings, MessageSquare } from "lucide-react";

const ICONS = [MessageSquare, Ear, Settings, TrendingUpDown];

type HomeVisitsScopeProps = {
  data: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
};

export default function HomeVisitsScope({ data }: HomeVisitsScopeProps) {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            {data.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item, index) => {
            const Icon = ICONS[index] ?? MessageSquare;

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
