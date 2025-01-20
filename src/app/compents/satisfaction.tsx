import { motion } from 'framer-motion';
import React from 'react'
import container from './utils/container';
import Animations from './utils/item';
const Satisfaction = () => {

    const elements = [{ title: "9/10", description: "Dans l'ensemble de notre satisfcation client" }, { title: "2+", description: "Des projets reçus et correctement réalisés" }, { title: "98%", description: "Dans les délais de livraison" },]
    return (
        <div className='w-full flex justify-center bg-violet-950'>
            <div className='max flex gap-6 max-lg:flex-col text-white px-3 py-4 md:px-12 md:py-20 pb-36 md:pb-48'>     <OrganicShape></OrganicShape>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    className='relative flex flex-col z-10 w-1/2 max-md:w-full gap-3'>
                    <motion.h1
                        variants={Animations.bottomToTop({ duration: 0.6 })}
                        className='text-2xl md:text-4xl z-10'>
                        Rapports exploitables pour faire croître votre entreprise.
                    </motion.h1>
                    <motion.p
                        variants={Animations.bottomToTop({ duration: 1.1 })}

                    >Mes clients sont pleinement satisfaits de notre expertise et de notre engagement. J'offre des solutions personnalisées, réactives et orientées vers des résultats qui dépassent les attentes."</motion.p>
                    <motion.a
                        href='/contact'
                        variants={Animations.bottomToTop({ duration: 1.6 })}

                        className='text-center w-64 bg-blue-700 hover:bg-transparent border-2 border-blue-700 hover:border-white  px-6 py-4 font-openSans rounded-lg font-semibold'>Commencer maintenant</motion.a>
                </motion.div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    className='flex gap-3 flex-wrap text-black text-center'>

                    {elements.map((element) => (
                        <motion.div
                            key={element.title}
                            variants={Animations.bottomToTop({ duration: 0.4 * elements.indexOf(element) + 0.4 })}

                            className='flex flex-col items-center max-sm:w-full p-9 bg-white  ring-1 ring-white/30 rounded-xl border-2 border-violet-950 '>
                            <h1 className='text-2xl md:text-4xl'>{element.title}</h1>
                            <p className='w-40'>{element.description}</p>
                        </motion.div>
                    ))}


                </motion.div>
            </div>
        </div>
    )
}

const OrganicShape = () => {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
        >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="300" height="300" className='absolute z-0 '>
                <path
                    fill="#FFB700"
                    d="M45.7,-77.5C58.9,-69.2,69.1,-55.7,75.9,-41.1C82.7,-26.6,86.1,-11,85.8,4.5C85.4,20,81.3,35.5,72.5,47.3C63.7,59.1,50.2,67.2,36,73.2C21.8,79.3,6.9,83.2,-8.9,85.1C-24.7,87,-41.4,86.8,-54.6,79.9C-67.9,73,-77.8,59.3,-83.9,44.3C-90,29.3,-92.3,13,-90.4,-2.2C-88.5,-17.3,-82.3,-31.2,-73.1,-42.7C-63.9,-54.1,-51.7,-63,-38.8,-71.1C-25.8,-79.1,-12.9,-86.3,1.8,-89.2C16.5,-92.1,32.9,-90.7,45.7,-77.5Z"
                    transform="translate(100 100)"
                />
            </svg>
        </motion.div>
    );
};

export default Satisfaction