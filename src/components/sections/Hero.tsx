import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

type HeroProps = {
  data: {
    eyebrow: string;
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonHref: string;
    secondaryButtonText: string;
    secondaryButtonHref: string;
    trustPoints: { text: string }[];
    imageAlt: string;
    image?: {
      asset?: {
        url?: string;
      };
    };
  };
};

export default function Hero({ data }: HeroProps) {
  const imageSrc = data.image?.asset?.url ?? "/images/hero-image.webp";
  return (
    <section
      className="overflow-hidden px-4 py-10 md:py-14"
      style={{
        background:
          "linear-gradient(to bottom, var(--brand-light), var(--surface))",
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-2xl">
          <p
            className="mb-4 inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold"
            style={{
              color: "var(--brand-ink)",
              backgroundColor: "var(--surface)",
              borderColor: "var(--brand-border)",
            }}
          >
            {data.eyebrow}
          </p>

          <h1
            className="text-4xl font-bold leading-tight md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            {data.title}
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {data.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="site-button-primary site-focus inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold shadow-sm"
            >
              {data.primaryButtonText}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="tel:+48600168269"
              className="site-button-secondary site-focus inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" />
              {data.secondaryButtonText}
            </Link>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.trustPoints.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0"
                  style={{ color: "var(--accent)" }}
                />
                <span
                  className="text-sm md:text-base"
                  style={{ color: "var(--text)" }}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            className="relative overflow-hidden rounded-4xl border shadow-sm"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--brand-border)",
            }}
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-4xl">
              <Image
                src={imageSrc}
                alt={data.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
