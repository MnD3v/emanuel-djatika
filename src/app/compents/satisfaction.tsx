"use client"
import { motion, useInView } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react'

interface StatItem {
    value: number;
    suffix: string;
    description: string;
    color: string;
    icon: React.ReactNode;
}

function CountUp({ target, suffix, isActive }: { target: number; suffix: string; isActive: boolean }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isActive) return
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
            current += increment
            if (current >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, duration / steps)
        return () => clearInterval(timer)
    }, [isActive, target])

    return <span>{count}{suffix}</span>
}

const Satisfaction = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const stats: StatItem[] = [
        {
            value: 100,
            suffix: "%",
            description: "Satisfaction client",
            color: "blue",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            value: 20,
            suffix: "+",
            description: "Projets livrés",
            color: "violet",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            value: 98,
            suffix: "%",
            description: "Respect des délais",
            color: "emerald",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
    ]

    const getColors = (color: string) => {
        switch (color) {
            case 'blue': return { gradient: 'from-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', icon: 'bg-blue-500/10 border-blue-500/20 text-blue-400' }
            case 'violet': return { gradient: 'from-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', icon: 'bg-violet-500/10 border-violet-500/20 text-violet-400' }
            case 'emerald': return { gradient: 'from-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', icon: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' }
            default: return { gradient: 'from-white/10', border: 'border-white/20', text: 'text-white', icon: 'bg-white/10 border-white/20 text-white' }
        }
    }

    return (
        <section className='py-12' ref={ref}>
            {/* Texte centré */}
            <div className='text-center mb-16'>
                <span className="text-emerald-500 font-semibold tracking-wider text-sm uppercase block mb-3">Chiffres Clés</span>
                <h2 className='text-3xl font-bold tracking-tight text-white mb-4'>
                    L'excellence comme standard
                </h2>
                <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
                    Je m'engage à fournir des résultats de haute qualité, dans les délais impartis.
                </p>
            </div>

            {/* Stats grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
                {stats.map((stat, index) => {
                    const colors = getColors(stat.color)
                    return (
                        <motion.div
                            key={stat.description}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`p-8 rounded-2xl bg-gradient-to-br ${colors.gradient} to-transparent border ${colors.border} text-center group hover:scale-105 transition-transform duration-300`}
                        >
                            {/* Icon */}
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.icon} border mb-6 mx-auto`}>
                                {stat.icon}
                            </div>

                            <h3 className={`text-5xl font-bold tracking-tight ${colors.text} mb-2 tabular-nums`}>
                                <CountUp target={stat.value} suffix={stat.suffix} isActive={isInView} />
                            </h3>
                            <p className='text-gray-400 font-medium tracking-wide text-sm'>{stat.description}</p>
                        </motion.div>
                    )
                })}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center"
            >
                <a
                    href='/contact'
                    className='inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 ring-1 ring-white/10'
                >
                    Démarrer un projet
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </motion.div>
        </section>
    )
}

export default Satisfaction