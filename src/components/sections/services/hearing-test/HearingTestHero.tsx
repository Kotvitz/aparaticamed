import Image from "next/image";
import Link from "next/link";

export default function HearingTestHero() {
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
            Badanie słuchu
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Problemy ze słuchem mogą wpływać na codzienne funkcjonowanie i
            komfort życia, dlatego warto regularnie kontrolować słuch i w porę
            reagować na pojawiające się trudności.
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Specjalistyczne badanie słuchu pozwala dokładnie ocenić stan słuchu,
            wykryć ewentualne nieprawidłowości i dobrać odpowiednie dalsze
            działania dopasowane do potrzeb pacjenta.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="site-button-primary site-focus inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm"
            >
              Umów wizytę
            </Link>

            <Link
              href="/uslugi"
              className="site-button-secondary site-focus inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Zobacz wszystkie usługi
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
                src="/images/hearing-test-hero.webp"
                alt="Badanie słuchu w gabinecie AparaticaMed"
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