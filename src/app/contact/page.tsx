"use client"
import React, { useEffect, useState } from 'react'
import AppBar from '../compents/app_bar'
import { motion } from 'framer-motion'
import Animations from '../compents/utils/item'

const Contact = () => {
    const [isInView, setIsInView] = useState(true);

    const contacts = [
        { icon: "messages.png", title: "Ecrivez-moi un message", description: "Je vous attends pour vous aider du lundi au vendredi de 7h à 18h", buttonText: "Envoyer un message", link: "mailto:contact@emanuel.dj", tint: "blue" },
        { icon: "mail-blue.png", title: "Envoyez un mail", description: "Je vous attends pour vous aider du lundi au vendredi de 7h à 18h", buttonText: "Envoyer un mail", link: "mailto:contact@emanuel.dj", tint: "emerald" },
        { icon: "call.png", title: "Appelez", description: "Je vous attends pour vous aider du lundi au vendredi de 7h à 18h", buttonText: "+228 98784589", link: "tel:+22898784589", tint: "amber" },
    ]

    useEffect(() => {
        setIsInView(false)
    }, [])

    return (
        <div className="min-h-screen bg-background">
            {isInView && (
                <div className='fixed flex flex-col items-center justify-center bg-background h-full w-full z-50'>
                    <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500'></div>
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
                        <h1 className='text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight'>Contact</h1>
                        <p className='text-gray-400 font-medium'><span className='text-blue-500'>Accueil</span> <span className="mx-2 text-gray-600">•</span> Contact</p>
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
                            className={`w-full sm:w-96 p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-4 group hover:bg-white/[0.04] transition-all duration-300 hover:border-${element.tint}-500/30`}
                        >
                            <div className={`h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-${element.tint}-500/30 transition-colors`}>
                                <img src={`/icons/${element.icon}`} alt="" className='h-8 object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity' />
                            </div>
                            <h3 className='text-xl font-bold text-white text-center'>{element.title}</h3>
                            <p className='text-center text-gray-400 text-sm leading-relaxed'>{element.description}</p>
                            <a href={element.link} className={`text-${element.tint}-400 font-medium hover:text-${element.tint}-300 transition-colors inline-flex items-center mt-2`}>
                                {element.buttonText}
                                <span className="ml-2">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Form Section */}
                <div className='m-3 my-24 flex flex-col items-center px-4'>
                    <h2 className='text-3xl font-bold mb-10 text-white tracking-tight'>Contactez-moi</h2>
                    <form className='w-full max-w-3xl flex flex-col gap-6 p-8 md:p-12 border border-white/5 rounded-2xl bg-white/[0.02] shadow-2xl'>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <label className="block text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Nom Complet</label>
                                <input type="text" placeholder='John Doe' className='w-full rounded-lg bg-background/50 border border-white/10 px-4 py-3.5 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all outline-none placeholder-gray-600' />
                            </div>
                            <div className="flex-1">
                                <label className="block text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Numéro</label>
                                <input type="text" placeholder='+228 ...' className='w-full rounded-lg bg-background/50 border border-white/10 px-4 py-3.5 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all outline-none placeholder-gray-600' />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Message</label>
                            <textarea rows={5} placeholder='Bonjour, j ai un projet...' className='w-full rounded-lg bg-background/50 border border-white/10 px-4 py-3.5 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all outline-none placeholder-gray-600 resize-none' />
                        </div>

                        <div className="text-center mt-6">
                            <button type="button" className='px-10 py-4 bg-white/10 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/15 hover:border-white/20 transition-all shadow-sm'>
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