import Link from "next/link";
import { Ear, Headphones, Wrench, House, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "Badanie słuchu",
    description:
      "Badanie słuchu pomaga ocenić stan słyszenia i stanowi ważny krok w doborze dalszego postępowania.",
    href: "/uslugi/badanie-sluchu",
    Icon: Ear,
  },
  {
    title: "Dobór aparatów słuchowych",
    description:
      "Pomagamy dobrać aparaty słuchowe odpowiednie do rodzaju niedosłuchu, potrzeb pacjenta i codziennego komfortu użytkowania.",
    href: "/uslugi/dobor-aparatow-sluchowych",
    Icon: Headphones,
  },
  {
    title: "Serwis aparatów słuchowych",
    description:
      "Zapewniamy wsparcie związane z kontrolą, regulacją i bieżącą opieką nad aparatami słuchowymi.",
    href: "/uslugi/serwis-aparatow-sluchowych",
    Icon: Wrench,
  },
  {
    title: "Wizyty domowe",
    description:
      "Oferujemy wsparcie dla osób, którym zależy na większej wygodzie lub mają utrudniony dojazd.",
    href: "/uslugi/wizyty-domowe",
    Icon: House,
  },
];

export default function ServicesOverview() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Zakres usług
            </h2>

            <div
              className="mt-5 space-y-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Świadczymy usługi związane z diagnostyką słuchu, doborem
                aparatów słuchowych oraz dalszym wsparciem w ich użytkowaniu.
              </p>

              <p>
                Pomagamy dobrać rozwiązania odpowiednie do rodzaju niedosłuchu
                oraz codziennych potrzeb pacjenta. Oferujemy także serwis
                aparatów słuchowych oraz dodatkowe produkty wspierające komfort
                słyszenia.
              </p>

              <p>
                Poniżej znajdują się główne obszary, w których wspieramy
                pacjentów.
              </p>
            </div>
          </div>

          <div
            className="site-card p-6 md:p-7"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--brand-border)",
            }}
          >
            <h3
              className="text-xl font-semibold md:text-2xl"
              style={{ color: "var(--text)" }}
            >
              Kompleksowe wsparcie
            </h3>

            <div
              className="mt-4 space-y-4 text-base leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Usługi obejmują zarówno diagnostykę słuchu, jak i dobór aparatów
                oraz ich dalszą regulację i kontrolę.
              </p>

              <p>
                W zależności od potrzeb pacjenta wsparcie może obejmować także
                wizyty domowe oraz pomoc w codziennym użytkowaniu aparatów.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map(({ title, description, Icon, href }) => (
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
