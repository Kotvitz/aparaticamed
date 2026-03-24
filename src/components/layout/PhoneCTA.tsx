import Link from "next/link";
import { Phone } from "lucide-react";

type PhoneCTAProps = {
  mobile?: boolean;
};

export default function PhoneCTA({ mobile = false }: PhoneCTAProps) {
  if (mobile) {
    return (
      <Link
        href="tel:+48123456789"
        aria-label="Zadzwoń do AparaticaMed"
        className="site-button-accent site-focus inline-flex h-10 items-center justify-center gap-2 rounded-xl px-3 text-sm font-semibold md:hidden"
      >
        <Phone className="h-4 w-4" />
        <span className="hidden min-[380px]:inline">Zadzwoń teraz</span>
      </Link>
    );
  }

  return (
    <Link
      href="tel:+48123456789"
      aria-label="Zadzwoń do AparaticaMed"
      className="site-button-accent site-focus hidden h-11 items-center gap-2 rounded-xl px-4 text-sm font-semibold shadow-sm md:inline-flex"
    >
      <Phone className="h-4 w-4" />
      <span>Zadzwoń teraz</span>
    </Link>
  );
}