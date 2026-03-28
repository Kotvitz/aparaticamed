import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności | AparaticaMed",
  description: "Polityka prywatności serwisu AparaticaMed.",
};

export default function PrivacyPolicyPage() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "legal",
    "polityka-prywatnosci.html"
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