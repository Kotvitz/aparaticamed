import { client } from "./client";
import { servicesPageQuery } from "./queries";
import { servicesPageDefaults } from "@/lib/servicesPageDefaults";

export async function getServicesPage() {
  try {
    const data = await client.fetch(servicesPageQuery);

    return {
      ...servicesPageDefaults,
      ...(data ?? {}),
      hero: {
        ...servicesPageDefaults.hero,
        ...(data?.hero ?? {}),
      },
      overview: {
        ...servicesPageDefaults.overview,
        ...(data?.overview ?? {}),
      },
      journey: {
        ...servicesPageDefaults.journey,
        ...(data?.journey ?? {}),
      },
      benefits: {
        ...servicesPageDefaults.benefits,
        ...(data?.benefits ?? {}),
      },
    };
  } catch (error) {
    console.error("Błąd pobierania strony głównej z Sanity:", error);
    return servicesPageDefaults;
  }
}
