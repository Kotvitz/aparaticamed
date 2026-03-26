import {
  Headphones,
  Ear,
  ShieldCheck,
  CreditCard,
  Accessibility,
  Settings2,
} from "lucide-react";

const SUPPORT_ITEMS = [
  {
    icon: Ear,
    title: "Specjalistyczne testy słuchu",
    description:
      "Wykonujemy badania słuchu potrzebne do doboru odpowiedniego aparatu słuchowego.",
  },
  {
    icon: Headphones,
    title: "Możliwość testowania aparatów",
    description:
      "Przed zakupem pomagamy sprawdzić i przetestować wybrane rozwiązania, aby lepiej dopasować je do potrzeb pacjenta.",
  },
  {
    icon: Settings2,
    title: "Serwis i opieka po zakupie",
    description:
      "Zapewniamy wsparcie specjalistyczne, kontrole, regulację parametrów oraz bieżącą pomoc w użytkowaniu aparatów słuchowych.",
  },
  {
    icon: ShieldCheck,
    title: "Dobór w profesjonalnym gabinecie",
    description:
      "Pomagamy dobrać aparat do stopnia ubytku słuchu, stylu życia i codziennego komfortu pacjenta.",
  },
  {
    icon: CreditCard,
    title: "Wygodne formy płatności",
    description:
      "Oferujemy zakupy na raty oraz możliwość płatności kartą, aby ułatwić dostęp do odpowiednich rozwiązań.",
  },
  {
    icon: Accessibility,
    title: "Odpowiednio przystosowany gabinet",
    description:
      "Gabinet jest przystosowany dla osób z niepełnosprawnością ruchową, co zwiększa komfort wizyty.",
  },
];

export default function AboutPatientSupport() {
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
            Co zapewniamy pacjentom
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            W AparaticaMed stawiamy nie tylko na dobór odpowiedniego aparatu
            słuchowego, ale również na długofalowe wsparcie, wygodę i spokojne
            przejście przez cały proces.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {SUPPORT_ITEMS.map((item) => {
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