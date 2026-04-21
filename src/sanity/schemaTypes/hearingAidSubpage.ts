import { defineField, defineType } from "sanity";

export const hearingAidSubpage = defineType({
  name: "hearingAidSubpage",
  title: "Podstrona aparatów słuchowych",
  type: "document",

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
      name: "slug",
      title: "Slug",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

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
          name: "description",
          title: "Opis",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "secondaryDescription",
          title: "Drugi opis",
          type: "text",
          rows: 4,
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
        defineField({
          name: "primaryCta",
          title: "Główny przycisk",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Etykieta",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
            }),
            defineField({
              name: "variant",
              title: "Wariant",
              type: "string",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Secondary", value: "secondary" },
                ],
              },
            }),
          ],
        }),
        defineField({
          name: "secondaryCta",
          title: "Drugi przycisk",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Etykieta",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
            }),
            defineField({
              name: "variant",
              title: "Wariant",
              type: "string",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Secondary", value: "secondary" },
                ],
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "intro",
      title: "Wprowadzenie",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek sekcji",
          type: "string",
        }),
        defineField({
          name: "paragraphs",
          title: "Akapity",
          type: "array",
          of: [{ type: "text" }],
        }),
        defineField({
          name: "asideTitle",
          title: "Nagłówek wyróżnienia",
          type: "string",
        }),
        defineField({
          name: "asideParagraphs",
          title: "Akapity wyróżnienia",
          type: "array",
          of: [{ type: "text" }],
        }),
      ],
    }),

    defineField({
      name: "cardsSection",
      title: "Sekcja kart",
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
          title: "Karty",
          type: "array",
          of: [
            defineField({
              name: "cardItem",
              title: "Karta",
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
                  type: "string",
                }),
                defineField({
                  name: "iconKey",
                  title: "Klucz ikony",
                  type: "string",
                }),
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "iconKey",
                },
              },
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "checklistSection",
      title: "Sekcja checklisty",
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
          title: "Elementy checklisty",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "asideTitle",
          title: "Nagłówek wyróżnienia",
          type: "string",
        }),
        defineField({
          name: "asideParagraph",
          title: "Opis wyróżnienia",
          type: "text",
          rows: 4,
        }),
      ],
    }),

    defineField({
      name: "relatedSection",
      title: "Sekcja 'Zobacz także'",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Nagłówek sekcji",
          type: "string",
        }),
        defineField({
          name: "items",
          title: "Powiązane linki",
          type: "array",
          of: [
            defineField({
              name: "relatedItem",
              title: "Link",
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
  ],

  preview: {
    select: {
      title: "seoTitle",
      subtitle: "slug",
    },
  },
});
