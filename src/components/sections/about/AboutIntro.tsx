import {
  Building2,
  Users,
  Handshake,
  Award,
} from "lucide-react";

const ICONS = [Building2, Award, Users, Handshake];

type AboutIntroProps = {
  data: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    items: {
      title: string;
      description: string;
    }[];
  };
};

export default function AboutIntro({ data }: AboutIntroProps) {
  return (
    <section
      className="px-4 py-14 md:py-20"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            {data.title}
          </h2>

          <p
            className="mt-6 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {data.paragraph1}
          </p>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {data.paragraph2}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item, index) => {
            const Icon = ICONS[index] ?? Building2;

            return (
              <article
                key={`${item.title}-${index}`}
                className="rounded-2xl border p-6"
                style={{
                  backgroundColor: "var(--surface-muted)",
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
                  className="mt-3 text-sm leading-7"
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