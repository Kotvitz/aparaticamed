import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    clinicName,
    phone1,
    phone2,
    email,
    facebookUrl,
    addressLine,
    addressCity,
    taxId
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    hero{
      eyebrow,
      title,
      description,
      primaryButtonText,
      secondaryButtonText,
      trustPoints,
      imageAlt,
      image{
        asset->{
          url
        }
      }
    },
    whyChooseUs{
      title,
      description,
      items
    },
    servicesOverview{
      title,
      description,
      moreLabel,
      items
    },
    howItWorks{
      title,
      description,
      items
    },
    reimbursement{
      title,
      description,
      buttonText,
      points,
      imageAlt,
      image{
        asset->{
          url
        }
      }
    },
    faq{
      title,
      description,
      items
    }
  }
`;