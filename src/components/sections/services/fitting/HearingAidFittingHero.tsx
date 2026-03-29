import Link from "next/link";

export default function HearingAidFittingHero() {
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
            Dobór aparatów słuchowych
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Odpowiednio dobrany aparat słuchowy może znacząco poprawić komfort
            codziennego funkcjonowania oraz ułatwić komunikację z innymi
            osobami.
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Dobór urządzenia powinien uwzględniać nie tylko stopień ubytku
            słuchu, ale także styl życia, indywidualne potrzeby oraz oczekiwania
            użytkownika. Dzięki temu aparat będzie wygodny i skuteczny w
            codziennym użytkowaniu.
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
            Indywidualne dopasowanie ma znaczenie!
          </h3>

          <p
            className="mt-4 text-base leading-7"
            style={{ color: "var(--text-muted)" }}
          >
            Właściwie dobrany aparat słuchowy powinien być dostosowany do rodzaju
            niedosłuchu oraz codziennych aktywności użytkownika, aby zapewnić
            maksymalny komfort i skuteczność działania.
          </p>
        </div>

      </div>
    </section>
  );
}