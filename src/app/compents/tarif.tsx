import { motion } from 'framer-motion';
import React from 'react'

const Tarif = () => {
    const categories = [
        {
            nom: "Sites Web",
            icon: "website",
            tarifs: [
                {
                    nom: "Site Basique",
                    description: "4-5 pages",
                    prix: "100 000 - 150 000 F CFA",
                    features: ["Design responsive", "SEO de base", "Formation 2h", "Support 3 mois"],
                    color: "border-blue-300",
                    bgColor: "bg-blue-50"
                },
                {
                    nom: "Site Professionnel",
                    description: "Site vitrine avancé",
                    prix: "150 000 - 250 000 F CFA",
                    features: ["Design premium", "SEO avancé", "Intégrations", "Formation 4h", "Support 6 mois"],
                    color: "border-[#FF2600]/30",
                    bgColor: "bg-[#FF2600]/5",
                    popular: true
                },
                {
                    nom: "Site Premium",
                    description: "Site vitrine haut de gamme",
                    prix: "250 000 - 350 000 F CFA",
                    features: ["Design sur mesure", "SEO complet", "Intégrations avancées", "Formation complète", "Support 12 mois"],
                    color: "border-purple-300",
                    bgColor: "bg-purple-50"
                }
            ]
        },
        {
            nom: "E-commerce",
            icon: "ecommerce",
            tarifs: [
                {
                    nom: "Boutique Simple",
                    description: "E-commerce basique",
                    prix: "200 000 - 300 000 F CFA",
                    features: ["Catalogue produits", "Panier & paiement", "Gestion commandes", "Support 6 mois"],
                    color: "border-green-300",
                    bgColor: "bg-green-50"
                },
                {
                    nom: "E-commerce Standard",
                    description: "Boutique complète",
                    prix: "300 000 - 500 000 F CFA",
                    features: ["Fonctionnalités avancées", "Multi-paiements", "Gestion stock", "Analytics", "Support 12 mois"],
                    color: "border-[#FF2600]/30",
                    bgColor: "bg-[#FF2600]/5",
                    popular: true
                },
                {
                    nom: "E-commerce Complexe",
                    description: "Plateforme avancée",
                    prix: "500 000 - 1 000 000 F CFA",
                    features: ["Architecture scalable", "Intégrations multiples", "API personnalisées", "Support premium"],
                    color: "border-red-300",
                    bgColor: "bg-red-50"
                }
            ]
        },
        {
            nom: "Applications Mobile",
            icon: "mobile",
            tarifs: [
                {
                    nom: "App Basique",
                    description: "iOS/Android simple",
                    prix: "600 000 - 1 200 000 F CFA",
                    features: ["Interface native", "Fonctionnalités essentielles", "Tests & déploiement", "Support 6 mois"],
                    color: "border-blue-300",
                    bgColor: "bg-blue-50"
                },
                {
                    nom: "App Standard",
                    description: "Application complète",
                    prix: "1 200 000 - 2 400 000 F CFA",
                    features: ["Fonctionnalités avancées", "Backend intégré", "Notifications push", "Support 12 mois"],
                    color: "border-[#FF2600]/30",
                    bgColor: "bg-[#FF2600]/5",
                    popular: true
                },
                {
                    nom: "App Complexe",
                    description: "Application sur mesure",
                    prix: "2 400 000 - 6 000 000 F CFA",
                    features: ["Architecture complexe", "Intégrations multiples", "Sécurité avancée", "Support premium"],
                    color: "border-purple-300",
                    bgColor: "bg-purple-50"
                }
            ]
        }
    ]

    const servicesComplementaires = [
        {
            nom: "Design UX/UI",
            icon: "design",
            services: [
                { nom: "Logo et identité", prix: "25 000 - 75 000 F CFA" },
                { nom: "Maquettes web/mobile", prix: "50 000 - 200 000 F CFA" },
                { nom: "Refonte graphique", prix: "75 000 - 300 000 F CFA" }
            ]
        },
        {
            nom: "Hébergement & Maintenance",
            icon: "maintenance",
            services: [
                { nom: "Hébergement annuel", prix: "35 000 - 70 000 F CFA" },
                { nom: "Maintenance annuelle", prix: "40 000 - 100 000 F CFA" },
                { nom: "Support technique", prix: "3 000 F CFA/mois" }
            ]
        },
        {
            nom: "Référencement SEO",
            icon: "seo",
            services: [
                { nom: "SEO Standard", prix: "350 000 F CFA/mois" },
                { nom: "SEO Premium", prix: "850 000 F CFA/mois" },
                { nom: "SEO Platine", prix: "1 500 000 F CFA/mois" }
            ]
        }
    ]

    const packagesEntreprise = [
        {
            nom: "Startup Package",
            prix: "800 000 F CFA",
            reduction: "-20%",
            description: "Site + App mobile",
            features: ["Site professionnel", "App mobile basique", "Design cohérent", "Support 12 mois"]
        },
        {
            nom: "PME Package",
            prix: "1 500 000 F CFA",
            reduction: "-15%",
            description: "E-commerce + App + SEO",
            features: ["E-commerce standard", "App mobile complète", "SEO premium 6 mois", "Maintenance incluse"],
            popular: true
        },
        {
            nom: "Enterprise Package",
            prix: "Sur devis",
            reduction: "Sur mesure",
            description: "Solution complète + maintenance",
            features: ["Solution sur mesure", "Architecture scalable", "Maintenance premium", "Accompagnement dédié"]
        }
    ]

    const getIcon = (iconName: string) => {
        const icons = {
            website: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            ),
            ecommerce: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                </svg>
            ),
            mobile: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19Z"/>
                </svg>
            ),
            design: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            ),
            maintenance: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            ),
            seo: (
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
            )
        }
        return icons[iconName as keyof typeof icons] || icons.website
    }
    
    return (
        <section id='tarif' className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
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
                                Nos <span className="font-bold">Tarifs</span>
                            </span>
                        </div>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight heading-primary"
                    >
                        Tarifs
                        <br />
                        <span className="text-[#FF2600]">Transparents</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Des tarifs clairs et transparents adaptés au marché togolais. Paiement échelonné et Mobile Money acceptés.
                    </motion.p>
                </div>

                {/* Packages Entreprise */}
                <motion.div
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-20"
                >
                    <motion.h3 
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 + 0.1 }}
                        className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12 heading-secondary"
                    >
                        Packages Entreprise
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packagesEntreprise.map((pkg, index) => (
                            <motion.div
                                key={pkg.nom}
                                initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
                                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 + (index * 0.2) }}
                                className={`group relative bg-white border-2 ${pkg.popular ? 'border-[#FF2600] ring-2 ring-[#FF2600] ring-opacity-50' : 'border-gray-300'} rounded-2xl p-8 hover:shadow-xl hover:shadow-[#FF2600]/10 transition-all duration-500`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-[#FF2600] text-white px-4 py-2 rounded-full text-sm font-bold">
                                            Populaire
                                        </div>
                                    </div>
                                )}
                                
                                <div className="text-center mb-8">
                                <motion.h4 
                                    initial={{ filter: "blur(20px)", opacity: 0 }}
                                    animate={{ filter: "blur(0px)", opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.0 + (index * 0.2) + 0.1 }}
                                    className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 text-accent"
                                >
                                    {pkg.nom}
                                </motion.h4>
                                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                        {pkg.prix}
                                    </div>
                                    <div className="text-[#FF2600] font-semibold mb-2">
                                        {pkg.reduction}
                                    </div>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        {pkg.description}
                                    </p>
                                </div>
                                
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <button className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 ${
                                    pkg.popular 
                                        ? 'bg-[#FF2600] text-white hover:bg-[#FF4500]' 
                                        : 'border-2 border-gray-300 text-gray-700 hover:border-[#FF2600]/30 hover:text-[#FF2600]'
                                }`}>
                                    {pkg.nom === 'Enterprise Package' ? 'Nous contacter' : 'Choisir ce package'}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Catégories de Services */}
                {categories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.nom}
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 + (categoryIndex * 0.3) }}
                        className="mb-20"
                    >
                        <div className="flex items-center justify-center mb-12">
                            <div className="flex items-center space-x-3">
                                <div className="text-[#FF2600]">
                                    {getIcon(category.icon)}
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 font-dm">
                                    {category.nom}
                                </h3>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {category.tarifs.map((tarif, index) => (
                                <motion.div
                                    key={tarif.nom}
                                    initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
                                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.4 + (categoryIndex * 0.3) + (index * 0.1) }}
                                    className={`group relative ${tarif.bgColor} border-2 ${tarif.color} rounded-2xl p-6 hover:shadow-xl hover:shadow-[#FF2600]/10 transition-all duration-500 ${tarif.popular ? 'ring-2 ring-[#FF2600] ring-opacity-50' : ''}`}
                                >
                                    {tarif.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <div className="bg-[#FF2600] text-white px-3 py-1 rounded-full text-xs font-bold">
                                                Populaire
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="text-center mb-6">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2 font-dm">
                                            {tarif.nom}
                                        </h4>
                                        <div className="text-2xl font-bold text-gray-900 mb-2">
                                            {tarif.prix}
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            {tarif.description}
                                        </p>
                                    </div>
                                    
                                    <ul className="space-y-3 mb-6">
                                        {tarif.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <button className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                                        tarif.popular 
                                            ? 'bg-[#FF2600] text-white hover:bg-[#FF4500]' 
                                            : 'border-2 border-gray-300 text-gray-700 hover:border-[#FF2600]/30 hover:text-[#FF2600]'
                                    }`}>
                                        Choisir ce plan
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* Services Complémentaires */}
                <motion.div
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    className="mb-20"
                >
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-jakarta">
                        Services Complémentaires
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {servicesComplementaires.map((service, index) => (
                            <motion.div
                                key={service.nom}
                                initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
                                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 2.2 + (index * 0.2) }}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="text-[#FF2600] mr-3">
                                        {getIcon(service.icon)}
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 font-jakarta">
                                        {service.nom}
                                    </h4>
                                </div>
                                
                                <ul className="space-y-3">
                                    {service.services.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                                            <span className="text-gray-700 text-sm">{item.nom}</span>
                                            <span className="text-[#FF2600] font-semibold text-sm">{item.prix}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Informations de Paiement */}
                <motion.div 
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.6 }}
                    className="bg-gradient-to-r from-[#FF2600]/5 to-[#FF2600]/10 border border-[#FF2600]/20 rounded-2xl p-8 text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-jakarta">
                        Modes de Paiement & Avantages
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-6">
                            <div className="text-3xl mb-3">💳</div>
                            <h4 className="font-bold text-gray-900 mb-2">Paiement Échelonné</h4>
                            <p className="text-gray-600 text-sm">30% à la commande, 40% à mi-parcours, 30% à la livraison</p>
                        </div>
                        <div className="bg-white rounded-xl p-6">
                            <div className="text-3xl mb-3">📱</div>
                            <h4 className="font-bold text-gray-900 mb-2">Mobile Money</h4>
                            <p className="text-gray-600 text-sm">T-money, Flooz acceptés</p>
                        </div>
                        <div className="bg-white rounded-xl p-6">
                            <div className="text-3xl mb-3">🎁</div>
                            <h4 className="font-bold text-gray-900 mb-2">Remise Fidélité</h4>
                            <p className="text-gray-600 text-sm">-10% dès le 3ème projet</p>
                        </div>
                    </div>
                    <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                        Demander un devis personnalisé
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Tarif
