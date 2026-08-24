import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sora", // kept the generic variable name for compatibility with globals.css
  display: "swap",
});

import { Providers } from "./providers";
import ConditionalFooter from "./compents/ConditionalFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://emanuel-djatika.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Emanuel DJATIKA | Développeur & Architecte Web",
    template: "%s | Emanuel DJATIKA",
  },
  description: "Portfolio professionnel d'Emanuel Djatika. Développeur Full-Stack, Architecte Web & Mobile. Découvrez mes projets, mes services et mon expertise.",
  keywords: ["Emanuel DJATIKA", "Développeur Web", "Architecte Web", "Développeur Mobile", "React", "Next.js", "Portfolio", "Freelance"],
  authors: [{ name: "Emanuel DJATIKA", url: siteUrl }],
  creator: "Emanuel DJATIKA",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "Emanuel DJATIKA | Développeur & Architecte Web",
    description: "Portfolio professionnel d'Emanuel Djatika. Développeur Full-Stack, Architecte Web & Mobile.",
    siteName: "Emanuel DJATIKA Portfolio",
    images: [
      {
        url: "/emanuel.jpeg",
        width: 1200,
        height: 630,
        alt: "Emanuel DJATIKA - Développeur Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emanuel DJATIKA | Développeur & Architecte Web",
    description: "Portfolio professionnel d'Emanuel Djatika. Développeur Full-Stack, Architecte Web & Mobile.",
    images: ["/emanuel.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const socials = [
    { icon: "facebook.png", link: "https://web.facebook.com/emanuel.djatika.7?locale=fr_FR" },
    { icon: "linkedin.png", link: "https://www.linkedin.com/in/emanuel-djatika-283390276/" },
    { icon: "github.png", link: "https://github.com/em-djatika" },
  ]
  return (
    <html lang="fr" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Emanuel DJATIKA",
              "url": siteUrl,
              "jobTitle": "Développeur & Architecte Web",
              "image": `${siteUrl}/emanuel.jpeg`,
              "sameAs": [
                "https://web.facebook.com/emanuel.djatika.7?locale=fr_FR",
                "https://www.linkedin.com/in/emanuel-djatika-283390276/",
                "https://github.com/em-djatika"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            {children}
            <ConditionalFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
