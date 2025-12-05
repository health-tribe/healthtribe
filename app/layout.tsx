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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://healthtribe.co.in'),
  title: "Health Tribe",
  description: "Health Tribe",
  icons: {
    icon: "/assets/svgs/logo.svg",
  },
  keywords: ["Health", "Tribe", "Health Tribe"],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://healthtribe.com",
    title: "Health Tribe",
    description: "Health Tribe - Holistic Wellness Programs",
    siteName: "Health Tribe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Tribe",
    description: "Health Tribe - Holistic Wellness Programs",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-dm-sans antialiased`}
      >
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RQJ7N3QGC4"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RQJ7N3QGC4');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
