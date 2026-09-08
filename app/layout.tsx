import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import SideNavigation from "@/components/ui/side-navigation";

import Theme from "./theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const aspekta = localFont({
  src: [
    {
      path: "../public/fonts/Aspekta-500.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Aspekta-650.woff2",
      weight: "650",
    },
  ],
  variable: "--font-aspekta",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Thomas Miller | Senior Software Engineer",
    template: "%s | Thomas Miller",
  },
  description:
    "Senior software engineer focused on platform engineering, DevOps, site reliability, cloud infrastructure, and secure full-stack systems.",
  authors: [{ name: "Thomas Miller", url: "https://www.millers.wiki" }],
  creator: "Thomas Miller",
  keywords: [
    "Senior Software Engineer",
    "Platform Engineering",
    "DevOps",
    "Site Reliability Engineering",
    "AWS",
    "Go",
    "Flutter",
    "Cloud Infrastructure",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thomas Miller",
    url: "https://www.millers.wiki",
    email: "mailto:wthomasmiii@gmail.com",
    telephone: "+1-972-795-9884",
    jobTitle: "Senior Software Engineer",
    worksFor: { "@type": "Organization", name: "BAAS Software" },
    knowsAbout: [
      "Platform Engineering",
      "DevOps",
      "Site Reliability Engineering",
      "Cloud Infrastructure",
      "Software Architecture",
      "Application Security",
      "Go",
      "Flutter",
      "React",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${aspekta.variable} font-inter bg-white tracking-tight text-slate-800 antialiased dark:bg-slate-900 dark:text-slate-200`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <Theme>
          <div className="mx-auto max-w-7xl">
            <div className="flex min-h-screen">
              <SideNavigation />

              {/* Main content */}
              <main className="grow overflow-hidden px-6">
                <div className="mx-auto flex h-full w-full max-w-[1072px] flex-col">
                  <Header />

                  {children}

                  <Footer />
                </div>
              </main>
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
