import type { Metadata } from "next";
import Link from "next/link";
import {
  CircleDot,
  Ear,
  Settings2,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import {
  HearingAidSubpageHero,
  HearingAidSubpageIntro,
  HearingAidSubpageCards,
  HearingAidSubpageChecklist,
} from "@/components/sections/hearing-aids/subpages";
import { getHearingAidSubpage } from "@/sanity/lib/getHearingAidSubpage";
import { hearingAidSubpageTypesDefaults } from "@/lib/hearingAidSubpageTypesDefaults";

export const metadata: Metadata = {
  title: "Rodzaje aparatów słuchowych | AparaticaMed",
  description:
    "Poznaj najczęściej wybierane rodzaje aparatów słuchowych. Wyjaśniamy, czym różnią się modele zauszne, RIC, wewnątrzuszne i wewnątrzkanałowe oraz pomagamy dobrać odpowiednie rozwiązanie.",
  alternates: {
    canonical: "/aparaty-sluchowe/rodzaje",
  },
};

const CARD_ICONS = {
  Ear,
  CircleDot,
  Settings2,
  Smartphone,
};

export default async function HearingAidsForSeniorsPage() {
  const pageData = await getHearingAidSubpage(
    "rodzaje",
    hearingAidSubpageTypesDefaults
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
        imageSrc="/images/hearing-aids-types-hero.webp"
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
          <div className="max-w-3xl">
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              {pageData.relatedSection.title}
            </h2>

            <p
              className="mt-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              {pageData.relatedSection.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}