import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Head from 'next/head'


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
      <Head>
        <meta name="google-adsense-account" content="ca-pub-3262390360312134" />
      </Head>

      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3262390360312134`}
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />

      {/* <Script
        id="ad-js"
        src="/lib/helper.js"
      /> */}

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
