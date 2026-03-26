const NFZ_GROUPS = [
  {
    title: "Dorośli",
    items: [
      "Refundacja aparatów słuchowych zgodnie z obowiązującymi limitami NFZ.",
      "Możliwość uzyskania wsparcia na określonych zasadach i w określonych odstępach czasowych.",
      "Wysokość refundacji zależy od rodzaju aparatu i aktualnych przepisów.",
    ],
  },
  {
    title: "Dzieci i młodzież do 26. roku życia",
    items: [
      "Wyższe limity refundacji w porównaniu z osobami dorosłymi.",
      "Możliwość uzyskania wsparcia na aparaty słuchowe oraz wybrane akcesoria.",
      "Zakres refundacji zależy od wskazań medycznych i obowiązujących zasad NFZ.",
    ],
  },
  {
    title: "Szczególne uprawnienia",
    items: [
      "W niektórych przypadkach obowiązują odrębne zasady lub dodatkowe możliwości refundacji.",
      "Zakres wsparcia zależy od indywidualnej sytuacji pacjenta oraz aktualnych przepisów.",
      "Pomagamy wyjaśnić, jakie rozwiązania mogą mieć zastosowanie w konkretnej sytuacji.",
    ],
  },
];

export default function RefundNfzSection() {
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
            Refundacja NFZ
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Refundacja NFZ może obejmować różne poziomy wsparcia w zależności od
            wieku pacjenta, rodzaju rozwiązania oraz indywidualnych uprawnień.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {NFZ_GROUPS.map((group) => (
            <article
              key={group.title}
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
                {group.items.map((item) => (
                  <li
                    key={item}
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