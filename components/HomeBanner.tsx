"use client"
import { ButtonBorder } from "./ui/HoverButton";
import HomeBannerButoon from "./ui/HomeBannerButton";
import {easeInOut, motion} from "framer-motion"
import Image from "next/image";

export default function HomeBanner() {
    return <section className="w-full h-full flex overflow-hidden items-end">
        <div className="w-full h-3.1/4 group top-5   bg-neutral-900/30 rounded-4xl grid overflow-hidden grid-cols-2 items-end   relative">
        <div className="w-full flex flex-col items-start justify-center  h-full ">
            <h1 className="text-7xl font-bold">Buy. Sell. Research.</h1>
            <h3 className="text-2xl font-semibold font-sans text-white/60 mt-3">The premium marketplace for collectors and investors. Real-time pricing with zero guesswork.</h3>
            <div className="flex gap-4 mt-4">
                <HomeBannerButoon className="" >
                    <span >Buy:</span>
                    <span className="text-green-600/80 font-semibold">$15000</span>
                </HomeBannerButoon>
                <ButtonBorder className="px-2 py-2">
                    <span >Sell:</span>
                    <span className="text-red-600/80 font-semibold">$15000</span>
                </ButtonBorder>
            </div>
        </div>
        <motion.div 
        initial={{x:150,rotate:-30}}    
        animate={{x:0,rotate:0}}
        exit={{x:150,rotate:-30}}    
        transition={{duration:0.7,ease:easeInOut}}
        className="w-full  h-full flex items-end relative   group top-14 justify-center ">
            <div
                className="bg-neutral-700 p-2 sm:p-4 mx-auto relative  top-0 w-fit  z-[1]  h-fit rounded-2xl border border-neutral-700"
                >
                <div className="bg-white dark:bg-black w-full h-fit p-2 sm:p-4 z-[2] rounded-3xl border border-neutral-700">
                    <Image width={400} height={300} alt="header-img" className="rounded-3xl" src={'/images/pikachu.jpg'} />
                </div>
        </div>
        </motion.div>
        </div>
    </section>
}