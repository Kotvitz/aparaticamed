import HearingTestHero from "@/components/sections/services/hearing-test/HearingTestHero";
import HearingTestIntro from "@/components/sections/services/hearing-test/HearingTestIntro";
import HearingTestSteps from "@/components/sections/services/hearing-test/HearingTestSteps";
import HearingTestWhen from "@/components/sections/services/hearing-test/HearingTestWhen";
import { getHearingTestPage } from "@/sanity/lib/getHearingTestPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Badanie słuchu | AparaticaMed",
  description:
    "Profesjonalne badanie słuchu w AparaticaMed. Diagnostyka słuchu, konsultacje oraz ocena stanu słuchu dopasowana do indywidualnych potrzeb.",
};

export default async function HearingTestPage() {
  const pageData = await getHearingTestPage();
  return (
    <>
      <HearingTestHero data={pageData.hero} />
      <HearingTestIntro data={pageData.intro} />
      <HearingTestSteps data={pageData.steps} />
      <HearingTestWhen data={pageData.when} />
    </>
  );
}