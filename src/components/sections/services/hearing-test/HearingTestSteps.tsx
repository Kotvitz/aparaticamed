import { ClipboardList, Search, AudioLines, MessageSquareText } from "lucide-react";

const STEPS = [
  {
    title: "Wywiad i rozmowa z pacjentem",
    description:
      "Badanie rozpoczyna się od rozmowy, podczas której omawiane są objawy, codzienne trudności związane ze słyszeniem oraz historia problemów ze słuchem.",
    Icon: ClipboardList,
  },
  {
    title: "Ocena przewodu słuchowego",
    description:
      "Kolejnym etapem jest ocena stanu przewodu słuchowego i błony bębenkowej, co pomaga lepiej przygotować dalszą diagnostykę.",
    Icon: Search,
  },
  {
    title: "Testy słuchu",
    description:
      "Następnie wykonywane są odpowiednie badania, takie jak audiometria tonalna i inne testy pozwalające ocenić poziom słyszenia.",
    Icon: AudioLines,
  },
  {
    title: "Omówienie wyników i dalsze kroki",
    description:
      "Po zakończeniu badania wyniki są dokładnie omawiane, a pacjent otrzymuje informacje o możliwych dalszych działaniach i dostępnych rozwiązaniach.",
    Icon: MessageSquareText,
  },
];

export default function HearingTestSteps() {
  return (
    <section
      className="px-4 py-10 md:py-14"
      style={{ backgroundColor: "var(--surface-muted)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Jak przebiega badanie słuchu
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Badanie słuchu jest bezbolesne i przebiega etapami, które pomagają
            dokładnie ocenić stan słuchu oraz dobrać odpowiednie dalsze
            postępowanie.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map(({ title, description, Icon }, index) => (
            <article key={title} className="site-card p-6 md:p-7">
              <div className="flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "var(--brand-light)" }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: "var(--brand-ink)" }}
                  />
                </div>

                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--brand)" }}
                >
                  0{index + 1}
                </span>
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