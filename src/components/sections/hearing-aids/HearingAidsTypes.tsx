import Link from "next/link";
import { ArrowRight, Ear, HatGlasses, Smartphone, Wallet } from "lucide-react";

const CATEGORIES = [
  {
    title: "Rodzaje aparatów słuchowych",
    description:
      "W ofercie dostępne są różne typy aparatów słuchowych — od modeli zausznych po małe, dyskretne aparaty wewnątrzkanałowe.",
    href: "/aparaty-sluchowe/rodzaje",
    Icon: Ear,
  },
  {
    title: "Aparaty dla seniorów",
    description:
      "Niektóre rozwiązania lepiej sprawdzają się u osób, którym zależy na wygodzie obsługi, komforcie noszenia i codziennym wsparciu słyszenia.",
    href: "/aparaty-sluchowe/dla-seniorow",
    Icon: HatGlasses,
  },
  {
    title: "Nowoczesne funkcje",
    description:
      "Współczesne aparaty mogą oferować dodatkowe udogodnienia, takie jak łączność ze smartfonem czy rozwiązania wspierające słyszenie w różnych warunkach.",
    href: "/aparaty-sluchowe/rodzaje",
    Icon: Smartphone,
  },
  {
    title: "Cena i możliwości",
    description:
      "Koszt aparatu słuchowego zależy między innymi od jego rodzaju, zastosowanych funkcji oraz poziomu technologicznego urządzenia.",
    href: "/aparaty-sluchowe/ile-kosztuje",
    Icon: Wallet,
  },
];

export default function HearingAidsTypes() {
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
            Jakie oferujemy aparaty słuchowe?
          </h2>

          <div
            className="mt-5 space-y-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            <p>
              Aparaty słuchowe mogą różnić się budową, wielkością, sposobem
              noszenia oraz dodatkowymi funkcjami. Dzięki temu możliwe jest
              dobranie rozwiązania odpowiadającego różnym potrzebom i stylom
              życia.
            </p>

            <p>
              Na tej stronie przedstawiamy najważniejsze informacje o dostępnych
              aparatach słuchowych w ujęciu ogólnym. Szczegółowe informacje
              znajdziesz na właściwych podstronach.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {CATEGORIES.map(({ title, description, Icon, href }) => (
            <article
              key={title}
              className="group rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
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
                {title}
              </h3>

              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {description}
              </p>

              <Link
                href={href}
                className="site-link site-focus mt-5 inline-flex items-center gap-2 text-sm font-semibold"
              >
                Dowiedz się więcej
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
