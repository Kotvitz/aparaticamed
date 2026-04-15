import { defineType, defineField } from "sanity";
import { homePageDefaults } from "@/lib/homePageDefaults";

export const homePage = defineType({
  name: "homePage",
  title: "Strona główna",
  type: "document",

  initialValue: homePageDefaults,

  fields: [
    defineField({
      name: "hero",
      title: "Sekcja hero",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Mały nagłówek",
          type: "string",
        }),

        defineField({
          name: "title",
          title: "Nagłówek główny",
          type: "string",
        }),

        defineField({
          name: "description",
          title: "Opis",
          type: "text",
          rows: 4,
        }),

        defineField({
          name: "primaryButtonText",
          title: "Tekst głównego przycisku",
          type: "string",
        }),

        defineField({
          name: "secondaryButtonText",
          title: "Tekst drugiego przycisku",
          type: "string",
        }),

        defineField({
          name: "trustPoints",
          title: "Punkty zaufania",
          type: "array",
          of: [
            defineField({
              name: "trustPoint",
              title: "Punkt",
              type: "object",
              fields: [
                defineField({
                  name: "text",
                  title: "Treść",
                  type: "string",
                }),
              ],
              preview: {
                select: {
                  title: "text",
                },
              },
            }),
          ],
        }),

        defineField({
          name: "image",
          title: "Zdjęcie sekcji hero",
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
      name: "whyChooseUs",
      title: "Dlaczego warto wybrać AparaticaMed?",
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
          rows: 3,
        }),

        defineField({
          name: "items",
          title: "Elementy",
          type: "array",
          of: [
            defineField({
              name: "featureItem",
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
      name: "servicesOverview",
      title: "Nasze usługi",
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
          rows: 3,
        }),

        defineField({
          name: "moreLabel",
          title: "Tekst linku",
          type: "string",
        }),

        defineField({
          name: "items",
          title: "Usługi",
          type: "array",
          of: [
            defineField({
              name: "serviceItem",
              title: "Usługa",
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

                defineField({
                  name: "href",
                  title: "Link",
                  type: "string",
                }),
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "href",
                },
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "howItWorks",
      title: "Jak wygląda współpraca?",
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
          rows: 3,
        }),

        defineField({
          name: "items",
          title: "Kroki",
          type: "array",
          of: [
            defineField({
              name: "stepItem",
              title: "Krok",
              type: "object",
              fields: [
                defineField({
                  name: "number",
                  title: "Numer",
                  type: "string",
                }),

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
                  subtitle: "number",
                },
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "reimbursement",
      title: "Refundacja aparatów słuchowych",
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
          rows: 3,
        }),

        defineField({
          name: "buttonText",
          title: "Tekst przycisku",
          type: "string",
        }),

        defineField({
          name: "points",
          title: "Punkty",
          type: "array",
          of: [
            defineField({
              name: "reimbursementPoint",
              title: "Punkt",
              type: "object",
              fields: [
                defineField({
                  name: "text",
                  title: "Treść",
                  type: "string",
                }),
              ],
              preview: {
                select: {
                  title: "text",
                },
              },
            }),
          ],
        }),

        defineField({
          name: "image",
          title: "Zdjęcie sekcji refundacji",
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
      name: "faq",
      title: "FAQ",
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
          rows: 3,
        }),

        defineField({
          name: "items",
          title: "Pytania i odpowiedzi",
          type: "array",
          of: [
            defineField({
              name: "faqItem",
              title: "Pytanie",
              type: "object",
              fields: [
                defineField({
                  name: "question",
                  title: "Pytanie",
                  type: "string",
                }),

                defineField({
                  name: "answer",
                  title: "Odpowiedź",
                  type: "text",
                  rows: 4,
                }),
              ],
              preview: {
                select: {
                  title: "question",
                  subtitle: "answer",
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
        title: "Strona główna",
      };
    },
  },
});
