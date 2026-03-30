import AboutHero from "@/components/sections/about/AboutHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import AboutApproach from "@/components/sections/about/AboutApproach";
import AboutPatientSupport from "@/components/sections/about/AboutPatientSupport";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas | AparaticaMed",
  description:
    "Poznaj AparaticaMed i nasze podejście do opieki nad słuchem. Oferujemy indywidualne wsparcie, dobór aparatów słuchowych, badania słuchu i dalszą opiekę nad pacjentem.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutApproach />
      <AboutPatientSupport />
    </>
  );
}