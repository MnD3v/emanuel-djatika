import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

const Presentation = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const rotatingElements = [
        "Développement web",
        "Développement mobile", 
        "Design UI/UX",
        "E-commerce",
        "Applications web",
        "Maintenance & Support"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingElements.length)
        }, 3000) // Change toutes les 3 secondes

        return () => clearInterval(interval)
    }, [])

    return (
        <div id="presentation" className="relative w-full bg-white min-h-screen overflow-x-hidden">

            {/* Hero Section */}
            <div className="px-4 sm:px-8 lg:px-24 py-24">
                <div className="text-center max-w-8xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center mb-12"
                    >
                        <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-lg">
                            {/* Left decorative element */}
                            <img
                                src="/icons/success.png"
                                alt=""
                                className=" h-8 text-[#FF2600]"
                            />

                            {/* Text content */}
                            <div className="text-center">
                                <div className="text-gray-900 font-semibold text-xs sm:text-sm">
                                    Top 1% des meilleures
                                </div>
                                <div className="text-gray-900 font-bold text-xs sm:text-sm">
                                    agences de <span className="text-[#FF2600]">France 2025</span>
                                </div>
                            </div>

                            {/* Right decorative element */}
                            <img
                                src="/icons/success2.png"
                                alt=""
                                className=" h-8 text-[#FF2600]"
                            />
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-8 leading-tight heading-primary text-center"
                    >
                        On crée des solutions numériques
                        <br />
                        <span className="text-[#FF2600]">sur mesure.</span>
                    </motion.h1>

                    {/* Descriptive Text */}
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-black mb-6 text-center">
                        On vous développe la solution parfaite, de l'idée à la mise en production.
                    </motion.p>

                    {/* Goal Text */}
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-sm sm:text-base md:text-lg text-black mb-8 text-center">
                        Le but : Digitaliser. Automatiser. Optimiser.
                        <span className="text-[#FF2600] font-medium"> En 30 jours chrono.</span>
                    </motion.p>

                    {/* Feature Tags */}
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="flex flex-wrap justify-center gap-6 mb-16">
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <svg className="w-4 h-4 text-[#FF2600]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <motion.span 
                                key={currentIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="text-gray-700 text-xs sm:text-sm font-medium"
                            >
                                {rotatingElements[currentIndex]}
                            </motion.span>
                        </motion.div>
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <svg className="w-4 h-4 text-[#FF2600]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-xs sm:text-sm font-medium">100% clients satisfaits</span>
                        </motion.div>
                        <motion.div
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.6 }}
                            className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <svg className="w-4 h-4 text-[#FF2600]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-xs sm:text-sm font-medium">Depuis Togo 🇹🇬</span>
                        </motion.div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4">
                        <motion.button
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.6, delay: 2.0 }}
                            className="group relative inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-black to-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-[#FF2600] hover:to-[#FF4500] transition-all duration-300 overflow-hidden"
                        >
                            <div className="w-6 h-6 bg-[#FF2600] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                <svg className="w-3 h-3 text-white group-hover:text-[#FF2600] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span>Démarrer votre projet</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </motion.button>
                        <motion.button
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.6, delay: 2.2 }}
                            className="flex items-center justify-center space-x-2 border border-gray-200 text-gray-700 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-medium text-xs sm:text-sm md:text-base hover:bg-gray-50 transition-colors">
                            <span>NOS RÉALISATIONS</span>
                        </motion.button>
                    </motion.div>

                    {/* Trust Indicator */}
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.4 }}
                        className="text-[#FF2600] text-center text-xs sm:text-sm">
                        <span className="font-black">+ de 1500</span>
                        <span className="font-semibold text-black"> entreprises nous font confiance.</span>
                    </motion.p>
                </div>
            </div>

            {/* Floating Call Button */}
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.6 }}
                className="fixed bottom-6 right-6 z-50">
                <button className="w-14 h-14 bg-[#FF2600] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF4500] transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </button>
            </motion.div>
        </div>
    )
}

export default Presentation