"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const AppBar = ({ fixed, logo, menuIcon }: { fixed: boolean, logo: string, menuIcon: string }) => {
    const [menuIsOpen, setIsOpen] = useState(false)


    const menuRef = useRef<HTMLDivElement>(null)


    useEffect(() => {

        const handleScroll = () => {
            console.log("scring")
            console.log(menuIsOpen)

            setIsOpen(false)
            console.log(menuIsOpen)

        }



        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll)
        }


    }, [])


    return (
        <div className='w-full flex flex-col items-center'>


            <motion.div ref={menuRef}
                initial={{ y: -300 }}
                animate={{ y: menuIsOpen ? 0 : -300, transition: { duration: 0.25 } }}
                className='fixed bg-white w-full p-6 text-black z-50'>
                <ul className={`flex flex-col items-center justify-center `}>
                    <a href="#" ><li className="font-openSans font-semibold py-3 px-4"> Accueil</li></a>
                    <a href="#services" ><li className="font-openSans font-semibold py-3 px-4"> Services</li></a>
                    <a href="#blog" ><li className="font-openSans font-semibold py-3 px-4"> Blog</li></a>
                    <a href="/contact" ><li className="font-openSans font-semibold py-3 px-4"> Contatcs</li></a>
                </ul>

            </motion.div>


            <button onClick={() => {
                setIsOpen(false)
            }}> <div className={`${menuIsOpen ? "block" : "hidden"} flex justify-center items-center top-2 right-2 fixed h-8 w-8 bg-black/30 rounded-lg`}>
                    <img src="/icons/close.png" alt="" className='h-3' />
                </div>
            </button>

            <div className="max h-16 md:h-24 w-full px-3 md:px-12 flex justify-between items-center">
                <img src={logo} alt="" className="h-9 md:h-14 " />

                <button onClick={() => {
                    setIsOpen(true)
                    console.log(menuIsOpen)
                }}
                    className={`${fixed ? "bg-black/10" : "bg-white/30"} p-2 md:hidden`}
                >

                    <img src={menuIcon} alt="" className='h-2 ' />

                </button>
                <ul className={`flex max-md:hidden ${fixed ? "text-black" : "text-white"}`}>
                    <a href="#" ><li className="font-openSans font-semibold py-3 px-4"> Accueil</li></a>
                    <a href="#services" ><li className="font-openSans font-semibold py-3 px-4"> Services</li></a>
                    <a href="#blog" ><li className="font-openSans font-semibold py-3 px-4"> Blog</li></a>
                    <a href="/contact" ><li className="font-openSans font-semibold py-3 px-4"> Contatcs</li></a>
                </ul>
            </div>
        </div>
    )
}

export default AppBar