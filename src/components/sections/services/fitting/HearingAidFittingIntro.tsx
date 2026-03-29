export default function HearingAidFittingIntro() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Dlaczego właściwy dobór aparatu słuchowego jest tak ważny?
            </h2>

            <div
              className="mt-5 space-y-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Dobór aparatu słuchowego powinien być zawsze dostosowany do
                stopnia ubytku słuchu, indywidualnych potrzeb pacjenta oraz jego
                codziennych przyzwyczajeń. Odpowiednio wybrane rozwiązanie może
                poprawić komfort słyszenia i ułatwić komunikację w różnych
                sytuacjach dnia codziennego.
              </p>

              <p>
                Znaczenie ma nie tylko sam rodzaj aparatu, ale także sposób jego
                użytkowania, wygoda noszenia oraz funkcje, które najlepiej
                odpowiadają stylowi życia pacjenta. Innych rozwiązań potrzebuje
                osoba aktywna zawodowo, a innych ktoś, kto przede wszystkim chce
                lepiej słyszeć rozmowy w domu i podczas spotkań z bliskimi.
              </p>

              <p>
                Właściwy dobór aparatu słuchowego pomaga lepiej wykorzystać jego
                możliwości, zwiększa satysfakcję z użytkowania i ułatwia
                codzienne oswajanie się z nowym sposobem słyszenia.
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
              Dobór aparatu to więcej niż wybór urządzenia
            </h3>

            <div
              className="mt-4 space-y-4 text-base leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Podczas doboru ważne jest uwzględnienie codziennych potrzeb,
                oczekiwań oraz sytuacji, w których aparat ma wspierać pacjenta
                najczęściej.
              </p>

              <p>
                Dzięki temu łatwiej dobrać rozwiązanie, które będzie nie tylko
                skuteczne, ale również wygodne i praktyczne w codziennym
                użytkowaniu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}