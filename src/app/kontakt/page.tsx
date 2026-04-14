import ContactHero from "@/components/sections/contact/ContactHero";
import ContactLayout from "@/components/sections/contact/ContactLayout";
import { getSiteSettings } from "@/sanity/lib/getSiteSettings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | AparaticaMed",
  description:
    "Skontaktuj się z AparaticaMed, aby umówić wizytę lub uzyskać informacje o badaniu słuchu, doborze aparatów słuchowych i serwisie urządzeń.",
};

export default async function ContactPage() {
  const siteSettings = await getSiteSettings();

  return (
    <>
      <ContactHero />
      <ContactLayout siteSettings={siteSettings} />
    </>
  );
}