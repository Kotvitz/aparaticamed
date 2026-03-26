import Image from "next/image";

export default function AboutHero() {
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
            O nas
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            AparaticaMed to miejsce, w którym pomagamy pacjentom dobrać
            odpowiednie aparaty słuchowe oraz zapewniamy profesjonalne wsparcie
            w zakresie diagnostyki słuchu i opieki po zakupie.
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Stawiamy na indywidualne podejście, nowoczesne rozwiązania i spokojne
            przeprowadzenie pacjenta przez cały proces.
          </p>
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
                src="/images/about-hero.webp"
                alt="Nowoczesny aparat słuchowy"
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