export default function ContactForm() {
  return (
    <section
      className="rounded-3xl border border-(--border) bg-white p-6 shadow-sm md:p-8"
      aria-label="Formularz kontaktowy"
    >
      <h2 className="text-3xl font-bold text-(--text)">Formularz kontaktowy</h2>

      <div
        className="mt-4 h-0.5 w-full"
        style={{ backgroundColor: "var(--brand)" }}
      />

      <form className="mt-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-semibold text-(--text)"
            >
              Imię i nazwisko <span className="text-(--accent)">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="site-focus h-12 w-full rounded-xl border border-(--border) bg-white px-4 text-sm text-(--text) outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-(--text)"
            >
              E-mail <span className="text-(--accent)">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="site-focus h-12 w-full rounded-xl border border-(--border) bg-white px-4 text-sm text-(--text) outline-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-(--text)"
          >
            Telefon (opcjonalnie)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="site-focus h-12 w-full rounded-xl border border-(--border) bg-white px-4 text-sm text-(--text) outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-(--text)"
          >
            Wiadomość <span className="text-(--accent)">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={7}
            className="site-focus w-full rounded-xl border border-(--border) bg-white px-4 py-3 text-sm text-(--text) outline-none"
          />
        </div>

        <p className="text-sm text-(--text-muted)">(*) - Pozycje obowiązkowe</p>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 rounded border border-(--border)"
            style={{ accentColor: "var(--brand)" }}
          />
          <span className="text-sm leading-7 text-(--text-muted)">
            Zapoznałem się z{" "}
            <a href="/polityka-prywatnosci" className="nav-link font-bold">
              Polityką prywatności
            </a>{" "}
            serwisu <b>aparaticamed.pl</b> oraz wyrażam zgodę na przetwarzanie przez <b>APARATICAMED JACEK TERESIŃSKI,
            ul. Aleksandra Kostki Napierskiego 6C, 70-783 Szczecin,</b> udostępnionych przeze mnie danych osobowych
            na zasadach opisanych w Polityce prywatności dostępnej w Serwisie. Oświadczam, że są mi znane cele przetwarzania
            danych oraz moje uprawnienia. Niniejsza zgoda może być wycofana w dowolnym czasie poprzez kontakt z Administratorem
            pod adresem <a href="mailto:biuro@aparaticamed.pl" className="nav-link font-bold">biuro@aparaticamed.pl</a>, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody
            przed jej cofnięciem.<br />
            Więcej informacji dotyczących przetwarzania danych osobowych - <a href="/obowiazek-informacyjny" className="nav-link font-bold">Obowiązek Informacyjny</a>.
            <span className="text-(--accent)"></span>
          </span>
        </label>

        <button
          type="submit"
          className="site-button-primary cursor-pointer site-focus inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-sm font-semibold shadow-sm"
        >
          Wyślij wiadomość
        </button>
      </form>
    </section>
  );
}