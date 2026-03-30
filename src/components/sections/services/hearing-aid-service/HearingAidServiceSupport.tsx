import { Check } from "lucide-react";

const SUPPORT_ITEMS = [
  "okresowe i doraźne kontrole aparatów słuchowych",
  "wymiana dźwiękowodów we wkładkach usznych",
  "korekty wkładek usznych",
  "szybkie naprawy",
  "diagnostyka i serwis aparatów słuchowych",
  "badania słuchu",
];

export default function HearingAidServiceSupport() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Dalsze wsparcie dla użytkowników aparatów słuchowych
          </h2>

          <div
            className="mt-5 space-y-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            <p>
              Użytkownicy aparatów słuchowych zakupionych na miejscu mogą liczyć na dalszą,
              specjalistyczną opiekę przez cały okres ich użytkowania.
            </p>

            <p>
              Obejmuje ona zarówno bieżącą pomoc, jak i regularne działania,
              które pomagają utrzymać aparat w dobrym stanie i lepiej dopasować
              go do potrzeb pacjenta.
            </p>
          </div>
        </div>

        <div className="site-card p-6 md:p-7">
          <h3
            className="text-xl font-semibold md:text-2xl"
            style={{ color: "var(--text)" }}
          >
            Przykładowy zakres wsparcia
          </h3>

          <ul className="mt-5 space-y-4">
            {SUPPORT_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--brand-light)" }}
                >
                  <Check
                    className="h-4 w-4"
                    style={{ color: "var(--brand-ink)" }}
                  />
                </div>

                <span
                  className="text-base leading-7"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}