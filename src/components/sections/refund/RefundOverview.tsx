import {
  ShieldPlus,
  Landmark,
  FileCheck,
  HelpingHand,
} from "lucide-react";

const OVERVIEW_ITEMS = [
  {
    icon: ShieldPlus,
    title: "Refundacja NFZ",
    description:
      "Pacjenci mogą uzyskać refundację NFZ na wybrane aparaty słuchowe oraz niektóre akcesoria, zgodnie z obowiązującymi zasadami i limitami.",
  },
  {
    icon: Landmark,
    title: "Dofinansowanie z PFRON",
    description:
      "W określonych przypadkach możliwe jest uzyskanie dodatkowego wsparcia finansowego z PFRON za pośrednictwem odpowiednich instytucji.",
  },
  {
    icon: FileCheck,
    title: "Pomoc w formalnościach",
    description:
      "Wyjaśniamy kolejne kroki, potrzebne dokumenty i zasady realizacji refundacji, aby cały proces był prostszy i bardziej przejrzysty.",
  },
  {
    icon: HelpingHand,
    title: "Różne rodzaje wsparcia",
    description:
      "Refundacja może dotyczyć nie tylko aparatów słuchowych, ale również wybranych rozwiązań dodatkowych, zależnie od potrzeb pacjenta.",
  },
];

export default function RefundOverview() {
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
            Co warto wiedzieć o refundacji?
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Refundacja aparatów słuchowych może obejmować różne formy wsparcia.
            Najważniejsze jest ustalenie, z jakiego rodzaju dofinansowania można
            skorzystać i jakie dokumenty będą potrzebne.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {OVERVIEW_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
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