import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center"
      aria-label="AparaticaMed – Strona główna"
    >
      <Image
        src="/images/logo.webp"
        alt="AparaticaMed logo"
        width={220}
        height={66}
        priority
        className="h-10 w-auto sm:h-11 md:h-12"
      />
    </Link>
  );
}