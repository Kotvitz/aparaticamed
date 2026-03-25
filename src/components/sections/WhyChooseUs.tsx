import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const FEATURES = [
  {
    icon: HeartHandshake,
    title: "Indywidualne podejście",
    description:
      "Każdemu pacjentowi poświęcamy uwagę i pomagamy dobrać rozwiązanie dopasowane do jego potrzeb.",
  },
  {
    icon: ShieldCheck,
    title: "Profesjonalne wsparcie",
    description:
      "Zapewniamy rzetelne doradztwo i pomoc na każdym etapie — od konsultacji po późniejsze użytkowanie aparatu.",
  },
  {
    icon: Sparkles,
    title: "Nowoczesne rozwiązania",
    description:
      "Stawiamy na sprawdzone i nowoczesne aparaty słuchowe, które wspierają codzienny komfort słyszenia.",
  },
  {
    icon: Users,
    title: "Opieka nastawiona na pacjenta",
    description:
      "Dbamy o spokojną atmosferę, jasne wyjaśnienia i wygodny kontakt, aby cały proces był prosty i zrozumiały.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="px-4 py-14 md:py-20"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Dlaczego warto wybrać AparaticaMed?
          </h2>

          <p
            className="mt-4 text-base md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Zapewniamy kompleksową opiekę oraz nowoczesne rozwiązania
            dopasowane do indywidualnych potrzeb pacjentów.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border p-6 transition-all duration-200 hover:shadow-md"
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
                  {feature.title}
                </h3>

                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}