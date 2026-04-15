export const servicesPageDefaults = {
  hero: {
    title: "Usługi",
    lead:
      "W AparaticaMed pomagamy pacjentom na każdym etapie dbania o słuch - od badania słuchu, przez dobór aparatów słuchowych, aż po serwis i dalsze wsparcie po zakupie.",
    description:
      "Nasze usługi są oparte na indywidualnym podejściu, spokojnym wyjaśnieniu kolejnych kroków i dopasowaniu rozwiązań do codziennych potrzeb pacjenta.",
    primaryButtonText: "Umów wizytę",
    secondaryButtonText: "Rozpocznij od badania",
    imageAlt: "Badanie słuchu w AparaticaMed",
  },

  overview: {
    title: "Zakres usług",
    paragraph1:
      "Świadczymy usługi związane z diagnostyką słuchu, doborem aparatów słuchowych oraz dalszym wsparciem w ich użytkowaniu.",
    paragraph2:
      "Pomagamy dobrać rozwiązania odpowiednie do rodzaju niedosłuchu oraz codziennych potrzeb pacjenta. Oferujemy także serwis aparatów słuchowych oraz dodatkowe produkty wspierające komfort słyszenia.",
    paragraph3:
      "Poniżej znajdują się główne obszary, w których wspieramy pacjentów.",
    highlightTitle: "Kompleksowe wsparcie",
    highlightParagraph1:
      "Usługi obejmują zarówno diagnostykę słuchu, jak i dobór aparatów oraz ich dalszą regulację i kontrolę.",
    highlightParagraph2:
      "W zależności od potrzeb pacjenta wsparcie może obejmować także wizyty domowe oraz pomoc w codziennym użytkowaniu aparatów.",
    moreLabel: "Dowiedz się więcej",
    items: [
      {
        title: "Badanie słuchu",
        description:
          "Badanie słuchu pomaga ocenić stan słyszenia i stanowi ważny krok w doborze dalszego postępowania.",
        href: "/uslugi/badanie-sluchu",
      },
      {
        title: "Dobór aparatów słuchowych",
        description:
          "Pomagamy dobrać aparaty słuchowe odpowiednie do rodzaju niedosłuchu, potrzeb pacjenta i codziennego komfortu użytkowania.",
        href: "/uslugi/dobor-aparatow-sluchowych",
      },
      {
        title: "Serwis aparatów słuchowych",
        description:
          "Zapewniamy wsparcie związane z kontrolą, regulacją i bieżącą opieką nad aparatami słuchowymi.",
        href: "/uslugi/serwis-aparatow-sluchowych",
      },
      {
        title: "Wizyty domowe",
        description:
          "Oferujemy wsparcie dla osób, którym zależy na większej wygodzie lub mają utrudniony dojazd.",
        href: "/uslugi/wizyty-domowe",
      },
    ],
  },

  journey: {
    title: "Jak wygląda pomoc krok po kroku",
    description:
      "Zależy nam, aby cały proces był dla pacjenta zrozumiały, spokojny i dopasowany do jego indywidualnej sytuacji.",
    items: [
      {
        number: "01",
        title: "Rozmowa i poznanie potrzeb",
        description:
          "Zaczynamy od spokojnej rozmowy o trudnościach związanych ze słyszeniem, codziennych sytuacjach oraz oczekiwaniach pacjenta.",
      },
      {
        number: "02",
        title: "Badanie i ocena słuchu",
        description:
          "W zależności od potrzeb wykonujemy badanie słuchu, które pomaga lepiej ocenić sytuację i dobrać odpowiedni kierunek dalszego wsparcia.",
      },
      {
        number: "03",
        title: "Dobór rozwiązania",
        description:
          "Na podstawie wyników oraz indywidualnych potrzeb pomagamy dobrać odpowiednie rozwiązanie, w tym aparat słuchowy i jego ustawienia.",
      },
      {
        number: "04",
        title: "Dalsza opieka i wsparcie",
        description:
          "Po doborze zapewniamy dalszą pomoc, kontrole oraz wsparcie w codziennym korzystaniu z aparatów słuchowych.",
      },
    ],
  },

  benefits: {
    title: "Dlaczego warto skorzystać z naszych usług",
    description:
      "Nasze usługi są prowadzone tak, aby pacjent otrzymał nie tylko odpowiednie rozwiązanie, ale także wsparcie i poczucie bezpieczeństwa na każdym etapie.",
    items: [
      {
        title: "Indywidualne podejście",
        description:
          "Każda pomoc jest dopasowywana do potrzeb pacjenta, jego stylu życia oraz codziennych sytuacji związanych ze słyszeniem.",
      },
      {
        title: "Kompleksowe wsparcie",
        description:
          "Łączymy diagnostykę słuchu, dobór aparatów słuchowych oraz dalszą opiekę w jednym miejscu.",
      },
      {
        title: "Opieka po doborze aparatu",
        description:
          "Po wyborze rozwiązania pacjent może liczyć na dalszą pomoc, kontrole oraz wsparcie w codziennym użytkowaniu.",
      },
      {
        title: "Pomoc w wyborze odpowiedniego rozwiązania",
        description:
          "Pomagamy znaleźć rozwiązanie dopasowane do potrzeb, oczekiwań i możliwości pacjenta.",
      },
      {
        title: "Wygoda i dostępność",
        description:
          "Dbamy o komfort wizyty i proponujemy formy wsparcia odpowiednie również dla osób z utrudnionym dojazdem.",
      },
      {
        title: "Spokojny i zrozumiały proces",
        description:
          "Wyjaśniamy kolejne etapy prostym językiem, tak aby pacjent czuł się pewnie i wiedział, czego może się spodziewać.",
      },
    ],
  },
} as const;