import { hearingAidsPageDefaults } from "@/lib/hearingAidsPageDefaults";
import { client } from "./client";
import { hearingAidsPageQuery } from "./queries";

export async function getHearingAidsPage() {
  try {
    const data = await client.fetch(hearingAidsPageQuery);
    return {
      ...hearingAidsPageDefaults,
      ...(data ?? {}),
      hero: {
        ...hearingAidsPageDefaults.hero,
        ...(data?.hero ?? {}),
      },
      intro: {
        ...hearingAidsPageDefaults.intro,
        ...(data?.intro ?? {}),
      },
      benefits: {
        ...hearingAidsPageDefaults.benefits,
        ...(data?.benefits ?? {}),
      },
      types: {
        ...hearingAidsPageDefaults.types,
        ...(data?.types ?? {}),
      },
    };
  } catch (error) {
    console.error(
      "Błąd pobierania danych strony Aparaty słuchowe z Sanity:",
      error,
    );
    return hearingAidsPageDefaults;
  }
}
