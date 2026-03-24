import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { SiFacebook } from "react-icons/si";

const PHONE = "+48 600 168 269";
const PHONE_HREF = "tel:+48600168269";

const EMAIL = "biuro@aparaticamed.pl";
const EMAIL_HREF = "mailto:biuro@aparaticamed.pl";

const FACEBOOK_HREF = "https://www.facebook.com/aparatica/";

const ADDRESS_LINES = [
  "AparaticaMed",
  "ul. Kostki Napierskiego 6C",
  "70-783 Szczecin",
  "NIP: 8511512018",
];

function Row({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-(--surface-muted) text-(--brand-ink)">
        {icon}
      </span>
      <div className="text-sm text-(--text-muted)">{children}</div>
    </div>
  );
}

export default function ContactStrip() {
  return (
    <section
      aria-label="Kontakt"
      className="border-t border-(--brand-border) bg-(--surface-muted) px-4 py-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-(--border) bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-(--text)">Kontakt</h2>

          <div className="mt-8 grid gap-8 md:grid-cols-[1.3fr_1fr] md:gap-12">
            <div>
              <div className="flex gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-(--surface-muted) text-(--brand-ink)">
                  <MapPinIcon className="h-5 w-5" />
                </span>

                <div className="text-sm leading-relaxed text-(--text-muted)">
                  <div className="font-semibold text-(--text)">
                    {ADDRESS_LINES[0]}
                  </div>
                  <div>{ADDRESS_LINES[1]}</div>
                  <div>{ADDRESS_LINES[2]}</div>
                  <div>{ADDRESS_LINES[3]}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Row icon={<PhoneIcon className="h-5 w-5" />}>
                <Link
                  href={PHONE_HREF}
                  className="nav-link font-medium text-(--brand-ink)"
                >
                  {PHONE}
                </Link>
              </Row>

              <Row icon={<EnvelopeIcon className="h-5 w-5" />}>
                <Link
                  href={EMAIL_HREF}
                  className="nav-link font-medium text-(--brand-ink)"
                >
                  {EMAIL}
                </Link>
              </Row>

              <Row icon={<SiFacebook className="h-5 w-5" />}>
                <Link
                  href={FACEBOOK_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link font-medium text-(--brand-ink)"
                >
                  AparaticaMed
                </Link>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}