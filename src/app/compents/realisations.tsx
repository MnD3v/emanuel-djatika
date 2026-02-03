import { motion } from 'framer-motion'
import React from 'react'

const Realisations = () => {
    const projets = [
        { image: "eboite.png", link: "https://eboite.co/", title: "La BAN", description: "Plateforme moderne de gestion d'avis numériques.", type: "Site web" },
        { image: "cemena.png", link: "https://www.cemena-togo.com/", title: "Cemena", description: "Solutions naturelles pour votre santé et bien-être.", type: "Site web" },
        { image: "orphelinat.png", link: "https://yendoube.vercel.app/", title: "Orphelinat Yendoubé", description: "Plateforme de soutien humanitaire.", type: "Site web" },
        { image: "moger.png", link: "https://play.google.com/store/apps/details?id=com.equilibre.moger", title: "Moger", description: "Application immobilière simplifiée.", type: "Application mobile" }
    ]

    return (
        <section className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {projets.map((element, index) => (
                    <motion.a
                        key={element.title}
                        href={element.link}
                        target='_blank'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className='group block sketchy-box p-4 bg-background/50 border-white/20 hover:border-neon-blue transition-all'
                        style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                    >
                        <div className='h-64 overflow-hidden relative rounded-sm mb-6 border border-white/5'>
                            <div className="absolute inset-0 bg-neon-blue/0 group-hover:bg-neon-blue/10 transition-colors z-10" />
                            <img
                                src={`/projets/${element.image}`}
                                alt={element.title}
                                className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0'
                            />
                        </div>
                        <div className='px-2'>
                            <p className='text-xs font-bold text-neon-blue uppercase tracking-widest mb-2'>{element.type}</p>
                            <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors'>{element.title}</h3>
                            <p className='text-gray-400 text-sm leading-relaxed'>{element.description}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}

export default Realisations