import HearingTestHero from "@/components/sections/services/hearing-test/HearingTestHero";
import HearingTestIntro from "@/components/sections/services/hearing-test/HearingTestIntro";
import HearingTestSteps from "@/components/sections/services/hearing-test/HearingTestSteps";
import HearingTestWhen from "@/components/sections/services/hearing-test/HearingTestWhen";

export default function HearingTestPage() {
  return (
    <>
      <HearingTestHero />
      <HearingTestIntro />
      <HearingTestSteps />
      <HearingTestWhen />
    </>
  );
}