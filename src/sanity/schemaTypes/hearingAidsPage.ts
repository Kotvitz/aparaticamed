import { defineField, defineType } from "sanity";
import { hearingAidsPageDefaults } from "@/lib/hearingAidsPageDefaults";

export const hearingAidsPage = defineType({
  name: "hearingAidsPage",
  title: "Aparaty słuchowe",
  type: "document",
  initialValue: hearingAidsPageDefaults,

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
      title: "Jak aparaty słuchowe wspierają słuch?",
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
          name: "paragraph3",
          title: "Akapit 3",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "highlightTitle",
          title: "Wyróżniony nagłówek",
          type: "string",
        }),
        defineField({
          name: "highlightDescription",
          title: "Wyróżniony opis",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "highlightDescription2",
          title: "Wyróżniony opis 2",
          type: "text",
          rows: 4,
        }),
      ],
    }),

    defineField({
      name: "benefits",
      title: "Korzyści z używania aparatów słuchowych",
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
          title: "Korzyści",
          type: "array",
          of: [
            defineField({
              name: "benefitItem",
              title: "Korzyść",
              type: "object",
              fields: [
                defineField({ name: "title", title: "Tytuł", type: "string" }),
                defineField({
                  name: "description",
                  title: "Opis",
                  type: "text",
                  rows: 3,
                }),
              ],
              preview: {
                select: { title: "title", subtitle: "description" },
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "types",
      title: "Jakie oferujemy aparaty słuchowe?",
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
          name: "moreLabel",
          title: "Tekst linku",
          type: "string",
        }),
        defineField({
          name: "items",
          title: "Kategorie",
          type: "array",
          of: [
            defineField({
              name: "typeItem",
              title: "Kategoria",
              type: "object",
              fields: [
                defineField({ name: "title", title: "Tytuł", type: "string" }),
                defineField({
                  name: "description",
                  title: "Opis",
                  type: "text",
                  rows: 3,
                }),
                defineField({ name: "href", title: "Link", type: "string" }),
              ],
              preview: {
                select: { title: "title", subtitle: "href" },
              },
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return { title: "Aparaty słuchowe" };
    },
  },
});
