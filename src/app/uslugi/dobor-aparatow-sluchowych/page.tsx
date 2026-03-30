import HearingAidFittingFactors from "@/components/sections/services/fitting/HearingAidFittingFactors";
import HearingAidFittingHero from "@/components/sections/services/fitting/HearingAidFittingHero";
import HearingAidFittingIntro from "@/components/sections/services/fitting/HearingAidFittingIntro";
import HearingAidFittingProcess from "@/components/sections/services/fitting/HearingAidFittingProcess";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dobór aparatów słuchowych | AparaticaMed",
  description:
    "Profesjonalny dobór aparatów słuchowych dopasowanych do potrzeb pacjenta. Konsultacja, dopasowanie i konfiguracja urządzeń w AparaticaMed.",
};
export default function HearingAidFittingPage() {
  return (
    <>
      <HearingAidFittingHero />
      <HearingAidFittingIntro />
      <HearingAidFittingFactors />
      <HearingAidFittingProcess />
    </>
  );
}