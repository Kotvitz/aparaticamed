type RefundNfzSectionProps = {
  data: {
    title: string;
    description: string;
    groups: {
      title: string;
      items: string[];
    }[];
  };
};

export default function RefundNfzSection({ data }: RefundNfzSectionProps) {
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
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {data.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {data.groups.map((group, index) => (
            <article
              key={`${group.title}-${index}`}
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: "var(--surface-muted)",
                borderColor: "var(--brand-border)",
              }}
            >
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--text)" }}
              >
                {group.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {group.items.map((item, itemIndex) => (
                  <li
                    key={`${group.title}-${itemIndex}`}
                    className="text-sm leading-7"
                    style={{ color: "var(--text-muted)" }}
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}