import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loyd-portfolio.vercel.app"),
  title: "Loyd Viray | AI Engineer Intern & Full-Stack Developer",
  description:
    "Premium developer portfolio of John Loyd Viray, an AI Engineer Intern and BSIT student building AI-powered ERP/CRM automation and production-ready web systems.",
  openGraph: {
    title: "Loyd Viray | AI Engineer Intern & Full-Stack Developer",
    description:
      "AI-powered business automation builder focused on end-to-end product delivery across backend, frontend, data, and deployment.",
    url: "https://loyd-portfolio.vercel.app",
    siteName: "Loyd Portfolio",
    type: "website",
    locale: "en_PH"
  },
  twitter: {
    card: "summary_large_image",
    title: "Loyd Viray | AI Engineer Intern & Full-Stack Developer",
    description:
      "Portfolio of an AI Engineer Intern building reliable AI-powered products for real business workflows."
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
