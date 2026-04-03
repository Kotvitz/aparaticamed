import Image from "next/image";
import Link from "next/link";

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HearingAidSubpageHeroProps = {
  title: string;
  description: string;
  secondaryDescription?: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

function getButtonClass(variant: Cta["variant"] = "primary") {
  if (variant === "secondary") {
    return "site-button-secondary";
  }

  return "site-button-primary shadow-sm";
}

export default function HearingAidSubpageHero({
  title,
  description,
  secondaryDescription,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
}: HearingAidSubpageHeroProps) {
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
          <h1
            className="text-4xl font-bold leading-tight md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            {title}
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {description}
          </p>

          {secondaryDescription ? (
            <p
              className="mt-4 max-w-xl text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              {secondaryDescription}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryCta.href}
              className={`site-focus inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ${getButtonClass(primaryCta.variant)}`}
            >
              {primaryCta.label}
            </Link>

            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className={`site-focus inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ${getButtonClass(
                  secondaryCta.variant ?? "secondary",
                )}`}
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
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
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={75}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}