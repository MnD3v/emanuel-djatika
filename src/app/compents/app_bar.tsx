"use client"
import React, { useState } from 'react'
import { useDevMode } from "../context/DevModeContext";
import { Terminal } from "lucide-react";

const AppBar = ({ fixed, logo, menuIcon }: { fixed?: boolean, logo: string, menuIcon: string }) => {
    const [menuIsOpen, setIsOpen] = useState(false)
    const { isDevMode, toggleDevMode } = useDevMode();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
                {/* Handwritten Logo */}
                <a href="#" className="text-2xl font-bold tracking-tight text-white hover:text-neon-blue transition-colors transform -rotate-2 hover:rotate-0" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                    Emanuel.D
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex items-center space-x-8 text-sm font-bold tracking-wide uppercase">
                        {/* Work Link with Green Highlight Style */}
                        <a href="#" className="relative px-2 py-1 text-white hover:text-white group">
                            <span className="absolute inset-0 bg-neon-green/20 transform -skew-x-12 scale-0 group-hover:scale-100 transition-transform origin-bottom"></span>
                            <span className="relative z-10 highlight-link border-neon-green">Work</span>
                        </a>
                        <a href="#services" className="relative text-white hover:text-white group">
                            <span className="highlight-link border-neon-blue">Services</span>
                        </a>
                        <a href="#blog" className="relative text-white hover:text-white group">
                            <span className="highlight-link border-neon-orange">Blog</span>
                        </a>
                        <a href="/contact" className="relative text-white hover:text-white group">
                            <span className="highlight-link border-white">Contact</span>
                        </a>
                    </ul>

                    {/* Dev Mode Toggle */}
                    <button
                        onClick={toggleDevMode}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-sm border transition-all font-mono text-xs ${isDevMode
                            ? 'bg-neon-green/10 border-neon-green text-neon-green'
                            : 'bg-transparent border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-500'}`}
                        title="Toggle Dev Mode"
                    >
                        <Terminal className="w-4 h-4" />
                        <span>DEV_MODE</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!menuIsOpen)}
                    className="md:hidden p-2 text-white"
                >
                    <span className="sr-only">Menu</span>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuIsOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuIsOpen && (
                <div className="md:hidden absolute top-20 left-4 right-4 bg-[#161b22] border border-white/10 p-6 rounded-2xl shadow-xl z-50 sketchy-box">
                    <ul className="flex flex-col space-y-6 text-center">
                        <a href="#" onClick={() => setIsOpen(false)} className="text-xl text-white font-bold hover:text-neon-green">Work</a>
                        <a href="#services" onClick={() => setIsOpen(false)} className="text-xl text-white font-bold hover:text-neon-blue">Services</a>
                        <a href="#blog" onClick={() => setIsOpen(false)} className="text-xl text-white font-bold hover:text-neon-orange">Blog</a>
                        <a href="/contact" onClick={() => setIsOpen(false)} className="text-xl text-white font-bold">Contact</a>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default AppBar