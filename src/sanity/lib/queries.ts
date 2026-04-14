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