import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  category: "development",
  title: "UTC±24: The Home of Crypto Focused Professionals",
  description:
    "A park for those building and participating in the crypto industry to come together and share ideas, collaborate, and build the future with a curated group of people that share the same interests as you.",
  keywords: ["utc24", "utc±24", "crypto"],
  themeColor: "#212121",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://utc24.io",
    title: "UTC±24",
    description:
      "A park for those building and participating in the crypto industry to come together and share ideas, collaborate, and build the future with a curated group of people that share the same interests as you.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@utc_24",
    description:
      "A park for those building and participating in the crypto industry to come together and share ideas, collaborate, and build the future with a curated group of people that share the same interests as you.",
  },
  verification: {
    me: ["chance@utc24.io", "https://twitter.com/utc_24"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
