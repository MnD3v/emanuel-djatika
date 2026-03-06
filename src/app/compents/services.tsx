import { motion } from 'framer-motion'
import React from 'react'

const Services = () => {

    const services = [
        { icon: "website.png", titre: "Application Web", description: "Je conçois des applications web modernes et performantes, adaptées à vos besoins pour propulser votre entreprise dans l'ère numérique.", color: "blue", slug: "application-web" },
        { icon: "mobile.png", titre: "Applications Android & iOS", description: "Je développe des applications mobiles intuitives et fonctionnelles pour Android et iOS, optimisées pour offrir la meilleure expérience utilisateur.", color: "amber", slug: "application-mobile" },
        { icon: "design.png", titre: "UI & UX Design", description: "Je crée des interfaces captivantes qui allient esthétisme et facilité d’utilisation, pour une expérience utilisateur optimale.", color: "emerald", slug: "ui-ux-design" },
        { icon: "internet.png", titre: "SEO Marketing", description: "Boostez votre visibilité en ligne grâce à mes stratégies de marketing SEO qui augmentent votre présence sur les moteurs de recherche et attirent plus de clients.", color: "violet", slug: "seo-marketing" },
    ]

    const getColorClass = (color: string) => {
        switch (color) {
            case 'blue': return 'text-blue-500 border-blue-500/20 group-hover:border-blue-500/50';
            case 'amber': return 'text-amber-500 border-amber-500/20 group-hover:border-amber-500/50';
            case 'emerald': return 'text-emerald-500 border-emerald-500/20 group-hover:border-emerald-500/50';
            case 'violet': return 'text-violet-500 border-violet-500/20 group-hover:border-violet-500/50';
            default: return 'text-white border-white/10 group-hover:border-white/30';
        }
    }

    return (
        <section id='services' className='py-12'>
            <div className='mb-16 md:text-left'>
                <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase block mb-3">Expertises Techniques</span>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Mes Services
                </h2>
                <p className='mt-6 text-lg text-gray-400 max-w-2xl leading-relaxed'>
                    Des solutions complètes pour transformer vos idées en réalité numérique, de l'architecture logicielle au déploiement en production.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {services.map((element, index) => (
                    <motion.div
                        key={element.titre}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`p-8 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:-translate-y-1 transition-all duration-300 ${getColorClass(element.color)}`}
                    >
                        <div className="flex flex-col h-full">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                                    <img src={"/icons/" + element.icon} alt="" className='h-6 w-6 object-contain filter invert opacity-80' />
                                </div>
                                <span className={`text-5xl font-bold opacity-10 ${getColorClass(element.color).split(' ')[0]}`}>0{index + 1}</span>
                            </div>

                            <h3 className={`text-xl font-bold mb-3 ${getColorClass(element.color).split(' ')[0]}`}>{element.titre}</h3>
                            <p className='text-gray-400 leading-relaxed text-sm flex-grow'>{element.description}</p>

                            <div className="mt-8 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href={`/services/${element.slug}`} className={`inline-flex items-center text-sm font-semibold transition-colors ${getColorClass(element.color).split(' ')[0]}`}>
                                    Découvrir l'expertise
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Services