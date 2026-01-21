import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wira Shauma | Mobile Engineer & Full-Stack Developer",
  description: "Portfolio showcasing mobile and web development projects. Specialized in Flutter, React Native, Next.js, and Node.js.",
  keywords: ["portfolio", "mobile developer", "flutter", "react native", "next.js", "full-stack"],
  authors: [
    {
      name: "Wira Shauma",
      url: "https://github.com/wirashauma",
    },
  ],
  creator: "Wira Shauma Ardhana",
  metadataBase: new URL("https://your-portfolio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com",
    siteName: "Wira Shauma Portfolio",
    title: "Wira Shauma | Mobile Engineer & Full-Stack Developer",
    description: "Portfolio showcasing mobile and web development projects.",
    images: [
      {
        url: "https://your-portfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wira Shauma Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wira Shauma | Mobile Engineer & Full-Stack Developer",
    description: "Portfolio showcasing mobile and web development projects.",
    images: ["https://your-portfolio.com/og-image.png"],
    creator: "@wirashauma",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
