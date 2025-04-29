import type { Viewport } from "next";
import { Cabin, Noto_Sans_JP } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "@/styles/globals.css";
import { MenuProvider } from "@/components/GlobalMenuOverlay/context";
import FixedMenuOverlay from "@/components/GlobalMenuOverlay";

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${cabin.variable}`} >
        <MenuProvider>
          <FixedMenuOverlay zIndex={20} />
          <div className="relative z-0">
            {children}
          </div>
          <div className="fixed inset-x-0 top-0 z-10" id="modal" />
        </MenuProvider>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ''} />
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID || ''} />
    </html>
  );
}

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});
