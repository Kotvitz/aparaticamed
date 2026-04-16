import HomeVisitsHero from "@/components/sections/services/home-visits/HomeVisitsHero";
import HomeVisitsIntro from "@/components/sections/services/home-visits/HomeVisitsIntro";
import HomeVisitsScope from "@/components/sections/services/home-visits/HomeVisitsScope";
import HomeVisitsWhoFor from "@/components/sections/services/home-visits/HomeVisitsWhoFor";
import { getHomeVisitsPage } from "@/sanity/lib/getHomeVisitsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wizyty domowe | AparaticaMed",
  description:
    "Wizyty domowe z badaniem słuchu i konsultacją w Szczecinie i okolicach.",
};

export default async function HomeVisitsPage() {
  const pageData = await getHomeVisitsPage();

  return (
    <>
      <HomeVisitsHero data={pageData.hero} />
      <HomeVisitsIntro data={pageData.intro} />
      <HomeVisitsWhoFor data={pageData.whoFor} />
      <HomeVisitsScope data={pageData.scope} />
    </>
  );
}