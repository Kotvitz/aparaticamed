export default function HomeVisitsIntro() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Dlaczego oferujemy wizyty domowe?
            </h2>

            <div
              className="mt-5 space-y-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Wiele osób, zwłaszcza seniorów lub pacjentów z ograniczoną
                mobilnością, może mieć trudności z dotarciem do gabinetu.
                Wizyty domowe pozwalają skorzystać z pomocy specjalisty bez
                konieczności wychodzenia z domu.
              </p>

              <p>
                Dzięki temu możliwe jest przeprowadzenie konsultacji oraz
                wykonanie podstawowych czynności diagnostycznych w miejscu,
                które jest dla pacjenta wygodne i bezpieczne.
              </p>

              <p>
                Rozwiązanie to zwiększa dostępność usług i umożliwia szybsze
                podjęcie odpowiednich działań związanych ze słuchem.
              </p>
            </div>
          </div>

          <div className="site-card p-6 md:p-7">
            <h3
              className="text-xl font-semibold md:text-2xl"
              style={{ color: "var(--text)" }}
            >
              Wygoda dla pacjenta
            </h3>

            <p
              className="mt-4 text-base leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              Wizyty domowe realizowane są na terenie Szczecina i okolic,
              zapewniając pacjentom możliwość skorzystania z pomocy bez
              konieczności wychodzenia z domu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}