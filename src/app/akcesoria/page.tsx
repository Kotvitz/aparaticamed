import type { Metadata } from "next";
import { Battery, Headphones, Settings2 } from "lucide-react";

import {
  HearingAidSubpageHero,
  HearingAidSubpageIntro,
  HearingAidSubpageCards,
} from "@/components/sections/hearing-aids/subpages";

import { HearingAidAccessorySection } from "@/components/sections/accessories";

export const metadata: Metadata = {
  title: "Akcesoria do aparatów słuchowych | AparaticaMed",
  description:
    "Sprawdź dostępne akcesoria do aparatów słuchowych, takie jak baterie oraz ochronniki słuchu. Dowiedz się, jakie rozwiązania mogą poprawić komfort codziennego użytkowania.",
  alternates: {
    canonical: "/akcesoria",
  },
};

const accessoriesItems = [
  {
    title: "Baterie do aparatów słuchowych",
    description:
      "Oferujemy popularne typy baterii do aparatów słuchowych, dopasowane do różnych modeli urządzeń.",
    Icon: Battery,
  },
  {
    title: "Ochronniki słuchu",
    description:
      "Pomagają chronić słuch przed nadmiernym hałasem w pracy, podczas koncertów lub w innych głośnych środowiskach.",
    Icon: Headphones,
  },
  {
    title: "Akcesoria wspierające użytkowanie",
    description:
      "Odpowiednie akcesoria pomagają utrzymać aparat w dobrym stanie oraz zapewniają wygodę codziennego użytkowania.",
    Icon: Settings2,
  },
];

export default function AccessoriesPage() {
  return (
    <>
      <HearingAidSubpageHero
        title="Akcesoria do aparatów słuchowych"
        description="Odpowiednio dobrane akcesoria mogą znacząco poprawić komfort korzystania z aparatu słuchowego oraz pomóc w ochronie słuchu w trudnych warunkach."
        secondaryDescription="W AparaticaMed pomagamy dobrać baterie i ochronniki słuchu dopasowane do potrzeb użytkownika."
        imageSrc="/images/hearing-aid-accessories-hero.webp"
        imageAlt="Akcesoria do aparatów słuchowych i ochronniki słuchu"
        primaryCta={{
          label: "Skontaktuj się z nami",
          href: "/kontakt",
        }}
        secondaryCta={{
          label: "Dobór aparatów",
          href: "/uslugi/dobor-aparatow-sluchowych",
          variant: "secondary",
        }}
      />

      <HearingAidSubpageIntro
        title="Jakie akcesoria mogą być przydatne?"
        paragraphs={[
          "Akcesoria do aparatów słuchowych pomagają utrzymać urządzenia w dobrym stanie oraz poprawiają komfort codziennego użytkowania. W zależności od potrzeb mogą to być baterie, ochronniki słuchu lub inne rozwiązania wspierające działanie aparatu.",
          "Wybór odpowiednich akcesoriów zależy od modelu aparatu oraz sytuacji, w których aparat jest używany najczęściej.",
        ]}
        asideTitle="Dlaczego akcesoria mają znaczenie?"
        asideParagraphs={[
          "Regularna wymiana baterii oraz właściwa ochrona słuchu pomagają zachować sprawność urządzenia i wspierają komfort codziennego funkcjonowania.",
        ]}
      />

      <HearingAidSubpageCards
        title="Najczęściej wybierane akcesoria"
        description="Poniżej znajdziesz przykłady akcesoriów, które najczęściej towarzyszą użytkownikom aparatów słuchowych."
        items={accessoriesItems}
      />

      <HearingAidAccessorySection
        title="Baterie do aparatów słuchowych"
        description="Dobór odpowiedniego typu baterii ma kluczowe znaczenie dla prawidłowego działania aparatu słuchowego oraz komfortu jego codziennego użytkowania."
        items={[
          "typy baterii: 10, 312, 13 i 675",
          "dopasowanie baterii do konkretnego modelu aparatu",
          "możliwość korzystania z modeli akumulatorowych",
          "regularna wymiana zapewniająca prawidłowe działanie",
        ]}
        imageSrc="/images/hearing-aid-batteries.webp"
        imageAlt="Baterie do aparatów słuchowych typy 10 312 13 675"
      />

      <HearingAidAccessorySection
        reverse
        title="Ochronniki słuchu"
        description="Ochronniki słuchu pomagają zabezpieczyć słuch przed nadmiernym hałasem w różnych środowiskach, takich jak miejsca pracy lub wydarzenia muzyczne."
        items={[
          "ochronniki uniwersalne",
          "ochronniki indywidualne dopasowane do ucha",
          "ochrona słuchu w pracy i środowisku hałaśliwym",
          "zastosowanie podczas koncertów i wydarzeń",
        ]}
        imageSrc="/images/hearing-protection.webp"
        imageAlt="Ochronniki słuchu indywidualne i uniwersalne"
      />
    </>
  );
}
