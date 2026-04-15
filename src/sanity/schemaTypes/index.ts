import { type SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homePage, aboutPage],
};