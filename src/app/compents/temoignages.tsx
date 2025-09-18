import { motion } from 'framer-motion';
import React from 'react'

const Temoignages = () => {
    const temoignages = [
        {
            nom: "Lucile Allegre",
            poste: "Responsable Développement Marketing LUXOV",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
            texte: "J'ai eu le plaisir de travailler avec Célian et son équipe de l'Agence 1600, et je ne peux que témoigner de l'excellence de leur travail !"
        },
        {
            nom: "Rose-Marie CHAMIEH",
            poste: "CMO Maddyness",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            texte: "Célian et ses équipes ont fait un travail remarquable en un temps record! Nous avons travaillé main dans la main pendant 3 semaines pour présenter 2 vidéos lors de notre événement. Un vrai game changer!"
        },
        {
            nom: "Johan Lelièvre",
            poste: "Youtubeur",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
            texte: "Très motivé, il met du cœur à l'ouvrage et je reste impressionné par ses compétences pour chaque projet."
        },
        {
            nom: "Marie Dubois",
            poste: "CEO TechStart",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            texte: "Réaliser une vidéo de qualité avec plusieurs allers-retours pour ajuster les détails, excellente communication, ce qui a dépassé nos attentes. Je recommande vivement !"
        }
    ]

    const clients = [
        { nom: "Intermarché", logo: "Intermarché" },
        { nom: "Sellsy", logo: "sellsy" },
        { nom: "Mercedes-Benz", logo: "Mercedes-Benz" },
        { nom: "SEMRUSH", logo: "SEMRUSH" },
        { nom: "TotalEnergies", logo: "TotalEnergies" },
        { nom: "JunoJourney", logo: "JunoJourney" }
    ]

    // Pas besoin de state pour le défilement infini

    return (
        <section id='temoignages' className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
            <div className="w-full max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight heading-primary"
                    >
                        <span className="text-[#FF2600]">Témoignages</span>
                        <br />
                        Clients
                    </motion.h2>
                </div>

                {/* Témoignages Défilement Infini avec Effet Flou */}
                <div className="mb-16 relative overflow-hidden">
                    {/* Masque de flou au début - Effet plus prononcé */}
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/90 to-white/20 z-10 pointer-events-none"></div>
                    
                    {/* Masque de flou à la fin - Effet plus prononcé */}
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/90 to-white/20 z-10 pointer-events-none"></div>
                    
                    
                    <motion.div 
                        className="flex gap-6"
                        animate={{ 
                            x: [0, -320 * temoignages.length]
                        }}
                        transition={{ 
                            duration: 20, // 20 secondes pour un cycle complet
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    >
                        {/* Dupliquer les témoignages pour le défilement infini */}
                        {[...temoignages, ...temoignages].map((temoignage, index) => (
                            <motion.div
                                key={`${temoignage.nom}-${index}`}
                                className="flex-shrink-0 w-80 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-[#FF2600]/10 transition-all duration-300"
                                whileHover={{ scale: 1.02, y: -2 }}
                            >
                                {/* Quote Icon - Gros "66" orange */}
                                <div className="mb-4">
                                    <div className="text-2xl sm:text-3xl md:text-4xl text-[#FF2600] font-bold leading-none font-dm">"</div>
                                </div>
                                
                                {/* Testimonial Text - DM Sans avec interlignage réduit */}
                                <p className="text-gray-700 text-xs sm:text-sm leading-tight mb-6 font-dm">
                                    {temoignage.texte}
                                </p>
                                
                                {/* Author Info */}
                                <div className="flex items-center">
                                    <img 
                                        src={temoignage.avatar} 
                                        alt={temoignage.nom}
                                        className="w-10 h-10 rounded-full object-cover mr-3"
                                    />
                                    <div>
                                        <motion.h4 
                                            initial={{ filter: "blur(20px)", opacity: 0 }}
                                            animate={{ filter: "blur(0px)", opacity: 1 }}
                                            transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) + 0.1 }}
                                            className="font-bold text-gray-900 text-xs sm:text-sm font-dm leading-tight"
                                        >
                                            {temoignage.nom}
                                        </motion.h4>
                                        <p className="text-gray-600 text-xs font-dm leading-tight">
                                            {temoignage.poste}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Clients Logos Section - Fond gris plus foncé */}
                <motion.div
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="bg-gray-200 rounded-xl p-8"
                >
                    {/* Logos en ligne horizontale */}
                    <div className="flex items-center justify-center gap-12 overflow-x-auto">
                        {clients.map((client, index) => (
                            <motion.div
                                key={client.nom}
                                initial={{ filter: "blur(20px)", opacity: 0, scale: 0.8 }}
                                animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.0 + (index * 0.1) }}
                                className="flex-shrink-0 text-gray-400 text-xs sm:text-sm font-medium hover:text-[#FF2600] transition-colors duration-300 font-dm"
                            >
                                {client.logo}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Temoignages
