import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { organizationJsonLd, professionalServiceJsonLd } from "@/lib/seo";
import { siteConfig, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJson = JSON.stringify(organizationJsonLd());
  const serviceJson = JSON.stringify(professionalServiceJsonLd());

  return (
    <html lang="en" className="bg-slate-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-white antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script id="org-jsonld" type="application/ld+json">
          {orgJson}
        </Script>
        <Script id="service-jsonld" type="application/ld+json">
          {serviceJson}
        </Script>
      </body>
    </html>
  );
}
