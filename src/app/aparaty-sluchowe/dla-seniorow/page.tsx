import type { Metadata } from "next";
import Link from "next/link";
import {
  BellRing,
  HeartHandshake,
  Settings2,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";
import {
  HearingAidSubpageHero,
  HearingAidSubpageIntro,
  HearingAidSubpageCards,
  HearingAidSubpageChecklist,
} from "@/components/sections/hearing-aids/subpages";

export const metadata: Metadata = {
  title: "Aparaty słuchowe dla seniorów | AparaticaMed",
  description:
    "Sprawdź, jakie aparaty słuchowe dla seniorów są wygodne, proste w obsłudze i dopasowane do codziennych potrzeb. Pomożemy dobrać odpowiednie rozwiązanie.",
  alternates: {
    canonical: "/aparaty-sluchowe/dla-seniorow",
  },
};

const cardItems = [
  {
    title: "Prosta obsługa",
    description:
      "Dla wielu seniorów ważne jest, aby aparat był wygodny w codziennym użytkowaniu, łatwy do zakładania i intuicyjny w obsłudze.",
    Icon: Settings2,
  },
  {
    title: "Lepsze rozumienie dźwięków otoczenia",
    description:
      "Dobrze dobrany aparat może poprawić komfort rozmów z bliskimi, kontakt z otoczeniem i codzienne funkcjonowanie w domu oraz poza nim.",
    Icon: BellRing,
  },
  {
    title: "Komfort i bezpieczeństwo",
    description:
      "Nowoczesne rozwiązania mogą oferować wygodne noszenie, redukcję hałasu i automatyczne dopasowanie działania do otoczenia.",
    Icon: ShieldCheck,
  },
  {
    title: "Wsparcie specjalistów",
    description:
      "Równie ważny jak sam aparat jest spokojny proces doboru, wyjaśnienie zasad użytkowania oraz późniejsze wizyty kontrolne.",
    Icon: HeartHandshake,
  },
];

const checklistItems = [
  "stopień i charakter ubytku słuchu",
  "sprawność manualna i wygoda obsługi",
  "komfort noszenia przez wiele godzin",
  "czytelność rozmów w domu i poza domem",
  "oczekiwana prostota codziennego użytkowania",
  "potrzeba późniejszej regulacji i wsparcia",
];

export default function HearingAidsForSeniorsPage() {
  return (
    <>
      <HearingAidSubpageHero
        title="Aparaty słuchowe dla seniorów"
        description="Wraz z wiekiem słuch może stopniowo się pogarszać, dlatego dobrze dobrany aparat słuchowy może wyraźnie poprawić komfort rozmów, kontakt z bliskimi i codzienne funkcjonowanie."
        secondaryDescription="W AparaticaMed pomagamy dobrać rozwiązanie, które będzie skuteczne, wygodne i proste w codziennym użytkowaniu."
        imageSrc="/images/hearing-aids-seniors-hero.webp"
        imageAlt="Senior korzystający z nowoczesnego aparatu słuchowego"
        primaryCta={{
          label: "Umów konsultację",
          href: "/kontakt",
        }}
        secondaryCta={{
          label: "Dobór aparatów",
          href: "/uslugi/dobor-aparatow-sluchowych",
          variant: "secondary",
        }}
      />

      <HearingAidSubpageIntro
        title="Na co zwrócić uwagę przy wyborze aparatu dla seniora?"
        paragraphs={[
          "Dla wielu osób starszych ważna jest nie tylko poprawa słuchu, ale również wygoda noszenia, łatwość obsługi i poczucie bezpieczeństwa. Dlatego wybór aparatu powinien uwzględniać zarówno wyniki badania słuchu, jak i codzienne potrzeby pacjenta.",
          "Nowoczesne aparaty słuchowe dla seniorów mogą być lekkie, dyskretne i intuicyjne. W wybranych modelach dostępne są także funkcje automatycznej regulacji oraz redukcji hałasu, które pomagają lepiej odnaleźć się w różnych sytuacjach akustycznych.",
        ]}
        asideTitle="Rozważny dobór ma znaczenie"
        asideParagraphs={[
          "Dobór aparatu słuchowego powinien odbywać się bez pośpiechu i z pełnym wyjaśnieniem wszystkich możliwości. Dzięki temu łatwiej wybrać rozwiązanie wygodne w codziennym użytkowaniu i dopasowane do indywidualnych potrzeb.",
        ]}
      />

      <HearingAidSubpageCards
        title="Co jest szczególnie ważne dla seniorów?"
        description="Dobrze dobrany aparat powinien realnie pomagać na co dzień - jego obsługa nie powinna być zbyt skomplikowana i nie przytłaczać technicznymi detalami."
        items={cardItems}
      />

      <HearingAidSubpageChecklist
        title="Jak dobieramy aparat słuchowy dla osoby starszej?"
        description="Nie wybieramy urządzenia wyłącznie na podstawie wieku. Najważniejsze są indywidualne potrzeby pacjenta, styl życia oraz to, w jakich sytuacjach aparat ma pomagać najczęściej."
        items={checklistItems}
        asideTitle="Wsparcie bliskich też pomaga"
        asideParagraph="Wiele osób starszych czuje się pewniej, gdy na wizycie towarzyszy im ktoś z rodziny. To ułatwia spokojne omówienie dostępnych rozwiązań, zasad użytkowania i późniejszej opieki nad urządzeniem."
      />

      <section
        className="px-4 py-10 md:py-14"
        style={{ backgroundColor: "var(--surface-muted)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <h2
                className="text-3xl font-bold tracking-tight md:text-4xl"
                style={{ color: "var(--text)" }}
              >
                Jak wygląda wsparcie po doborze aparatu?
              </h2>

              <p
                className="mt-4 text-base leading-8 md:text-lg"
                style={{ color: "var(--text-muted)" }}
              >
                Sam zakup aparatu to dopiero początek. Równie ważne są spokojne
                wdrożenie do obsługi urządzenia, regulacja ustawień oraz dalsze
                wizyty kontrolne. Dzięki temu aparat może lepiej odpowiadać na
                codzienne potrzeby i pozostać wygodny w użytkowaniu przez długi
                czas.
              </p>

              <p
                className="mt-4 text-base leading-8 md:text-lg"
                style={{ color: "var(--text-muted)" }}
              >
                Znaczenie ma również prawidłowa pielęgnacja, regularne
                czyszczenie i odpowiednie przechowywanie aparatu. W razie
                potrzeby warto także skorzystać z serwisu lub ponownej
                konsultacji.
              </p>
            </div>

            <div
              className="site-card p-6 md:p-7"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--brand-border)",
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "var(--brand-light)" }}
              >
                <Users
                  className="h-6 w-6"
                  style={{ color: "var(--brand-ink)" }}
                />
              </div>

              <h3
                className="mt-5 text-xl font-semibold md:text-2xl"
                style={{ color: "var(--text)" }}
              >
                Dalsza opieka i wygoda użytkowania
              </h3>

              <p
                className="mt-3 text-base leading-7"
                style={{ color: "var(--text-muted)" }}
              >
                W przypadku seniorów duże znaczenie ma nie tylko sam wybór
                aparatu, ale też to, czy użytkownik czuje się pewnie podczas
                jego codziennego używania. Dlatego warto postawić na rozwiązanie
                praktyczne, wygodne i wspierane przez specjalistów.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Zobacz także
            </h2>

            <p
              className="mt-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              Jeśli porównujesz dostępne rozwiązania, warto sprawdzić także
              rodzaje aparatów słuchowych, informacje o kosztach oraz sam
              proces profesjonalnego doboru urządzenia.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Rodzaje aparatów słuchowych",
                description:
                  "Poznaj najczęściej wybierane typy aparatów i sprawdź, czym się od siebie różnią.",
                href: "/aparaty-sluchowe/rodzaje",
              },
              {
                title: "Ile kosztuje aparat słuchowy?",
                description:
                  "Dowiedz się, od czego zależy cena i kiedy warto zapytać o refundację.",
                href: "/aparaty-sluchowe/ile-kosztuje",
              },
              {
                title: "Dobór aparatów słuchowych",
                description:
                  "Zobacz, jak wygląda konsultacja i dopasowanie aparatu do potrzeb pacjenta.",
                href: "/uslugi/dobor-aparatow-sluchowych",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--brand-border)",
                }}
              >
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="site-link site-focus mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Przejdź do strony
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}