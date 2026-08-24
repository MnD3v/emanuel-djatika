"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section id="about" className="min-h-screen pt-20 pb-32 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 w-max mb-8"
            >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase">About</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl font-extrabold mb-6"
            >
                Bonjour. Je suis <span className="text-primary">Emanuel</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-zinc-200 mb-8 max-w-2xl leading-tight"
            >
                Développeur Full Stack
            </motion.h2>

            {/* Bio Paragraph */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-16"
            >
                Titulaire d'une Licence en Mathématiques Appliquées à l'Informatique, je suis aujourd'hui Développeur Full Stack et Formateur avec plus de 5 ans d'expérience. Fortement impliqué, je conçois des solutions digitales de bout en bout (applications web et mobiles) et j'accompagne de jeunes talents dans la réalisation de leurs projets.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors">
                    <h3 className="text-6xl md:text-7xl font-bold mb-2 text-white">5+</h3>
                    <p className="text-zinc-400 text-sm font-medium tracking-wide">Années d'expérience</p>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors">
                    <h3 className="text-6xl md:text-7xl font-bold mb-2 text-white">95%</h3>
                    <p className="text-zinc-400 text-sm font-medium tracking-wide">Satisfaction Clients</p>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors">
                    <h3 className="text-6xl md:text-7xl font-bold mb-2 text-white">120+</h3>
                    <p className="text-zinc-400 text-sm font-medium tracking-wide">Projets Réalisés</p>
                </div>
            </motion.div>
        </section>
    );
}
