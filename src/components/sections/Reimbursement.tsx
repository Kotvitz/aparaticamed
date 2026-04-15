import Image from "next/image";
import Link from "next/link";
import { CircleCheckBig, ArrowRight } from "lucide-react";

type ReimbursementProps = {
  data: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    points: { text: string }[];
    imageAlt: string;
    image?: {
      asset?: {
        url?: string;
      };
    };
  };
};

export default function Reimbursement({ data }: ReimbursementProps) {
  const imageSrc = data.image?.asset?.url ?? "/images/reimbursement.webp";
  return (
    <section
      className="px-4 py-14 md:py-20"
      style={{ backgroundColor: "var(--surface-muted)" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">

        <div className="relative">
          <div
            className="relative overflow-hidden rounded-4xl border"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--brand-border)",
            }}
          >
            <div className="relative aspect-4/3">
              <Image
                src={imageSrc}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <h2
            className="text-3xl font-bold md:text-4xl"
            style={{ color: "var(--text)" }}
          >
            {data.title}
          </h2>

          <p
            className="mt-4 text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Pomagamy pacjentom zrozumieć zasady refundacji i przejść przez cały
            proces bez zbędnych komplikacji.
          </p>

          <ul className="mt-8 grid gap-4">
            {data.points.map((point) => (
              <li key={point.text} className="flex items-start gap-3">
                <CircleCheckBig
                  className="mt-0.5 h-5 w-5 shrink-0"
                  style={{ color: "var(--accent)" }}
                />
                <span
                  className="text-sm md:text-base"
                  style={{ color: "var(--text)" }}
                >
                  {point.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/refundacja"
              className="site-button-primary site-focus inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold shadow-sm"
            >
              {data.buttonText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}