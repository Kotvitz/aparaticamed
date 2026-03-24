import Header from "@/components/layout/Header";
import "./globals.css";
import ContactStrip from "@/components/layout/ContactStrip";
import Footer from "@/components/layout/Footer";
import CookieSettingsButton from "@/components/layout/ui/CookieSettingsButton";
import ConsentScripts from "@/components/cookies/ConsentScripts";
import OfficeLocationButton from "@/components/layout/ui/OfficeLocationButton";
import CookieBlockingOverlay from "@/components/cookies/CookieBlockingOverlay";
import CookieBanner from "@/components/layout/ui/CookieBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body suppressHydrationWarning>
        <Header />
        <main>
          {children}
        </main>
        <ContactStrip />
        <Footer />
        <CookieBlockingOverlay />
        <CookieBanner />
        <CookieSettingsButton />
        <ConsentScripts />
        <OfficeLocationButton />
      </body>
    </html>
  );
}