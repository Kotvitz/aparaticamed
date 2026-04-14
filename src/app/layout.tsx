import Header from "@/components/layout/Header";
import "./globals.css";
import ContactStrip from "@/components/layout/ContactStrip";
import Footer from "@/components/layout/Footer";
import CookieSettingsButton from "@/components/layout/ui/CookieSettingsButton";
import ConsentScripts from "@/components/cookies/ConsentScripts";
import OfficeLocationButton from "@/components/layout/ui/OfficeLocationButton";
import CookieBlockingOverlay from "@/components/cookies/CookieBlockingOverlay";
import CookieBanner from "@/components/layout/ui/CookieBanner";
import { getSiteSettings } from "@/sanity/lib/getSiteSettings";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings();
  return (
    <html lang="pl">
      <body suppressHydrationWarning>
        <Header />
        <main>
          {children}
        </main>
        <ContactStrip
          clinicName={siteSettings.clinicName}
          phone1={siteSettings.phone1}
          email={siteSettings.email}
          facebookUrl={siteSettings.facebookUrl}
          addressLine={siteSettings.addressLine}
          addressCity={siteSettings.addressCity}
          taxId={siteSettings.taxId}
        />
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