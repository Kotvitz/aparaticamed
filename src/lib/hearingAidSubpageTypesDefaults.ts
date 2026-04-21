export const hearingAidSubpageTypesDefaults = {
  seoTitle: "Rodzaje aparatów słuchowych | AparaticaMed",
  seoDescription:
    "Poznaj najczęściej wybierane rodzaje aparatów słuchowych. Wyjaśniamy, czym różnią się modele zauszne, RIC, wewnątrzuszne i wewnątrzkanałowe oraz pomagamy dobrać odpowiednie rozwiązanie.",
  slug: "rodzaje",

  hero: {
    title: "Rodzaje aparatów słuchowych",
    description:
      "Aparaty słuchowe różnią się budową, sposobem noszenia i zakresem funkcji. Dlatego wybór odpowiedniego modelu powinien uwzględniać nie tylko wygląd urządzenia, ale przede wszystkim codzienny komfort i skuteczność słyszenia.",
    secondaryDescription:
      "W AparaticaMed pomagamy dobrać rozwiązanie dopasowane do stopnia ubytku słuchu, stylu życia oraz oczekiwań pacjenta.",
    imageAlt: "Różne rodzaje aparatów słuchowych dostępne w AparaticaMed",
    primaryCta: {
      label: "Umów konsultację",
      href: "/kontakt",
      variant: "primary",
    },
    secondaryCta: {
      label: "Dobór aparatów",
      href: "/uslugi/dobor-aparatow-sluchowych",
      variant: "secondary",
    },
  },

  intro: {
    title: "Jakie rodzaje aparatów słuchowych są najczęściej wybierane?",
    paragraphs: [
      "Najczęściej spotykane rozwiązania to aparaty zauszne, modele RIC / RITE, aparaty wewnątrzuszne oraz wewnątrzkanałowe. Poszczególne typy różnią się wielkością, poziomem dyskrecji, sposobem użytkowania i zakresem możliwego dopasowania.",
      "Najlepszy wybór zależy od tego, jakiego wsparcia słuchowego potrzebuje pacjent, w jakich sytuacjach używa aparatu najczęściej oraz na czym najbardziej mu zależy - na dyskrecji, prostocie obsługi czy dodatkowych funkcjach.",
    ],
    asideTitle: "Prostszy wybór, lepsza decyzja",
    asideParagraphs: [
      "Tutaj znajdziesz informacje o najważniejszych typach aparatów, praktycznych różnicach i jasnych wskazaniach, kiedy warto umówić konsultację.",
    ],
  },

  cardsSection: {
    title: "Najważniejsze typy aparatów słuchowych",
    description:
      "Poniżej znajdziesz uproszczony podział, który najlepiej sprawdza się na nowoczesnej stronie firmowej: jasno pokazuje różnice, a jednocześnie nie przytłacza zbyt technicznymi szczegółami.",
    items: [
      {
        title: "Aparaty zauszne",
        description:
          "Modele noszone za uchem. Zapewniają szerokie możliwości dopasowania, wygodną obsługę i dobrze sprawdzają się przy różnych stopniach ubytku słuchu.",
        iconKey: "Ear",
      },
      {
        title: "Aparaty RIC / RITE",
        description:
          "Nowoczesne rozwiązanie z cienkim przewodem i słuchawką umieszczoną w kanale słuchowym. To połączenie dyskrecji, lekkości i codziennego komfortu.",
        iconKey: "CircleDot",
      },
      {
        title: "Aparaty wewnątrzuszne",
        description:
          "Umieszczane w uchu i wykonywane indywidualnie. Dają bardziej dyskretny efekt niż klasyczne modele zauszne, przy zachowaniu wygodnego użytkowania.",
        iconKey: "Settings2",
      },
      {
        title: "Nowoczesne funkcje",
        description:
          "Wybrane aparaty mogą oferować łączność ze smartfonem, wygodne sterowanie oraz rozwiązania wspierające słyszenie w różnych warunkach akustycznych.",
        iconKey: "Smartphone",
      },
    ],
  },

  checklistSection: {
    title: "Co bierzemy pod uwagę przy doborze aparatu?",
    description:
      "Dobór aparatu słuchowego nie powinien opierać się wyłącznie na jego rozmiarze lub wyglądzie. Liczy się przede wszystkim to, jak urządzenie sprawdzi się w codziennym życiu.",
    items: [
      "stopień i charakter ubytku słuchu",
      "wygoda codziennego noszenia",
      "łatwość zakładania i obsługi",
      "oczekiwany poziom dyskrecji",
      "styl życia i najczęstsze sytuacje słuchowe",
      "potrzeba dodatkowych funkcji, np. obsługi ze smartfona",
    ],
    asideTitle: "Dlaczego konsultacja ma znaczenie?",
    asideParagraph:
      "Dobrze dobrany aparat może wyraźnie poprawić rozumienie mowy i komfort rozmów. Podczas konsultacji łatwiej ocenić, które rozwiązanie będzie praktyczne, wygodne i odpowiednie na co dzień.",
  },

  relatedSection: {
    title: "Zobacz także",
     description:
      "Jeśli porównujesz różne rozwiązania, pomocne mogą być także informacje o aparatach dla seniorów, kosztach oraz samym procesie doboru urządzenia.",
    items: [
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
    ],
  },
} as const;