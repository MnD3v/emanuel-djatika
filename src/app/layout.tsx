import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

import { Providers } from "./providers";
import ConditionalFooter from "./compents/ConditionalFooter";

export const metadata: Metadata = {
  title: "Emanuel DJATIKA | Développeur & Architecte Web",
  description: "Portfolio professionnel d'Emanuel Djatika. Développeur de solutions web et mobiles.",
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
      </head>
      <body
        className={`${sora.variable} font-sans antialiased bg-background text-foreground`}
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
