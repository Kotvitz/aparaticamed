import HearingAidFittingFactors from "@/components/sections/services/fitting/HearingAidFittingFactors";
import HearingAidFittingHero from "@/components/sections/services/fitting/HearingAidFittingHero";
import HearingAidFittingIntro from "@/components/sections/services/fitting/HearingAidFittingIntro";
import HearingAidFittingProcess from "@/components/sections/services/fitting/HearingAidFittingProcess";

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