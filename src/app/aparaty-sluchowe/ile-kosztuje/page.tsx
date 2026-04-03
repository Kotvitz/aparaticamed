import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  Settings2,
  CircleGauge,
  PersonStanding,
  ArrowRight,
} from "lucide-react";
import {
  HearingAidSubpageHero,
  HearingAidSubpageIntro,
  HearingAidSubpageCards,
  HearingAidSubpageChecklist,
} from "@/components/sections/hearing-aids/subpages";

export const metadata: Metadata = {
  title: "Ile kosztuje aparat słuchowy? | AparaticaMed",
  description:
    "Dowiedz się, od czego zależy cena aparatu słuchowego, jakie są dostępne możliwości refundacji oraz jak poznać realny koszt dopasowanego rozwiązania.",
  alternates: {
    canonical: "/aparaty-sluchowe/ile-kosztuje",
  },
};

const cardItems = [
  {
    title: "Rodzaj aparatu",
    description:
      "Cena zależy m.in. od tego, czy aparat jest zauszny, RIC czy wewnątrzuszny oraz jakie możliwości dopasowania oferuje.",
    Icon: Settings2,
  },
  {
    title: "Poziom technologii",
    description:
      "Bardziej zaawansowane modele mogą oferować dodatkowe funkcje poprawiające komfort słyszenia w różnych warunkach.",
    Icon: CircleGauge,
  },
  {
    title: "Indywidualne dopasowanie",
    description:
      "Każdy aparat musi być dopasowany do potrzeb słuchowych pacjenta oraz jego codziennych sytuacji.",
    Icon: PersonStanding,
  },
  {
    title: "Wsparcie i serwis",
    description:
      "Ważna część kosztu to także opieka specjalisty, regulacje ustawień oraz dalsze wizyty kontrolne.",
    Icon: Wrench,
  },
];

const checklistItems = [
  "stopień ubytku słuchu",
  "rodzaj wybranego aparatu",
  "poziom zaawansowania technologicznego",
  "dodatkowe funkcje i wygoda użytkowania",
  "indywidualne dopasowanie ustawień",
  "możliwość skorzystania z refundacji",
];

export default function HearingAidPricePage() {
  return (
    <>
      <HearingAidSubpageHero
        title="Ile kosztuje aparat słuchowy?"
        description="Cena aparatu słuchowego zależy od wielu czynników, dlatego trudno wskazać jedną uniwersalną kwotę. Ostateczny koszt zależy przede wszystkim od potrzeb słuchowych oraz wybranego rozwiązania."
        secondaryDescription="W AparaticaMed pomagamy dopasować aparat do potrzeb pacjenta oraz wyjaśniamy dostępne możliwości finansowania i refundacji."
        imageSrc="/images/hearing-aids-costs-hero.webp"
        imageAlt="Koszt aparatów słuchowych i konsultacja specjalisty"
        primaryCta={{
          label: "Umów konsultację",
          href: "/kontakt",
        }}
        secondaryCta={{
          label: "Sprawdź refundację",
          href: "/refundacja",
          variant: "secondary",
        }}
      />

      <HearingAidSubpageIntro
        title="Od czego zależy cena aparatu słuchowego?"
        paragraphs={[
          "Cena aparatu słuchowego zależy przede wszystkim od jego rodzaju, poziomu technologii oraz indywidualnych potrzeb użytkownika. Na rynku dostępne są rozwiązania w różnych przedziałach cenowych - od prostszych modeli po bardziej zaawansowane technologicznie urządzenia.",
          "Przykładowo, ceny aparatów słuchowych mogą zaczynać się od kilku tysięcy złotych i rosnąć wraz z dodatkowymi funkcjami oraz poziomem dopasowania. Dlatego tak ważne jest wcześniejsze określenie potrzeb słuchowych i stylu życia pacjenta.",
        ]}
        asideTitle="Dlaczego konsultacja jest ważna?"
        asideParagraphs={[
          "Bez badania słuchu trudno określić realny koszt aparatu. Dopiero po konsultacji można dobrać odpowiednie rozwiązanie i przedstawić dostępne możliwości.",
        ]}
      />

      <HearingAidSubpageCards
        title="Co wpływa na koszt aparatu?"
        description="Cena nie zależy wyłącznie od samego urządzenia. Duże znaczenie ma także sposób dopasowania i zakres wsparcia po zakupie."
        items={cardItems}
      />

      <HearingAidSubpageChecklist
        title="Najważniejsze czynniki wpływające na cenę"
        description="Dobór aparatu słuchowego powinien uwzględniać kilka kluczowych elementów, które bezpośrednio wpływają na koszt końcowy."
        items={checklistItems}
        asideTitle="Możliwość refundacji"
        asideParagraph="Osoby dorosłe mogą otrzymać refundację NFZ na aparat słuchowy, najczęściej około 1050 zł na każde ucho. Wsparcie to przysługuje zazwyczaj raz na kilka lat, po spełnieniu odpowiednich warunków."
      />

      <section
        className="px-4 py-10 md:py-14"
        style={{ backgroundColor: "var(--surface-muted)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Rodzaje aparatów",
                description:
                  "Sprawdź, czym różnią się dostępne typy aparatów słuchowych.",
                href: "/aparaty-sluchowe/rodzaje",
              },
              {
                title: "Aparaty dla seniorów",
                description:
                  "Dowiedz się, jakie cechy są szczególnie ważne dla osób starszych.",
                href: "/aparaty-sluchowe/dla-seniorow",
              },
              {
                title: "Dobór aparatów",
                description:
                  "Zobacz, jak wygląda profesjonalne dopasowanie aparatu słuchowego.",
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
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}