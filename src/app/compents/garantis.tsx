import { motion } from 'framer-motion'
import React from 'react'

const Garantis = () => {
    const garantis = [
        { 
            titre: "Sécurité & Robustesse", 
            description: "Protection maximale de vos données et infrastructure fiable",
            icon: "security"
        },
        { 
            titre: "Interface Intuitive", 
            description: "Expérience utilisateur optimale et navigation simplifiée",
            icon: "interface"
        },
        { 
            titre: "Performance Optimisée", 
            description: "Vitesse de chargement rapide et réactivité maximale",
            icon: "performance"
        },
        { 
            titre: "Code Maintenable", 
            description: "Architecture propre et évolutive pour l'avenir",
            icon: "code"
        },
        { 
            titre: "Développement Agile", 
            description: "Méthodologie itérative et ajustements rapides",
            icon: "agile"
        },
        { 
            titre: "Support 24/7", 
            description: "Assistance technique disponible en permanence",
            icon: "support"
        }
    ]

    const getIcon = (iconName: string) => {
        const icons = {
            security: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Bouclier moderne avec cadenas intégré */}
                    <defs>
                        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="currentColor" stopOpacity="1"/>
                        </linearGradient>
                    </defs>
                    <path fill="url(#shieldGrad)" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    <path fill="currentColor" d="M9 10h6v4H9v-4zm2 2h2v2h-2v-2z"/>
                    <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.6"/>
                </svg>
            ),
            interface: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Interface moderne avec éléments interactifs */}
                    <defs>
                        <linearGradient id="interfaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.7"/>
                            <stop offset="100%" stopColor="currentColor" stopOpacity="1"/>
                        </linearGradient>
                    </defs>
                    <rect x="3" y="4" width="18" height="3" rx="1.5" fill="url(#interfaceGrad)"/>
                    <rect x="3" y="9" width="12" height="2" rx="1" fill="currentColor" opacity="0.6"/>
                    <rect x="3" y="13" width="15" height="2" rx="1" fill="currentColor" opacity="0.4"/>
                    <rect x="3" y="17" width="8" height="2" rx="1" fill="currentColor" opacity="0.3"/>
                    <circle cx="18" cy="10" r="2" fill="currentColor" opacity="0.8"/>
                    <path d="M17 10l1 1 2-2" stroke="white" strokeWidth="1" fill="none"/>
                </svg>
            ),
            performance: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Graphique de performance avec flèche ascendante */}
                    <defs>
                        <linearGradient id="perfGrad" x1="0%" y1="100%" y2="0%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="currentColor" stopOpacity="1"/>
                        </linearGradient>
                    </defs>
                    <path fill="url(#perfGrad)" d="M3 17h2v-4h2v6h2v-8h2v10h2v-12h2v14h2v-16h2v18h2V3h2v18"/>
                    <path d="M15 8l3 3-3 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="18" cy="11" r="1.5" fill="currentColor"/>
                </svg>
            ),
            code: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Code moderne avec accolades et symboles */}
                    <defs>
                        <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="currentColor" stopOpacity="1"/>
                        </linearGradient>
                    </defs>
                    <path fill="url(#codeGrad)" d="M8 4l-6 8 6 8 1.4-1.4L4.8 12l4.6-6.6L8 4zm8 0l-1.4 1.4L19.2 12l-4.6 6.6L16 20l6-8-6-8z"/>
                    <path fill="currentColor" d="M12 6h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" opacity="0.6"/>
                    <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.4"/>
                </svg>
            ),
            agile: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Flèches circulaires représentant l'agilité */}
                    <defs>
                        <linearGradient id="agileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.6"/>
                            <stop offset="100%" stopColor="currentColor" stopOpacity="1"/>
                        </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="10" fill="none" stroke="url(#agileGrad)" strokeWidth="2"/>
                    <path fill="currentColor" d="M8 12l2-2 2 2 2-2 2 2" opacity="0.8"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
                    <path d="M12 9l1.5 1.5L12 12l-1.5-1.5L12 9z" fill="currentColor"/>
                </svg>
            ),
            support: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Support avec casque et bulle de chat */}
                    <defs>
                        <linearGradient id="supportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.7"/>
                            <stop offset="100%" stopColor="currentColor" stopOpacity="1"/>
                        </linearGradient>
                    </defs>
                    <path fill="url(#supportGrad)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    <path fill="currentColor" d="M8 10h8v2H8v-2zm0 3h6v2H8v-2z" opacity="0.9"/>
                    <circle cx="12" cy="8" r="1.5" fill="currentColor" opacity="0.6"/>
                    <path d="M12 6l1 1-1 1-1-1 1-1z" fill="currentColor"/>
                    <path d="M19 15l-2 2-2-2 2-2 2 2z" fill="currentColor" opacity="0.7"/>
                </svg>
            )
        }
        return icons[iconName as keyof typeof icons] || icons.security
    }
    
    return (
        <section id='garantis' className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
            <div className="w-full max-w-7xl mx-auto">
                {/* Section Header - Style 1600.agency */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight heading-primary"
                    >
                        Nos <span className="text-[#FF2600]">Garanties</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed"
                    >
                        Nous vous garantissons des solutions de haute qualité qui répondent aux standards les plus exigeants de l'industrie.
                    </motion.p>
                </div>
                
                {/* Garanties Grid - Style épuré */}
            <motion.div
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    {garantis.map((garantie, index) => (
                        <motion.div
                            key={garantie.titre}
                            initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
                            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                            className="group relative bg-white rounded-2xl p-8 hover:shadow-xl hover:shadow-[#FF2600]/10 transition-all duration-300 border border-gray-100"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-[#FF2600]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF2600]/20 transition-colors duration-300">
                                <div className="text-[#FF2600]">
                                    {getIcon(garantie.icon)}
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div>
                                <motion.h3 
                                    initial={{ filter: "blur(20px)", opacity: 0 }}
                                    animate={{ filter: "blur(0px)", opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) + 0.1 }}
                                    className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-[#FF2600] transition-colors heading-secondary"
                                >
                                    {garantie.titre}
                                </motion.h3>
                            
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    {garantie.description}
                            </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* Stats Section - Style minimaliste */}
                <motion.div 
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { number: "98%", label: "Satisfaction Client" },
                        { number: "120+", label: "Projets Réalisés" },
                        { number: "15+", label: "Années d'Expérience" },
                        { number: "24/7", label: "Support Technique" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.6 + (index * 0.1) }}
                            className="text-center"
                        >
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 heading-primary">
                                {stat.number}
                            </h3>
                            <p className="text-gray-600 font-medium text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
                    ))}
                </motion.div>
        </div>
        </section>
    )
}

export default Garantis