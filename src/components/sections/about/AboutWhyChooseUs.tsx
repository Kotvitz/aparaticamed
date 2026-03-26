import {
  Ear,
  Headphones,
  Settings2,
  GraduationCap,
} from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Ear,
    title: "Indywidualny dobór aparatów",
    description:
      "Dobieramy aparaty słuchowe z uwzględnieniem stopnia ubytku słuchu, potrzeb pacjenta oraz jego codziennego stylu życia.",
  },
  {
    icon: Headphones,
    title: "Możliwość testowania rozwiązań",
    description:
      "Pomagamy sprawdzić różne modele aparatów słuchowych, aby łatwiej dopasować rozwiązanie do oczekiwań pacjenta.",
  },
  {
    icon: Settings2,
    title: "Regulacja i wsparcie po zakupie",
    description:
      "Zapewniamy dalszą opiekę, regulację parametrów aparatów słuchowych oraz pomoc w ich codziennym użytkowaniu.",
  },
  {
    icon: GraduationCap,
    title: "Pomoc we wdrożeniu i obsłudze",
    description:
      "Wyjaśniamy, jak korzystać z aparatu słuchowego i pomagamy pacjentowi spokojnie przyzwyczaić się do nowego rozwiązania.",
  },
];

export default function AboutWhyChooseUs() {
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
            Dlaczego warto nam zaufać
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            W profesjonalnym gabinecie pacjent może liczyć nie tylko na dobór
            odpowiedniego aparatu słuchowego, ale także na realne wsparcie,
            spokojne wyjaśnienie kolejnych etapów i pomoc w codziennym
            użytkowaniu urządzenia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {TRUST_ITEMS.map((item) => {
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