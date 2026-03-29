import {
  BadgeCheck,
  PersonStanding,
  HandHelping,
  HeartPlus,
  RockingChair,
  ShieldCheck,
} from "lucide-react";

const BENEFITS = [
  {
    title: "Indywidualne podejście",
    description:
      "Każda pomoc jest dopasowywana do potrzeb pacjenta, jego stylu życia oraz codziennych sytuacji związanych ze słyszeniem.",
    Icon: PersonStanding,
  },
  {
    title: "Kompleksowe wsparcie",
    description:
      "Łączymy diagnostykę słuchu, dobór aparatów słuchowych oraz dalszą opiekę w jednym miejscu.",
    Icon: HandHelping,
  },
  {
    title: "Opieka po doborze aparatu",
    description:
      "Po wyborze rozwiązania pacjent może liczyć na dalszą pomoc, kontrole oraz wsparcie w codziennym użytkowaniu.",
    Icon: HeartPlus,
  },
  {
    title: "Pomoc w wyborze odpowiedniego rozwiązania",
    description:
      "Pomagamy znaleźć rozwiązanie dopasowane nie do potrzeb, oczekiwań i możliwości pacjenta.",
    Icon: BadgeCheck,
  },
  {
    title: "Wygoda i dostępność",
    description:
      "Dbamy o komfort wizyty i proponujemy formy wsparcia odpowiednie również dla osób z utrudnionym dojazdem.",
    Icon: RockingChair,
  },
  {
    title: "Spokojny i zrozumiały proces",
    description:
      "Wyjaśniamy kolejne etapy prostym językiem, tak aby pacjent czuł się pewnie i wiedział, czego może się spodziewać.",
    Icon: ShieldCheck,
  },
];

export default function ServicesBenefits() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Dlaczego warto skorzystać z naszych usług
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Nasze usługi są prowadzone tak, aby pacjent otrzymał nie tylko
            odpowiednie rozwiązanie, ale także wsparcie i poczucie bezpieczeństwa
            na każdym etapie.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BENEFITS.map(({ title, description, Icon }) => (
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