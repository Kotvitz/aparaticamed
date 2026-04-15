import { defineField, defineType } from "sanity";
import { servicesPageDefaults } from "@/lib/servicesPageDefaults";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Usługi",
  type: "document",
  initialValue: servicesPageDefaults,

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
      name: "overview",
      title: "Zakres usług",
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
          rows: 3,
        }),
        defineField({
          name: "paragraph2",
          title: "Akapit 2",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "paragraph3",
          title: "Akapit 3",
          type: "text",
          rows: 3,
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
          rows: 3,
        }),
        defineField({
          name: "highlightParagraph2",
          title: "Wyróżniony akapit 2",
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
      name: "journey",
      title: "Jak wygląda pomoc krok po kroku",
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
              name: "journeyItem",
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
      name: "benefits",
      title: "Dlaczego warto skorzystać z naszych usług",
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
              name: "benefitItem",
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
        title: "Usługi",
      };
    },
  },
});