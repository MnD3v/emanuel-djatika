import { motion } from 'framer-motion'
import React from 'react'
import container from './utils/container'
import Animations from './utils/item'

const Technologies = () => {
    const technologies = [
        {
            icon: "figma.png",
            title: "Figma",
            color: "from-orange-500/30"
        },
        {
            icon: "bd.png",
            title: "PostgrSQL",
            color: "from-green-500/30"
        },
        {
            icon: "github.png",
            title: "Github",
            color: "from-black/30"
        },
        {
            icon: "firebase.png",
            title: "Firebase",
            color: "from-red-500/30"
        },
        {
            icon: "flutter.png",
            title: "Flutter",
            color: "from-blue-500/30"
        },
        {
            icon: "js.png",
            title: "JavaScript",
            color: "from-zinc-500/30"
        },
        {
            icon: "react.png",
            title: "ReactJS",
            color: "from-teal-500/30"
        },
        {
            icon: "node.png",
            title: "NodeJs",
            color: "from-violet-500/30"
        },
        {
            icon: "css.png",
            title: "CSS",
            color: "from-blue-600/30"
        },
        {
            icon: "html.png",
            title: "HTML",
            color: "from-orange-500/30"
        },
    ]
    return (
        <div className='max mb-16'>
            <motion.h1
                initial={{ scale: 0.4 }}
                whileInView={{ scale: 1 }}
                className='text-center text-2xl md:text-4xl my-9'>Technologies</motion.h1>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className='flex flex-wrap gap-3 justify-center'>
                {
                    technologies.map((element) => (
                        <motion.div
                            key={element.title}
                            variants={Animations.scale({ duration: 0.3 * technologies.indexOf(element) + 0.3 })}
                            className={`flex items-center justify-center bg-gradient-to-r 
                        ${element.color}
                        to-transparent rounded-full space-x-3 px-1 py-1`}>
                            <p className={`text-bfont-openSans ${"text-" + element.color} pl-5`}>{element.title}</p>
                            <div className={`bg-white h-12 w-12 md:h-20 md:w-20 flex flex-col items-center justify-center rounded-full shadow-xl`}>
                                <img src={`/icons/technologies/${element.icon}`} alt="" className='h-6 md:h-14' />
                            </div>
                        </motion.div>
                    ))
                }

            </motion.div>
        </div>
    )
}

export default Technologies