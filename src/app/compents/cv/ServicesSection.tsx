"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
    const services = [
        { num: "01/", title: "Développement Web", desc: "Conception de solutions web performantes, responsives et modernes." },
        { num: "02/", title: "Création d'Applications", desc: "Développement natif et multiplateforme d'applications mobiles intuitives et robustes." },
        { num: "03/", title: "Hébergement Web", desc: "Déploiement sécurisé, maintenance proactive et hébergement de vos plateformes." },
    ];

    return (
        <section id="services" className="min-h-screen py-32 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 w-max mb-16"
            >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase">Mes Services</span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-16"
            >
                Ce que je propose
            </motion.h2>

            <div className="flex flex-col gap-6">
                {services.map((svc, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="group relative bg-white/[0.02] border border-white/[0.08] p-8 rounded-3xl flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-white/[0.04] hover:border-primary/30 transition-colors overflow-hidden"
                    >
                        {/* Hover green background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        <div className="flex items-start gap-6 z-10">
                            <span className="text-primary font-bold text-xl mt-1">{svc.num}</span>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{svc.title}</h3>
                                <p className="text-zinc-400 max-w-2xl">{svc.desc}</p>
                            </div>
                        </div>

                        <button className="z-10 bg-white/[0.05] border border-white/[0.08] w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-zinc-950 transition-all self-start md:self-center">
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
