import type { Metadata } from "next";
import Link from "next/link";
import {
  CircleDot,
  Ear,
  Settings2,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import {
  HearingAidSubpageHero,
  HearingAidSubpageIntro,
  HearingAidSubpageCards,
  HearingAidSubpageChecklist,
} from "@/components/sections/hearing-aids/subpages";

export const metadata: Metadata = {
  title: "Rodzaje aparatów słuchowych | AparaticaMed",
  description:
    "Poznaj najczęściej wybierane rodzaje aparatów słuchowych. Wyjaśniamy, czym różnią się modele zauszne, RIC, wewnątrzuszne i wewnątrzkanałowe oraz pomagamy dobrać odpowiednie rozwiązanie.",
  alternates: {
    canonical: "/aparaty-sluchowe/rodzaje",
  },
};

const cardItems = [
  {
    title: "Aparaty zauszne",
    description:
      "Modele noszone za uchem. Zapewniają szerokie możliwości dopasowania, wygodną obsługę i dobrze sprawdzają się przy różnych stopniach ubytku słuchu.",
    Icon: Ear,
  },
  {
    title: "Aparaty RIC / RITE",
    description:
      "Nowoczesne rozwiązanie z cienkim przewodem i słuchawką umieszczoną w kanale słuchowym. To połączenie dyskrecji, lekkości i codziennego komfortu.",
    Icon: CircleDot,
  },
  {
    title: "Aparaty wewnątrzuszne",
    description:
      "Umieszczane w uchu i wykonywane indywidualnie. Dają bardziej dyskretny efekt niż klasyczne modele zauszne, przy zachowaniu wygodnego użytkowania.",
    Icon: Settings2,
  },
  {
    title: "Nowoczesne funkcje",
    description:
      "Wybrane aparaty mogą oferować łączność ze smartfonem, wygodne sterowanie oraz rozwiązania wspierające słyszenie w różnych warunkach akustycznych.",
    Icon: Smartphone,
  },
];

const selectionFactors = [
  "stopień i charakter ubytku słuchu",
  "wygoda codziennego noszenia",
  "łatwość zakładania i obsługi",
  "oczekiwany poziom dyskrecji",
  "styl życia i najczęstsze sytuacje słuchowe",
  "potrzeba dodatkowych funkcji, np. obsługi ze smartfona",
];

export default function HearingAidTypesPage() {
  return (
    <>
      <HearingAidSubpageHero
        title="Rodzaje aparatów słuchowych"
        description="Aparaty słuchowe różnią się budową, sposobem noszenia i zakresem funkcji. Dlatego wybór odpowiedniego modelu powinien uwzględniać nie tylko wygląd urządzenia, ale przede wszystkim codzienny komfort i skuteczność słyszenia."
        secondaryDescription="W AparaticaMed pomagamy dobrać rozwiązanie dopasowane do stopnia ubytku słuchu, stylu życia oraz oczekiwań pacjenta."
        imageSrc="/images/hearing-aids-types-hero.webp"
        imageAlt="Rodzaje nowoczesnych aparatów słuchowych dostępnych w AparaticaMed"
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
        title="Jakie rodzaje aparatów słuchowych są najczęściej wybierane?"
        paragraphs={[
          "Najczęściej spotykane rozwiązania to aparaty zauszne, modele RIC / RITE, aparaty wewnątrzuszne oraz wewnątrzkanałowe. Poszczególne typy różnią się wielkością, poziomem dyskrecji, sposobem użytkowania i zakresem możliwego dopasowania.",
          "Najlepszy wybór zależy od tego, jakiego wsparcia słuchowego potrzebuje pacjent, w jakich sytuacjach używa aparatu najczęściej oraz na czym najbardziej mu zależy - na dyskrecji, prostocie obsługi czy dodatkowych funkcjach.",
        ]}
        asideTitle="Prostszy wybór, lepsza decyzja"
        asideParagraphs={[
          "Tutaj znajdziesz informacje o najważniejszych typach aparatów, praktycznych różnicach i jasnych wskazaniach, kiedy warto umówić konsultację.",
        ]}
      />

      <HearingAidSubpageCards
        title="Najważniejsze typy aparatów słuchowych"
        description="Poniżej znajdziesz uproszczony podział, który najlepiej sprawdza się na nowoczesnej stronie firmowej: jasno pokazuje różnice, a jednocześnie nie przytłacza zbyt technicznymi szczegółami."
        items={cardItems}
      />

      <HearingAidSubpageChecklist
        title="Co bierzemy pod uwagę przy doborze aparatu?"
        description="Dobór aparatu słuchowego nie powinien opierać się wyłącznie na jego rozmiarze lub wyglądzie. Liczy się przede wszystkim to, jak urządzenie sprawdzi się w codziennym życiu."
        items={selectionFactors}
        asideTitle="Dlaczego konsultacja ma znaczenie?"
        asideParagraph="Dobrze dobrany aparat może wyraźnie poprawić rozumienie mowy i komfort rozmów. Podczas konsultacji łatwiej ocenić, które rozwiązanie będzie praktyczne, wygodne i odpowiednie na co dzień."
      />

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
              Zobacz także
            </h2>

            <p
              className="mt-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              Jeśli porównujesz różne rozwiązania, pomocne mogą być także
              informacje o aparatach dla seniorów, kosztach oraz samym procesie
              doboru urządzenia.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Aparaty dla seniorów",
                description:
                  "Sprawdź, jakie cechy są najważniejsze dla osób starszych i na co zwrócić uwagę przy wyborze.",
                href: "/aparaty-sluchowe/dla-seniorow",
              },
              {
                title: "Ile kosztuje aparat słuchowy?",
                description:
                  "Dowiedz się, od czego zależy cena aparatu oraz kiedy warto porozmawiać o refundacji.",
                href: "/aparaty-sluchowe/ile-kosztuje",
              },
              {
                title: "Dobór aparatów słuchowych",
                description:
                  "Zobacz, jak wygląda konsultacja i profesjonalne dopasowanie aparatu do potrzeb pacjenta.",
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