"use client"
import Services from "./compents/services";
import About from "./compents/garantis";
import AppBar from "./compents/app_bar";
import Presentation from "./compents/presentation";
import Dispo from "./compents/dispo";
import Technologies from "./compents/technologies";
import Satisfaction from "./compents/satisfaction";
import Realisations from "./compents/realisations";
import Blog from "./compents/BlogList";
import { motion } from "framer-motion";
import { useDevMode } from "./context/DevModeContext";
import VSCodeLayout from "./compents/VSCodeLayout";

export default function Home() {
  const { isDevMode } = useDevMode();

  const componentsMap = {
    "presentation.tsx": <Presentation />,
    "services.tsx": <Services />,
    "garantis.tsx": <About />,
    "satisfaction.tsx": <Satisfaction />,
    "dispo.tsx": <Dispo />,
    "technologies.tsx": <Technologies />,
    "realisations.tsx": <Realisations />,
    "blog.tsx": <Blog isHome={true} />,
    "layout.tsx": <div className="p-4 text-gray-500">{'// Root Layout configuration'}</div>,
    "globals.css": <div className="p-4 text-gray-500">{'/* Global Styles */'}</div>
  };

  if (isDevMode) {
    // Services Data
    const servicesData = [
      { icon: "website.png", titre: "Application Web", description: "Je conçois des applications web modernes et performantes...", color: "neon-blue" },
      { icon: "mobile.png", titre: "Applications Android & iOS", description: "Je développe des applications mobiles intuitives...", color: "neon-orange" },
      { icon: "design.png", titre: "UI & UX Design", description: "Je crée des interfaces captivantes...", color: "neon-green" },
      { icon: "internet.png", titre: "SEO Marketing", description: "Boostez votre visibilité en ligne...", color: "neon-purple" },
    ];

    // Projects Data
    const projectsData = [
      { image: "eboite.png", title: "La BAN", type: "Site web" },
      { image: "cemena.png", title: "Cemena", type: "Site web" },
      { image: "orphelinat.png", title: "Orphelinat Yendoubé", type: "Site web" },
      { image: "moger.png", title: "Moger", type: "Application mobile" }
    ];

    // Helper to render a generic code-like card
    interface CodeCardProps {
      title: string;
      type: string;
      color?: string;
    }

    // Helper to render a generic code-like card
    const CodeCard = ({ title, type, color = "neon-blue" }: CodeCardProps) => (
      <div className="p-8 border border-white/10 rounded bg-[#1e1e1e] max-w-xl mx-auto mt-10">
        <h2 className={`text-2xl font-bold mb-4 text-${color}`}>{title}</h2>
        <div className="font-mono text-sm text-gray-400">
          <p><span className="text-pink-400">const</span> {title.replace(/\s+/g, '')} = <span className="text-yellow-300">()</span> <span className="text-pink-400">=&gt;</span> {'{'}</p>
          <p className="pl-4"><span className="text-pink-400">return</span> (</p>
          <p className="pl-8">&lt;<span className="text-green-400">div</span> className="<span className="text-orange-300">service-card</span>"&gt;</p>
          <p className="pl-12 text-gray-500">{`// ${type} implementation...`}</p>
          <p className="pl-12">&lt;h3&gt;{title}&lt;/h3&gt;</p>
          <p className="pl-8">&lt;/<span className="text-green-400">div</span>&gt;</p>
          <p className="pl-4">);</p>
          <p>{'}'};</p>
          <br />
          <p><span className="text-pink-400">export default</span> {title.replace(/\s+/g, '')};</p>
        </div>
      </div>
    );

    const componentsMap = {
      "presentation.tsx": <Presentation />,

      // Services Folder
      "services/index.tsx": <Services />,
      "services/ApplicationWeb.tsx": <CodeCard title="Application Web" type="Service" color="neon-blue" />,
      "services/MobileApps.tsx": <CodeCard title="Mobile Apps" type="Service" color="neon-orange" />,
      "services/UIDesign.tsx": <CodeCard title="UI Design" type="Service" color="neon-green" />,
      "services/SEO.tsx": <CodeCard title="SEO Marketing" type="Service" color="neon-purple" />,

      // Projects Folder
      "projets/index.tsx": <Realisations />,
      "projets/LaBAN.tsx": <CodeCard title="La BAN" type="Project" />,
      "projets/Cemena.tsx": <CodeCard title="Cemena" type="Project" />,
      "projets/Orphelinat.tsx": <CodeCard title="Orphelinat" type="Project" />,
      "projets/Moger.tsx": <CodeCard title="Moger" type="Project" />,

      // Blog Folder
      "blog/index.tsx": <Blog isHome={true} />,

      // Other Top Level
      "contact.tsx": <div className="p-8 font-mono text-center text-gray-400">Contact Form Component</div>,
      "about.tsx": <About />,
      "technologies.tsx": <Technologies />,
      "layout.tsx": <div className="p-4 text-gray-500 font-mono">{'// Root Layout configuration'}</div>,
      "globals.css": <div className="p-4 text-gray-500 font-mono">{'/* Global Styles for Tailwind and Custom Classes */'}</div>
    };

    return <VSCodeLayout components={componentsMap} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <AppBar fixed={true} logo="/logo.png" menuIcon="/icons/menu.png" />

      <main className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full pt-10 pb-20">
          <Presentation />
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <Services />
          </div>
        </section>

        {/* About / Guarantee */}
        <section className="w-full py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <About />
          </div>
        </section>

        {/* Satisfaction */}
        <section className="w-full py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <Satisfaction />
          </div>
        </section>

        {/* Availability */}
        <section className="w-full py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <Dispo />
          </div>
        </section>

        {/* Technologies */}
        <section className="w-full py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <Technologies />
          </div>
        </section>

        {/* Realisations / Work */}
        <section className="w-full py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <Realisations />
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="w-full border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <Blog isHome={true} />
          </div>
        </section>
      </main>
    </div>
  );
}
