export default function HearingAidServiceIntro() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Dlaczego serwis aparatów słuchowych jest ważny?
            </h2>

            <div
              className="mt-5 space-y-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Aparat słuchowy jest urządzeniem używanym na co dzień, dlatego z
                czasem może wymagać kontroli, regulacji lub drobnych działań
                serwisowych. Regularna opieka pomaga utrzymać jego prawidłowe
                działanie i większy komfort słyszenia.
              </p>

              <p>
                Wsparcie serwisowe jest ważne nie tylko wtedy, gdy pojawia się
                wyraźny problem. Kontrole i bieżąca opieka pomagają szybciej
                wychwycić nieprawidłowości, zadbać o stan urządzenia i lepiej
                dopasować je do aktualnych potrzeb użytkownika.
              </p>

              <p>
                Dzięki temu aparat słuchowy może skuteczniej wspierać codzienne
                funkcjonowanie, rozmowy z bliskimi oraz komfort słyszenia w
                różnych sytuacjach.
              </p>
            </div>
          </div>

          <div
            className="site-card p-6 md:p-7"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--brand-border)",
            }}
          >
            <h3
              className="text-xl font-semibold md:text-2xl"
              style={{ color: "var(--text)" }}
            >
              Opieka także po zakupie
            </h3>

            <div
              className="mt-4 space-y-4 text-base leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Serwis aparatów słuchowych to nie tylko naprawa urządzenia, ale
                również pomoc w jego codziennym użytkowaniu, kontrola działania
                oraz wsparcie w razie pojawiających się trudności.
              </p>

              <p>
                Dzięki regularnym wizytom łatwiej utrzymać aparat w dobrej
                kondycji i zadbać o jego wygodne użytkowanie na co dzień.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}