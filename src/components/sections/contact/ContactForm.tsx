"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const [website, setWebsite] = useState("");

  const [status, setStatus] = useState<Status>("idle");


  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!email.trim() || !email.includes("@")) return false;
    if (!message.trim()) return false;
    if (!consent) return false;
    return true;
  }, [name, email, message, consent]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || status === "sending") return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          consent,
          website,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setConsent(false);
      setWebsite("");
    } catch {
      setStatus("error");
    }
  };

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

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-semibold text-(--text)"
            >
              Imię i nazwisko <span className="text-(--accent)">*</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="site-focus w-full rounded-xl border border-(--border) bg-white px-4 py-3 text-sm text-(--text) outline-none"
          />
        </div>

        <p className="text-sm text-(--text-muted)">(*) - Pozycje obowiązkowe</p>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
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
          disabled={!isValid || status === "sending"}
          className={[
            "site-button-primary cursor-pointer site-focus inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-sm font-semibold shadow-sm",
            isValid && status !== "sending"
              ? "cursor-pointer bg-(--brand) hover:bg-(--brand-ink)"
              : "cursor-not-allowed bg-gray-300",
          ].join(" ")}
        >
          {status === "sending" ? "Wysyłanie…" : "Wyślij wiadomość"}
        </button>

        {status === "success" && (
          <p className="text-sm font-semibold text-(--brand-ink)">
            Dziękujemy! Wiadomość została wysłana.
          </p>
        )}

         {status === "error" && (
          <p className="text-sm font-semibold text-red-600">
            Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń.
          </p>
        )}
      </form>
    </section>
  );
}