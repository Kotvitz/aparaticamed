import {
  Settings2,
  Wrench,
  RefreshCcw,
  Stethoscope,
} from "lucide-react";

const SCOPE_ITEMS = [
  {
    title: "Kontrole okresowe i doraźne",
    description:
      "Regularne kontrole pomagają ocenić działanie aparatu słuchowego i szybciej wychwycić ewentualne problemy.",
    Icon: Settings2,
  },
  {
    title: "Szybkie naprawy i serwis",
    description:
      "W razie potrzeby zapewniamy pomoc serwisową oraz działania mające przywrócić prawidłowe funkcjonowanie urządzenia.",
    Icon: Wrench,
  },
  {
    title: "Regulacja i korekty",
    description:
      "Wsparcie obejmuje również regulację ustawień i pomoc w dopasowaniu aparatu do aktualnych potrzeb użytkownika.",
    Icon: RefreshCcw,
  },
  {
    title: "Diagnostyka i dalsza ocena",
    description:
      "W razie potrzeby możliwa jest także szersza ocena sytuacji, aby lepiej dobrać dalsze postępowanie i wsparcie.",
    Icon: Stethoscope,
  },
];

export default function HearingAidServiceScope() {
  return (
    <section
      className="px-4 py-10 md:py-14"
      style={{ backgroundColor: "var(--surface-muted)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Co obejmuje serwis aparatów słuchowych?
          </h2>

          <div
            className="mt-5 space-y-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            <p>
              Serwis aparatów słuchowych obejmuje działania, które pomagają
              utrzymać urządzenie w dobrej kondycji i zapewnić jego możliwie
              najlepsze działanie w codziennym użytkowaniu.
            </p>

            <p>
              Zakres wsparcia może obejmować bieżące kontrole, regulację,
              działania serwisowe oraz pomoc w ocenie, czy aparat nadal
              odpowiada potrzebom pacjenta.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SCOPE_ITEMS.map(({ title, description, Icon }) => (
            <article key={title} className="site-card p-6 md:p-7">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "var(--brand-light)" }}
              >
                <Icon
                  className="h-6 w-6"
                  style={{ color: "var(--brand-ink)" }}
                />
              </div>

              <h3
                className="mt-5 text-xl font-semibold md:text-2xl"
                style={{ color: "var(--text)" }}
              >
                {title}
              </h3>

              <p
                className="mt-3 text-base leading-7"
                style={{ color: "var(--text-muted)" }}
              >
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}