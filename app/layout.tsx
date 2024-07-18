import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TG Bot Demo",
  description: "A Demo for TG Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="stripe-js"
        src="https://telegram.org/js/telegram-web-app.js"
      />
      <Script
        id="ad-js"
        src="/lib/helper.js"
      />

      <Script id="test-1">
        {
          `window.adsbygoogle = window.adsbygoogle || [];
          window.adBreak = adConfig = function(o) {window.adsbygoogle.push(o);}
             adConfig({preloadAdBreaks: 'on'});`
        }
      </Script>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
