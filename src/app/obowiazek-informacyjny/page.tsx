import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obowiązek informacyjny | AparaticaMed",
  description: "Obowiązek informacyjny w serwisie AparaticaMed.",
};

export default function CookiesPolicyPage() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "legal",
    "obowiazek-informacyjny.html"
  );

  const htmlContent = fs.readFileSync(filePath, "utf8");

  return (
    <main className="section section--policy">
      <div
        className="policy-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </main>
  );
}