import { motion } from 'framer-motion'
import React from 'react'

const Formation = () => {
    const formations = [
        {
            categorie: "Développement Web",
            icon: "web",
            niveaux: [
                {
                    niveau: "Niveau 1 - Débutant",
                    duree: "4 semaines",
                    prix: "150 000 F CFA",
                    description: "Apprenez les bases du développement web moderne",
                    modules: [
                        "HTML5 & CSS3 avancé",
                        "JavaScript ES6+",
                        "Responsive Design",
                        "Git & GitHub",
                        "Introduction à React"
                    ],
                    prerequis: "Aucun prérequis technique",
                    certification: "Certificat LafiaTech",
                    color: "from-blue-500 to-blue-600",
                    popular: false
                },
                {
                    niveau: "Niveau 2 - Intermédiaire",
                    duree: "6 semaines",
                    prix: "250 000 F CFA",
                    description: "Maîtrisez les frameworks modernes et les bonnes pratiques",
                    modules: [
                        "React & Next.js avancé",
                        "Node.js & Express",
                        "Bases de données (MongoDB)",
                        "API REST & GraphQL",
                        "Déploiement & DevOps"
                    ],
                    prerequis: "Niveau 1 ou équivalent",
                    certification: "Certificat LafiaTech + Portfolio",
                    color: "from-[#FF2600] to-[#FF4500]",
                    popular: true
                },
                {
                    niveau: "Niveau 3 - Expert",
                    duree: "8 semaines",
                    prix: "400 000 F CFA",
                    description: "Devenez un développeur full-stack senior",
                    modules: [
                        "Architecture avancée",
                        "Microservices & Docker",
                        "Tests & Qualité de code",
                        "Performance & SEO",
                        "Projet final professionnel"
                    ],
                    prerequis: "Niveau 2 ou expérience confirmée",
                    certification: "Certificat Expert + Accompagnement emploi",
                    color: "from-purple-500 to-purple-600",
                    popular: false
                }
            ]
        },
        {
            categorie: "Développement Mobile",
            icon: "mobile",
            niveaux: [
                {
                    niveau: "Niveau 1 - Débutant",
                    duree: "5 semaines",
                    prix: "200 000 F CFA",
                    description: "Créez vos premières applications mobiles",
                    modules: [
                        "Flutter & Dart",
                        "Interface utilisateur",
                        "Navigation & État",
                        "APIs & Données",
                        "Test & Debug"
                    ],
                    prerequis: "Bases en programmation",
                    certification: "Certificat LafiaTech",
                    color: "from-green-500 to-green-600",
                    popular: false
                },
                {
                    niveau: "Niveau 2 - Intermédiaire",
                    duree: "7 semaines",
                    prix: "300 000 F CFA",
                    description: "Développez des apps mobiles professionnelles",
                    modules: [
                        "Flutter avancé",
                        "Firebase & Backend",
                        "Paiements & Notifications",
                        "Performance & Optimisation",
                        "Publication sur les stores"
                    ],
                    prerequis: "Niveau 1 ou équivalent",
                    certification: "Certificat LafiaTech + App publiée",
                    color: "from-[#FF2600] to-[#FF4500]",
                    popular: true
                },
                {
                    niveau: "Niveau 3 - Expert",
                    duree: "10 semaines",
                    prix: "500 000 F CFA",
                    description: "Maîtrisez le développement mobile avancé",
                    modules: [
                        "Architecture complexe",
                        "Intégrations natives",
                        "CI/CD & Tests automatisés",
                        "Monétisation & Analytics",
                        "Projet commercial complet"
                    ],
                    prerequis: "Niveau 2 ou expérience mobile",
                    certification: "Certificat Expert + Support carrière",
                    color: "from-indigo-500 to-indigo-600",
                    popular: false
                }
            ]
        }
    ]

    const getIcon = (iconName: string) => {
        const icons = {
            web: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            ),
            mobile: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19Z"/>
                </svg>
            )
        }
        return icons[iconName as keyof typeof icons] || icons.web
    }

    return (
        <section id='formation' className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-50">
            <div className="w-full max-w-7xl mx-auto">
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
                                Nos <span className="font-bold">Formations</span>
                            </span>
                        </div>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight heading-primary"
                    >
                        Formations
                        <br />
                        <span className="text-[#FF2600]">Professionnelles</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Développez vos compétences techniques avec nos formations pratiques et certifiantes. 
                        De débutant à expert, progressez à votre rythme.
                    </motion.p>
                </div>

                {/* Formations Grid */}
                {formations.map((formation, formationIndex) => (
                    <motion.div
                        key={formation.categorie}
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 + (formationIndex * 0.2) }}
                        className="mb-20"
                    >
                        {/* Catégorie Header */}
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 bg-[#FF2600]/10 rounded-xl flex items-center justify-center mr-4">
                                <div className="text-[#FF2600]">
                                    {getIcon(formation.icon)}
                                </div>
                            </div>
                            <motion.h3 
                                initial={{ filter: "blur(20px)", opacity: 0 }}
                                animate={{ filter: "blur(0px)", opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 + (formationIndex * 0.2) + 0.1 }}
                                className="text-xl sm:text-2xl font-bold text-gray-900 heading-secondary"
                            >
                                {formation.categorie}
                            </motion.h3>
                        </div>

                        {/* Niveaux Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {formation.niveaux.map((niveau, niveauIndex) => (
                                <motion.div
                                    key={niveau.niveau}
                                    initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
                                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.0 + (formationIndex * 0.2) + (niveauIndex * 0.1) }}
                                    className={`group relative bg-white rounded-2xl p-6 hover:shadow-xl hover:shadow-[#FF2600]/10 transition-all duration-300 border-2 ${niveau.popular ? 'border-[#FF2600] ring-2 ring-[#FF2600] ring-opacity-50' : 'border-gray-200'}`}
                                >
                                    {niveau.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <div className="bg-[#FF2600] text-white px-4 py-1 rounded-full text-xs font-bold">
                                                Populaire
                                            </div>
                                        </div>
                                    )}

                                    {/* Header */}
                                    <div className="text-center mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${niveau.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <div className="text-white text-2xl font-bold">
                                                {niveauIndex + 1}
                                            </div>
                                        </div>
                                        
                                        <motion.h4 
                                            initial={{ filter: "blur(20px)", opacity: 0 }}
                                            animate={{ filter: "blur(0px)", opacity: 1 }}
                                            transition={{ duration: 0.6, delay: 1.0 + (formationIndex * 0.2) + (niveauIndex * 0.1) + 0.1 }}
                                            className="text-lg sm:text-xl font-bold text-gray-900 mb-2 heading-secondary"
                                        >
                                            {niveau.niveau}
                                        </motion.h4>
                                        
                                        <div className="text-2xl sm:text-3xl font-bold text-[#FF2600] mb-2">
                                            {niveau.prix}
                                        </div>
                                        
                                        <div className="text-sm text-gray-500 mb-2">
                                            {niveau.duree}
                                        </div>
                                        
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {niveau.description}
                                        </p>
                                    </div>

                                    {/* Modules */}
                                    <div className="mb-6">
                                        <h5 className="text-sm font-semibold text-gray-900 mb-3">Modules inclus :</h5>
                                        <ul className="space-y-2">
                                            {niveau.modules.map((module, moduleIndex) => (
                                                <li key={moduleIndex} className="flex items-center text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-[#FF2600] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {module}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Prérequis & Certification */}
                                    <div className="mb-6 space-y-3">
                                        <div>
                                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Prérequis :</span>
                                            <p className="text-sm text-gray-600 mt-1">{niveau.prerequis}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Certification :</span>
                                            <p className="text-sm text-gray-600 mt-1">{niveau.certification}</p>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                                        niveau.popular 
                                            ? 'bg-[#FF2600] text-white hover:bg-[#FF4500]' 
                                            : 'border-2 border-gray-300 text-gray-700 hover:border-[#FF2600]/30 hover:text-[#FF2600]'
                                    }`}>
                                        S'inscrire maintenant
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* CTA Section */}
                <motion.div 
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                        <motion.h3 
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.8 + 0.1 }}
                            className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 heading-secondary"
                        >
                            Besoin d'aide pour choisir ?
                        </motion.h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Notre équipe pédagogique vous accompagne dans le choix de la formation 
                            la plus adaptée à votre niveau et vos objectifs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#FF2600] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FF4500] transition-colors duration-300"
                            >
                                Consultation gratuite
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-[#FF2600] text-[#FF2600] px-8 py-3 rounded-lg font-semibold hover:bg-[#FF2600] hover:text-white transition-colors duration-300"
                            >
                                Télécharger le programme
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Formation
