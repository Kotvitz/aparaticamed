import { client } from "./client";
import { homePageQuery } from "./queries";
import { homePageDefaults } from "@/lib/homePageDefaults";

export async function getHomePage() {
  try {
    const data = await client.fetch(homePageQuery);

    return {
      ...homePageDefaults,
      ...(data ?? {}),
      hero: {
        ...homePageDefaults.hero,
        ...(data?.hero ?? {}),
      },
      whyChooseUs: {
        ...homePageDefaults.whyChooseUs,
        ...(data?.whyChooseUs ?? {}),
      },
      servicesOverview: {
        ...homePageDefaults.servicesOverview,
        ...(data?.servicesOverview ?? {}),
      },
      howItWorks: {
        ...homePageDefaults.howItWorks,
        ...(data?.howItWorks ?? {}),
      },
      reimbursement: {
        ...homePageDefaults.reimbursement,
        ...(data?.reimbursement ?? {}),
      },
      faq: {
        ...homePageDefaults.faq,
        ...(data?.faq ?? {}),
      },
    };
  } catch (error) {
    console.error("Błąd pobierania strony głównej z Sanity:", error);
    return homePageDefaults;
  }
}