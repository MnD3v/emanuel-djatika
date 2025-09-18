import { motion } from 'framer-motion'
import React from 'react'

const Dispo = () => {
    return (
        <section id="dispo" className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
            <div className="w-full max-w-7xl mx-auto">
                {/* Section Header - Style épuré */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight heading-primary"
                    >
                        Disponible
                        <br />
                        <span className="text-[#FF2600]">24/7</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
                    >
                        Notre équipe est disponible en permanence pour répondre à vos questions 
                        et vous accompagner dans vos projets. Contactez-nous dès maintenant !
                    </motion.p>
                </div>
                
                {/* Main Content Card */}
                <motion.div
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-[#FF2600]/10 transition-all duration-300"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
                        {/* Icon Section */}
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0, scale: 0.8 }}
                            animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex-shrink-0"
                        >
                            <div className="w-20 h-20 bg-[#FF2600]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#FF2600]/20 transition-colors duration-300">
                                <svg className="w-10 h-10 text-[#FF2600]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                                </svg>
                            </div>
                        </motion.div>
                        
                        {/* Content Section */}
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0, x: 20 }}
                            animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="flex-1 text-center lg:text-left"
                        >
                            <motion.h3 
                                initial={{ filter: "blur(20px)", opacity: 0 }}
                                animate={{ filter: "blur(0px)", opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.0 + 0.1 }}
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 heading-secondary"
                            >
                                Support Technique
                            </motion.h3>
                            
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                                Notre équipe d'experts est disponible 24h/24 et 7j/7 pour vous accompagner 
                                dans tous vos projets et répondre à vos questions techniques.
                            </p>
                            
                            {/* Features */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                                {['Réponse rapide', 'Support technique', 'Accompagnement personnalisé'].map((feature, index) => (
                                    <motion.span
                                        key={feature}
                                        initial={{ filter: "blur(20px)", opacity: 0 }}
                                        animate={{ filter: "blur(0px)", opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                                        className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-[#FF2600]/10 hover:text-[#FF2600] transition-colors duration-300"
                                    >
                                        ✓ {feature}
                                    </motion.span>
                                ))}
                            </div>
        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0, scale: 0.8 }}
                            animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="flex-shrink-0"
                        >
                            <motion.a
                                href="/contact"
                                className="inline-flex items-center bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-[#FF2600] transition-colors duration-300 group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                    Contacter Maintenant
                                    <motion.svg
                                        className="ml-2 w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </motion.svg>
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Dispo