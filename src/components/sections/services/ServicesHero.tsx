import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
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
            Usługi
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            W AparaticaMed pomagamy pacjentom na każdym etapie dbania o słuch -
            od badania słuchu, przez dobór aparatów słuchowych, aż po serwis i
            dalsze wsparcie po zakupie.
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Nasze usługi są oparte na indywidualnym podejściu, spokojnym
            wyjaśnieniu kolejnych kroków i dopasowaniu rozwiązań do codziennych
            potrzeb pacjenta.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="site-button-primary site-focus inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm"
            >
              Umów wizytę
            </Link>

            <Link
              href="/uslugi/badanie-sluchu"
              className="site-button-secondary site-focus inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Rozpocznij od badania
            </Link>
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
                src="/images/services-hero.webp"
                alt="Badanie słuchu w AparaticaMed"
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