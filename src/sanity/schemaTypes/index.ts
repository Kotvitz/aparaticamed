import { type SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { servicesPage } from "./servicesPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homePage, aboutPage, servicesPage]
};