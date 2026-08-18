import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

// Set up fonts with optimizations
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Pharo Foundation | Educational Institution",
    template: "%s | Pharo Foundation",
  },
  description: "[PLACEHOLDER - Replace with official Pharo Foundation description] Pharo Foundation is an educational institution dedicated to academic excellence, student development, innovation, and community growth.",
  keywords: ["education", "school", "academics", "admissions", "student life", "learning", "excellence", "Pharo Foundation"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pharo Foundation",
    title: "Pharo Foundation | Educational Institution",
    description: "[PLACEHOLDER - Replace with official description] Pharo Foundation: Nurturing minds, building futures.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pharo Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharo Foundation | Educational Institution",
    description: "[PLACEHOLDER - Replace with official description] Pharo Foundation: Nurturing minds, building futures.",
    images: ["/og-image.png"],
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
  themeColor: "#1E3A5F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
