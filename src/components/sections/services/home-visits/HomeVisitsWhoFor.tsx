import { HatGlasses, Accessibility, HeartHandshake, House } from "lucide-react";

const GROUPS = [
  {
    title: "Seniorzy",
    description:
      "Osoby starsze, które mają trudności z dotarciem do gabinetu.",
    Icon: HatGlasses,
  },
  {
    title: "Osoby z ograniczoną mobilnością",
    description:
      "Pacjenci, dla których podróż do gabinetu jest utrudniona.",
    Icon: Accessibility,
  },
  {
    title: "Osoby wymagające wsparcia",
    description:
      "Pacjenci potrzebujący konsultacji w komfortowych warunkach domowych.",
    Icon: HeartHandshake,
  },
  {
    title: "Osoby ceniące wygodę",
    description:
      "Pacjenci, którzy chcą skorzystać z usług bez konieczności wychodzenia z domu.",
    Icon: House,
  },
];

export default function HomeVisitsWhoFor() {
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
            Dla kogo przeznaczone są wizyty domowe?
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {GROUPS.map(({ title, description, Icon }) => (
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