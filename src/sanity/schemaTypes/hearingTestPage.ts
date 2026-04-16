import { defineField, defineType } from "sanity";
import { hearingTestPageDefaults } from "@/lib/hearingTestPageDefaults";

export const hearingTestPage = defineType({
  name: "hearingTestPage",
  title: "Badanie słuchu",
  type: "document",
  initialValue: hearingTestPageDefaults,

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
      title: "Dlaczego warto wykonać badanie słuchu",
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
          name: "highlightTitle",
          title: "Wyróżniony nagłówek",
          type: "string",
        }),
        defineField({
          name: "highlightParagraph1",
          title: "Wyróżniony akapit 1",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "highlightParagraph2",
          title: "Wyróżniony akapit 2",
          type: "text",
          rows: 4,
        }),
      ],
    }),

    defineField({
      name: "steps",
      title: "Jak przebiega badanie słuchu",
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
      name: "when",
      title: "Kiedy warto wykonać badanie słuchu",
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
          title: "Sygnały",
          type: "array",
          of: [
            defineField({
              name: "signItem",
              title: "Sygnał",
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
        title: "Badanie słuchu",
      };
    },
  },
});