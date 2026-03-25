"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Jak przebiega proces doboru aparatu słuchowego?",
    answer:
      "Proces rozpoczyna się od konsultacji i badania słuchu. Na podstawie wyników dobieramy aparat dopasowany do stopnia ubytku słuchu oraz stylu życia pacjenta.",
  },
  {
    question: "Jak wygląda pierwsza wizyta?",
    answer:
      "Pierwsza wizyta obejmuje wywiad, badanie słuchu oraz omówienie dostępnych rozwiązań. W wielu przypadkach możliwe jest także przetestowanie wybranego aparatu.",
  },
  {
    question: "Jak dbać o aparat słuchowy?",
    answer:
      "Regularne czyszczenie aparatu oraz kontrolne wizyty w gabinecie pomagają utrzymać urządzenie w dobrym stanie i zapewniają jego długotrwałe działanie.",
  },
  {
    question: "Jak często należy wykonywać badanie słuchu?",
    answer:
      "Zaleca się wykonywanie kontrolnego badania słuchu co najmniej raz w roku, szczególnie u osób starszych lub narażonych na hałas.",
  },
  {
    question: "Czy pomagają Państwo w uzyskaniu refundacji?",
    answer:
      "Tak, pomagamy wyjaśnić zasady refundacji oraz wskazujemy, jakie dokumenty są potrzebne do skorzystania z dostępnego wsparcia.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="px-4 py-14 md:py-20"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            FAQ - Najczęściej zadawane pytania
          </h2>

          <p
            className="mt-4 text-base md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Zebraliśmy odpowiedzi na pytania, które najczęściej pojawiają się
            przed wizytą, badaniem słuchu i doborem aparatu słuchowego.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl border"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--brand-border)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="site-focus flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base font-semibold md:text-lg"
                    style={{ color: "var(--text)" }}
                  >
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 cursor-pointer shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: "var(--brand-ink)" }}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 md:px-6 md:pb-6">
                      <p
                        className="text-sm leading-7 md:text-base"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
