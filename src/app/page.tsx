import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesOverview from "@/components/sections/ServicesOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import Reimbursement from "@/components/sections/Reimbursement";
import Faq from "@/components/sections/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AparaticaMed | Aparaty słuchowe, badanie słuchu i opieka specjalistyczna",
  description:
    "AparaticaMed oferuje badanie słuchu, dobór aparatów słuchowych, serwis oraz wizyty domowe. Profesjonalne wsparcie i indywidualne podejście do pacjenta.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <HowItWorks />
      <Reimbursement />
      <Faq />
    </>
  );
}