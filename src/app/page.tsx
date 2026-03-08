import Image from "next/image";
import Link from "next/link";
import { MonitorPlay, Smartphone, Server, ExternalLink, Github, Mail, Linkedin, Briefcase, Phone, GraduationCap } from "lucide-react";
import Technologies from "./compents/technologies";

const projets = [
  {
    image: "eboite1.png",
    link: "https://eboite.net/",
    title: "La BAN",
    description: "Plateforme moderne de gestion d'avis numériques pour les entreprises africaines.",
    type: "Site web",
    tech: ["Next.js", "TypeScript", "Supabase"]
  },


  {
    image: "ardoiz.png",
    link: "https://play.google.com/store/apps/details?id=com.equilibre.q_dclic&hl=fr",
    title: "Ardoiz",
    description: "Application mobile de suivi étudiant intégrant la vérification des présences et des quiz interactifs.",
    type: "Application mobile",
    tech: ["Flutter", "Firebase", "Dart"]
  },
  {
    image: "eglix.png",
    link: "https://eglix-app.lafia.tech",
    title: "Eglix",
    description: "Plateforme web dédiée à la gestion centralisée des membres, des dîmes et des offrandes.",
    type: "Application web",
    tech: ["Next.js", "TypeScript", "Node.js"]
  },
  {
    image: "immomanager.png",
    link: "https://panpas-immo.netlify.app/",
    title: "Immomanager",
    description: "Application web performante pour la gestion optimisée des biens immobiliers, des locataires et des loyers.",
    type: "Application web",
    tech: ["React", "TailwindCSS", "Node.js"]
  },
  {
    image: "moger.png",
    link: "https://play.google.com/store/apps/details?id=com.equilibre.maclef&hl=fr",
    title: "Moger",
    description: "Application mobile immobilière complète pour simplifier la gestion de biens.",
    type: "Application mobile",
    tech: ["Flutter", "Firebase", "Dart"]
  },
  {
    image: "cemena.png",
    link: "https://www.cemena-togo.com/",
    title: "Cemena",
    description: "Site institutionnel premium pour des solutions naturelles de santé et bien-être.",
    type: "Site web",
    tech: ["React", "TailwindCSS", "CMS"]
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131821] text-white font-sans selection:bg-[#fd645b] selection:text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-4 md:px-8 max-w-[1200px] mx-auto w-full">
        <div className="text-xl font-bold tracking-wide z-20 relative">Emanuel Djatika</div>
        <div className="hidden md:flex space-x-12 text-sm text-gray-400 z-20 relative">
          <Link href="#home" className="hover:text-white transition-colors duration-200">Accueil</Link>
          <Link href="#about" className="hover:text-white transition-colors duration-200">À propos</Link>
          <Link href="#projects" className="hover:text-white transition-colors duration-200">Projets</Link>
          <Link href="#contacts" className="hover:text-white transition-colors duration-200">Contact</Link>
        </div>
        {/* Mobile menu trigger could go here */}
        <div className="md:hidden flex items-center z-20">
          <button className="text-white hover:text-[#fd645b] transition-colors"><MonitorPlay className="w-6 h-6 invisible" /></button>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 md:px-8 pb-32 w-full overflow-hidden">
        {/* Hero Section */}
        <section id="home" className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 min-h-[75vh] gap-12 relative">
          {/* Left Hero */}
          <div className="flex-1 z-10 w-full md:w-1/2">
            <h1 className="text-6xl md:text-[80px] font-bold mb-4 drop-shadow-lg flex items-end tracking-tight">
              Bonjour<span className="text-[#fd645b] text-7xl md:text-[90px] leading-[0.4] ml-1">.</span>
            </h1>
            <div className="flex items-center gap-4 md:gap-6 mb-8 mt-2">
              <div className="w-16 md:w-20 h-[2px] bg-[#fd645b]"></div>
              <p className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide">
                Je suis Emanuel
              </p>
            </div>
            <h2 className="text-4xl md:text-[56px] font-bold mb-10 md:mb-12 tracking-tight leading-[1.1]">
              Développeur Full Stack
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="#contacts" className="inline-flex justify-center items-center bg-[#fd645b] hover:bg-[#e45a52] text-white px-8 md:px-10 py-3.5 md:py-4 rounded font-medium transition-all duration-300 shadow-[0_4px_20px_rgba(253,100,91,0.25)] hover:shadow-[0_4px_25px_rgba(253,100,91,0.4)] hover:-translate-y-0.5 text-[15px] tracking-wide">
                Vous avez un projet ?
              </Link>
              <Link href="#resume" className="inline-flex justify-center items-center border border-[#fd645b] text-[#fd645b] hover:bg-[#fd645b]/5 px-8 md:px-10 py-3.5 md:py-4 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 text-[15px] tracking-wide">
                Mon CV
              </Link>
            </div>
          </div>

          {/* Right Hero (Image Base Layout) */}
          <div className="flex-1 relative flex justify-center items-center h-[400px] md:h-[500px] w-full md:w-1/2 mt-16 md:mt-0">
            {/* Background glow */}
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#fd645b]/5 rounded-full blur-[80px]"></div>

            {/* Abstract rings */}
            <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-[#fd645b]/20 rounded-full z-0"></div>
            <div className="absolute w-[250px] h-[250px] md:w-[320px] md:h-[320px] border border-[#fd645b]/40 rounded-full z-0"></div>

            {/* Accent Shapes matching design < > */}
            <div className="absolute left-0 md:-left-8 top-[30%] text-[#fd645b] text-6xl md:text-[80px] font-thin opacity-30 select-none z-0 tracking-tighter">{"<"}</div>
            <div className="absolute right-0 md:-right-8 bottom-[30%] text-[#fd645b] text-6xl md:text-[80px] font-thin opacity-30 select-none z-0 tracking-tighter">{">"}</div>

            {/* Profile Image Space */}
            <div className="relative z-10 w-[280px] h-[350px] md:w-[340px] md:h-[440px] overflow-hidden flex items-end justify-center group">
              <Image
                src="/img-1.png" // User's image from public directory
                alt="Emanuel Djatika"
                width={340}
                height={440}
                className="object-cover w-full h-[95%] object-bottom transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#131821] to-transparent z-20"></div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16 px-4">
          <Technologies />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 grid md:grid-cols-2 gap-16 md:gap-24 relative">

          {/* Services Column */}
          <div className="relative pl-8 md:pl-12 flex flex-col justify-center order-2 md:order-1">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#fd645b] via-[#fd645b]/30 to-transparent"></div>

            <div className="space-y-12 md:space-y-16">
              <div className="relative group cursor-pointer">
                <div className="absolute -left-[37px] md:-left-[45px] top-4 w-[10px] h-[10px] bg-[#fd645b] rounded-full ring-[6px] ring-[#131821] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white/[0.03] border border-white/5 rounded-xl text-white group-hover:bg-[#fd645b] group-hover:border-[#fd645b] group-hover:shadow-[0_0_20px_rgba(253,100,91,0.3)] transition-all duration-300">
                    <MonitorPlay size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[#fd645b] transition-colors duration-300">Développement Web</h3>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="absolute -left-[37px] md:-left-[45px] top-4 w-[10px] h-[10px] bg-[#fd645b] rounded-full ring-[6px] ring-[#131821] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white/[0.03] border border-white/5 rounded-xl text-white group-hover:bg-[#fd645b] group-hover:border-[#fd645b] group-hover:shadow-[0_0_20px_rgba(253,100,91,0.3)] transition-all duration-300">
                    <Smartphone size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[#fd645b] transition-colors duration-300">Création d'Applications</h3>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div className="absolute -left-[37px] md:-left-[45px] top-4 w-[10px] h-[10px] bg-[#fd645b] rounded-full ring-[6px] ring-[#131821] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white/[0.03] border border-white/5 rounded-xl text-white group-hover:bg-[#fd645b] group-hover:border-[#fd645b] group-hover:shadow-[0_0_20px_rgba(253,100,91,0.3)] transition-all duration-300">
                    <Server size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[#fd645b] transition-colors duration-300">Hébergement Web</h3>
                </div>
              </div>
            </div>
          </div>

          {/* About Text Column */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-4xl md:text-[44px] font-bold mb-8">À propos de moi</h2>
            <p className="text-[#A2ABB8] mb-12 leading-[1.8] text-[17px] font-light">
              Titulaire d'une Licence en Mathématiques Appliquées à l'Informatique, je suis aujourd'hui Développeur Full Stack et Formateur avec plus de 5 ans d'expérience. Fortement impliqué, je conçois des solutions digitales de bout en bout (applications web et mobiles) et j'accompagne de jeunes talents dans la réalisation de leurs projets numériques.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 md:gap-4 pt-10 border-t border-white/5">
              <div className="w-[45%] md:w-auto text-left">
                <div className="text-3xl md:text-4xl font-bold flex items-center mb-3">120 <span className="text-[#fd645b] ml-1.5">+</span></div>
                <div className="text-[11px] md:text-xs text-[#5A6376] uppercase tracking-[0.15em] font-semibold leading-relaxed">Projets<br />Réalisés</div>
              </div>
              <div className="w-[45%] md:w-auto text-left">
                <div className="text-3xl md:text-4xl font-bold flex items-center mb-3">95 <span className="text-[#fd645b] ml-1.5">%</span></div>
                <div className="text-[11px] md:text-xs text-[#5A6376] uppercase tracking-[0.15em] font-semibold leading-relaxed">Satisfaction<br />Clients</div>
              </div>
              <div className="w-[45%] md:w-auto text-left mt-4 md:mt-0">
                <div className="text-3xl md:text-4xl font-bold flex items-center mb-3">5 <span className="text-[#fd645b] ml-1.5">+</span></div>
                <div className="text-[11px] md:text-xs text-[#5A6376] uppercase tracking-[0.15em] font-semibold leading-relaxed">Années<br />d'expérience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Expériences & Parcours Section */}
        <section id="experiences" className="py-24 relative">
          <div className="text-center flex flex-col items-center mb-20">
            <h2 className="text-4xl md:text-[44px] font-bold mb-12">Mon Parcours</h2>
            <div className="flex flex-col items-center justify-center relative">
              <div className="w-[2px] h-24 bg-gradient-to-b from-[#fd645b] to-transparent mb-4 rounded-full"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#fd645b] shadow-[0_0_15px_rgba(253,100,91,0.6)] absolute bottom-0"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {/* Experience Card 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#131821] group-hover:bg-[#fd645b] group-hover:border-[#fd645b] text-[#fd645b] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(253,100,91,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#fd645b]/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="font-bold text-xl text-white">Responsable Dev & Tuteur</h3>
                  <span className="text-sm text-[#fd645b] bg-[#fd645b]/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">2024 - Présent</span>
                </div>
                <p className="text-[#A2ABB8] text-sm mb-2 font-medium">Projet D-CLIC (OIF) / CUBE Incubateur</p>
                <p className="text-gray-400 text-[15px] font-light leading-relaxed">
                  Encadrement technique de l'équipe de développement. Formation et coaching de plus de 40 jeunes dans la conception d'applications web et mobiles.
                </p>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#131821] group-hover:bg-[#fd645b] group-hover:border-[#fd645b] text-[#fd645b] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(253,100,91,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#fd645b]/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="font-bold text-xl text-white">Développeur Full Stack & Fondateur</h3>
                  <span className="text-sm text-[#A2ABB8] bg-white/5 px-3 py-1 rounded-full w-fit whitespace-nowrap">2021 - Présent</span>
                </div>
                <p className="text-[#A2ABB8] text-sm mb-2 font-medium">eBoite & Moger Projets</p>
                <p className="text-gray-400 text-[15px] font-light leading-relaxed">
                  Conception de solutions web sur mesure (eBoite) et développement complet de Moger, une application immobilière innovante pour le marché africain.
                </p>
              </div>
            </div>

            {/* Experience Card 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#131821] group-hover:bg-[#fd645b] group-hover:border-[#fd645b] text-[#fd645b] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(253,100,91,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <GraduationCap size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#fd645b]/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="font-bold text-xl text-white">Licence Maths Appliquées & Certifications</h3>
                  <span className="text-sm text-[#A2ABB8] bg-white/5 px-3 py-1 rounded-full w-fit whitespace-nowrap">2018 - 2023</span>
                </div>
                <p className="text-[#A2ABB8] text-sm mb-2 font-medium">Université de Kara / Udemy / KEKAR</p>
                <p className="text-gray-400 text-[15px] font-light leading-relaxed">
                  Diplômé en Mathématiques Appliquées à l'Informatique. Certifié en Flutter/Dart (Mobile) et Laravel (Web) via des formations complètes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-24 pb-20 relative">
          <div className="text-center flex flex-col items-center mb-24">
            <h2 className="text-4xl md:text-[44px] font-bold mb-12">Projets</h2>
            <div className="flex flex-col items-center justify-center relative">
              <div className="w-[2px] h-24 bg-gradient-to-b from-[#fd645b] to-transparent mb-4 rounded-full"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#fd645b] shadow-[0_0_15px_rgba(253,100,91,0.6)] absolute bottom-0"></div>
            </div>
          </div>

          <div className="flex flex-col gap-20 md:gap-32">
            {projets.map((projet, index) => (
              <a
                key={index}
                href={projet.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
              >
                {/* Image Container (Elegant presentation) */}
                <div className="w-full md:w-3/5 aspect-[16/9] relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 bg-[#fd645b]/10 group-hover:bg-transparent transition-colors z-10 duration-700" />

                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] z-20 rounded-2xl pointer-events-none"></div>

                  <Image
                    src={`/projets/${projet.image}`}
                    alt={projet.title}
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out filter grayscale-[0.3] group-hover:grayscale-0"
                  />

                  {/* Floating Action Button */}
                  <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-30 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-2xl text-white">
                    <ExternalLink size={24} className="group-hover:text-[#fd645b] transition-colors" />
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#fd645b] mb-4 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-[#fd645b]"></span>
                    {projet.type}
                  </span>

                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-[#fd645b] transition-colors duration-500 tracking-tight">
                    {projet.title}
                  </h3>

                  <p className="text-[#A2ABB8] text-lg leading-relaxed mb-8 font-light max-w-lg">
                    {projet.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {projet.tech.map((t) => (
                      <span key={t} className="px-5 py-2 text-[13px] rounded-full bg-white/[0.03] border border-white/10 text-gray-300 font-medium tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

      </main>

      {/* Modern Footer & Contacts */}
      <footer id="contacts" className="w-full bg-[#0c1015] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl md:text-[44px] font-bold mb-6">Prêt à collaborer ?</h2>
              <p className="text-[#A2ABB8] text-[17px] font-light leading-relaxed max-w-md mb-8">
                Que vous ayez un projet en tête ou que vous souhaitiez simplement dire bonjour, n'hésitez pas à me contacter. Mon inbox est toujours ouverte!
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:em.djatika@gmail.com" className="inline-flex items-center gap-3 text-white hover:text-[#fd645b] transition-colors text-lg font-medium w-fit">
                  <Mail size={24} /> em.djatika@gmail.com
                </a>
                <a href="tel:+22898784589" className="inline-flex items-center gap-3 text-white hover:text-[#fd645b] transition-colors text-lg font-medium w-fit">
                  <Phone size={24} /> +228 98 78 45 89
                </a>
              </div>
            </div>
            <div className="flex md:justify-end items-end space-x-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#fd645b] hover:border-[#fd645b] transition-all hover:-translate-y-1 shadow-lg">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#fd645b] hover:border-[#fd645b] transition-all hover:-translate-y-1 shadow-lg">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-[#5A6376] font-medium tracking-wide">
            <p>© {new Date().getFullYear()} Emanuel Djatika. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
