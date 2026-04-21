export const hearingAidSubpagePriceDefaults = {
  seoTitle: "Ile kosztuje aparat słuchowy? | AparaticaMed",
  seoDescription:
    "Dowiedz się, od czego zależy cena aparatu słuchowego, jakie są dostępne możliwości refundacji oraz jak poznać realny koszt dopasowanego rozwiązania.",
  slug: "ile-kosztuje",

  hero: {
    title: "Ile kosztuje aparat słuchowy?",
    description:
      "Cena aparatu słuchowego zależy od wielu czynników, dlatego trudno wskazać jedną uniwersalną kwotę. Ostateczny koszt zależy przede wszystkim od potrzeb słuchowych oraz wybranego rozwiązania.",
    secondaryDescription:
      "W AparaticaMed pomagamy dopasować aparat do potrzeb pacjenta oraz wyjaśniamy dostępne możliwości finansowania i refundacji.",
    imageAlt: "Informacje o kosztach aparatów słuchowych w AparaticaMed",
    primaryCta: {
      label: "Umów konsultację",
      href: "/kontakt",
      variant: "primary",
    },
    secondaryCta: {
      label: "Sprawdź refundację",
      href: "/refundacja",
      variant: "secondary",
    },
  },

  intro: {
    title: "Od czego zależy cena aparatu słuchowego?",
    paragraphs: [
      "Cena aparatu słuchowego zależy przede wszystkim od jego rodzaju, poziomu technologii oraz indywidualnych potrzeb użytkownika. Na rynku dostępne są rozwiązania w różnych przedziałach cenowych - od prostszych modeli po bardziej zaawansowane technologicznie urządzenia.",
      "Przykładowo, ceny aparatów słuchowych mogą zaczynać się od kilku tysięcy złotych i rosnąć wraz z dodatkowymi funkcjami oraz poziomem dopasowania. Dlatego tak ważne jest wcześniejsze określenie potrzeb słuchowych i stylu życia pacjenta.",
    ],
    asideTitle: "Dlaczego konsultacja jest ważna?",
    asideParagraphs: [
      "Bez badania słuchu trudno określić realny koszt aparatu. Dopiero po konsultacji można dobrać odpowiednie rozwiązanie i przedstawić dostępne możliwości.",
    ],
  },

  cardsSection: {
    title: "Co wpływa na koszt aparatu?",
    description:
      "Cena nie zależy wyłącznie od samego urządzenia. Duże znaczenie ma także sposób dopasowania i zakres wsparcia po zakupie.",
    items: [
      {
        title: "Rodzaj aparatu",
        description:
          "Cena zależy m.in. od tego, czy aparat jest zauszny, RIC czy wewnątrzuszny oraz jakie możliwości dopasowania oferuje.",
        iconKey: "Settings2",
      },
      {
        title: "Poziom technologii",
        description:
          "Bardziej zaawansowane modele mogą oferować dodatkowe funkcje poprawiające komfort słyszenia w różnych warunkach.",
        iconKey: "CircleGauge",
      },
      {
        title: "Indywidualne dopasowanie",
        description:
          "Każdy aparat musi być dopasowany do potrzeb słuchowych pacjenta oraz jego codziennych sytuacji.",
        iconKey: "PersonStanding",
      },
      {
        title: "Wsparcie i serwis",
        description:
          "Ważna część kosztu to także opieka specjalisty, regulacje ustawień oraz dalsze wizyty kontrolne.",
        iconKey: "Wrench",
      },
    ],
  },

  checklistSection: {
    title: "Najważniejsze czynniki wpływające na cenę",
    description:
      "Podczas rozmowy o cenie aparatu słuchowego warto uwzględnić nie tylko koszt urządzenia, ale cały zakres wsparcia i możliwości dopasowania.",
    items: [
      "stopień ubytku słuchu",
      "rodzaj wybranego aparatu",
      "poziom zaawansowania technologicznego",
      "dodatkowe funkcje i wygoda użytkowania",
      "indywidualne dopasowanie ustawień",
      "możliwość skorzystania z refundacji",
    ],
    asideTitle: "Możliwość refundacji",
    asideParagraph:
      "Osoby dorosłe mogą otrzymać refundację NFZ na aparat słuchowy, najczęściej około 1050 zł na każde ucho. Wsparcie to przysługuje zazwyczaj raz na kilka lat, po spełnieniu odpowiednich warunków.",
  },

  relatedSection: {
    title: "Zobacz także",
    items: [
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
    ],
  },
} as const;