"use client"
import { motion } from 'framer-motion'
import React from 'react'

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/emanueldjatika",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        )
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/emanueldjatika",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    },
    {
        label: "Contact",
        href: "/contact",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    }
]

const Presentation = () => {
    return (
        <div className="pt-24 pb-16 w-full max-w-5xl mx-auto px-6">

            {/* Hero */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 mb-24 pt-10">

                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 text-center lg:text-left"
                >
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Disponible pour de nouveaux projets
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight leading-tight"
                    >
                        Emanuel<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400">
                            Djatika
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4"
                    >
                        <span className="text-white font-medium">Développeur Web & Mobile</span> — je conçois des architectures robustes et des interfaces premium qui font la différence.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="text-base text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
                    >
                        Je crois que le code doit être{' '}
                        <span className="text-blue-400">accessible</span>,{' '}
                        <span className="text-emerald-400">performant</span>{' '}
                        et{' '}
                        <span className="text-violet-400">durable</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
                    >
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-blue-500/25 ring-1 ring-white/10"
                        >
                            Voir mes projets
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/10 hover:border-white/20 transition-all"
                        >
                            Me contacter
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-3 justify-center lg:justify-start"
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                title={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right: Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex-shrink-0 relative"
                >
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                        {/* Glow rings */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-emerald-500/20 blur-2xl scale-110" />
                        <div className="absolute inset-0 rounded-full border border-blue-500/20" />
                        <div className="absolute -inset-2 rounded-full border border-white/5" />

                        {/* Photo */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                            <img
                                src="/profile.jpg"
                                alt="Emanuel Djatika"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback to initials avatar
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        parent.classList.add('bg-gradient-to-br', 'from-blue-900/80', 'to-violet-900/80', 'flex', 'items-center', 'justify-center');
                                        const div = document.createElement('div');
                                        div.className = 'text-6xl font-bold text-white/60 select-none';
                                        div.textContent = 'ED';
                                        parent.appendChild(div);
                                    }
                                }}
                            />
                        </div>

                        {/* Floating badge: ZashCode */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="absolute -bottom-4 -right-4 bg-background border border-white/10 rounded-xl px-4 py-2 shadow-xl flex items-center gap-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-sm font-semibold text-white">ZashCode</span>
                        </motion.div>

                        {/* Floating badge: 20+ projets */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -top-4 -left-4 bg-background border border-white/10 rounded-xl px-4 py-2 shadow-xl"
                        >
                            <span className="text-sm font-bold text-emerald-400">20+</span>
                            <span className="text-xs text-gray-400 ml-1">projets livrés</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Experience Cards */}
            <div className="space-y-6">
                {/* Currently Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 shadow-xl"
                >
                    <div className="absolute top-0 left-8 -mt-4 bg-background px-4 py-1 border border-white/10 rounded-full flex items-center shadow-sm">
                        <span className="text-blue-400 tracking-wider text-[11px] font-bold uppercase">Mission Actuelle</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-6 mt-2">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Je conçois des architectures web robustes et des interfaces mobiles intuitives chez <strong className="text-white font-semibold">ZashCode</strong>.
                            </p>
                            <a href="#work" className="inline-flex items-center mt-4 text-sm text-blue-400 font-medium hover:text-blue-300 transition-colors gap-1">
                                Voir mes projets récents <span>→</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Before That Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 relative md:w-11/12 ml-auto group hover:bg-white/[0.04] hover:border-amber-500/30 transition-all duration-300 shadow-xl"
                >
                    <div className="absolute top-0 right-8 -mt-4 bg-background px-4 py-1 border border-white/10 rounded-full flex items-center shadow-sm">
                        <span className="text-amber-500 tracking-wider text-[11px] font-bold uppercase">Parcours</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-6 mt-2">
                        <div className="flex-shrink-0 order-1 md:order-2">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                        </div>
                        <div className="order-2 md:order-1 flex-1 md:text-right">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                J'ai accompagné diverses entreprises dans leur transformation digitale, optimisant leurs processus et leur visibilité.
                            </p>
                            <a href="/about" className="inline-flex items-center md:flex-row-reverse mt-4 text-sm text-amber-500 font-medium hover:text-amber-400 transition-colors gap-1">
                                En savoir plus <span>←</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Presentation