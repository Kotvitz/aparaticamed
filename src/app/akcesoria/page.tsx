import type { Metadata } from "next";
import { Battery, Headphones, Settings2 } from "lucide-react";
import {
  HearingAidSubpageHero,
  HearingAidSubpageIntro,
  HearingAidSubpageCards,
} from "@/components/sections/hearing-aids/subpages";
import { HearingAidAccessorySection } from "@/components/sections/accessories";
import { accessoriesPageDefaults } from "@/lib/accessoriesPageDefaults";
import { getAccessoriesPage } from "@/sanity/lib/getAccessoriesPage";

export const metadata: Metadata = {
  title: accessoriesPageDefaults.seoTitle,
  description: accessoriesPageDefaults.seoDescription,
  alternates: {
    canonical: "/akcesoria",
  },
};

const CARD_ICONS = {
  Battery,
  Headphones,
  Settings2,
};

export default async function AccessoriesPage() {
  const pageData = await getAccessoriesPage();

  const cardItems = pageData.cardsSection.items.map((item) => ({
    title: item.title,
    description: item.description,
    Icon: CARD_ICONS[item.iconKey as keyof typeof CARD_ICONS] ?? Settings2,
  }));

  return (
    <>
      <HearingAidSubpageHero
        title={pageData.hero.title}
        description={pageData.hero.description}
        secondaryDescription={pageData.hero.secondaryDescription}
        imageSrc={
          pageData.hero.image?.asset?.url ?? "/images/hearing-aid-accessories-hero.webp"
        }
        imageAlt={pageData.hero.imageAlt}
        primaryCta={pageData.hero.primaryCta}
        secondaryCta={pageData.hero.secondaryCta}
      />

      <HearingAidSubpageIntro
        title={pageData.intro.title}
        paragraphs={pageData.intro.paragraphs}
        asideTitle={pageData.intro.asideTitle}
        asideParagraphs={pageData.intro.asideParagraphs}
      />

      <HearingAidSubpageCards
        title={pageData.cardsSection.title}
        description={pageData.cardsSection.description}
        items={cardItems}
      />

      <HearingAidAccessorySection
        title={pageData.batterySection.title}
        description={pageData.batterySection.description}
        items={pageData.batterySection.items}
        imageSrc={
          pageData.batterySection.image?.asset?.url ?? "/images/hearing-aid-batteries.webp"
        }
        imageAlt={pageData.batterySection.imageAlt}
      />

      <HearingAidAccessorySection
        reverse={pageData.protectionSection.reverse}
        title={pageData.protectionSection.title}
        description={pageData.protectionSection.description}
        items={pageData.protectionSection.items}
        imageSrc={
          pageData.protectionSection.image?.asset?.url ?? "/images/hearing-protection.webp"
        }
        imageAlt={pageData.protectionSection.imageAlt}
      />
    </>
  );
}