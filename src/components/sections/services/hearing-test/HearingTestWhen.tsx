import { MessageCircleQuestionMark, MessagesSquare, PhoneCall, AudioLines } from "lucide-react";

const SIGNS = [
  {
    title: "Często prosisz o powtórzenie",
    description:
      "Jeżeli coraz częściej masz wrażenie, że rozmówcy mówią niewyraźnie lub muszą powtarzać wypowiedzi, warto skontrolować słuch.",
    Icon: MessagesSquare,
  },
  {
    title: "Trudno Ci rozumieć rozmowy w hałasie",
    description:
      "Problemy ze zrozumieniem mowy w większej grupie, w restauracji lub w innych głośnych miejscach mogą być sygnałem pogorszenia słyszenia.",
    Icon: MessageCircleQuestionMark,
  },
  {
    title: "Podgłaśniasz telewizor lub telefon",
    description:
      "Jeśli potrzebujesz coraz wyższego poziomu głośności, aby dobrze słyszeć dźwięki i rozmowy, badanie słuchu może pomóc ocenić przyczynę.",
    Icon: PhoneCall,
  },
  {
    title: "Pojawiają się szumy uszne lub zmęczenie po rozmowach",
    description:
      "Szumy uszne, uczucie zatkanego ucha lub duże zmęczenie po dłuższym słuchaniu i rozmowach to także powód, by sprawdzić stan słuchu.",
    Icon: AudioLines,
  },
];

export default function HearingTestWhen() {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Kiedy warto wykonać badanie słuchu?
          </h2>

          <div
            className="mt-5 space-y-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            <p>
              Badanie słuchu warto wykonać nie tylko wtedy, gdy problem jest
              już wyraźnie odczuwalny. Pogorszenie słyszenia często rozwija się
              stopniowo i przez długi czas może pozostawać niezauważone.
            </p>

            <p>
              Kontrola słuchu jest dobrym rozwiązaniem zarówno przy pierwszych
              niepokojących objawach, jak i profilaktycznie — zwłaszcza jeśli
              słuch jest narażony na hałas lub pojawiają się trudności w
              codziennej komunikacji.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SIGNS.map(({ title, description, Icon }) => (
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