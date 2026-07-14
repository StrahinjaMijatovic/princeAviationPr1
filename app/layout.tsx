import type { Metadata, Viewport } from "next";
import { Archivo, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prince Aviation — Private Charter, MRO, Academy & Technical Training",
  description:
    "The full lifecycle of business aviation under one roof in Belgrade. Fly, maintain, and train to a single uncompromising standard.",
  metadataBase: new URL("https://princeaviation.example"),
  openGraph: {
    title: "Prince Aviation",
    description:
      "Four disciplines. One standard. Private charter, aircraft maintenance, pilot academy and technical training.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${hanken.variable} ${jbmono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');document.body&&document.body.classList.add('is-loading');",
          }}
        />
      </head>
      <body className="is-loading">{children}</body>
    </html>
  );
}
