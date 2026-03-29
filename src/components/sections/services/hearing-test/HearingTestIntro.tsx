export default function HearingTestIntro() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Dlaczego warto wykonać badanie słuchu?
            </h2>

            <div
              className="mt-5 space-y-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Regularne badanie słuchu pozwala wcześnie wykryć ewentualne
                problemy i zapobiec ich dalszemu pogłębianiu się. Wiele osób
                przez długi czas nie zauważa stopniowych zmian w słyszeniu,
                dlatego kontrola słuchu jest ważnym elementem dbania o zdrowie.
              </p>

              <p>
                Wczesne rozpoznanie niedosłuchu umożliwia szybsze podjęcie
                odpowiednich działań oraz dobranie rozwiązań, które poprawiają
                komfort codziennego funkcjonowania i komunikacji z innymi
                osobami.
              </p>

              <p>
                Badanie słuchu jest szczególnie ważne dla osób, które zauważają
                trudności w rozumieniu mowy, częściej proszą o powtórzenie
                wypowiedzi lub odczuwają zmęczenie po rozmowach w hałaśliwym
                otoczeniu.
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
              Regularna kontrola słuchu ma znaczenie!
            </h3>

            <div
              className="mt-4 space-y-4 text-base leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Zmiany w słyszeniu mogą pojawiać się stopniowo i przez długi
                czas pozostawać niezauważone. Regularne badania pomagają
                monitorować stan słuchu i reagować w odpowiednim momencie.
              </p>

              <p>
                Kontrola słuchu pozwala także ocenić skuteczność stosowanych
                rozwiązań oraz dopasować dalsze działania do aktualnych potrzeb
                pacjenta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
