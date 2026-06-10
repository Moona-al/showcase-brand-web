import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AETHER STUDIOS | Premium Architectural Streetwear",
  description: "A study in monochrome, structure, and symmetry. Experience AETHER Studios' modern, premium luxury streetwear showcase, featuring architectural silhouettes and technical garments.",
  keywords: ["luxury streetwear", "minimalist fashion", "avant-garde", "monochrome collection", "technical streetwear"],
  openGraph: {
    title: "AETHER STUDIOS",
    description: "Premium architectural streetwear showcase.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

