import { defineField, defineType } from "sanity";
import { refundPageDefaults } from "@/lib/refundPageDefaults";

export const refundPage = defineType({
  name: "refundPage",
  title: "Refundacja",
  type: "document",
  initialValue: refundPageDefaults,

  fields: [
    defineField({
      name: "seoTitle",
      title: "Tytuł SEO",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "Opis SEO",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "hero",
      title: "Sekcja hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Mały nagłówek", type: "string" }),
        defineField({ name: "title", title: "Nagłówek główny", type: "string" }),
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
          name: "primaryButtonHref",
          title: "Link głównego przycisku",
          type: "string",
        }),
        defineField({
          name: "secondaryButtonText",
          title: "Tekst drugiego przycisku",
          type: "string",
        }),
        defineField({
          name: "secondaryButtonHref",
          title: "Link drugiego przycisku",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "overview",
      title: "Przegląd refundacji",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Nagłówek sekcji", type: "string" }),
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
              name: "overviewItem",
              title: "Element",
              type: "object",
              fields: [
                defineField({ name: "title", title: "Tytuł", type: "string" }),
                defineField({
                  name: "description",
                  title: "Opis",
                  type: "text",
                  rows: 3,
                }),
                defineField({
                  name: "iconKey",
                  title: "Klucz ikony",
                  type: "string",
                }),
              ],
              preview: {
                select: { title: "title", subtitle: "iconKey" },
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "steps",
      title: "Kroki refundacji",
      type: "object",
      fields: [
        defineField({ name: "id", title: "ID sekcji", type: "string" }),
        defineField({ name: "title", title: "Nagłówek sekcji", type: "string" }),
        defineField({
          name: "description",
          title: "Opis sekcji",
          type: "text",
          rows: 4,
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
                defineField({ name: "number", title: "Numer", type: "string" }),
                defineField({ name: "title", title: "Tytuł", type: "string" }),
                defineField({
                  name: "description",
                  title: "Opis",
                  type: "text",
                  rows: 3,
                }),
                defineField({
                  name: "iconKey",
                  title: "Klucz ikony",
                  type: "string",
                }),
              ],
              preview: {
                select: { title: "title", subtitle: "number" },
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "nfzSection",
      title: "Refundacja NFZ",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Nagłówek sekcji", type: "string" }),
        defineField({
          name: "description",
          title: "Opis sekcji",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "groups",
          title: "Grupy",
          type: "array",
          of: [
            defineField({
              name: "nfzGroup",
              title: "Grupa",
              type: "object",
              fields: [
                defineField({ name: "title", title: "Tytuł grupy", type: "string" }),
                defineField({
                  name: "items",
                  title: "Punkty",
                  type: "array",
                  of: [{ type: "string" }],
                }),
              ],
              preview: {
                select: { title: "title" },
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "pfronSection",
      title: "Dofinansowanie z PFRON",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Nagłówek sekcji", type: "string" }),
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
              name: "pfronItem",
              title: "Element",
              type: "object",
              fields: [
                defineField({ name: "title", title: "Tytuł", type: "string" }),
                defineField({
                  name: "description",
                  title: "Opis",
                  type: "text",
                  rows: 3,
                }),
                defineField({
                  name: "iconKey",
                  title: "Klucz ikony",
                  type: "string",
                }),
              ],
              preview: {
                select: { title: "title", subtitle: "iconKey" },
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "specialCases",
      title: "Szczególne przypadki",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Nagłówek sekcji", type: "string" }),
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
              name: "specialCaseItem",
              title: "Element",
              type: "object",
              fields: [
                defineField({ name: "title", title: "Tytuł", type: "string" }),
                defineField({
                  name: "description",
                  title: "Opis",
                  type: "text",
                  rows: 3,
                }),
                defineField({
                  name: "iconKey",
                  title: "Klucz ikony",
                  type: "string",
                }),
              ],
              preview: {
                select: { title: "title", subtitle: "iconKey" },
              },
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return { title: "Refundacja" };
    },
  },
});