import { type SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { servicesPage } from "./servicesPage";
import { hearingTestPage } from "./hearingTestPage";
import { hearingAidFittingPage } from "./hearingAidFittingPage";
import { hearingAidServicePage } from "./hearingAidServicePage";
import { homeVisitsPage } from "./homeVisitsPage";
import { hearingAidsPage } from "./hearingAidsPage";
import { hearingAidSubpage } from "./hearingAidSubpage";
import { accessoriesPage } from "./accessoriesPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    homePage,
    aboutPage,
    servicesPage,
    hearingTestPage,
    hearingAidFittingPage,
    hearingAidServicePage,
    homeVisitsPage,
    hearingAidsPage,
    hearingAidSubpage,
    accessoriesPage
  ],
};
