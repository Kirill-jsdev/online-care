import type { Metadata } from "next";
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
  title: "ZABOTA - Вызов медсестры на дом в Ташкенте | Медицинские услуги круглосуточно",
  description:
    "Вызовите опытную медсестру на дом в Ташкенте. Профессиональные медицинские услуги: инъекции, капельницы, уход за больными. Работаем 24/7 по всему Ташкенту.",
  keywords:
    "вызов медсестры Ташкент, медсестра на дом Ташкент, медицинские услуги на дому Ташкент, инъекции на дому, капельницы Ташкент, медицинский уход Ташкент, медсестра круглосуточно Ташкент, частная медсестра Ташкент",
  authors: [{ name: "ZABOTA Medical Services" }],
  robots: "index, follow",
  openGraph: {
    title: "ZABOTA - Вызов медсестры на дом в Ташкенте",
    description:
      "Профессиональные медицинские услуги на дому в Ташкенте. Опытные медсестры, современное оборудование, работаем круглосуточно.",
    type: "website",
    locale: "ru_RU",
    siteName: "ZABOTA Medical Services",
    url: "https://zabota.uz/",
    images: [
      {
        url: "https://zabota.uz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZABOTA - Медицинские услуги на дому в Ташкенте",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZABOTA - Вызов медсестры на дом в Ташкенте",
    description: "Профессиональные медицинские услуги на дому в Ташкенте",
    images: ["https://zabota.uz/og-image.jpg"],
  },
  alternates: {
    canonical: "https://zabota.uz/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
