import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Realisations = () => {
    const projets = [
        { image: "cemena.png", link: "https://www.cemena-togo.com/", title: "Des solutions naturelles pour votre Santé", type: "Site web" },
        { image: "eboite.png", link: "https://eboite.co/", title: "La BAN (Boîte à Avis Numérique) est une plateforme moderne", type: "Site web" },
        { image: "orphelinat.png", link: "https://yendoube.vercel.app/", title: "Soutenir Un Démuni Pour un monde meilleur", type: "Site web" },
        { image: "moger.png", link: "https://play.google.com/store/apps/details?id=com.equilibre.moger", title: "Simplement, Rapidement, Un bien immobilier pour tous", type: "Application mobile" }
    ]
    return (
        <div className='max w-full '>
            <div className='flex items-center'>
                <div className='h-px w-[calc(50%-110px)] bg-zinc-300'></div>
                <p className='my-9 mx-1 font-openSans tracking-wider font-semibold text-lg'>Quelques réalisations</p>
                <div className='h-px w-[calc(50%-110px)] bg-zinc-300'></div>

            </div>
            <div className='flex justify-center'>
                <motion.div

                    className='flex overflow-x-auto gap-3 py-3'>
                    {
                        projets.map((element) => (
                            <motion.a
                                variants={Animations.leftToRight({ duration: 0.4 * projets.indexOf(element) + 0.4, inverse: true })}
                                initial="hidden"
                                whileInView="show"
                                key={element.image} href={element.link} target='_blank'>
                                <div className='center-shadow w-80 p-2 hover:bg-zinc-300'>
                                    <div className='h-52 w-full bg-slate-100 overflow-hidden'>
                                        <img src={`/projets/${element.image}`} alt="" className='h-full w-full object-cover hover:scale-110' />
                                    </div>
                                    <div className='m-2'>
                                        <p className='text-base sm:text-lg my-2 font-semibold font-openSans'>{element.title}</p>
                                        <p className='text-sm'>{element.type}</p>
                                    </div>
                                </div>
                            </motion.a>
                        )
                        )
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Realisations