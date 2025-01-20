"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import AppBar from './app_bar'

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
        <motion.div className={` fixed flex justify-center  text-black bg-white  w-full shadow z-50`}
            initial={{ y: -200 }}
            animate={{ y: fixed == true ? 0 : showAppBar ? 0 : -200, }}

        >
            <AppBar fixed={true} logo={"/red-logo.png"} menuIcon="/icons/red-menu.png" ></AppBar>


        </motion.div>
    )
}

export default FixedAppBar