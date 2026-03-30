import {
  TrendingUpDown,
  Ear,
  Settings,
  MessageSquare,
} from "lucide-react";

const SCOPE_ITEMS = [
  {
    title: "Konsultacja specjalistyczna",
    description:
      "Podczas wizyty domowej możliwa jest rozmowa oraz ocena potrzeb pacjenta.",
    Icon: MessageSquare,
  },
  {
    title: "Badanie słuchu",
    description:
      "Możliwe jest przeprowadzenie badania pozwalającego ocenić stan słuchu.",
    Icon: Ear,
  },
  {
    title: "Konfiguracja urządzeń",
    description:
      "Specjalista może dopasować i ustawić aparat słuchowy do indywidualnych potrzeb.",
    Icon: Settings,
  },
  {
    title: "Ocena dalszych działań",
    description:
      "Po wizycie możliwe jest ustalenie dalszych kroków oraz zaleceń.",
    Icon: TrendingUpDown,
  },
];

export default function HomeVisitsScope() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Co obejmuje wizyta domowa?
          </h2>
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