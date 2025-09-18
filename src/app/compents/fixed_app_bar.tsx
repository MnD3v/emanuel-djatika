"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const FixedAppBar = ({ fixed }: { fixed?: boolean }) => {
    const [showAppBar, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 180) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <motion.div 
            className="fixed w-full bg-white shadow-sm border-b border-gray-100 z-50"
            initial={{ y: -200 }}
            animate={{ y: fixed == true ? 0 : showAppBar ? 0 : -200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img 
                            src="/logo.png" 
                            alt="LafiaTech" 
                            className="h-8 w-auto"
                        />
                    </div>
                    
                    {/* Navigation Links - Hidden on mobile, visible on desktop */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <a href="#services" className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Services</a>
                        <a href="#garantis" className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Garanties</a>
                        <a href="#tarif" className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Tarifs</a>
                        <a href="#formation" className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Formations</a>
                        <a href="#realisations" className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Projets</a>
                        <a href="#blog" className="text-gray-700 hover:text-[#FF2600] transition-colors font-medium">Blog</a>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3">
                        {/* Language Selector */}
                        <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                            <span className="text-sm">🇫🇷</span>
                            <span className="text-sm font-medium text-gray-700">FR</span>
                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        
                        {/* PRENDRE UN RENDEZ VOUS Button */}
                        <button className="relative px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                            PRENDRE UN RENDEZ VOUS
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                        </button>
                        
                        {/* Mobile Menu Button */}
                        <button className="lg:hidden p-2 text-gray-700 hover:text-[#FF2600] transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default FixedAppBar