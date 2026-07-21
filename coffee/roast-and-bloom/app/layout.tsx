import type { Metadata } from "next";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeVariables = {
    "--color-primary": siteConfig.theme.primary,
    "--color-primary-dark": siteConfig.theme.primaryDark,
    "--color-accent": siteConfig.theme.accent,
    "--color-background": siteConfig.theme.background,
    "--color-text": siteConfig.theme.text,
    "--color-muted": siteConfig.theme.muted,
    "--color-surface": siteConfig.theme.surface,
  } as React.CSSProperties;

  return (
    <html lang={siteConfig.locale}>
      <body style={themeVariables}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}