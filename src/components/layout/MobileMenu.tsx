"use client";

import { useState } from "react";
import Link from "next/link";

import { ChevronDown, Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/lib/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdowns({});
  };

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
            {NAV_LINKS.map((link) => {
              const isDropdownOpen = openDropdowns[link.href] ?? false;

              if (link.children) {
                return (
                  <div key={link.href} className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-4">
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="site-link site-focus nav-link-underline nav-link-mobile text-base font-semibold"
                      >
                        {link.label}
                      </Link>

                      <button
                        type="button"
                        onClick={() => toggleDropdown(link.href)}
                        className="site-focus inline-flex h-8 w-8 items-center justify-center rounded-lg"
                        style={{ color: "var(--text)" }}
                        aria-label={
                          isDropdownOpen
                            ? `Zwiń listę: ${link.label}`
                            : `Rozwiń listę: ${link.label}`
                        }
                        aria-expanded={isDropdownOpen}
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div
                      className="ml-4 overflow-hidden border-l pl-4"
                      style={{
                        borderColor: "var(--brand-border)",
                        animation: isDropdownOpen
                          ? "mobileMenuFadeIn 0.2s ease-out forwards"
                          : "mobileMenuFadeOut 0.2s ease-in forwards",
                        pointerEvents: isDropdownOpen ? "auto" : "none",
                        visibility: isDropdownOpen ? "visible" : "hidden",
                        opacity: isDropdownOpen ? 1 : 0,
                        maxHeight: isDropdownOpen ? "320px" : "0px",
                      }}
                    >
                      <div className="flex flex-col gap-3 py-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className="site-link site-focus nav-link-underline text-sm font-medium"
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
                  onClick={closeMenu}
                  className="site-link site-focus nav-link-underline nav-link-mobile text-base font-semibold"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}