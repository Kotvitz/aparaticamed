import Header from "@/components/layout/Header";
import "./globals.css";
import ContactStrip from "@/components/layout/ContactStrip";
import Footer from "@/components/layout/Footer";

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
      </body>
    </html>
  );
}