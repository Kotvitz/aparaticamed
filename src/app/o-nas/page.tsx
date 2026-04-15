import AboutHero from "@/components/sections/about/AboutHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import AboutApproach from "@/components/sections/about/AboutApproach";
import AboutPatientSupport from "@/components/sections/about/AboutPatientSupport";
import { Metadata } from "next";
import { getAboutPage } from "@/sanity/lib/getAboutPage";

export const metadata: Metadata = {
  title: "O nas | AparaticaMed",
  description:
    "Poznaj AparaticaMed i nasze podejście do opieki nad słuchem. Oferujemy indywidualne wsparcie, dobór aparatów słuchowych, badania słuchu i dalszą opiekę nad pacjentem.",
};

const pageData = await getAboutPage();

export default async function AboutPage() {
  return (
    <>
      <AboutHero data={pageData.hero} />
      <AboutIntro data={pageData.intro} />
      <AboutApproach data={pageData.approach} />
      <AboutPatientSupport data={pageData.patientSupport} />
    </>
  );
}