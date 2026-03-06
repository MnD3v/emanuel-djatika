"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Realisations = () => {
    const projets = [
        {
            image: "eboite.png",
            link: "https://eboite.co/",
            title: "La BAN",
            description: "Plateforme moderne de gestion d'avis numériques pour les entreprises africaines.",
            type: "Site web",
            tech: ["Next.js", "TypeScript", "Supabase"],
            color: "blue"
        },
        {
            image: "cemena.png",
            link: "https://www.cemena-togo.com/",
            title: "Cemena",
            description: "Site institutionnel premium pour des solutions naturelles de santé et bien-être.",
            type: "Site web",
            tech: ["React", "Tailwind", "CMS"],
            color: "emerald"
        },
        {
            image: "orphelinat.png",
            link: "https://yendoube.vercel.app/",
            title: "Orphelinat Yendoubé",
            description: "Plateforme de soutien humanitaire pour favoriser la solidarité et les dons.",
            type: "Site web",
            tech: ["Next.js", "Sanity", "Framer Motion"],
            color: "violet"
        },
        {
            image: "moger.png",
            link: "https://play.google.com/store/apps/details?id=com.equilibre.moger",
            title: "Moger",
            description: "Application mobile immobilière complète pour simplifier la gestion de biens.",
            type: "Application mobile",
            tech: ["Flutter", "Firebase", "Dart"],
            color: "amber"
        }
    ]

    const getAccentColor = (color: string) => {
        switch (color) {
            case 'blue': return { border: 'hover:border-blue-500/30', badge: 'bg-blue-500/10 text-blue-400', overlay: 'group-hover:bg-blue-500/10', title: 'group-hover:text-blue-400', tag: 'text-blue-400' }
            case 'emerald': return { border: 'hover:border-emerald-500/30', badge: 'bg-emerald-500/10 text-emerald-400', overlay: 'group-hover:bg-emerald-500/10', title: 'group-hover:text-emerald-400', tag: 'text-emerald-400' }
            case 'violet': return { border: 'hover:border-violet-500/30', badge: 'bg-violet-500/10 text-violet-400', overlay: 'group-hover:bg-violet-500/10', title: 'group-hover:text-violet-400', tag: 'text-violet-400' }
            case 'amber': return { border: 'hover:border-amber-500/30', badge: 'bg-amber-500/10 text-amber-400', overlay: 'group-hover:bg-amber-500/10', title: 'group-hover:text-amber-400', tag: 'text-amber-400' }
            default: return { border: 'hover:border-white/20', badge: 'bg-white/10 text-gray-400', overlay: 'group-hover:bg-white/10', title: 'group-hover:text-white', tag: 'text-gray-400' }
        }
    }

    return (
        <section className='py-12'>
            {/* Header */}
            <div className='mb-16 md:text-left text-center'>
                <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase block mb-3">Portfolio</span>
                <h2 className='text-3xl md:text-5xl font-bold tracking-tight text-white mb-4'>Projets Récents</h2>
                <p className="text-gray-400 text-lg max-w-2xl">
                    Une sélection de projets livrés avec précision, alliant performance, design et architecture solide.
                </p>
            </div>

            {/* Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {projets.map((element, index) => {
                    const colors = getAccentColor(element.color)
                    return (
                        <motion.a
                            key={element.title}
                            href={element.link}
                            target='_blank'
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group block rounded-2xl bg-white/[0.02] border border-white/5 ${colors.border} transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-2xl`}
                        >
                            {/* Image zone */}
                            <div className='h-56 overflow-hidden relative'>
                                <div className={`absolute inset-0 bg-transparent ${colors.overlay} transition-colors z-10`} />
                                {/* External link icon */}
                                <div className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                                <img
                                    src={`/projets/${element.image}`}
                                    alt={element.title}
                                    className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale-[0.6] group-hover:grayscale-0'
                                />
                            </div>

                            {/* Content */}
                            <div className='p-6'>
                                {/* Type + Title row */}
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div>
                                        <span className={`text-xs font-bold uppercase tracking-widest ${colors.tag} block mb-1`}>{element.type}</span>
                                        <h3 className={`text-xl font-bold text-white ${colors.title} transition-colors duration-300`}>{element.title}</h3>
                                    </div>
                                    <div className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} border border-current/20`}>
                                        #{index + 1}
                                    </div>
                                </div>

                                <p className='text-gray-400 text-sm leading-relaxed mb-4'>{element.description}</p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2">
                                    {element.tech.map((t) => (
                                        <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-400 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    )
                })}
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center mt-12"
            >
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all text-sm font-medium"
                >
                    Discutons de votre prochain projet
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </motion.div>
        </section>
    )
}

export default Realisations