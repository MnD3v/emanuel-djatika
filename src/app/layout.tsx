import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Manu",
  description: "Emanuel Djatika : Trouveur de solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const socials = [{ icon: "facebook.png", link: "https://web.facebook.com/emanuel.djatika.7?locale=fr_FR" },
    { icon: "linkedin.png", link: "https://www.linkedin.com/in/emanuel-djatika-283390276/" },
    { icon: "github.png", link: "https://github.com/em-djatika" },

    

  ]
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="relative flex justify-center bg-blue-950 p-9 pt-9 md:pt-24 text-white overflow-hidden max-sm:text-sm">
          <div className="absolute -bottom-12 -left-24 h-36 w-64 rounded-full bg-white/10 z-0 -rotate-45"></div>
          <div className="relative z-10 max flex flex-wrap justify-center gap-9">

            <div>
              <img src="/logo.png" alt="" className="w-12" />
              <p className="w-80 mt-6">Chez ZashCode, des solutions web et mobiles sur mesure pour donner vie à vos projets avec efficacité et innovation.</p>
              <div className="my-6 flex gap-2">
                    {socials.map((element, index) => (
                        <a
                        key={element.icon}
                  
                        href={element.link} target='_blank'>
                            <div className="bg-white hover:bg-morange h-14 w-14 rounded-full flex flex-col items-center justify-center">
                                <img
                                    src={`/icons/${element.icon}`} alt="" className="h-6" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div className="pt-6 w-80">
              <h3>
                Contact
              </h3>
              <div className="flex items-center">
                <img src="/icons/phone.png" alt="" className="h-6 " />
                <p className="p-3">+228 98784589</p>
              </div>
              <div className="flex items-center">
                <img src="/icons/mail.png" alt="" className="h-6 " />
                <p className="p-3">em.djatika@gmail.com</p>
              </div>
              <div className="flex items-center">
                <img src="/icons/map.png" alt="" className="h-6 mx-1 " />
                <p className="p-3">Dongoyo, Kara-Togo</p>
              </div>
            </div>
            <div className="pt-6 w-80">
              <h3>Newletter</h3>
              <p className="my-3">Recevez les notifications concernant l'evolution de mes services et de mes articles</p>
              <input type="email" placeholder="Entrez votre mail" className="w-full bg-transparent border border-white/20 rounded-xl p-3" />
              <button className="bg-morange w-full py-3 my-4 rounded-xl uppercase">S'abonner</button>
            </div>
          </div>

        </footer>
      </body>
    </html>
  );
}
