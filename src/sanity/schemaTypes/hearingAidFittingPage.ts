import { defineField, defineType } from "sanity";
import { hearingAidFittingPageDefaults } from "@/lib/hearingAidFittingPageDefaults";

export const hearingAidFittingPage = defineType({
  name: "hearingAidFittingPage",
  title: "Dobór aparatów słuchowych",
  type: "document",
  initialValue: hearingAidFittingPageDefaults,

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
          name: "highlightTitle",
          title: "Wyróżniony nagłówek",
          type: "string",
        }),
        defineField({
          name: "highlightDescription",
          title: "Wyróżniony opis",
          type: "text",
          rows: 3,
        }),
      ],
    }),

    defineField({
      name: "intro",
      title: "Dlaczego właściwy dobór aparatu słuchowego jest tak ważny",
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
      name: "process",
      title: "Jak wygląda dobór aparatu słuchowego",
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
              name: "processItem",
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
      name: "factors",
      title: "Co ma znaczenie przy doborze aparatu słuchowego",
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
          title: "Czynniki",
          type: "array",
          of: [
            defineField({
              name: "factorItem",
              title: "Czynnik",
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
        title: "Dobór aparatów słuchowych",
      };
    },
  },
});