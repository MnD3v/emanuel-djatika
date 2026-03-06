import { motion } from 'framer-motion'
import React from 'react'

const About = () => {

    const garantis = [
        { icon: "securite.png", titre: "Robustesse & Sécurité", description: "La robustesse garantit la fiabilité, la sécurité protège les données. Ensemble, elles assurent stabilité et protection.", color: "blue" },
        { icon: "interface.png", titre: "Interfaces Intuitives", description: "Des interfaces intuitives et ergonomiques améliorent l'expérience utilisateur en rendant les actions simples.", color: "amber" },
        { icon: "rapide.png", titre: "Hautes Performances", description: "Des performances optimisées et réactives garantissent une expérience fluide et agréable pour vos utilisateurs.", color: "emerald" },
        { icon: "code.png", titre: "Code Clean & Maintenable", description: "Un code propre et maintenable facilite les mises à jour et permet une évolution efficace du projet sur le long terme.", color: "violet" },
        { icon: "agile.png", titre: "Méthode Agile", description: "Le développement agile et itératif permet des ajustements rapides, favorisant une amélioration continue.", color: "blue" },
    ]

    const getColorClass = (color: string) => {
        switch (color) {
            case 'blue': return 'text-blue-400 bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/50';
            case 'amber': return 'text-amber-400 bg-amber-500/10 border-amber-500/20 group-hover:border-amber-500/50';
            case 'emerald': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/50';
            case 'violet': return 'text-violet-400 bg-violet-500/10 border-violet-500/20 group-hover:border-violet-500/50';
            default: return 'text-white bg-white/10 border-white/20 hover:border-white/50';
        }
    }

    return (
        <section className='py-12'>
            <div className='mb-16 md:text-left'>
                <span className="text-violet-500 font-semibold tracking-wider text-sm uppercase block mb-3">Mes Valeurs</span>
                <h2 className='text-3xl font-bold text-white mb-6'>Pourquoi travailler avec moi ?</h2>
                <p className='text-gray-400 max-w-2xl text-lg'>
                    Engagement, qualité et transparence sont au cœur de ma démarche pour assurer le succès de vos projets.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {garantis.map((element, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={element.titre}
                        className='flex flex-col items-start group p-6 rounded-xl bg-background/50 border border-white/5 hover:bg-white/[0.02] transition-colors'
                    >
                        <div
                            className={`mb-6 p-4 rounded-lg border backdrop-blur-sm transition-all duration-300 ${getColorClass(element.color).split(' ').slice(1).join(' ')}`}
                        >
                            <img src={`/icons/${element.icon}`} alt="" className='h-6 w-6 object-contain filter invert opacity-80' />
                        </div>
                        <h3 className={`font-semibold text-lg mb-3 transition-colors duration-300 ${getColorClass(element.color).split(' ')[0]}`}>
                            {element.titre}
                        </h3>
                        <p className='text-sm text-gray-400 leading-relaxed'>{element.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default About