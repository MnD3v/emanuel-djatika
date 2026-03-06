"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Technologies = () => {
    const technologies = [
        { icon: "figma.png", title: "Figma" },
        { icon: "bd.png", title: "PostgreSQL" },
        { icon: "github.png", title: "GitHub" },
        { icon: "firebase.png", title: "Firebase" },
        { icon: "flutter.png", title: "Flutter" },
        { icon: "js.png", title: "JavaScript" },
        { icon: "react.png", title: "React/Next.js" },
        { icon: "node.png", title: "Node.js" },
        { icon: "css.png", title: "Tailwind CSS" },
        { icon: "html.png", title: "HTML5" },
    ]

    return (
        <div className='py-12 text-center'>
            <span className="text-[#fd645b] font-semibold tracking-wider text-sm uppercase block mb-3">Ma boîte à outils</span>
            <h2 className='text-3xl font-bold mb-12 text-white'>Technologies Maîtrisées</h2>
            <div className='flex flex-wrap justify-center gap-4 max-w-4xl mx-auto'>
                {technologies.map((element, index) => (
                    <motion.div
                        key={element.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className='flex items-center space-x-3 px-6 py-3 border border-white/10 rounded-full bg-white/5 hover:border-[#fd645b]/50 hover:bg-[#fd645b]/10 transition-all cursor-default'
                    >
                        <img src={`/icons/technologies/${element.icon}`} alt="" className='h-5 w-5 object-contain filter invert opacity-80' />
                        <span className="font-medium text-sm text-gray-300">{element.title}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Technologies