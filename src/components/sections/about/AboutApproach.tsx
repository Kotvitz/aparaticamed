import {
  MessagesSquare,
  HandHelping,
  SlidersHorizontal,
  RefreshCw,
} from "lucide-react";

const APPROACH_ITEMS = [
  {
    icon: MessagesSquare,
    title: "Spokojna i jasna konsultacja",
    description:
      "Wyjaśniamy kolejne etapy w prosty i zrozumiały sposób, tak aby pacjent czuł się pewnie już od pierwszego kontaktu.",
  },
  {
    icon: SlidersHorizontal,
    title: "Dobór dopasowany do potrzeb",
    description:
      "Uwzględniamy styl życia, oczekiwania oraz codzienne sytuacje, w których aparat słuchowy ma realnie poprawiać komfort słyszenia.",
  },
  {
    icon: HandHelping,
    title: "Wsparcie przy wdrożeniu",
    description:
      "Pomagamy oswoić się z nowym rozwiązaniem i pokazujemy, jak korzystać z aparatu słuchowego w codziennym życiu.",
  },
  {
    icon: RefreshCw,
    title: "Dalsza opieka i dostosowanie",
    description:
      "W razie potrzeby pomagamy w regulacji ustawień i dopasowaniu aparatu tak, aby jego użytkowanie było jak najbardziej komfortowe.",
  },
];

export default function AboutApproach() {
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
            Nasze podejście
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Zależy nam, aby cały proces był dla pacjenta przejrzysty, spokojny i
            dopasowany do jego indywidualnych potrzeb. Dlatego łączymy fachowe
            doradztwo z uważnym podejściem i wsparciem także po doborze aparatu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {APPROACH_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
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