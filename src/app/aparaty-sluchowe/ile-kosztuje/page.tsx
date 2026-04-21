import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  Settings2,
  CircleGauge,
  PersonStanding,
  ArrowRight,
} from "lucide-react";
import {
  HearingAidSubpageHero,
  HearingAidSubpageIntro,
  HearingAidSubpageCards,
  HearingAidSubpageChecklist,
} from "@/components/sections/hearing-aids/subpages";
import { getHearingAidSubpage } from "@/sanity/lib/getHearingAidSubpage";
import { hearingAidSubpagePriceDefaults } from "@/lib/hearingAidSubpagePriceDefaults";

export const metadata: Metadata = {
  title: "Ile kosztuje aparat słuchowy? | AparaticaMed",
  description:
    "Dowiedz się, od czego zależy cena aparatu słuchowego, jakie są dostępne możliwości refundacji oraz jak poznać realny koszt dopasowanego rozwiązania.",
  alternates: {
    canonical: "/aparaty-sluchowe/ile-kosztuje",
  },
};

const CARD_ICONS = {
  Settings2,
  CircleGauge,
  PersonStanding,
  Wrench,
};

export default async function HearingAidPricePage() {
  const pageData = await getHearingAidSubpage(
    "ile-kosztuje",
    hearingAidSubpagePriceDefaults,
  );

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
        imageSrc="/images/hearing-aids-costs-hero.webp"
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

      <HearingAidSubpageChecklist
        title={pageData.checklistSection.title}
        description={pageData.checklistSection.description}
        items={pageData.checklistSection.items}
        asideTitle={pageData.checklistSection.asideTitle}
        asideParagraph={pageData.checklistSection.asideParagraph}
      />

      <section
        className="px-4 py-10 md:py-14"
        style={{ backgroundColor: "var(--surface-muted)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {pageData.relatedSection.items.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--brand-border)",
                }}
              >
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="site-link site-focus mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Przejdź do strony
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
