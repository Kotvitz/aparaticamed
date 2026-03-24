import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t px-4 py-6"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--brand-border)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm md:flex-row">

        <p
          className="text-center md:text-left"
          style={{ color: "var(--text-muted)" }}
        >
          Wszelkie prawa zastrzeżone © {currentYear} AparaticaMed 
        </p>

        <nav
          aria-label="Linki prawne"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/polityka-prywatnosci"
            className="site-link site-focus text-sm"
          >
            Polityka prywatności
          </Link>

          <span
            aria-hidden="true"
            style={{ color: "var(--border)" }}
          >
            |
          </span>

          <Link
            href="/polityka-cookies"
            className="site-link site-focus text-sm"
          >
            Polityka cookies
          </Link>
        </nav>
      </div>
    </footer>
  );
}