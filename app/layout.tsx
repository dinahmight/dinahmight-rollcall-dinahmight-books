import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@vercel/analytics/next";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dinahmightbooks.com"),
  title: "ROLL CALL! | A 31-Day Gratitude Journey Through the Names of God",
  description:
    "A 31-day devotional journey through the covenant names of God. Scripture, biblical and modern-day illustrations, journal prompts, and gratitude prayers by Dinah Cochran. Supports I Know A Guy Ministries, Inc.",
  keywords: [
    "31 day devotional names of God",
    "men's daily devotional Bible study",
    "new believer discipleship guide",
    "how to know God personally",
    "prayer declarations Jehovah names of God",
    "Bible study small group discussion guide",
    "Christian gratitude journal",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-[#faf6ec] text-[#17203a] font-body antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
