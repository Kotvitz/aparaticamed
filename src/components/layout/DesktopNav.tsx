import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/navigation";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {NAV_LINKS.map((link) => {
        if (link.children) {
          return (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className="site-link site-focus nav-link-underline inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium"
              >
                {link.label}
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div
                className="invisible absolute left-0 top-full z-50 mt-2 w-80 translate-y-2 rounded-3xl border p-3 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--brand-border)",
                }}
              >
                <div className="flex flex-col gap-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="site-link site-focus nav-link-underline rounded-2xl px-3 py-2 text-sm font-medium"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            className="site-link site-focus nav-link-underline rounded-full px-4 py-2 text-sm font-medium"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}