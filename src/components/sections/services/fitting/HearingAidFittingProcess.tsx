import {
  Ear,
  Check,
  Headphones,
  HeartPlus,
} from "lucide-react";

const STEPS = [
  {
    title: "Badanie słuchu",
    description:
      "Dobór aparatu słuchowego rozpoczyna się od badania słuchu, które pozwala lepiej ocenić sytuację pacjenta i określić jego potrzeby.",
    Icon: Ear,
  },
  {
    title: "Wybór odpowiedniego rozwiązania",
    description:
      "Na podstawie wyników badania oraz codziennych potrzeb dobierane jest rozwiązanie najlepiej dopasowane do stylu życia i oczekiwań użytkownika.",
    Icon: Check,
  },
  {
    title: "Dopasowanie i ustawienie aparatu",
    description:
      "Po wyborze urządzenia aparat jest odpowiednio dopasowywany i ustawiany tak, aby wspierał słyszenie w możliwie najbardziej komfortowy sposób.",
    Icon: Headphones,
  },
  {
    title: "Wsparcie i dalsza opieka",
    description:
      "Pacjent otrzymuje pomoc w oswojeniu się z nowym rozwiązaniem oraz dalsze wsparcie związane z użytkowaniem aparatu słuchowego.",
    Icon: HeartPlus,
  },
];

export default function HearingAidFittingProcess() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Jak wygląda dobór aparatu słuchowego?
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Proces doboru aparatu słuchowego przebiega etapami, które pomagają
            lepiej dopasować rozwiązanie do potrzeb pacjenta i zapewnić większy
            komfort codziennego użytkowania.
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