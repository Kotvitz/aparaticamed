import Link from "next/link";
import { ArrowRight, CircleHelp } from "lucide-react";

export default function RefundHero() {
  return (
    <section
      className="overflow-hidden px-4 py-10 md:py-14"
      style={{
        background:
          "linear-gradient(to bottom, var(--brand-light), var(--surface))",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p
            className="mb-4 inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold"
            style={{
              color: "var(--brand-ink)",
              backgroundColor: "var(--surface)",
              borderColor: "var(--brand-border)",
            }}
          >
            Refundacja • NFZ • PFRON
          </p>

          <h1
            className="text-4xl font-bold leading-tight md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Refundacja aparatów słuchowych
          </h1>

          <p
            className="mt-5 max-w-2xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Wyjaśniamy zasady refundacji NFZ i dofinansowania z PFRON, pomagamy
            zrozumieć wymagane formalności i przejść przez cały proces krok po
            kroku.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="site-button-primary site-focus inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold shadow-sm"
            >
              Skontaktuj się z nami
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#jak-uzyskac-refundacje"
              className="site-button-secondary site-focus inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold"
            >
              <CircleHelp className="h-4 w-4" />
              Jak uzyskać refundację?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}