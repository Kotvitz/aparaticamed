import type { Metadata } from "next";
import RefundHero from "@/components/sections/refund/RefundHero";
import RefundOverview from "@/components/sections/refund/RefundOverview";
import RefundSteps from "@/components/sections/refund/RefundSteps";
import RefundNfzSection from "@/components/sections/refund/RefundNfzSection";
import RefundPfronSection from "@/components/sections/refund/RefundPfronSection";
import RefundSpecialCases from "@/components/sections/refund/RefundSpecialCases";
import { refundPageDefaults } from "@/lib/refundPageDefaults";
import { getRefundPage } from "@/sanity/lib/getRefundPage";

export const metadata: Metadata = {
  title: refundPageDefaults.seoTitle,
  description: refundPageDefaults.seoDescription,
};

export default async function RefundPage() {
  const pageData = await getRefundPage();

  return (
    <>
      <RefundHero data={pageData.hero} />
      <RefundOverview data={pageData.overview} />
      <RefundSteps data={pageData.steps} />
      <RefundNfzSection data={pageData.nfzSection} />
      <RefundPfronSection data={pageData.pfronSection} />
      <RefundSpecialCases data={pageData.specialCases} />
    </>
  );
}