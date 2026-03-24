import Header from "@/components/layout/Header";
import "./globals.css";
import ContactStrip from "@/components/layout/ContactStrip";

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
      </body>
    </html>
  );
}