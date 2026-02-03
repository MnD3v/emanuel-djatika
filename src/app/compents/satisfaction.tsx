import { motion } from 'framer-motion';
import React from 'react'

const Satisfaction = () => {

    const elements = [
        { title: "100%", description: "Satisfaction client" },
        { title: "20+", description: "Projets livrés" },
        { title: "98%", description: "Respect des délais" },
    ]

    return (
        <section className='py-12'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6'>
                    L'excellence comme standard
                </h2>
                <p className='text-gray-400 max-w-2xl mx-auto mb-10'>
                    Je m'engage à fournir des résultats de haute qualité, dans les délais impartis.
                </p>
                <a
                    href='/contact'
                    className='inline-block px-8 py-3 bg-transparent text-neon-green font-bold text-lg border-2 border-neon-green rounded-sm hover:bg-neon-green hover:text-black transition-colors transform hover:-rotate-1'
                >
                    Démarrer un projet
                </a>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                {elements.map((element, index) => (
                    <motion.div
                        key={element.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className='p-8 sketchy-box border-neon-green bg-background/50 backdrop-blur-sm'
                        style={{ borderColor: 'var(--neon-green)' }}
                    >
                        <h3 className='text-5xl font-handwritten text-neon-green mb-2 transform -rotate-2'>{element.title}</h3>
                        <p className='text-gray-300 font-medium uppercase tracking-widest text-sm'>{element.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Satisfaction