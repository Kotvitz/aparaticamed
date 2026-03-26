import { Landmark, FileCheck, Building2 } from "lucide-react";

const PFRON_POINTS = [
  {
    icon: Landmark,
    title: "Dodatkowe wsparcie finansowe",
    description:
      "W określonych przypadkach możliwe jest uzyskanie dodatkowego dofinansowania z PFRON na zakup aparatu słuchowego.",
  },
  {
    icon: Building2,
    title: "Gdzie składa się wniosek",
    description:
      "Wnioski o dofinansowanie składa się zazwyczaj za pośrednictwem odpowiednich instytucji lokalnych, takich jak PCPR, MOPS lub MOPR.",
  },
  {
    icon: FileCheck,
    title: "Wymagane dokumenty",
    description:
      "Zakres potrzebnych dokumentów zależy od indywidualnej sytuacji pacjenta oraz zasad obowiązujących w danej instytucji.",
  },
];

export default function RefundPfronSection() {
  return (
    <section
      className="px-4 py-14 md:py-20"
      style={{ backgroundColor: "var(--surface-muted)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Dofinansowanie z PFRON
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Oprócz refundacji NFZ pacjent może w niektórych sytuacjach skorzystać
            z dodatkowego wsparcia finansowego z PFRON.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PFRON_POINTS.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.title}
                className="rounded-2xl border p-6"
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
                  {point.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--text-muted)" }}
                >
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}