import HearingAidsBenefits from "@/components/sections/hearing-aids/HearingAidsBenefits";
import HearingAidsHero from "@/components/sections/hearing-aids/HearingAidsHero";
import HearingAidsIntro from "@/components/sections/hearing-aids/HearingAidsIntro";
import HearingAidsTypes from "@/components/sections/hearing-aids/HearingAidsTypes";
import { getHearingAidsPage } from "@/sanity/lib/getHearingAidsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aparaty słuchowe | AparaticaMed",
  description:
    "Skontaktuj się z AparaticaMed, aby umówić wizytę lub uzyskać informacje o badaniu słuchu, doborze aparatów słuchowych i serwisie urządzeń.",
};

export default async function HearingAidsPage() {
  const pageData = await getHearingAidsPage();

  return (
    <>
      <HearingAidsHero data={pageData.hero} />
      <HearingAidsIntro data={pageData.intro} />
      <HearingAidsBenefits data={pageData.benefits} />
      <HearingAidsTypes data={pageData.types} />
    </>
  );
}