import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";
import Header from "@/components/Header";

import Footer from "@/components/footer";
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Health Tribe",
  description: "Health Tribe",
   icons: {
    icon: "/assets/svgs/logo.svg",
  },
  keywords: ["Health", "Tribe", "Health Tribe", "Health Tribe"],
};

import Head from 'next/head';
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Link rel="icon" href="/assets/svgs/logo.svg" type="image/svg+xml" />
      </Head>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <body
        className={`${dmSans.variable} font-dm-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
