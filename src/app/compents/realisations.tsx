import { motion } from 'framer-motion'
import React from 'react'

const Realisations = () => {
    const projets = [
        { 
            image: "eboite.png", 
            link: "https://eboite.co/", 
            title: "La BAN", 
            subtitle: "Plateforme de gestion d'avis",
            category: "E-commerce",
            tech: ["React", "Next.js", "TypeScript"]
        },
        { 
            image: "cemena.png", 
            link: "https://www.cemena-togo.com/", 
            title: "Cemena Togo", 
            subtitle: "Solutions naturelles pour la santé",
            category: "Santé",
            tech: ["Vue.js", "Node.js", "MongoDB"]
        },
        { 
            image: "orphelinat.png", 
            link: "https://yendoube.vercel.app/", 
            title: "Yendoube", 
            subtitle: "Soutenir un démuni pour un monde meilleur",
            category: "Humanitaire",
            tech: ["React", "Tailwind", "Vercel"]
        },
        { 
            image: "moger.png", 
            link: "https://play.google.com/store/apps/details?id=com.equilibre.moger", 
            title: "Moger", 
            subtitle: "Un bien immobilier pour tous",
            category: "Immobilier",
            tech: ["Flutter", "Firebase", "Dart"]
        }
    ]

    return (
        <section id="realisations" className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
            <div className="w-full max-w-6xl mx-auto">
                {/* Section Header - Style minimaliste */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 heading-primary"
                    >
                        Nos <span className="text-[#FF2600]">Projets</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Solutions créatives pour des clients exigeants
                    </motion.p>
                </div>

                {/* Projects Grid - Design compact et moderne */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projets.map((projet, index) => (
                        <motion.div
                            key={projet.image}
                            initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
                            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                            className="group relative"
                        >
                            <a
                                href={projet.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#FF2600] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#FF2600]/5">
                                    {/* Project Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img 
                                            src={`/projets/${projet.image}`} 
                                            alt={projet.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#FF2600] text-white">
                                                {projet.category}
                                            </span>
                                        </div>
                                        
                                        {/* Hover Arrow */}
                                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/90 rounded-full p-2">
                                                <svg className="w-4 h-4 text-[#FF2600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Project Info */}
                                    <div className="p-4">
                                        <motion.h3 
                                            initial={{ filter: "blur(20px)", opacity: 0 }}
                                            animate={{ filter: "blur(0px)", opacity: 1 }}
                                            transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) + 0.1 }}
                                            className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF2600] transition-colors duration-300 heading-secondary"
                                        >
                                            {projet.title}
                                        </motion.h3>
                                        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                                            {projet.subtitle}
                                        </p>
                                        
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-1">
                                            {projet.tech.slice(0, 2).map((tech, techIndex) => (
                                                    <span 
                                                        key={tech}
                                                    className="px-1 sm:px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded hover:bg-[#FF2600]/10 hover:text-[#FF2600] transition-colors duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            {projet.tech.length > 2 && (
                                                <span className="px-1 sm:px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                                                    +{projet.tech.length - 2}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* CTA minimaliste */}
                <motion.div
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="/portfolio"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center text-[#FF2600] font-semibold hover:text-[#FF4500] transition-colors duration-300 group text-sm sm:text-base"
                    >
                        Voir tous les projets
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Realisations