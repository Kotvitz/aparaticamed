"use client";

import { useState } from "react";
import Link from "next/link";

import { ChevronDown, Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/lib/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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

      <div
        id="mobile-navigation"
        className="absolute left-0 top-full w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, var(--brand-light-strong), var(--surface))",
          borderBottom: "2px solid var(--brand)",
          animation: isOpen
            ? "mobileMenuFadeIn 0.22s ease-out forwards"
            : "mobileMenuFadeOut 0.22s ease-in forwards",
          pointerEvents: isOpen ? "auto" : "none",
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-8 py-8"
          aria-label="Mobilna nawigacja"
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) =>
              link.label === "Usługi" && link.children ? (
                <div key={link.href} className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="site-link site-focus nav-link-underline nav-link-mobile text-base font-semibold"
                    >
                      {link.label}
                    </Link>

                    <button
                      type="button"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className="site-focus inline-flex h-8 w-8 items-center justify-center rounded-lg"
                      style={{ color: "var(--text)" }}
                      aria-label={
                        servicesOpen ? "Zwiń listę usług" : "Rozwiń listę usług"
                      }
                      aria-expanded={servicesOpen}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    className="ml-4 overflow-hidden border-l pl-4"
                    style={{
                      borderColor: "var(--brand-border)",
                      animation: servicesOpen
                        ? "mobileMenuFadeIn 0.2s ease-out forwards"
                        : "mobileMenuFadeOut 0.2s ease-in forwards",
                      pointerEvents: servicesOpen ? "auto" : "none",
                      visibility: servicesOpen ? "visible" : "hidden",
                      opacity: servicesOpen ? 1 : 0,
                      maxHeight: servicesOpen ? "320px" : "0px",
                    }}
                  >
                    <div className="flex flex-col gap-3 py-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="site-link site-focus nav-link-underline text-sm font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="site-link site-focus nav-link-underline nav-link-mobile text-base font-semibold"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}