"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="site-focus cursor-pointer inline-flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ color: "var(--text)" }}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full w-full"
          style={{
            background:
              "linear-gradient(to bottom, var(--brand-light-strong), var(--surface))",
            borderBottom: "2px solid var(--brand)",
          }}
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col px-8 py-8"
            aria-label="Mobilna nawigacja"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="site-link site-focus nav-link-underline nav-link-mobile text-base font-semibold"
              >
                {link.label}
              </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}