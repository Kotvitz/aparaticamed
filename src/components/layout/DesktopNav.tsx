import Link from "next/link";
import { NAV_LINKS } from "@/lib/navigation";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-7" aria-label="Główna nawigacja">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="site-link site-focus nav-link-underline text-sm font-medium"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}