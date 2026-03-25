import Link from "next/link";
import {
  AudioLines,
  Ear,
  Wrench,
  BadgePercent,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: AudioLines,
    title: "Badanie słuchu",
    description:
      "Wykonujemy profesjonalne badania słuchu, które pomagają dobrać odpowiednie rozwiązanie.",
    href: "/uslugi/badanie-sluchu",
  },
  {
    icon: Ear,
    title: "Dobór aparatów słuchowych",
    description:
      "Pomagamy dopasować aparaty słuchowe do potrzeb pacjenta i codziennego stylu życia.",
    href: "/uslugi/dobor-aparatow-sluchowych",
  },
  {
    icon: Wrench,
    title: "Serwis aparatów słuchowych",
    description:
      "Zapewniamy wsparcie, regulację oraz serwis aparatów słuchowych po zakupie.",
    href: "/uslugi/serwis-aparatow-sluchowych",
  },
  {
    icon: BadgePercent,
    title: "Refundacja",
    description:
      "Pomagamy w uzyskaniu refundacji i wyjaśniamy, jak skorzystać z dostępnego wsparcia.",
    href: "/refundacja",
  },
];

export default function ServicesOverview() {
  return (
    <section
      className="px-4 py-14 md:py-20"
      style={{ backgroundColor: "var(--surface-muted)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Nasze usługi
          </h2>

          <p
            className="mt-4 text-base md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Oferujemy kompleksową pomoc w zakresie diagnostyki słuchu, doboru
            aparatów słuchowych oraz wsparcia po zakupie.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
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
                  {service.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="site-link site-focus mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Dowiedz się więcej
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}