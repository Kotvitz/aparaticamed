export const homePageDefaults = {
  hero: {
    eyebrow: "Aparaty słuchowe • Badanie słuchu • Szczecin",
    title:
      "Nowoczesne aparaty słuchowe i profesjonalna diagnostyka słuchu w Szczecinie",
    description:
      "Pomagamy dobrać odpowiednie aparaty słuchowe, wykonujemy badania słuchu i wspieramy pacjentów w wyborze najlepszego rozwiązania dopasowanego do ich potrzeb.",
    primaryButtonText: "Umów wizytę",
    secondaryButtonText: "Zadzwoń teraz",
    trustPoints: [
      { text: "Nowoczesne aparaty słuchowe" },
      { text: "Profesjonalna diagnostyka słuchu" },
      { text: "Pomoc w uzyskaniu refundacji" },
    ],
    imageAlt: "Nowoczesny aparat słuchowy"
  },

  whyChooseUs: {
    title: "Dlaczego warto wybrać AparaticaMed?",
    description:
      "Zapewniamy kompleksową opiekę oraz nowoczesne rozwiązania dopasowane do indywidualnych potrzeb pacjentów.",
    items: [
      {
        title: "Indywidualne podejście",
        description:
          "Każdemu pacjentowi poświęcamy uwagę i pomagamy dobrać rozwiązanie dopasowane do jego potrzeb.",
      },
      {
        title: "Profesjonalne wsparcie",
        description:
          "Zapewniamy rzetelne doradztwo i pomoc na każdym etapie - od konsultacji po późniejsze użytkowanie aparatu.",
      },
      {
        title: "Nowoczesne rozwiązania",
        description:
          "Stawiamy na sprawdzone i nowoczesne aparaty słuchowe, które wspierają codzienny komfort słyszenia.",
      },
      {
        title: "Opieka nastawiona na pacjenta",
        description:
          "Dbamy o spokojną atmosferę, jasne wyjaśnienia i wygodny kontakt, aby cały proces był prosty i zrozumiały.",
      },
    ],
  },

  servicesOverview: {
    title: "Nasze usługi",
    description:
      "Oferujemy kompleksową pomoc w zakresie diagnostyki słuchu, doboru aparatów słuchowych oraz wsparcia po zakupie.",
    moreLabel: "Dowiedz się więcej",
    items: [
      {
        title: "Badanie słuchu",
        description:
          "Wykonujemy profesjonalne badania słuchu, które pomagają dobrać odpowiednie rozwiązanie.",
        href: "/uslugi/badanie-sluchu",
      },
      {
        title: "Dobór aparatów słuchowych",
        description:
          "Pomagamy dopasować aparaty słuchowe do potrzeb pacjenta i codziennego stylu życia.",
        href: "/uslugi/dobor-aparatow-sluchowych",
      },
      {
        title: "Serwis aparatów słuchowych",
        description:
          "Zapewniamy wsparcie, regulację oraz serwis aparatów słuchowych po zakupie.",
        href: "/uslugi/serwis-aparatow-sluchowych",
      },
      {
        title: "Refundacja",
        description:
          "Pomagamy w uzyskaniu refundacji i wyjaśniamy, jak skorzystać z dostępnego wsparcia.",
        href: "/refundacja",
      },
    ],
  },

  howItWorks: {
    title: "Jak wygląda współpraca?",
    description:
      "Prowadzimy pacjenta przez cały proces - od pierwszego kontaktu, przez badanie słuchu, aż po dobór odpowiedniego rozwiązania i opiekę po zakupie.",
    items: [
      {
        number: "01",
        title: "Kontakt i konsultacja",
        description:
          "Skontaktuj się z nami telefonicznie lub odwiedź nasz gabinet, aby omówić swoje potrzeby i umówić wizytę.",
      },
      {
        number: "02",
        title: "Badanie słuchu",
        description:
          "Wykonujemy profesjonalne badanie słuchu, które pozwala ocenić potrzeby pacjenta i dobrać odpowiednie rozwiązanie.",
      },
      {
        number: "03",
        title: "Dobór aparatu słuchowego",
        description:
          "Pomagamy wybrać aparat słuchowy dopasowany do stopnia ubytku słuchu, stylu życia i oczekiwań pacjenta.",
      },
      {
        number: "04",
        title: "Opieka i wsparcie",
        description:
          "Zapewniamy pomoc po zakupie, serwis aparatów oraz wsparcie w codziennym użytkowaniu.",
      },
    ],
  },

  reimbursement: {
    title: "Refundacja aparatów słuchowych",
    description:
      "Pomagamy pacjentom zrozumieć zasady refundacji i przejść przez cały proces bez zbędnych komplikacji.",
    buttonText: "Sprawdź szczegóły refundacji",
    points: [
      { text: "Pomagamy zrozumieć zasady refundacji aparatów słuchowych." },
      { text: "Wyjaśniamy, jakie dokumenty są potrzebne." },
      { text: "Wspieramy pacjentów na każdym etapie formalności." },
    ],
    imageAlt: "Pomoc w uzyskaniu refundacji aparatów słuchowych",
  },

  faq: {
    title: "FAQ - Najczęściej zadawane pytania",
    description:
      "Zebraliśmy odpowiedzi na pytania, które najczęściej pojawiają się przed wizytą, badaniem słuchu i doborem aparatu słuchowego.",
    items: [
      {
        question: "Jak przebiega proces doboru aparatu słuchowego?",
        answer:
          "Proces rozpoczyna się od konsultacji i badania słuchu. Na podstawie wyników dobieramy aparat dopasowany do stopnia ubytku słuchu oraz stylu życia pacjenta.",
      },
      {
        question: "Jak wygląda pierwsza wizyta?",
        answer:
          "Pierwsza wizyta obejmuje wywiad, badanie słuchu oraz omówienie dostępnych rozwiązań. W wielu przypadkach możliwe jest także przetestowanie wybranego aparatu.",
      },
      {
        question: "Jak dbać o aparat słuchowy?",
        answer:
          "Regularne czyszczenie aparatu oraz kontrolne wizyty w gabinecie pomagają utrzymać urządzenie w dobrym stanie i zapewniają jego długotrwałe działanie.",
      },
      {
        question: "Jak często należy wykonywać badanie słuchu?",
        answer:
          "Zaleca się wykonywanie kontrolnego badania słuchu co najmniej raz w roku, szczególnie u osób starszych lub narażonych na hałas.",
      },
      {
        question: "Czy pomagają Państwo w uzyskaniu refundacji?",
        answer:
          "Tak, pomagamy wyjaśnić zasady refundacji oraz wskazujemy, jakie dokumenty są potrzebne do skorzystania z dostępnego wsparcia.",
      },
    ],
  },
} as const;