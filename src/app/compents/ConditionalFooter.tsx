"use client";

import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 mt-20 py-12 relative z-10 transition-colors bg-background">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                <div className="flex flex-col gap-3">
                    <span className="font-bold text-2xl tracking-tight text-white/90">Emanuel.D</span>
                    <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                        Construire des expériences numériques fiables, avec passion et une grande exigence technique.
                    </p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-gray-400">
                    <a href="https://github.com/em-djatika" className="hover:text-blue-400 transition-colors py-1 group relative">
                        GitHub
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
                    </a>
                    <a href="https://linkedin.com/in/emanuel-djatika-283390276/" className="hover:text-blue-400 transition-colors py-1 group relative">
                        LinkedIn
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
                    </a>
                    <a href="mailto:em.djatika@gmail.com" className="hover:text-blue-400 transition-colors py-1 group relative">
                        Email
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
                    </a>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center md:text-left text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Emanuel Djatika. Tous droits réservés.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-gray-300 transition-colors">Mentions légales</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
