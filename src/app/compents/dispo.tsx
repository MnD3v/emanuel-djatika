import React from 'react'

const Dispo = () => {
    return (
        <div className='py-12 text-center'>
            <div className='p-8 md:p-14 rounded-2xl bg-gradient-to-br from-blue-900/40 via-background to-emerald-900/20 border border-white/5 shadow-2xl mx-auto max-w-4xl'>
                <h2 className='text-3xl font-bold mb-4 text-white tracking-tight'>Prêt à lancer votre projet ?</h2>
                <p className='text-gray-400 mb-10 max-w-lg mx-auto text-lg'>
                    Je suis disponible pour discuter de vos besoins et construire ensemble une solution performante, évolutive et sur mesure.
                </p>
                <a
                    href='/contact'
                    className='inline-flex items-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 ring-1 ring-white/10'
                >
                    Me contacter
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Dispo