import ContactHero from "@/components/sections/contact/ContactHero";
import ContactLayout from "@/components/sections/contact/ContactLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | AparaticaMed",
  description:
    "Skontaktuj się z AparaticaMed, aby umówić wizytę lub uzyskać informacje o badaniu słuchu, doborze aparatów słuchowych i serwisie urządzeń.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactLayout />
    </>
  );
}