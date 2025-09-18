import { motion } from 'framer-motion'
import React from 'react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const Portfolio = () => {
    const projects = [
        {
            title: "Application Web E-commerce",
            category: "App Design",
            image: "/projets/eboite.png",
            description: "Une plateforme e-commerce complète avec paiement en ligne et gestion des stocks."
        },
        {
            title: "Interface Utilisateur Dashboard",
            category: "UI Design",
            image: "/projets/cemena.png",
            description: "Un tableau de bord administratif avec visualisation de données en temps réel."
        },
        {
            title: "Application Mobile de Livraison",
            category: "App Design",
            image: "/projets/moger.png",
            description: "Une application de livraison avec suivi GPS et notifications en temps réel."
        },
        {
            title: "Site Web Responsive",
            category: "Figma Design",
            image: "/projets/orphelinat.png",
            description: "Un site web moderne et responsive avec animations fluides et optimisé pour le SEO."
        }
    ]
    
    return (
        <section id='portfolio' className="py-24 px-4 sm:px-6 lg:px-16 bg-white relative overflow-hidden">
            <div className="w-full max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center mb-8"
                    >
                        <div className="flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span className="text-black text-sm">
                                Nos <span className="font-bold">Réalisations</span>
                            </span>
                        </div>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight font-jakarta"
                    >
                        Nos Projets
                        <br />
                        <span className="text-orange-500">Réalisés</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                    >
                        Découvrez nos projets les plus innovants et les solutions créatives que nous avons développées pour nos clients.
                    </motion.p>
                </div>
                
                {/* Portfolio Filter Buttons */}
                <motion.div 
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4 mb-16">
                    {['Tous les projets', 'Applications Web', 'Applications Mobiles', 'UI/UX Design', 'Sites Web'].map((category) => (
                        <motion.button
                            key={category}
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 + (['Tous les projets', 'Applications Web', 'Applications Mobiles', 'UI/UX Design', 'Sites Web'].indexOf(category) * 0.1) }}
                            className={`px-4 py-2 rounded-full border border-gray-300 text-black hover:bg-orange-50 hover:border-orange-300 transition-all text-sm ${category === 'Tous les projets' ? 'bg-orange-100 border-orange-300 text-orange-700' : 'bg-gray-50'}`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>
                
                {/* Portfolio Grid */}
                <motion.div
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 + (index * 0.2) }}
                            className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="aspect-video bg-gray-100 rounded-t-2xl overflow-hidden relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                                
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <a 
                                    href="#" 
                                    className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                                >
                                    Voir le projet
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* View All Button */}
                <motion.div 
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    className="flex justify-center mt-12">
                    <motion.button
                        initial={{ filter: "blur(20px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.6, delay: 2.2 }}
                        className="flex items-center justify-center space-x-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors"
                    >
                        <span>Voir tous les projets</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Portfolio
