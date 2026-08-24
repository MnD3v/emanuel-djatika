"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioSection() {
    const projects = [
        { category: "Site web", title: "La BAN", image: "/projets/eboite1.png" },
        { category: "Application mobile", title: "Ardoiz", image: "/projets/ardoiz.png" },
        { category: "Application web", title: "Eglix", image: "/projets/eglix.png" },
        { category: "Application web", title: "Immomanager", image: "/projets/immomanager.png" },
        { category: "Application mobile", title: "Moger", image: "/projets/moger.png" },
        { category: "Site web", title: "Cemena", image: "/projets/cemena.png" }
    ];

    return (
        <section id="portfolio" className="min-h-screen py-32 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 w-max mb-16"
            >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase">Portfolio</span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-16"
            >
                Featured Projects
            </motion.h2>

            <div className="flex flex-col gap-10">
                {projects.map((proj, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group cursor-pointer flex flex-col bg-white/[0.03] border border-white/[0.08] p-6 md:p-8 rounded-[32px] hover:border-primary/30 transition-all"
                    >
                        {/* Image Wrapper */}
                        <div className="relative w-full aspect-video rounded-[24px] overflow-hidden mb-6 block">
                            <Image src={proj.image} alt={proj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />

                            {/* Overlay shadow for the tag */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-0 pointer-events-none" />

                            {/* Tag (.tag) */}
                            <div className="absolute bottom-6 left-6 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                                <span className="bg-primary text-zinc-950 text-[11px] md:text-xs font-extrabold px-6 py-2.5 rounded-full tracking-widest uppercase shadow-xl hover:-translate-y-1 inline-block transition-transform">
                                    {proj.category}
                                </span>
                            </div>
                        </div>

                        {/* Title */}
                        <h5 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-primary transition-colors text-left px-2">
                            {proj.title}
                        </h5>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
