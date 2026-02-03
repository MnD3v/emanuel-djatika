import { motion } from 'framer-motion'
import React from 'react'
import { Zap, Sprout } from 'lucide-react'

const Presentation = () => {
    return (
        <div className="pt-20 pb-12 w-full max-w-4xl mx-auto px-6">

            {/* Intro Text */}
            {/* Intro Text - Updated to match Reference */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-24 text-center max-w-4xl mx-auto pt-10"
            >
                {/* Handwritten Headline */}
                <h1 className="text-5xl md:text-7xl mb-12 text-white leading-tight font-handwritten">
                    Je suis un développeur <br className="md:hidden" />
                    <span className="relative inline-block px-4 mx-2 transform -rotate-1">
                        <span className="absolute inset-0 bg-neon-orange transform -skew-x-3 rounded-sm opacity-90 h-[80%] top-[15%]"></span>
                        <span className="relative z-10 text-white">fiable</span>
                    </span>
                    <br className="md:hidden" />
                    et créatif.
                </h1>

                {/* Mission Statement with Boxed Keywords */}
                <p className="text-xl md:text-3xl text-gray-200 leading-relaxed mb-12 font-light">
                    Je crois que le code doit être
                    <span
                        className="relative inline-block px-3 py-1 mx-2 border-2 border-neon-blue rounded-sm transform -rotate-2 hover:rotate-0 transition-transform cursor-default text-white font-bold bg-transparent"
                        style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                    >
                        accessible
                    </span>,
                    <span
                        className="relative inline-block px-3 py-1 mx-2 border-2 border-neon-green rounded-sm transform rotate-2 hover:rotate-0 transition-transform cursor-default text-white font-bold bg-transparent"
                        style={{ borderRadius: '15px 225px 15px 255px / 255px 15px 225px 15px' }}
                    >
                        performant
                    </span>
                    et
                    <span
                        className="relative inline-block px-3 py-1 mx-2 border-2 border-neon-purple rounded-sm transform -rotate-1 hover:rotate-0 transition-transform cursor-default text-white font-bold bg-transparent"
                        style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                    >
                        durable
                    </span>.
                </p>

                {/* Personal Goal with Underlines */}
                <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
                    Mon but est de créer des projets assez cool pour impressionner
                    <span className="relative inline-block mx-2 text-gray-200 font-medium group">
                        mes amis
                        <svg className="absolute w-full h-2 -bottom-1 left-0 text-gray-500 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                    </span>
                    et assez robustes pour servir
                    <span className="relative inline-block mx-2 text-gray-200 font-medium group">
                        mes clients
                        <svg className="absolute w-full h-2 -bottom-1 left-0 text-gray-500 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                    </span>.
                </p>
            </motion.div>

            {/* Timeline Cards */}
            <div className="space-y-16">

                {/* Currently Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="sketchy-box sketchy-box-blue p-8 md:p-10 relative group bg-background/50 backdrop-blur-sm"
                >
                    <div className="absolute top-0 left-0 -mt-3 ml-6 bg-background px-2 border border-neon-blue/20 rounded transform -rotate-2">
                        <span className="section-label text-neon-blue tracking-widest text-xs">ACTUELLEMENT</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="flex-shrink-0 pt-1">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Zap className="w-8 h-8 text-neon-blue" />
                            </div>
                        </div>
                        <div>
                            <p className="text-xl text-white leading-relaxed font-light">
                                Je travaille sur des solutions innovantes chez <strong className="text-white font-bold">ZashCode</strong>, où je conçois des architectures web robustes et des interfaces mobiles intuitives.
                            </p>
                            <a href="#work" className="highlight-link inline-block mt-4 text-neon-blue font-bold text-lg border-neon-blue">
                                Voir mes projets récents
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Before That Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="sketchy-box sketchy-box-orange p-8 md:p-10 relative ml-auto md:w-5/6 bg-background/50 backdrop-blur-sm"
                >
                    <div className="absolute top-0 right-0 -mt-3 mr-12 bg-background px-2 border border-neon-orange/20 rounded transform rotate-1">
                        <span className="section-label text-neon-orange tracking-widest text-xs">AVANT ÇA</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="flex-shrink-0 order-1 md:order-2 pt-1">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Sprout className="w-8 h-8 text-neon-orange" />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 flex-1 md:text-right">
                            <p className="text-xl text-white leading-relaxed font-light">
                                J'ai aidé diverses entreprises comme <strong className="text-white">Freelance</strong> à digitaliser leurs processus et à améliorer leur visibilité en ligne.
                            </p>
                            <a href="/about" className="highlight-link inline-block mt-4 text-neon-orange font-bold text-lg border-neon-orange">
                                En savoir plus sur mon parcours
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Presentation