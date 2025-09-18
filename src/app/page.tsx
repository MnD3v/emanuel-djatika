"use client"
import Services from "./compents/services";
import About from "./compents/garantis";
import Presentation from "./compents/presentation";
import Dispo from "./compents/dispo";
import Tarif from "./compents/tarif";
import Realisations from "./compents/realisations";
import Formation from "./compents/formation";
import FixedAppBar from "./compents/fixed_app_bar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Blog from "./blog/page";

export default function Home() {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {

    setIsInView(false)

    return () => {

    }
  }, [])

  return (
            <div className=" relative">
                <div className="absolute inset-0"></div>
      {
        isInView && <div className='fixed flex flex-col items-center justify-center bg-[linear-gradient(225deg,_rgba(6,182,212,0.9),_rgba(139,92,246,0.9)_50%,_rgba(236,72,153,0.9))] h-full w-full z-50'>
          <div className='loader'></div>
        </div>}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full flex flex-col items-center max-sm:text-sm relative z-10">
        <FixedAppBar fixed={true}></FixedAppBar>
        <Presentation></Presentation>

        <Services></Services>

        <About></About>
        <Tarif></Tarif>
        <Formation></Formation>
        <Dispo></Dispo>
        <Realisations></Realisations>
        <Blog></Blog>
        {/* <Temoignages></Temoignages> */}

        {/* <CurvedText diameter='900' radius='12' /> */}

        {/* <div className="bg-red-700 p-3 fixed self-center text-white font-bold font-roboto text-lg">
        <p className="hidden max-sm:block ">SM</p>
        <p className="hidden max-md:block ">MD</p>
        <p className="hidden max-lg:block ">LG</p>
        <p className="hidden max-xl:block ">XL</p>
        <p className="hidden max-2xl:block ">2XL</p>
      </div> */}

      </motion.div >
    </div>


  );
}
