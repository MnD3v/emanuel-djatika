import { motion } from 'framer-motion'
import React from 'react'
import container from './utils/container'
import Animations from './utils/item'

const About = () => {

    const garantis = [
        { icon: "securite.png", titre: "Robustesse et sécurité", couleur: "bg-blue-500", description: "La robustesse garantit la fiabilité, la sécurité protège les données. Ensemble, elles assurent stabilité et protection." },
        { icon: "interface.png", titre: "Interfaces intuitives et ergonomiques", couleur: "bg-orange-500", description: "Des interfaces intuitives et ergonomiques améliorent l'expérience utilisateur en rendant les actions simples." },
        { icon: "rapide.png", titre: "Performances optimisée et réactive", couleur: "bg-teal-500", description: "Des performances optimisées et réactives garantissent une expérience fluide." },
        { icon: "code.png", titre: "Code propre et maintenable", couleur: "bg-lime-500", description: "Un code propre et maintenable facilite les mises à jour et permet une évolution efficace du projet." },
        { icon: "agile.png", titre: "Développement agile et itératif", couleur: "bg-red-500", description: "Le développement agile et itératif permet des ajustements rapides, favorisant une amélioration continue ." },
    ]
    return (
        <div className='max w-full flex flex-wrap justify-center my-16 text-zinc-700'>

            <motion.h1
                initial={{ scale: 0.4 }}
                whileInView={{ scale: 1 }}
                className='text-2xl md:text-4xl text-center text-black m-6'>Je vous garantis</motion.h1>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className='flex flex-wrap justify-center m-5 gap-3'>

                {
                    garantis.map((element) => (
                        <motion.div
                            variants={Animations.scale({ duration: 0.4 * garantis.indexOf(element) + 0.4 })}
                            key={element.titre} className='flex flex-col items-center '>
                            <div className='cursor-pointer flex items-center
                                          bg-white hover:bg-morange/10 w-full md:w-96 h-64 p-3 py-7 rounded-lg 
                                          space-x-2 '>
                                <div className={`rounded-full ${element.couleur} h-14 w-14 md:h-20 md:w-20 flex flex-col items-center justify-center `}>
                                    <img src={`/icons/${element.icon}`} alt="" className='h-6 md:h-9 m-1 ' />
                                </div>
                                <div className='w-[70%]'>
                                    <p className='font-openSans font-bold text-lg md:text-xl '>{element.titre}</p>
                                    <p>{element.description}</p>
                                </div>

                            </div>
                            <div className={`h-3 w-44 ${element.couleur} rounded-b-full`}></div>
                        </motion.div>
                    ))
                }

            </motion.div>
        </div>
    )
}

export default About