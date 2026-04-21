import { client } from "./client";
import { hearingAidSubpageQuery } from "./queries";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

function mergeHearingAidSubpageData<TDefaults extends Record<string, unknown>>(
  defaults: TDefaults,
  data: DeepPartial<TDefaults> | null
): TDefaults {
  return {
    ...defaults,
    ...(data ?? {}),
    hero: {
      ...(defaults.hero as object),
      ...((data?.hero as object | undefined) ?? {}),
    },
    intro: {
      ...(defaults.intro as object),
      ...((data?.intro as object | undefined) ?? {}),
    },
    cardsSection: {
      ...(defaults.cardsSection as object),
      ...((data?.cardsSection as object | undefined) ?? {}),
    },
    checklistSection: {
      ...(defaults.checklistSection as object),
      ...((data?.checklistSection as object | undefined) ?? {}),
    },
    relatedSection: {
      ...(defaults.relatedSection as object),
      ...((data?.relatedSection as object | undefined) ?? {}),
    },
  } as TDefaults;
}

export async function getHearingAidSubpage<
  TDefaults extends {
    hero: object;
    intro: object;
    cardsSection: object;
    checklistSection: object;
    relatedSection: object;
  },
>(slug: string, defaults: TDefaults): Promise<TDefaults> {
  try {
    const data = await client.fetch<DeepPartial<TDefaults> | null>(
      hearingAidSubpageQuery,
      { slug }
    );

    return mergeHearingAidSubpageData(defaults, data);
  } catch (error) {
    console.error(
      `Błąd pobierania danych podstrony aparatów słuchowych (${slug}) z Sanity:`,
      error
    );
    return defaults;
  }
}