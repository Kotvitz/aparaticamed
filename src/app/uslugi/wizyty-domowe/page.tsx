import HomeVisitsHero from "@/components/sections/services/home-visits/HomeVisitsHero";
import HomeVisitsIntro from "@/components/sections/services/home-visits/HomeVisitsIntro";
import HomeVisitsScope from "@/components/sections/services/home-visits/HomeVisitsScope";
import HomeVisitsWhoFor from "@/components/sections/services/home-visits/HomeVisitsWhoFor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wizyty domowe | AparaticaMed",
  description:
    "Wizyty domowe z badaniem słuchu i konsultacją w Szczecinie i okolicach.",
};

export default function HomeVisitsPage() {
  return (
    <>
      <HomeVisitsHero />
      <HomeVisitsIntro />
      <HomeVisitsWhoFor />
      <HomeVisitsScope />
    </>
  );
}