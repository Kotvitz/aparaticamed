import ContactDetails from "./ContactDetails";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

type ContactProps = {
  siteSettings: {
    clinicName: string;
    phone1: string;
    phone2?: string;
    email: string;
    addressLine: string;
    addressCity: string;
    taxId?: string;
  };
};

export default function ContactLayout({ siteSettings }: ContactProps) {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8">
          <ContactDetails
            clinicName={siteSettings.clinicName}
            phone1={siteSettings.phone1}
            phone2={siteSettings.phone2}
            email={siteSettings.email}
            addressLine={siteSettings.addressLine}
            addressCity={siteSettings.addressCity}
            taxId={siteSettings.taxId}
          />
          <ContactMap />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}