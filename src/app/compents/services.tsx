import { motion } from 'framer-motion'
import React from 'react'
import container from './utils/container'
import Animations from './utils/item'



const Services = () => {

    const services = [{ icon: "website.png", titre: "Application Web", description: "Je conçois des applications web modernes et performantes, adaptées à vos besoins pour propulser votre entreprise dans l'ère numérique." },
    { icon: "mobile.png", titre: "Applications Android & iOS", description: "Je développe des applications mobiles intuitives et fonctionnelles pour Android et iOS, optimisées pour offrir la meilleure expérience utilisateur." },
    { icon: "design.png", titre: "UI & UX Design", description: "Nos experts en design UI/UX créent des interfaces captivantes qui allient esthétisme et facilité d’utilisation, pour une expérience utilisateur optimale." },
    { icon: "internet.png", titre: "SEO Marketing", description: "Boostez votre visibilité en ligne grâce à nos stratégies de marketing SEO qui augmentent votre présence sur les moteurs de recherche et attirent plus de clients." },
        // { icon: "powerpoint.png", titre: "Conception de Powerpoints Professionels", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore provident alias quas repellat nisi odio aspernatur iste laudantium voluptatibus, labore libero similique enim beatae natus, amet ullam non fugit." }
    ]
    return (
        <section id='services' className='flex flex-col items-center m-3 md:my-12 '>

            <motion.h1
                initial={{ scale: 0.4 }}
                whileInView={{ scale: 1 }}
                className='text-xl md:text-4xl text-center capitalize
                            max-w-[500px] px-2 md:px-6 mb-2 md:mb-4 '>
                J'ai Les Meilleurs Services pour votre business.
            </motion.h1>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className='w-full flex flex-wrap justify-center'>

                {
                    services.map((element) => (
                        <motion.div
                            key={element.titre}
                            variants={Animations.bottomToTop({ duration: 0.4 * services.indexOf(element) + 0.4 })}
                            className='cursor-pointer bg-white w-full md:w-80 p-6 m-2 md:m-6 rounded-lg hover:bg-white/50'>
                            <div className='flex'>

                                <img src={"/icons/" + element.icon} alt="" className='h-10 md:h-14 mr-1' />
                                <div>
                                    <h3 className='text-black text-lg'>{element.titre}</h3>

                                    <p className='text-zinc-600'>{element.description}</p>

                                </div>
                            </div>


                            {/* <br />
                        <p className='text-lg uppercase font-semibold text-morange'>Voir plus</p> */}
                        </motion.div>
                    ))
                }
            </motion.div>


        </section>
    )
}

export default Services