import { defineField, defineType } from "sanity";
import { homeVisitsPageDefaults } from "@/lib/homeVisitsPageDefaults";

export const homeVisitsPage = defineType({
  name: "homeVisitsPage",
  title: "Wizyty domowe",
  type: "document",
  initialValue: homeVisitsPageDefaults,

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
      title: "Dlaczego oferujemy wizyty domowe?",
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
      ],
    }),

    defineField({
      name: "whoFor",
      title: "Dla kogo przeznaczone są wizyty domowe?",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek sekcji",
          type: "string",
        }),
        defineField({
          name: "items",
          title: "Grupy pacjentów",
          type: "array",
          of: [
            defineField({
              name: "groupItem",
              title: "Grupa",
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
      name: "scope",
      title: "Co obejmuje wizyta domowa?",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek sekcji",
          type: "string",
        }),
        defineField({
          name: "items",
          title: "Zakres wizyty",
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
  ],

  preview: {
    prepare() {
      return {
        title: "Wizyty domowe",
      };
    },
  },
});