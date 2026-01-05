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
  title: "My Portfolio | Frontend Developer",
  description: "High-performance personal portfolio showcasing projects, skills, and open-source contributions built with Next.js 14+, TypeScript, and Tailwind CSS.",
  keywords: ["portfolio", "frontend", "developer", "next.js", "react", "typescript"],
  authors: [
    {
      name: "Your Name",
      url: "https://github.com/yourusername",
    },
  ],
  creator: "Your Name",
  metadataBase: new URL("https://your-portfolio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com",
    siteName: "My Portfolio",
    title: "My Portfolio | Frontend Developer",
    description: "High-performance personal portfolio showcasing projects, skills, and open-source contributions.",
    images: [
      {
        url: "https://your-portfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "My Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio | Frontend Developer",
    description: "High-performance personal portfolio showcasing projects, skills, and open-source contributions.",
    images: ["https://your-portfolio.com/og-image.png"],
    creator: "@yourtwitter",
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
