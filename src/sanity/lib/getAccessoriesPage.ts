import { accessoriesPageDefaults } from "@/lib/accessoriesPageDefaults";
import { client } from "./client";
import { accessoriesPageQuery } from "./queries";

type SanityImageField = {
  asset?: {
    url?: string;
  };
};

export type AccessoriesPageData = {
  seoTitle: string;
  seoDescription: string;
  hero: {
    title: string;
    description: string;
    secondaryDescription: string;
    imageAlt: string;
    image?: SanityImageField;
    primaryCta: {
      label: string;
      href: string;
      variant?: "primary" | "secondary";
    };
    secondaryCta: {
      label: string;
      href: string;
      variant?: "primary" | "secondary";
    };
  };
  intro: {
    title: string;
    paragraphs: string[];
    asideTitle: string;
    asideParagraphs: string[];
  };
  cardsSection: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      iconKey: string;
    }[];
  };
  batterySection: {
    title: string;
    description: string;
    items: string[];
    imageAlt: string;
    image?: SanityImageField;
  };
  protectionSection: {
    title: string;
    description: string;
    items: string[];
    imageAlt: string;
    reverse?: boolean;
    image?: SanityImageField;
  };
};

function mergeAccessoriesPageData(
  data: Partial<AccessoriesPageData> | null
): AccessoriesPageData {
  return {
    ...accessoriesPageDefaults,
    ...(data ?? {}),
    hero: {
      ...accessoriesPageDefaults.hero,
      ...(data?.hero ?? {}),
    },
    intro: {
      ...accessoriesPageDefaults.intro,
      ...(data?.intro ?? {}),
    },
    cardsSection: {
      ...accessoriesPageDefaults.cardsSection,
      ...(data?.cardsSection ?? {}),
    },
    batterySection: {
      ...accessoriesPageDefaults.batterySection,
      ...(data?.batterySection ?? {}),
    },
    protectionSection: {
      ...accessoriesPageDefaults.protectionSection,
      ...(data?.protectionSection ?? {}),
    },
  } as AccessoriesPageData;
}

export async function getAccessoriesPage(): Promise<AccessoriesPageData> {
  try {
    const data = await client.fetch(accessoriesPageQuery);
    return mergeAccessoriesPageData(data);
  } catch (error) {
    console.error("Błąd pobierania danych strony Akcesoria z Sanity:", error);
    return accessoriesPageDefaults as unknown as AccessoriesPageData;
  }
}