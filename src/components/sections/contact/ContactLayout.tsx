import ContactDetails from "./ContactDetails";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

export default function ContactLayout() {
  return (
    <section
      className="px-4 py-10 md:py-14"
      style={{ backgroundColor: "var(--surface-muted)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-6">
          <ContactDetails />
          <ContactMap />
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}