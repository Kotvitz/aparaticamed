import { client } from "./client";
import { siteSettingsQuery } from "./queries";
import { siteSettingsDefaults } from "../../lib/siteSettingsDefaults";

export async function getSiteSettings() {
  try {
    const data = await client.fetch(siteSettingsQuery);
    return {
      ...siteSettingsDefaults,
      ...data,
    };
  } catch (error) {
    console.error("Błąd pobierania ustawień strony z Sanity:", error);
    return siteSettingsDefaults;
  }
}