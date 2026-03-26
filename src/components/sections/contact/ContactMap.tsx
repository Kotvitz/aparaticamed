import Link from "next/link";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=AparaticaMED+Aparaty+Słuchowe,+ul.+Kostki+Napierskiego+6C,+70-783+Szczecin&output=embed";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=AparaticaMED+Aparaty+Słuchowe,+ul.+Kostki+Napierskiego+6C,+70-783+Szczecin";

export default function ContactMap() {
  return (
    <section
      className="rounded-3xl border border-(--border) bg-white p-6 shadow-sm md:p-8"
      aria-label="Lokalizacja"
    >
      <h2 className="text-3xl font-bold text-(--text)">Lokalizacja</h2>

      <div
        className="mt-4 h-0.5 w-full"
        style={{ backgroundColor: "var(--brand)" }}
      />

      <div className="mt-6 overflow-hidden rounded-2xl border border-(--border)">
        <div className="relative aspect-4/3 w-full">
          <iframe
            title="Mapa dojazdu do AparaticaMed"
            src={MAP_EMBED_URL}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-5">
        <Link
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link inline-flex items-center text-sm font-semibold text-(--brand-ink)"
        >
          Otwórz w Google Maps →
        </Link>
      </div>
    </section>
  );
}