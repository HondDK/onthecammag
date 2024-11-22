import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const actayRegular = localFont({
  src: "./fonts/Actay-Regular.woff2",
  variable: "--font-actay-regular",
  weight: "100 300",
});

const actayRegularItalic = localFont({
  src: "./fonts/Actay-RegularItalic.woff2",
  variable: "--font-actay-regular-italic",
  weight: "100 300",
});

const actayBold = localFont({
  src: "./fonts/ActayWide-Bold.woff2",
  variable: "--font-actay-bold",
  weight: "300 900",
});

const actayBoldItalic = localFont({
  src: "./fonts/ActayWide-BoldItalic.woff2",
  variable: "--font-actay-bold-italic",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "onthecam.mag",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${actayRegular.variable} ${actayRegularItalic.variable} ${actayBold.variable} ${actayBoldItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
