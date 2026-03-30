import ServicesBenefits from "@/components/sections/services/ServicesBenefits";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesJourney from "@/components/sections/services/ServicesJourney";
import ServicesOverview from "@/components/sections/services/ServicesOverview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi | AparaticaMed",
  description:
    "Sprawdź usługi AparaticaMed: badanie słuchu, dobór aparatów słuchowych, serwis aparatów słuchowych oraz wizyty domowe.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServicesJourney />
      <ServicesBenefits/>
    </>
  );
}