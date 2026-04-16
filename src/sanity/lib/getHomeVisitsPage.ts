import { homeVisitsPageDefaults } from "@/lib/homeVisitsPageDefaults";
import { client } from "./client";
import { homeVisitsPageQuery } from "./queries";

export async function getHomeVisitsPage() {
  try {
    const data = await client.fetch(homeVisitsPageQuery);

    return {
      ...homeVisitsPageDefaults,
      ...(data ?? {}),
      hero: {
        ...homeVisitsPageDefaults.hero,
        ...(data?.hero ?? {}),
      },
      intro: {
        ...homeVisitsPageDefaults.intro,
        ...(data?.intro ?? {}),
      },
      whoFor: {
        ...homeVisitsPageDefaults.whoFor,
        ...(data?.whoFor ?? {}),
      },
      scope: {
        ...homeVisitsPageDefaults.scope,
        ...(data?.scope ?? {}),
      },
    };
  } catch (error) {
    console.error(
      "Błąd pobierania danych strony Wizyty domowe z Sanity:",
      error,
    );
    return homeVisitsPageDefaults;
  }
}
