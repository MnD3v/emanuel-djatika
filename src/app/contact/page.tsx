"use client"
import React, { useEffect, useState } from 'react'
import AppBar from '../compents/app_bar'
import { motion } from 'framer-motion'
import Animations from '../compents/utils/item'

const Contact = () => {
    const [isInView, setIsInView] = useState(true);

    const contacts = [
        { icon: "messages.png", title: "Ecrivez-moi un message", description: "Je vous attends pour vous aider du lundi au vendredi de 7h à 18h", buttonText: "Envoyer un message", link: "mailto:contact@emanuel.dj", color: "neon-blue" },
        { icon: "mail-blue.png", title: "Envoyez un mail", description: "Je vous attends pour vous aider du lundi au vendredi de 7h à 18h", buttonText: "Envoyer un mail", link: "mailto:contact@emanuel.dj", color: "neon-green" },
        { icon: "call.png", title: "Appelez", description: "Je vous attends pour vous aider du lundi au vendredi de 7h à 18h", buttonText: "+228 98784589", link: "tel:+22898784589", color: "neon-orange" },
    ]

    useEffect(() => {
        setIsInView(false)
    }, [])

    return (
        <div className="min-h-screen bg-background">
            {isInView && (
                <div className='fixed flex flex-col items-center justify-center bg-background h-full w-full z-50'>
                    <div className='loader border-t-neon-blue'></div>
                </div>
            )}

            <motion.div
                variants={Animations.opacity({ duration: 0.4 })}
                initial="hidden"
                whileInView="show"
            >
                <AppBar fixed={true} logo="/logo.png" menuIcon="/icons/menu.png" />

                {/* Header */}
                <div className='w-full flex justify-center pt-32 pb-12'>
                    <div className='flex flex-col items-center text-center px-6'>
                        <h1 className='text-4xl font-bold text-white mb-2 font-handwritten transform -rotate-1'>Contact</h1>
                        <p className='text-gray-400'><span className='font-bold text-neon-blue'>Accueil</span> • Contact</p>
                    </div>
                </div>

                {/* Contact Options */}
                <div className='flex flex-wrap justify-center gap-6 m-3 max-w-6xl mx-auto'>
                    {contacts.map((element, index) => (
                        <motion.div
                            variants={Animations.bottomToTop({ duration: 0.4 * index + 0.4 })}
                            initial="hidden"
                            whileInView="show"
                            key={element.icon}
                            className={`w-full sm:w-96 p-8 sketchy-box bg-background/50 backdrop-blur-sm flex flex-col items-center gap-4 group hover:border-${element.color}`}
                            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                        >
                            <div className={`h-20 w-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-${element.color} transition-colors`}>
                                <img src={`/icons/${element.icon}`} alt="" className='h-10 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity' />
                            </div>
                            <h3 className='text-xl font-bold text-white'>{element.title}</h3>
                            <p className='text-center text-gray-400 font-light text-sm'>{element.description}</p>
                            <a href={element.link} className={`text-${element.color} font-bold hover:underline decoration-2 underline-offset-4`}>
                                {element.buttonText}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Form Section */}
                <div className='m-3 my-20 flex flex-col items-center px-4'>
                    <h2 className='text-3xl font-bold mb-10 text-white'>Contactez-moi</h2>
                    <form className='w-full max-w-[700px] flex flex-col gap-6 relative p-8 md:p-12 border border-white/10 rounded-sm bg-white/5 sketchy-box' style={{ borderColor: 'var(--neon-purple)' }}>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Nom Complet</label>
                                <input type="text" placeholder='John Doe' className='w-full rounded-sm bg-background/50 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors placeholder-gray-600' />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Numéro</label>
                                <input type="text" placeholder='+228 ...' className='w-full rounded-sm bg-background/50 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors placeholder-gray-600' />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Message</label>
                            <textarea rows={5} placeholder='Bonjour, j ai un projet...' className='w-full rounded-sm bg-background/50 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors placeholder-gray-600' />
                        </div>

                        <div className="text-center mt-4">
                            <button className='px-12 py-4 bg-neon-purple text-white font-bold text-lg rounded-sm hover:bg-white hover:text-neon-purple transition-all transform hover:-rotate-1 shadow-lg shadow-neon-purple/20'>
                                Envoyer le message
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact