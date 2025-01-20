import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Dispo = () => {
    return (

        <motion.div
            variants={Animations.opacity({ duration: 0.6 })}
            initial="hidden"
            whileInView="show"

            className='relative -top-24 bg-white flex max-md:flex-col max-md:space-y-3 max-md:rounded-lg m-3  
        justify-center items-center space-x-4 
        center-shadow rounded-full p-3 w-auto'>
            <div className='bg-violet-700 border-[12px] border-white ring-1 ring-morange rounded-full p-6'>
                <img src="/help.png" alt="" className='max-md:h-16' />
            </div>
            <h2 className='text-center max-md:text-lg md:w-96 text-lg md:text-xl'>Je suis disponible 24/7 pour repondre a vos besoins. Contactez-moi !!!</h2>
            <a
                href='/contact'
                className='bg-morange hover:bg-transparent border-2 border-morange rounded-full text-white hover:text-morange px-9 py-3 '>
                Contacter
            </a>
        </motion.div>

    )
}

export default Dispo