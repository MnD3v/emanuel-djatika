import { motion } from 'framer-motion'
import React from 'react'

const Services = () => {
    const services = [
        { 
            step: "Étape 1",
            icon: "conception", 
            titre: "Conception & Analyse", 
            description: "Nous analysons vos besoins et concevons l'architecture de votre solution numérique. Brief détaillé et validation des objectifs.",
            duration: "1-2 semaines",
            color: "from-blue-500 to-blue-600"
        },
        { 
            step: "Étape 2",
            icon: "design", 
            titre: "Design & Prototypage", 
            description: "Création de l'interface utilisateur et des expériences digitales. Prototypes interactifs et validation des parcours utilisateur.",
            duration: "2-3 semaines",
            color: "from-purple-500 to-purple-600"
        },
        { 
            step: "Étape 3",
            icon: "development", 
            titre: "Développement & Intégration", 
            description: "Développement de votre application web ou mobile. Intégration des fonctionnalités et optimisation des performances.",
            duration: "4-6 semaines",
            color: "from-green-500 to-green-600"
        },
        { 
            step: "Étape 4",
            icon: "deployment", 
            titre: "Déploiement & Suivi", 
            description: "Mise en production et optimisation SEO. Formation de votre équipe et suivi post-lancement pour garantir le succès.",
            duration: "1-2 semaines",
            color: "from-[#FF2600] to-[#FF4500]"
        }
    ]

    const getIcon = (iconName: string) => {
        const icons = {
            conception: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
            ),
            design: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            ),
            development: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M8 3V1m0 2v2m8-2V1m0 2v2M8 7h8M8 11h8M8 15h8"/>
                </svg>
            ),
            deployment: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            )
        }
        return icons[iconName as keyof typeof icons] || icons.conception
    }
    
    return (
        <section id='services' className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
            <div className="w-full max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center mb-8"
                    >
                        <div className="flex items-center space-x-2 bg-[#FF2600]/10 px-6 py-3 rounded-full">
                            <svg className="w-6 h-6 text-[#FF2600]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span className="text-black text-xs sm:text-sm font-medium">
                                Notre <span className="font-bold">Méthode</span>
                            </span>
                        </div>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight heading-primary"
                    >
                        Votre solution numérique
                        <br />
                        <span className="text-[#FF2600]">en 30 jours</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Contrairement aux agences traditionnelles, nous avons choisi d'être en équipe réduite. 
                        Tout est fait en interne, pour plus de qualité, réactivité et proximité.
                    </motion.p>
                </div>
                
                {/* Services Process Grid */}
            <motion.div
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.titre}
                            initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
                            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 + (index * 0.2) }}
                            className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-100"
                        >
                            {/* Step Badge */}
                            <div className="flex items-center justify-between mb-6">
                                <div className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-xs sm:text-sm font-bold`}>
                                    {service.step}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500 font-medium">
                                    {service.duration}
                                </div>
                            </div>
                            
                            {/* Service Icon */}
                            <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white">
                                    {getIcon(service.icon)}
                                </div>
                            </div>
                            
                            {/* Service Info */}
                            <div>
                                <motion.h3 
                                    initial={{ filter: "blur(20px)", opacity: 0 }}
                                    animate={{ filter: "blur(0px)", opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.0 + (index * 0.2) + 0.1 }}
                                    className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF2600] transition-colors heading-secondary"
                                >
                                    {service.titre}
                                </motion.h3>
                                
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                
                                {/* Progress Indicator */}
                                <div className="flex items-center space-x-2">
                                    <div className="flex space-x-1">
                                        {[...Array(4)].map((_, i) => (
                                            <div 
                                                key={i}
                                                className={`w-2 h-2 rounded-full ${
                                                    i <= index ? `bg-gradient-to-r ${service.color}` : 'bg-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                                        {index === 0 ? 'Début' : index === 3 ? 'Finalisation' : 'En cours'}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF2600]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
            </motion.div>

                {/* CTA Section */}
                <motion.div 
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="text-center mt-16">
                    <motion.button
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.6, delay: 2.0 }}
                        className="group relative inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-black to-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-[#FF2600] hover:to-[#FF4500] transition-all duration-300 overflow-hidden"
                    >
                        <div className="w-6 h-6 bg-[#FF2600] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                            <svg className="w-3 h-3 text-white group-hover:text-[#FF2600] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                        <span>Démarrer votre projet</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Services