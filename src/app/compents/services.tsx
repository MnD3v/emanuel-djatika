import { motion } from 'framer-motion'
import React from 'react'

const Services = () => {

    const services = [
        { icon: "website.png", titre: "Application Web", description: "Je conçois des applications web modernes et performantes, adaptées à vos besoins pour propulser votre entreprise dans l'ère numérique.", color: "neon-blue", rotate: "rotate-1", slug: "application-web" },
        { icon: "mobile.png", titre: "Applications Android & iOS", description: "Je développe des applications mobiles intuitives et fonctionnelles pour Android et iOS, optimisées pour offrir la meilleure expérience utilisateur.", color: "neon-orange", rotate: "-rotate-1", slug: "application-mobile" },
        { icon: "design.png", titre: "UI & UX Design", description: "Je crée des interfaces captivantes qui allient esthétisme et facilité d’utilisation, pour une expérience utilisateur optimale.", color: "neon-green", rotate: "rotate-2", slug: "ui-ux-design" },
        { icon: "internet.png", titre: "SEO Marketing", description: "Boostez votre visibilité en ligne grâce à mes stratégies de marketing SEO qui augmentent votre présence sur les moteurs de recherche et attirent plus de clients.", color: "neon-purple", rotate: "-rotate-2", slug: "seo-marketing" },
    ]

    return (
        <section id='services' className='py-12'>
            <div className='mb-16 md:text-left'>
                <span className="font-handwritten text-neon-green text-xl md:text-2xl block mb-2 transform -rotate-2">Ce que je fais de mieux</span>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Mes Services
                </h2>
                <p className='mt-6 text-lg text-gray-400 max-w-2xl leading-relaxed'>
                    Des solutions complètes pour transformer vos idées en réalité numérique, du design à la mise en ligne.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {services.map((element, index) => (
                    <motion.div
                        key={element.titre}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`sketchy-box p-8 md:p-10 relative bg-background/40 backdrop-blur-sm group hover:transform hover:scale-[1.02] transition-transform ${element.rotate}`}
                        style={{ borderColor: `var(--${element.color})` }}
                    >
                        <div className="absolute top-0 right-0 -mt-3 mr-6 bg-background px-2 border rounded transform rotate-2" style={{ borderColor: `var(--${element.color})` }}>
                            <span className="text-2xl font-bold tracking-widest font-handwritten uppercase" style={{ color: `var(--${element.color})` }}>0{index + 1}</span>
                        </div>

                        <div className="flex flex-col h-full">
                            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10">
                                <img src={"/icons/" + element.icon} alt="" className='h-8 w-8 object-contain' style={{ filter: 'brightness(0) invert(1)' }} />
                            </div>

                            <h3 className='text-2xl font-bold text-white mb-4' style={{ color: `var(--${element.color})` }}>{element.titre}</h3>
                            <p className='text-gray-300 leading-relaxed text-base flex-grow font-light'>{element.description}</p>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                <a href={`/services/${element.slug}`} className="inline-flex items-center text-sm font-bold text-white hover:underline decoration-2 underline-offset-4" style={{ textDecorationColor: `var(--${element.color})` }}>
                                    En savoir plus
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