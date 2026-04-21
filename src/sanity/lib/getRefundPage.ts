import { refundPageDefaults } from "@/lib/refundPageDefaults";
import { client } from "./client";
import { refundPageQuery } from "./queries";

export type RefundPageData = {
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonHref: string;
    secondaryButtonText: string;
    secondaryButtonHref: string;
  };
  overview: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      iconKey: string;
    }[];
  };
  steps: {
    id?: string;
    title: string;
    description: string;
    items: {
      number: string;
      title: string;
      description: string;
      iconKey: string;
    }[];
  };
  nfzSection: {
    title: string;
    description: string;
    groups: {
      title: string;
      items: string[];
    }[];
  };
  pfronSection: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      iconKey: string;
    }[];
  };
  specialCases: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      iconKey: string;
    }[];
  };
};

function mergeRefundPageData(
  data: Partial<RefundPageData> | null
): RefundPageData {
  return {
    ...refundPageDefaults,
    ...(data ?? {}),
    hero: {
      ...refundPageDefaults.hero,
      ...(data?.hero ?? {}),
    },
    overview: {
      ...refundPageDefaults.overview,
      ...(data?.overview ?? {}),
    },
    steps: {
      ...refundPageDefaults.steps,
      ...(data?.steps ?? {}),
    },
    nfzSection: {
      ...refundPageDefaults.nfzSection,
      ...(data?.nfzSection ?? {}),
    },
    pfronSection: {
      ...refundPageDefaults.pfronSection,
      ...(data?.pfronSection ?? {}),
    },
    specialCases: {
      ...refundPageDefaults.specialCases,
      ...(data?.specialCases ?? {}),
    },
  } as RefundPageData;
}

export async function getRefundPage(): Promise<RefundPageData> {
  try {
    const data = await client.fetch(refundPageQuery);
    return mergeRefundPageData(data);
  } catch (error) {
    console.error("Błąd pobierania danych strony Refundacja z Sanity:", error);
    return refundPageDefaults as unknown as RefundPageData;
  }
}