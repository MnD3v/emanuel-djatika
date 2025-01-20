"use client"
import Services from "./compents/services";
import About from "./compents/garantis";
import Blog from "./compents/blog";
import AppBar from "./compents/app_bar";
import Presentation from "./compents/presentation";
import Dispo from "./compents/dispo";
import Technologies from "./compents/technologies";
import Satisfaction from "./compents/satisfaction";
import Realisations from "./compents/realisations";
import FixedAppBar from "./compents/fixed_app_bar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {

    setIsInView(false)

    return () => {

    }
  }, [])

  return (
    <div>
      {
        isInView && <div className='fixed flex flex-col items-center justify-center bg-blue-950 h-full w-full'>
          <div className='loader'></div>
        </div>}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className=" w-full flex flex-col items-center max-sm:text-sm">
        <FixedAppBar></FixedAppBar>
        <div className="relative flex flex-col items-center text-white w-full bg-morange overflow-hidden">
          <div className='absolute -rotate-45 h-full w-80 bg-gradient-to-l from-black/10 to-transparent pointer-events-none rounded-full z-10'></div>

          <div className='absolute -top-[500px] -left-0 h-[1200px] w-[200px] md:w-[400px]  rotate-45 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10'></div>

          <AppBar fixed={false} logo={"/logo.png"} menuIcon="/icons/white-menu.png" ></AppBar>
          <Presentation></Presentation>
        </div>

        <div className="bg-[#541FA3] w-full text-white">
          <div className="absolute h-96 w-96 rounded-full -left-40 bg-white/5 z-0">

          </div>
          <div className="relative z-30">
            <Services></Services>

          </div>
        </div>

        <div className="bg-zinc-200 w-full flex justify-center">
          <About></About>
        </div>
        <Satisfaction></Satisfaction>
        <Dispo></Dispo>
        <Technologies></Technologies>
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
