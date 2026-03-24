import Header from "@/components/layout/Header";
import "./globals.css";

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
      </body>
    </html>
  );
}