import React from 'react'

const Dispo = () => {
    return (
        <div className='py-12 text-center'>
            <div className='p-8 md:p-12 sketchy-box border-neon-orange bg-neon-orange/5 backdrop-blur-sm mx-auto max-w-4xl' style={{ borderColor: 'var(--neon-orange)' }}>
                <h2 className='text-3xl font-bold mb-4 text-white'>Prêt à lancer votre projet ?</h2>
                <p className='text-gray-300 mb-8 max-w-lg mx-auto font-light'>
                    Je suis disponible pour discuter de vos besoins et voir comment je peux vous aider à construire quelque chose d'incroyable.
                </p>
                <a
                    href='/contact'
                    className='inline-block px-8 py-3 bg-neon-orange text-white font-bold rounded-sm hover:bg-white hover:text-neon-orange transition-colors transform hover:-rotate-1 shadow-lg shadow-neon-orange/20'
                >
                    Me contacter
                </a>
            </div>
        </div>
    )
}

export default Dispo