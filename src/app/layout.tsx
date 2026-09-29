import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nabajibansangha.org"),
  title: "Nabajiban Sangha | Dhupguri, Jalpaiguri",
  description: "Official website of Nabajiban Sangha, Dhupguri, Jalpaiguri — a community club established on 2nd February 1959, celebrating games, cultural, educational and social welfare activities.",
  keywords: "Nabajiban Sangha, Dhupguri, Jalpaiguri, Community Club, Sports, Culture, Social Welfare",
  openGraph: {
    title: "Nabajiban Sangha | Established 1959",
    description: "Celebrating games, cultural, educational and social welfare activities since 1959.",
    url: "https://nabajibansangha.org",
    siteName: "Nabajiban Sangha",
    images: [
      {
        url: "/logo/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Nabajiban Sangha Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-sky-light text-slate-800">
        {children}
      </body>
    </html>
  );
}
