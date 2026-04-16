import { client } from "./client";
import { hearingTestPageQuery } from "./queries";
import { hearingTestPageDefaults } from "@/lib/hearingTestPageDefaults";

export async function getHearingTestPage() {
  try {
    const data = await client.fetch(hearingTestPageQuery);

    return {
    ...hearingTestPageDefaults,
    ...(data ?? {}),
    hero: {
      ...hearingTestPageDefaults.hero,
      ...(data?.hero ?? {}),
    },
    intro: {
      ...hearingTestPageDefaults.intro,
      ...(data?.intro ?? {}),
    },
    steps: {
      ...hearingTestPageDefaults.steps,
      ...(data?.steps ?? {}),
    },
    when: {
      ...hearingTestPageDefaults.when,
      ...(data?.when ?? {}),
    },
  };
  } catch (error) {
    console.error("Błąd pobierania strony głównej z Sanity:", error);
    return hearingTestPageDefaults;
  }
}
