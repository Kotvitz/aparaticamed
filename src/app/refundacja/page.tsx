import RefundHero from "@/components/sections/refund/RefundHero";
import RefundOverview from "@/components/sections/refund/RefundOverview";
import RefundSteps from "@/components/sections/refund/RefundSteps";
import RefundNfzSection from "@/components/sections/refund/RefundNfzSection";
import RefundPfronSection from "@/components/sections/refund/RefundPfronSection";
import RefundSpecialCases from "@/components/sections/refund/RefundSpecialCases";

export default function RefundPage() {
  return (
    <>
      <RefundHero />
      <RefundOverview />
      <RefundSteps />
      <RefundNfzSection />
      <RefundPfronSection />
      <RefundSpecialCases />
    </>
  );
}