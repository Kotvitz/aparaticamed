import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const PHONE_1 = "+48 600 168 269";
const PHONE_1_HREF = "tel:+48600168269";

const PHONE_2 = "+48 507 168 407";
const PHONE_2_HREF = "tel:+48507168407";

const EMAIL = "biuro@aparaticamed.pl";
const EMAIL_HREF = "mailto:biuro@aparaticamed.pl";

const ADDRESS_LINE = "ul. Kostki Napierskiego 6C";
const ADDRESS_CITY = "70-783 Szczecin";
const TAX_ID = "NIP: 8511512018";

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
    <div className="flex gap-3">
      <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-(--surface-muted) text-(--brand-ink)">
        {icon}
      </span>

      <div>
        <div className="text-sm font-bold text-(--text)">{label}</div>
        <div className="mt-1 text-sm leading-7 text-(--text-muted)">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactDetails() {
  return (
    <section
      className="rounded-3xl border border-(--border) bg-white p-6 shadow-sm md:p-8"
      aria-label="Dane kontaktowe"
    >
      <h2 className="text-3xl font-bold text-(--text)">Dane kontaktowe</h2>

      <div
        className="mt-4 h-0.5 w-full"
        style={{ backgroundColor: "var(--brand)" }}
      />

      <address className="mt-8 space-y-6 not-italic">
        <Row icon={<MapPinIcon className="h-5 w-5" />} label="Adres">
          <div className="font-semibold text-(--text)">AparaticaMed</div>
          <div>{ADDRESS_LINE}</div>
          <div>{ADDRESS_CITY}</div>
          <div>{TAX_ID}</div>
        </Row>

        <Row icon={<PhoneIcon className="h-5 w-5" />} label="Telefon">
          <div className="space-y-1">
            <div>
              <Link
                className="nav-link font-semibold text-(--brand-ink)"
                href={PHONE_1_HREF}
              >
                {PHONE_1}
              </Link>
            </div>
            <div>
              <Link
                className="nav-link font-semibold text-(--brand-ink)"
                href={PHONE_2_HREF}
              >
                {PHONE_2}
              </Link>
            </div>
          </div>
        </Row>

        <Row icon={<EnvelopeIcon className="h-5 w-5" />} label="E-mail">
          <Link
            className="nav-link font-semibold break-all text-(--brand-ink)"
            href={EMAIL_HREF}
          >
            {EMAIL}
          </Link>
        </Row>
      </address>
    </section>
  );
}