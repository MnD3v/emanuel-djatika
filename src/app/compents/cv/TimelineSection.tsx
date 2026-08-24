"use client";
import { motion } from "framer-motion";

export default function TimelineSection() {
    const experiences = [
        {
            title: "Responsable Dev & Tuteur",
            company: "Projet D-CLIC (OIF) / CUBE Incubateur",
            date: "2024 - Présent",
            description: "Encadrement technique de l'équipe de développement. Formation et coaching de plus de 40 jeunes dans la conception d'applications web et mobiles."
        },
        {
            title: "Développeur Full Stack & Fondateur",
            company: "eBoite & Moger Projets",
            date: "2021 - Présent",
            description: "Conception de solutions web sur mesure (eBoite) et développement complet de Moger, une application immobilière innovante pour le marché africain."
        },
        {
            title: "Licence Maths Appliquées & Cert.",
            company: "Université de Kara / Udemy / KEKAR",
            date: "2018 - 2023",
            description: "Diplômé en Mathématiques Appliquées à l'Informatique. Certifié en Flutter/Dart (Mobile) et Laravel (Web) via des formations complètes."
        }
    ];

    return (
        <section id="resume" className="min-h-screen py-32 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 w-max mb-16"
            >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase">Mon Parcours</span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-4xl md:text-5xl font-bold mb-16"
            >
                Expériences & Parcours
            </motion.h2>

            <div className="relative pl-8 md:pl-12 ml-4 flex flex-col gap-12">
                {/* The persistent vertical line */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ originY: 0 }}
                    className="absolute left-0 top-2 bottom-0 w-[1px] bg-border z-0"
                />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative group"
                    >
                        {/* Timeline Dots */}
                        <div className="absolute -left-8 md:-left-12 top-1 -translate-x-1/2 flex items-center justify-center z-10">
                            <div className="w-5 h-5 rounded-full bg-[#131313] border-2 border-primary transition-transform group-hover:scale-125 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                                <p className="text-lg text-zinc-400">{exp.company}</p>
                            </div>

                            <div className="bg-[#171719] border border-border px-4 py-2 rounded-full text-sm text-zinc-300 whitespace-nowrap self-start md:self-auto">
                                {exp.date}
                            </div>
                        </div>

                        <p className="text-zinc-400 leading-relaxed max-w-2xl">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
