import { siteSettingsDefaults } from "@/lib/siteSettingsDefaults";
import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Ustawienia strony",
  type: "document",
  initialValue: siteSettingsDefaults,
  fields: [
    defineField({
      name: "clinicName",
      title: "Nazwa gabinetu",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone1",
      title: "Telefon główny",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone2",
      title: "Telefon dodatkowy",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Adres e-mail",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "facebookUrl",
      title: "Link do Facebooka",
      type: "url",
    }),
    defineField({
      name: "addressLine",
      title: "Ulica i numer",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "addressCity",
      title: "Kod pocztowy i miasto",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "taxId",
      title: "NIP",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "clinicName",
      subtitle: "addressCity",
    },
  },
});