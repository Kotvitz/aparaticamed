import { defineField, defineType } from "sanity";
import { hearingAidServicePageDefaults } from "@/lib/hearingAidServicePageDefaults";

export const hearingAidServicePage = defineType({
  name: "hearingAidServicePage",
  title: "Serwis aparatów słuchowych",
  type: "document",
  initialValue: hearingAidServicePageDefaults,

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
      title: "Dlaczego serwis aparatów słuchowych jest ważny?",
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
      name: "scope",
      title: "Co obejmuje serwis aparatów słuchowych?",
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
          title: "Zakres serwisu",
          type: "array",
          of: [
            defineField({
              name: "scopeItem",
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
      name: "support",
      title: "Dalsze wsparcie dla użytkowników aparatów słuchowych",
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
          name: "listTitle",
          title: "Nagłówek listy",
          type: "string",
        }),
        defineField({
          name: "items",
          title: "Lista wsparcia",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Serwis aparatów słuchowych",
      };
    },
  },
});