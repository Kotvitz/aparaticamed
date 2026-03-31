import {
  MessageCircle,
  Users,
  Tv,
  ShieldCheck,
} from "lucide-react";

const BENEFITS = [
  {
    title: "Łatwiejsze rozmowy z innymi",
    description:
      "Aparaty słuchowe pomagają lepiej rozumieć mowę i prowadzić rozmowy z rodziną, znajomymi oraz współpracownikami.",
    Icon: MessageCircle,
  },
  {
    title: "Większa aktywność społeczna",
    description:
      "Poprawa słyszenia może ułatwić udział w spotkaniach, wydarzeniach oraz codziennych sytuacjach wymagających kontaktu z innymi osobami.",
    Icon: Users,
  },
  {
    title: "Lepszy odbiór dźwięków otoczenia",
    description:
      "Dzięki aparatowi słuchowemu łatwiej usłyszeć różne dźwięki otoczenia - z telewizji, telefonu czy dźwięki w domu i poza nim.",
    Icon: Tv,
  },
  {
    title: "Większe poczucie bezpieczeństwa",
    description:
      "Lepsze słyszenie dźwięków otoczenia, takich jak sygnały ostrzegawcze czy odgłosy ruchu ulicznego, może zwiększać bezpieczeństwo w codziennym życiu.",
    Icon: ShieldCheck,
  },
];

export default function HearingAidsBenefits() {
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
            Korzyści z używania aparatów słuchowych
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Odpowiednio dobrany aparat słuchowy może poprawić komfort życia,
            ułatwić komunikację oraz pomóc w codziennym funkcjonowaniu w różnych
            sytuacjach.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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