import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "O nas",
  type: "document",

  initialValue: {
    hero: {
      title: "O nas",
      lead: "AparaticaMed to miejsce, w którym pomagamy pacjentom dobrać odpowiednie aparaty słuchowe oraz zapewniamy profesjonalne wsparcie w zakresie diagnostyki słuchu i opieki po zakupie.",
      description:
        "Stawiamy na indywidualne podejście, nowoczesne rozwiązania i spokojne przeprowadzenie pacjenta przez cały proces.",
      imageAlt: "Nowoczesny aparat słuchowy",
    },

    intro: {
      title: "Kim jesteśmy",
      paragraph1:
        "AparaticaMed to polska firma rodzinna działająca od wielu lat w branży aparatów słuchowych. Naszym celem jest pomoc osobom z problemami słuchu w znalezieniu rozwiązań dopasowanych do ich indywidualnych potrzeb.",
      paragraph2:
        "Łączymy doświadczenie, nowoczesne technologie oraz indywidualne podejście do pacjenta, zapewniając wsparcie na każdym etapie - od pierwszej konsultacji po dalszą opiekę i serwis aparatów słuchowych.",
      items: [
        {
          title: "Polska firma rodzinna",
          description:
            "AparaticaMed to firma rodzinna działająca od wielu lat na rynku aparatów słuchowych.",
        },
        {
          title: "Doświadczenie i rozwój",
          description:
            "Przez lata zdobywaliśmy doświadczenie, stale rozwijając naszą wiedzę i ofertę nowoczesnych rozwiązań słuchowych.",
        },
        {
          title: "Współpraca z producentami",
          description:
            "Oferujemy aparaty słuchowe renomowanych producentów, dostosowane do różnych potrzeb pacjentów.",
        },
        {
          title: "Opieka długoterminowa",
          description:
            "Zapewniamy wsparcie nie tylko przy doborze aparatu, ale także w jego późniejszym użytkowaniu i regulacji.",
        },
      ],
    },

    approach: {
      title: "Nasze podejście",
      description:
        "Zależy nam, aby cały proces był dla pacjenta przejrzysty, spokojny i dopasowany do jego indywidualnych potrzeb. Dlatego łączymy fachowe doradztwo z uważnym podejściem i wsparciem także po doborze aparatu.",
      items: [
        {
          title: "Spokojna i jasna konsultacja",
          description:
            "Wyjaśniamy kolejne etapy w prosty i zrozumiały sposób, tak aby pacjent czuł się pewnie już od pierwszego kontaktu.",
        },
        {
          title: "Dobór dopasowany do potrzeb",
          description:
            "Uwzględniamy styl życia, oczekiwania oraz codzienne sytuacje, w których aparat słuchowy ma realnie poprawiać komfort słyszenia.",
        },
        {
          title: "Wsparcie przy wdrożeniu",
          description:
            "Pomagamy oswoić się z nowym rozwiązaniem i pokazujemy, jak korzystać z aparatu słuchowego w codziennym życiu.",
        },
        {
          title: "Dalsza opieka i dostosowanie",
          description:
            "W razie potrzeby pomagamy w regulacji ustawień i dopasowaniu aparatu tak, aby jego użytkowanie było jak najbardziej komfortowe.",
        },
      ],
    },

    patientSupport: {
      title: "Co zapewniamy pacjentom",
      description:
        "W AparaticaMed stawiamy nie tylko na dobór odpowiedniego aparatu słuchowego, ale również na długofalowe wsparcie, wygodę i spokojne przejście przez cały proces.",
      items: [
        {
          title: "Specjalistyczne testy słuchu",
          description:
            "Wykonujemy badania słuchu potrzebne do doboru odpowiedniego aparatu słuchowego.",
        },
        {
          title: "Możliwość testowania aparatów",
          description:
            "Przed zakupem pomagamy sprawdzić i przetestować wybrane rozwiązania, aby lepiej dopasować je do potrzeb pacjenta.",
        },
        {
          title: "Serwis i opieka po zakupie",
          description:
            "Zapewniamy wsparcie specjalistyczne, kontrole, regulację parametrów oraz bieżącą pomoc w użytkowaniu aparatów słuchowych.",
        },
        {
          title: "Dobór w profesjonalnym gabinecie",
          description:
            "Pomagamy dobrać aparat do stopnia ubytku słuchu, stylu życia i codziennego komfortu pacjenta.",
        },
        {
          title: "Wygodne formy płatności",
          description:
            "Oferujemy zakupy na raty oraz możliwość płatności kartą, aby ułatwić dostęp do odpowiednich rozwiązań.",
        },
        {
          title: "Odpowiednio przystosowany gabinet",
          description:
            "Gabinet jest przystosowany dla osób z niepełnosprawnością ruchową, co zwiększa komfort wizyty.",
        },
      ],
    },
  },

  fields: [
    defineField({
      name: "hero",
      title: "Sekcja hero",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek główny",
          type: "string",
        }),
        defineField({
          name: "lead",
          title: "Lead",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "description",
          title: "Drugi akapit",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "image",
          title: "Zdjęcie",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "imageAlt",
          title: "Opis zdjęcia",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "intro",
      title: "Kim jesteśmy",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek sekcji",
          type: "string",
        }),
        defineField({
          name: "paragraph1",
          title: "Akapit 1",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "paragraph2",
          title: "Akapit 2",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "items",
          title: "Elementy",
          type: "array",
          of: [
            defineField({
              name: "introItem",
              title: "Element",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Tytuł",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Opis",
                  type: "text",
                  rows: 3,
                }),
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "description",
                },
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "approach",
      title: "Nasze podejście",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek sekcji",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Opis sekcji",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "items",
          title: "Elementy",
          type: "array",
          of: [
            defineField({
              name: "approachItem",
              title: "Element",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Tytuł",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Opis",
                  type: "text",
                  rows: 3,
                }),
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "description",
                },
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "patientSupport",
      title: "Co zapewniamy pacjentom",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek sekcji",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Opis sekcji",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "items",
          title: "Elementy",
          type: "array",
          of: [
            defineField({
              name: "supportItem",
              title: "Element",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Tytuł",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Opis",
                  type: "text",
                  rows: 3,
                }),
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "description",
                },
              },
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "O nas",
      };
    },
  },
});
