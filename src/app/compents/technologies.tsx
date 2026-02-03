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
            <span className="font-handwritten text-neon-purple text-xl md:text-2xl block mb-2 transform rotate-1">Ma boîte à outils</span>
            <h2 className='text-3xl font-bold mb-12 text-white'>Technologies Maîtrisées</h2>
            <div className='flex flex-wrap justify-center gap-6 max-w-4xl mx-auto'>
                {technologies.map((element, index) => (
                    <motion.div
                        key={element.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`flex items-center space-x-3 px-6 py-3 border-2 border-neon-purple/50 rounded-sm hover:border-neon-purple hover:bg-neon-purple/10 transition-all cursor-default transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}
                        style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                    >
                        <img src={`/icons/technologies/${element.icon}`} alt="" className='h-6 w-6 object-contain' style={{ filter: 'brightness(0) invert(1)' }} />
                        <span className="font-bold text-sm text-gray-200">{element.title}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Technologies