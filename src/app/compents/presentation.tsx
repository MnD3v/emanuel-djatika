import { motion } from 'framer-motion'
import React from 'react'
import container from './utils/container'
import itemS from './utils/item'
import Animations from './utils/item'

const Presentation = () => {
    const socials = [{ icon: "facebook.png", link: "https://web.facebook.com/emanuel.djatika.7?locale=fr_FR" },
    { icon: "linkedin.png", link: "https://www.linkedin.com/in/emanuel-djatika-283390276/" },
    { icon: "github.png", link: "https://github.com/em-djatika" },

    ]
    return (
        <div className="relative max px-6 md:px-12 py-1 md:py-10 lg:my-14 text-white flex flex-wrap max-md:flex-col justify-between  content-center items-center z-20">
            <div
                style={{
                    opacity: '0.5',
                    backgroundSize: '20px 20px',
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, rgba(0, 0, 0, 0) 1px)',
                }}
                className='absolute top-0 left-0 h-64 w-64'
            >

            </div>
            <motion.div
                variants={container}
                initial={"hidden"}
                whileInView={"show"}
                className='flex flex-col w-[33%] max-lg:w-full mr-3 space-y-6 mt-3'>
                <motion.p
                    variants={Animations.bottomToTop({ duration: 0.7 })}
                    // initial={{ y: 100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    className="text-3xl  md:text-5xl xl:text-6xl font-bold">

                    Emanuel Djatika</motion.p>
                <motion.p
                    variants={Animations.bottomToTop({ duration: 1.1 })}

                    className='text-lg'>Salut, moi c’est Emanuel Djatika alias <span className='font-bold'>ZashCode</span> .
                    Un créateur, un passionné, <span className='font-black'>un trouveur de solutions.</span> Bienvenue dans mon univers.</motion.p>
                <div className="my-6 flex gap-2">
                    {socials.map((element, index) => (
                        <motion.a
                        key={element.icon}
                        variants={Animations.leftToRight({ duration: 0.3*index , inverse: true})}
                        href={element.link} target='_blank'>
                            <div className="bg-white hover:bg-morange h-14 w-14 rounded-full flex flex-col items-center justify-center">
                                <img
                                    src={`/icons/${element.icon}`} alt="" className="h-6" />
                            </div>
                        </motion.a>
                    ))}
                </div>
                <motion.a href='/contact'
                    variants={Animations.bottomToTop({ duration: 1.7 })}
                    className=' bg-white font-bold font-openSans text-morange hover:text-white rounded-full px-3 py-3 md:py-3 border-2 border-white hover:bg-transparent w-48 text-center'>
                 Me contacter
                </motion.a>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className='max-lg:w-full m-4 flex flex-wrap justify-between items-center  max-md:flex-col max-md:items-center'>
                <motion.div
                    variants={Animations.opacity({ duration: 1.9 })}

                    className='scale-100 bg-gradient-to-b from-white/30 to-transparent rounded-full p-[2px]'>

                    <img src="/img-1.png" alt="" className='object-cover h-[400px] md:h-[500px]  rounded-full border-[12px] border-morange ' />

                </motion.div>

                <motion.div
                    variants={container}

                    initial="hidden"
                    whileInView="show"

                    className='m-5'>




                </motion.div>
            </motion.div>
        </div>
    )
}

export default Presentation