import { Check } from "lucide-react";

type HearingAidServiceSupportProps = {
  data: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    listTitle: string;
    items: string[];
  };
};

export default function HearingAidServiceSupport({
  data,
}: HearingAidServiceSupportProps) {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
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
            <p>{data.paragraph1}</p>

            <p>{data.paragraph2}</p>
          </div>
        </div>

        <div className="site-card p-6 md:p-7">
          <h3
            className="text-xl font-semibold md:text-2xl"
            style={{ color: "var(--text)" }}
          >
            {data.listTitle}
          </h3>

          <ul className="mt-5 space-y-4">
            {data.items.map((item, index) => (
              <li key={`${item}-${index}`} className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--brand-light)" }}
                >
                  <Check
                    className="h-4 w-4"
                    style={{ color: "var(--brand-ink)" }}
                  />
                </div>

                <span
                  className="text-base leading-7"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
