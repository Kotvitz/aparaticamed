import ServicesBenefits from "@/components/sections/services/ServicesBenefits";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesJourney from "@/components/sections/services/ServicesJourney";
import ServicesOverview from "@/components/sections/services/ServicesOverview";

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