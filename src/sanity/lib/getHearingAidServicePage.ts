import { hearingAidServicePageDefaults } from "@/lib/hearingAidServicePageDefaults";
import { client } from "./client";
import { hearingAidServicePageQuery } from "./queries";

export async function getHearingAidServicePage() {
  try {
    const data = await client.fetch(hearingAidServicePageQuery);

    return {
      ...hearingAidServicePageDefaults,
      ...(data ?? {}),
      hero: {
        ...hearingAidServicePageDefaults.hero,
        ...(data?.hero ?? {}),
      },
      intro: {
        ...hearingAidServicePageDefaults.intro,
        ...(data?.intro ?? {}),
      },
      scope: {
        ...hearingAidServicePageDefaults.scope,
        ...(data?.scope ?? {}),
      },
      support: {
        ...hearingAidServicePageDefaults.support,
        ...(data?.support ?? {}),
      },
    };
  } catch (error) {
    console.error(
      "Błąd pobierania danych strony Serwis aparatów słuchowych z Sanity:",
      error,
    );
    return hearingAidServicePageDefaults;
  }
}
