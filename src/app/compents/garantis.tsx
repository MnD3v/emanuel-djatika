import { motion } from 'framer-motion'
import React from 'react'

const About = () => {

    const garantis = [
        { icon: "securite.png", titre: "Robustesse et sécurité", description: "La robustesse garantit la fiabilité, la sécurité protège les données. Ensemble, elles assurent stabilité et protection.", color: "neon-blue" },
        { icon: "interface.png", titre: "Interfaces intuitives", description: "Des interfaces intuitives et ergonomiques améliorent l'expérience utilisateur en rendant les actions simples.", color: "neon-orange" },
        { icon: "rapide.png", titre: "Performances", description: "Des performances optimisées et réactives garantissent une expérience fluide et agréable pour vos utilisateurs.", color: "neon-green" },
        { icon: "code.png", titre: "Code propre/maintenable", description: "Un code propre et maintenable facilite les mises à jour et permet une évolution efficace du projet sur le long terme.", color: "neon-purple" },
        { icon: "agile.png", titre: "Méthode Agile", description: "Le développement agile et itératif permet des ajustements rapides, favorisant une amélioration continue.", color: "neon-blue" },
    ]

    return (
        <section className='py-12'>
            <div className='mb-16 md:text-left'>
                <span className="font-handwritten text-neon-purple text-xl md:text-2xl block mb-2 transform rotate-1">Mes Valeurs</span>
                <h2 className='text-3xl font-bold text-white mb-6'>Pourquoi travailler avec moi ?</h2>
                <p className='text-gray-400 max-w-2xl text-lg font-light'>
                    Engagement, qualité et transparence sont au cœur de ma démarche.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16'>
                {garantis.map((element, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={element.titre}
                        className='flex flex-col items-start group'
                    >
                        <div
                            className={`mb-6 p-4 sketchy-box bg-background/50 backdrop-blur-sm inline-block transform ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'} group-hover:rotate-0 transition-transform duration-300`}
                            style={{ borderColor: `var(--${element.color})` }}
                        >
                            <img src={`/icons/${element.icon}`} alt="" className='h-8 w-8 object-contain' style={{ filter: 'brightness(0) invert(1)' }} />
                        </div>
                        <h3 className='font-bold text-xl text-white mb-3 group-hover:text-neon-purple transition-colors duration-300' style={{ color: `var(--${element.color})` }}>{element.titre}</h3>
                        <p className='text-sm text-gray-400 leading-relaxed font-light'>{element.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default About