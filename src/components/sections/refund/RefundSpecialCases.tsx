import { Bone, Ear, Radio } from "lucide-react";

const SPECIAL_CASES = [
  {
    icon: Bone,
    title: "Aparaty na przewodnictwo kostne",
    description:
      "W wybranych przypadkach refundacja może dotyczyć również rozwiązań opartych na przewodnictwie kostnym, zgodnie z obowiązującymi zasadami.",
  },
  {
    icon: Ear,
    title: "Wkładki uszne",
    description:
      "Refundacja może obejmować także niektóre elementy dodatkowe, takie jak wkładki uszne, jeśli są potrzebne do prawidłowego użytkowania aparatu.",
  },
  {
    icon: Radio,
    title: "Systemy wspomagające słyszenie",
    description:
      "W określonych sytuacjach możliwe jest uzyskanie wsparcia również na dodatkowe rozwiązania wspomagające słyszenie.",
  },
];

export default function RefundSpecialCases() {
  return (
    <section
      className="px-4 py-14 md:py-20"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Szczególne przypadki refundacji
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Zakres refundacji może obejmować również wybrane rozwiązania
            dodatkowe, zależnie od potrzeb pacjenta i obowiązujących zasad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SPECIAL_CASES.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border p-6"
                style={{
                  backgroundColor: "var(--surface-muted)",
                  borderColor: "var(--brand-border)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "var(--brand-light)",
                    color: "var(--brand-ink)",
                  }}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3
                  className="mt-5 text-lg font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}