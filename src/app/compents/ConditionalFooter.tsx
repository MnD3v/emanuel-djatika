"use client";

import React from 'react';
import { useDevMode } from '../context/DevModeContext';

const ConditionalFooter = () => {
    const { isDevMode } = useDevMode();

    if (isDevMode) return null;

    return (
        <footer className="border-t border-white/10 mt-20 py-12 relative z-10 transition-colors">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                <div className="flex flex-col gap-4">
                    <span className="font-bold text-xl tracking-tight text-white/90 transform -rotate-1 inline-block hover:rotate-0 transition-transform cursor-default" style={{ fontFamily: 'system-ui' }}>Emanuel Djatika</span>
                    <p className="text-gray-400 text-sm max-w-xs">
                        Construire des expériences numériques avec passion et précision.
                    </p>
                </div>

                <div className="flex gap-6 text-sm font-medium text-gray-400">
                    <a href="https://github.com/em-djatika" className="hover:text-neon-blue transition-colors relative group">
                        GitHub
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-neon-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                    <a href="https://linkedin.com/in/emanuel-djatika-283390276/" className="hover:text-neon-orange transition-colors relative group">
                        LinkedIn
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-neon-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                    <a href="mailto:em.djatika@gmail.com" className="hover:text-neon-green transition-colors relative group">
                        Email
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-6 mt-12 text-center md:text-left text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Emanuel Djatika. Tous droits réservés.
            </div>
        </footer>
    );
};

export default ConditionalFooter;
