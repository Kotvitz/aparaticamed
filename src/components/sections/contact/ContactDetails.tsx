import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

type ContactProps = {
  clinicName: string;
  phone1: string;
  phone2?: string;
  email: string;
  addressLine: string;
  addressCity: string;
  taxId?: string;
};

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-(--border) bg-white p-5 shadow-sm">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--surface-muted) text-(--brand-ink)">
        {icon}
      </span>

      <div>
        <h3 className="text-sm font-semibold tracking-wide text-(--text)">
          {label}
        </h3>
        <div className="mt-2 text-sm leading-relaxed text-(--text-muted)">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactDetails({
  clinicName,
  phone1,
  phone2,
  email,
  addressLine,
  addressCity,
  taxId,
}: ContactProps) {
  const phone1Href = `tel:${phone1.replace(/\s+/g, "")}`;
  const phone2Href = phone2 ? `tel:${phone2.replace(/\s+/g, "")}` : undefined;
  const emailHref = `mailto:${email}`;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-(--text)">Dane kontaktowe</h2>
      </div>

      <div className="grid gap-4">
        <Row icon={<MapPinIcon className="h-5 w-5" />} label="Adres">
          <div className="font-semibold text-(--text)">{clinicName}</div>
          <div>{addressLine}</div>
          <div>{addressCity}</div>
          {taxId && <div>NIP: {taxId}</div>}
        </Row>

        <Row icon={<PhoneIcon className="h-5 w-5" />} label="Telefon">
          <div className="space-y-1">
            <div>
              <Link
                href={phone1Href}
                className="nav-link font-medium text-(--brand-ink)"
              >
                {phone1}
              </Link>
            </div>

            {phone2 && (
              <div>
                <Link
                  href={phone2Href!}
                  className="nav-link font-medium text-(--brand-ink)"
                >
                  {phone2}
                </Link>
              </div>
            )}
          </div>
        </Row>

        <Row icon={<EnvelopeIcon className="h-5 w-5" />} label="E-mail">
          <Link
            href={emailHref}
            className="nav-link font-medium text-(--brand-ink)"
          >
            {email}
          </Link>
        </Row>
      </div>
    </div>
  );
}