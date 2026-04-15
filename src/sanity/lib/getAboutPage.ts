import { client } from "./client";
import { aboutPageQuery } from "./queries";
import { aboutPageDefaults } from "@/lib/aboutPageDefaults";

export async function getAboutPage() {
  try {
    const data = await client.fetch(aboutPageQuery);

    return {
      ...aboutPageDefaults,
      ...(data ?? {}),
      hero: {
        ...aboutPageDefaults.hero,
        ...(data?.hero ?? {}),
      },
      intro: {
        ...aboutPageDefaults.intro,
        ...(data?.intro ?? {}),
      },
      approach: {
        ...aboutPageDefaults.approach,
        ...(data?.approach ?? {}),
      },
      patientSupport: {
        ...aboutPageDefaults.patientSupport,
        ...(data?.patientSupport ?? {}),
      },
    };
  } catch (error) {
    console.error("Błąd pobierania strony głównej z Sanity:", error);
    return aboutPageDefaults;
  }
}
