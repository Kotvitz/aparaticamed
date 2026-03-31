export default function HearingAidsIntro() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Jak aparaty słuchowe wspierają słuch?
            </h2>

            <div
              className="mt-5 space-y-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Aparaty słuchowe pomagają lepiej odbierać dźwięki otoczenia,
                prowadzić rozmowy i zwiększać komfort codziennego funkcjonowania.
                Dla wielu osób oznaczają większą swobodę w kontaktach z bliskimi,
                podczas zakupów, spacerów czy oglądania telewizji.
              </p>

              <p>
                Współczesne aparaty słuchowe to nowoczesne urządzenia, które mogą
                różnić się wielkością, sposobem noszenia, mocą oraz dodatkowymi
                funkcjami. Dzięki temu możliwe jest znalezienie rozwiązania
                odpowiadającego różnym oczekiwaniom i stylom życia.
              </p>

              <p>
                Dobrze dobrany aparat słuchowy może poprawić jakość słyszenia w
                wielu codziennych sytuacjach i ułatwić odnalezienie się zarówno w
                spokojnym otoczeniu, jak i w bardziej wymagających warunkach.
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
              Nowoczesne rozwiązania i wygoda użytkowania
            </h3>

            <div
              className="mt-4 space-y-4 text-base leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                W zależności od modelu aparat słuchowy może oferować różny
                poziom dyskrecji, wygody noszenia oraz dodatkowe funkcje
                wspierające słyszenie w codziennych sytuacjach.
              </p>

              <p>
                To sprawia, że aparaty słuchowe mogą być dopasowane nie tylko do
                potrzeb związanych ze słuchem, ale także do oczekiwań dotyczących
                komfortu i sposobu użytkowania.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}