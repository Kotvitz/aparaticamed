import Image from "next/image";

type HearingAidAccessorySectionProps = {
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

export default function HearingAidAccessorySection({
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  reverse = false,
}: HearingAidAccessorySectionProps) {
  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 ${
            reverse ? "lg:grid-flow-col-dense" : ""
          }`}
        >

          <div className={reverse ? "lg:col-start-2" : ""}>
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--text)" }}
            >
              {title}
            </h2>

            <p
              className="mt-4 text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              {description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item}
                  className="site-card flex items-start gap-3 p-5"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--brand-border)",
                  }}
                >

                  <p
                    className="text-sm leading-7 md:text-base"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={reverse ? "lg:col-start-1" : ""}>
            <div
              className="relative overflow-hidden rounded-4xl border shadow-sm"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--brand-border)",
              }}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}