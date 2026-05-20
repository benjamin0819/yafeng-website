import BackForwardFix from "../components/BackForwardFix";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "雅楓集團發展有限公司 | Yafeng Group Development Limited",
  description:
    "Restaurant supply, cleaning supplies and tissue paper catalogue website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>
        <BackForwardFix />
        {children}
      </body>
    </html>
  );
}