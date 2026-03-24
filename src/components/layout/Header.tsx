import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import PhoneCTA from "./PhoneCTA";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40"
      style={{
        background:
          "linear-gradient(to bottom, var(--brand-light), var(--surface))",
        borderBottom: "2px solid var(--brand)",
      }}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-2">
          <PhoneCTA mobile />
          <PhoneCTA />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}