import Link from "next/link";

export default function HearingAidServiceHero() {
  return (
    <section
      className="overflow-hidden px-4 py-10 md:py-14"
      style={{
        background:
          "linear-gradient(to bottom, var(--brand-light), var(--surface))",
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-2xl">
          <h1
            className="text-4xl font-bold leading-tight md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Serwis aparatów słuchowych
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Aparaty słuchowe wymagają regularnej kontroli i odpowiedniej opieki,
            aby mogły działać skutecznie i zapewniać komfort w codziennym
            użytkowaniu.
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Oferujemy wsparcie związane z serwisem aparatów słuchowych,
            regulacją, bieżącą kontrolą oraz pomocą w rozwiązywaniu problemów,
            które mogą pojawić się podczas użytkowania urządzenia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="site-button-primary site-focus inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm"
            >
              Umów wizytę
            </Link>

            <Link
              href="/uslugi"
              className="site-button-secondary site-focus inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Zobacz wszystkie usługi
            </Link>
          </div>
        </div>

        <div
          className="site-card p-6 md:p-8"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--brand-border)",
          }}
        >
          <h3
            className="text-xl font-semibold md:text-2xl"
            style={{ color: "var(--text)" }}
          >
            Stałe wsparcie ma znaczenie!
          </h3>

          <p
            className="mt-4 text-base leading-7"
            style={{ color: "var(--text-muted)" }}
          >
            Regularne kontrole, szybka reakcja na problemy i właściwa opieka nad
            aparatem słuchowym pomagają utrzymać jego sprawność i wygodę
            użytkowania przez długi czas.
          </p>
        </div>
      </div>
    </section>
  );
}