export default function ContactHero() {
  return (
    <section
      className="px-4 py-10 md:py-12"
      style={{ backgroundColor: "var(--surface-muted)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1
            className="text-4xl font-bold leading-tight md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Kontakt
          </h1>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Skontaktuj się z nami telefonicznie, mailowo lub przez formularz.
            Sprawdź także lokalizację gabinetu w Szczecinie.
          </p>
        </div>
      </div>
    </section>
  );
}