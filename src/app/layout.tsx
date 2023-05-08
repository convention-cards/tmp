import { ClerkProvider } from "@clerk/nextjs";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { TrpcProvider } from "hooks/api";
import { ReactLauncherProvider } from "launch";
import type { PropsWithChildren } from "react";
import "./globals.css";

export const metadata = {
  title: {
    default: "Convention Cards",
    template: "%s | Convention Cards",
  },
  description:
    "Convention Cards is a website for building and sharing bridge bidding systems.",

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "convention.cards",
    siteName: "Convention Cards",
  },
  themeColor: "#4F46E5",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="min-h-screen bg-gray-100">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen">
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#4F46E5",
            },
          }}
        >
          <TrpcProvider>
            <ReactLauncherProvider>
              <div className="flex min-h-screen w-full flex-col">
                <Header />

                <main className="grow">{children}</main>

                <Footer />
              </div>
            </ReactLauncherProvider>
          </TrpcProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
