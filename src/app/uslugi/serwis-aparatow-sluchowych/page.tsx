import HearingAidServiceHero from "@/components/sections/services/hearing-aid-service/HearingAidServiceHero";
import HearingAidServiceIntro from "@/components/sections/services/hearing-aid-service/HearingAidServiceIntro";
import HearingAidServiceScope from "@/components/sections/services/hearing-aid-service/HearingAidServiceScope";
import HearingAidServiceSupport from "@/components/sections/services/hearing-aid-service/HearingAidServiceSupport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serwis aparatów słuchowych | AparaticaMed",
  description:
    "Serwis aparatów słuchowych, kontrole, regulacje i dalsze wsparcie w AparaticaMed.",
};

export default function HearingAidServicePage() {
  return (
    <>
      <HearingAidServiceHero />
      <HearingAidServiceIntro />
      <HearingAidServiceScope />
      <HearingAidServiceSupport />
    </>
  );
}