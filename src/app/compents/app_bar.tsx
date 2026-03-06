"use client"
import React, { useState, useEffect } from 'react'

const AppBar = ({ fixed, logo, menuIcon }: { fixed?: boolean, logo: string, menuIcon: string }) => {
    const [menuIsOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-background/80 backdrop-blur-lg border-b border-white/5 shadow-sm' : 'py-5 bg-transparent border-transparent'}`}>
            <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
                {/* Professional Logo */}
                <a href="#" className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
                    Emanuel<span className="text-blue-500">.Djatika</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex items-center space-x-8 text-sm font-medium tracking-wide">
                        <a href="#work" className="text-gray-300 hover:text-white transition-colors">
                            Portfolio
                        </a>
                        <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                            Services
                        </a>
                        <a href="#blog" className="text-gray-300 hover:text-white transition-colors">
                            Blog
                        </a>
                        <a href="/contact" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all">
                            Me contacter
                        </a>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!menuIsOpen)}
                    className="md:hidden p-2 text-white"
                >
                    <span className="sr-only">Menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuIsOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuIsOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-xl z-50">
                    <ul className="flex flex-col space-y-6 text-center">
                        <a href="#work" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white transition-colors">Portfolio</a>
                        <a href="#services" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white transition-colors">Services</a>
                        <a href="#blog" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white transition-colors">Blog</a>
                        <a href="/contact" onClick={() => setIsOpen(false)} className="text-lg text-white font-medium">Me contacter</a>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default AppBar