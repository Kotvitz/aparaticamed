import HearingAidsBenefits from "@/components/sections/hearing-aids/HearingAidsBenefits";
import HearingAidsHero from "@/components/sections/hearing-aids/HearingAidsHero";
import HearingAidsIntro from "@/components/sections/hearing-aids/HearingAidsIntro";
import HearingAidsTypes from "@/components/sections/hearing-aids/HearingAidsTypes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aparaty słuchowe | AparaticaMed",
  description:
    "Skontaktuj się z AparaticaMed, aby umówić wizytę lub uzyskać informacje o badaniu słuchu, doborze aparatów słuchowych i serwisie urządzeń.",
};

export default function ContactPage() {
  return (
    <>
      <HearingAidsHero />
      <HearingAidsIntro />
      <HearingAidsTypes />
      <HearingAidsBenefits />
    </>
  );
}