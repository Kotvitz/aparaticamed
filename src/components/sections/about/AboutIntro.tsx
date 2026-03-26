import {
  Building2,
  Users,
  Handshake,
  Award,
} from "lucide-react";

const INTRO_FEATURES = [
  {
    icon: Building2,
    title: "Polska firma rodzinna",
    description:
      "AparaticaMed to firma rodzinna działająca od wielu lat na rynku aparatów słuchowych.",
  },
  {
    icon: Award,
    title: "Doświadczenie i rozwój",
    description:
      "Przez lata zdobywaliśmy doświadczenie, stale rozwijając naszą wiedzę i ofertę nowoczesnych rozwiązań słuchowych.",
  },
  {
    icon: Users,
    title: "Współpraca z producentami",
    description:
      "Oferujemy aparaty słuchowe renomowanych producentów, dostosowane do różnych potrzeb pacjentów.",
  },
  {
    icon: Handshake,
    title: "Opieka długoterminowa",
    description:
      "Zapewniamy wsparcie nie tylko przy doborze aparatu, ale także w jego późniejszym użytkowaniu i regulacji.",
  },
];

export default function AboutIntro() {
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
            Kim jesteśmy
          </h2>

          <p
            className="mt-6 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            AparaticaMed to polska firma rodzinna działająca od wielu lat
            w branży aparatów słuchowych. Naszym celem jest pomoc osobom
            z problemami słuchu w znalezieniu rozwiązań dopasowanych
            do ich indywidualnych potrzeb.
          </p>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Łączymy doświadczenie, nowoczesne technologie oraz indywidualne
            podejście do pacjenta, zapewniając wsparcie na każdym etapie -
            od pierwszej konsultacji po dalszą opiekę i serwis aparatów
            słuchowych.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {INTRO_FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
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
                  {feature.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--text-muted)" }}
                >
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}