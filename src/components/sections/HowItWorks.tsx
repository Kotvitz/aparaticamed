import { PhoneCall, AudioLines, Ear, HeartHandshake } from "lucide-react";

const STEPS = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Kontakt i konsultacja",
    description:
      "Skontaktuj się z nami telefonicznie lub odwiedź nasz gabinet, aby omówić swoje potrzeby i umówić wizytę.",
  },
  {
    icon: AudioLines,
    number: "02",
    title: "Badanie słuchu",
    description:
      "Wykonujemy profesjonalne badanie słuchu, które pozwala ocenić potrzeby pacjenta i dobrać odpowiednie rozwiązanie.",
  },
  {
    icon: Ear,
    number: "03",
    title: "Dobór aparatu słuchowego",
    description:
      "Pomagamy wybrać aparat słuchowy dopasowany do stopnia ubytku słuchu, stylu życia i oczekiwań pacjenta.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Opieka i wsparcie",
    description:
      "Zapewniamy pomoc po zakupie, serwis aparatów oraz wsparcie w codziennym użytkowaniu.",
  },
];

export default function HowItWorks() {
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
            Jak wygląda współpraca?
          </h2>

          <p
            className="mt-4 text-base md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Prowadzimy pacjenta przez cały proces - od pierwszego kontaktu, przez
            badanie słuchu, aż po dobór odpowiedniego rozwiązania i opiekę po
            zakupie.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="rounded-2xl border p-6"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--brand-border)",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: "var(--brand-light)",
                      color: "var(--brand-ink)",
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--brand)" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="mt-5 text-lg font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {step.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}