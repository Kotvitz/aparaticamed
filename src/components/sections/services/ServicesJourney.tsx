import { MessageCircleMore, Ear, SlidersHorizontal, HeartHandshake } from "lucide-react";

const STEPS = [
  {
    title: "Rozmowa i poznanie potrzeb",
    description:
      "Zaczynamy od spokojnej rozmowy o trudnościach związanych ze słyszeniem, codziennych sytuacjach oraz oczekiwaniach pacjenta.",
    Icon: MessageCircleMore,
  },
  {
    title: "Badanie i ocena słuchu",
    description:
      "W zależności od potrzeb wykonujemy badanie słuchu, które pomaga lepiej ocenić sytuację i dobrać odpowiedni kierunek dalszego wsparcia.",
    Icon: Ear,
  },
  {
    title: "Dobór rozwiązania",
    description:
      "Na podstawie wyników oraz indywidualnych potrzeb pomagamy dobrać odpowiednie rozwiązanie, w tym aparat słuchowy i jego ustawienia.",
    Icon: SlidersHorizontal,
  },
  {
    title: "Dalsza opieka i wsparcie",
    description:
      "Po doborze zapewniamy dalszą pomoc, kontrole oraz wsparcie w codziennym korzystaniu z aparatów słuchowych.",
    Icon: HeartHandshake,
  },
];

export default function ServicesJourney() {
  return (
    <section
      className="px-4 py-10 md:py-14"
      style={{ backgroundColor: "var(--surface-muted)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Jak wygląda pomoc krok po kroku
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Zależy nam, aby cały proces był dla pacjenta zrozumiały, spokojny i
            dopasowany do jego indywidualnej sytuacji.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map(({ title, description, Icon }, index) => (
            <article key={title} className="site-card p-6 md:p-7">
              <div className="flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "var(--brand-light)" }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: "var(--brand-ink)" }}
                  />
                </div>

                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--brand)" }}
                >
                  0{index + 1}
                </span>
              </div>

              <h3
                className="mt-5 text-xl font-semibold md:text-2xl"
                style={{ color: "var(--text)" }}
              >
                {title}
              </h3>

              <p
                className="mt-3 text-base leading-7"
                style={{ color: "var(--text-muted)" }}
              >
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}