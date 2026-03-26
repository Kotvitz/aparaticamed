import {
  FileText,
  Stethoscope,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";

const STEPS = [
  {
    icon: FileText,
    number: "01",
    title: "Uzyskaj skierowanie",
    description:
      "Pierwszym krokiem jest uzyskanie odpowiedniego skierowania lub rozpoczęcie procedury zgodnie z wymaganiami dotyczącymi refundacji.",
  },
  {
    icon: Stethoscope,
    number: "02",
    title: "Skonsultuj się ze specjalistą",
    description:
      "Kolejny etap obejmuje konsultację oraz badanie słuchu, które pomagają określić potrzeby pacjenta i odpowiedni typ rozwiązania.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Przygotuj dokumenty",
    description:
      "Należy zgromadzić wymagane dokumenty i potwierdzenia potrzebne do realizacji refundacji lub dofinansowania.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Zrealizuj refundację",
    description:
      "Po dopełnieniu formalności można przejść do realizacji refundacji i wyboru odpowiedniego aparatu słuchowego.",
  },
];

export default function RefundSteps() {
  return (
    <section
      id="jak-uzyskac-refundacje"
      className="px-4 py-14 md:py-20"
      style={{ backgroundColor: "var(--surface-muted)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Jak uzyskać refundację?
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Proces refundacji można podzielić na kilka prostszych etapów.
            Pomagamy pacjentom zrozumieć każdy z nich i spokojnie przejść przez
            formalności.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="rounded-2xl border p-6"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--brand-border)",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: "var(--brand-light)",
                      color: "var(--brand-ink)",
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <span
                    className="text-sm font-bold"
                    style={{ color: "var(--brand)" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="mt-5 text-lg font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {step.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}