import {
  Ear,
  Activity,
  Glasses,
  Smartphone,
} from "lucide-react";

const FACTORS = [
  {
    title: "Rodzaj i stopień niedosłuchu",
    description:
      "Dobór aparatu słuchowego powinien uwzględniać poziom ubytku słuchu oraz indywidualne potrzeby związane ze słyszeniem.",
    Icon: Ear,
  },
  {
    title: "Styl życia i codzienne aktywności",
    description:
      "Znaczenie ma to, w jakich sytuacjach aparat będzie używany najczęściej - w domu, w pracy, podczas spotkań lub w bardziej dynamicznym otoczeniu.",
    Icon: Activity,
  },
  {
    title: "Wygoda użytkowania",
    description:
      "Przy wyborze warto uwzględnić codzienne przyzwyczajenia, na przykład noszenie okularów, oczekiwaną dyskrecję oraz łatwość obsługi.",
    Icon: Glasses,
  },
  {
    title: "Dodatkowe funkcje",
    description:
      "Dla części użytkowników ważne są nowoczesne rozwiązania, takie jak łączność bezprzewodowa ze smartfonem czy funkcje poprawiające komfort słyszenia w różnych warunkach.",
    Icon: Smartphone,
  },
];

export default function HearingAidFittingFactors() {
  return (
    <section
      className="px-4 py-10 md:py-14"
      style={{ backgroundColor: "var(--surface-muted)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Co ma znaczenie przy doborze aparatu słuchowego?
          </h2>

          <div
            className="mt-5 space-y-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            <p>
              Dobór aparatu słuchowego powinien być dopasowany do potrzeb osoby,
              która będzie z niego korzystać. Znaczenie ma nie tylko sam rodzaj
              urządzenia, ale również to, jak pacjent funkcjonuje na co dzień i
              czego oczekuje od aparatu.
            </p>

            <p>
              Odpowiednio dobrane rozwiązanie może lepiej wspierać słyszenie,
              zapewniać większy komfort użytkowania i ułatwiać codzienne
              korzystanie z aparatu w różnych sytuacjach.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {FACTORS.map(({ title, description, Icon }) => (
            <article key={title} className="site-card p-6 md:p-7">
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