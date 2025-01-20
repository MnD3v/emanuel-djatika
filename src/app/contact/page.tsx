"use client"
import React, { useEffect, useState } from 'react'
import FixedAppBar from '../compents/fixed_app_bar'
import { motion } from 'framer-motion'
import Animations from '../compents/utils/item'

const Contact = () => {

    const [isInView, setIsInView] = useState(true);

    const contacts = [{ icon: "messages.png", title: "Ecrivez-moi un message", description: "Je vous attends pour vous aider du lundi au vendredi de 7h à 18h", buttonText: "Envoyer un message", link: "" }, { icon: "mail-blue.png", title: "Envoyez un mail", description: "Je vous attends pour vous aider du lundi au vendredi de 7h à 18h", buttonText: "Envoyer un mail", link: "" }, { icon: "call.png", title: "Appelez", description: "Je vous attends pour vous aider du lundi au vendredi de 7h à 18h", buttonText: "+228 98784589", link: "" },]


    useEffect(() => {

        setIsInView(false)

        return () => {

        }
    }, [])

    return (
        <div>
            {
                isInView && <div className='fixed flex flex-col items-center justify-center bg-blue-950 h-full w-full'>
                    <div className='loader'></div>
                </div>}
            <motion.div
                variants={Animations.opacity({ duration: 0.4 })}
                initial="hidden"
                whileInView="show"
            >

                <FixedAppBar fixed={true}></FixedAppBar>
                <div className=' bg-blue-950 w-full flex justify-center'>  <div className='max flex flex-col items-center
            pt-24 md:pt-32
             text-white px-3 py-12'>
                    <h1>Contact</h1>
                    <p><span className='font-bold'>Accueil</span> • Contact</p>
                </div>
                </div>
                <div className='flex flex-wrap justify-center gap-3 m-3'>
                    {contacts.map((element) => (
                        <motion.div
                            variants={Animations.bottomToTop({ duration: 0.4 * contacts.indexOf(element) + 0.4, })}
                            initial="hidden"
                            whileInView="show"
                            key={element.icon} className='w-full sm:w-96 bg-zinc-100 rounded-xl flex flex-col items-center p-4 gap-3'>
                            <div className='h-20 w-20 md:h-24 md:w-24 rounded-full bg-blue-100 flex flex-col items-center justify-center'>
                                <img src={`/icons/${element.icon}`} alt="" className='h-10 md:h-14 ' />
                            </div>
                            <h3>{element.title}</h3>
                            <p className='text-center'>{element.description} </p>
                            <a href="" className='text-morange underline'>{element.buttonText}</a>
                        </motion.div>
                    ))}
                </div>

                <div className='m-3 my-7 flex flex-col items-center'>
                    <h1 className='max-sm:text-2xl'>Contactez-moi</h1>
                    <div className='max-w-[700px] flex flex-col sm:grid sm:grid-cols-2 gap-3'>

                        <input type="text" placeholder='Votre Nom Complet' className=' w-full sm:w-auto rounded-lg bg-zinc-100 px-3 py-4' />


                        <input type="text" placeholder='Votre Numéro' className=' w-full sm:w-auto rounded-lg bg-zinc-100 px-3 py-4' />

                        <textarea placeholder='Votre message' className='col-span-2 w-full sm:w-auto rounded-lg bg-zinc-100 px-3 py-4' />

                    </div>
                    <button className='bg-morange rounded-lg py-5 px-12 text-white my-2'>Envoyer</button>

                </div>
            </motion.div >
        </div>

    )
}

export default Contact