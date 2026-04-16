import { hearingAidFittingPageDefaults } from "@/lib/hearingAidFittingPageDefaults";
import { client } from "./client";
import { hearingAidFittingPageQuery } from "./queries";

export async function getHearingAidFittingPage() {
  try {
    const data = await client.fetch(hearingAidFittingPageQuery);
    
    return {
      ...hearingAidFittingPageDefaults,
      ...(data ?? {}),
      hero: {
        ...hearingAidFittingPageDefaults.hero,
        ...(data?.hero ?? {}),
      },
      intro: {
        ...hearingAidFittingPageDefaults.intro,
        ...(data?.intro ?? {}),
      },
      process: {
        ...hearingAidFittingPageDefaults.process,
        ...(data?.process ?? {}),
      },
      factors: {
        ...hearingAidFittingPageDefaults.factors,
        ...(data?.factors ?? {}),
      },
    };
  } catch (error) {
    console.error(
      "Błąd pobierania danych strony Dobór aparatów słuchowych z Sanity:",
      error,
    );
    return hearingAidFittingPageDefaults;
  }
}
