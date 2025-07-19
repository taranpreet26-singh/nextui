"use client"
import { BookOpenText, ChevronRight, ExternalLink } from "lucide-react";
import Button from "./ui/Button";
import Image from "next/image";
import HomeBannerButoon from "./ui/HomeBannerButton";
import {  motion, easeInOut } from "framer-motion";
import { useEffect,  useState } from "react";

export default function HomeBanner() {

    const [currentText,setCurrentText] = useState<number>(0)
    const arrText = ["better","faster","modern","awesome","beautiful"]
    useEffect(()=>{
            const interval =   setInterval(() => {
            if( currentText === arrText.length-1){
                setCurrentText(0)
            }else{
                setCurrentText(currentText + 1)
            }
        }, 5000);

        return ()=>{
            clearInterval(interval)
        }
    },[currentText])
   
    
  

    return <section className="w-full bg-black mb-20 h-fit lg:h-[90vh]">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
            <div  className="w-full flex flex-col justify-center h-full">
                <HomeBannerButoon className="text-xs">
                    Introducing Modern UI
                </HomeBannerButoon>
                <motion.span className="text-neutral-300 flex flex-col gap-3 mt-5 text-4xl  md:text-6xl font-bold">
                    <span >Make you websites  </span>  
                    <motion.span > looks 10x {" "} 
                        {arrText.map((element,index)=>{
                        if(currentText === index)
                        return <motion.span 
                        layoutId="span" 
                        layout 
                        style={{display:"inline",backgroundRepeat:"no-repeat",overflow:"hidden"}}
                        className="w-fit px-2 h-fit bg-gradient-to-r from-pink-700 rounded-lg via-purple-700 to-blue-700" initial={{opacity:0,filter:"blur(10px)" , backgroundSize:"0% 100%"}} 
                        animate={{opacity:1,filter:"blur(0px)",backgroundSize:"100% 100%"}} transition={{duration:1,ease:easeInOut}} key={index}>
                        {element}
                        </motion.span>
                    })}
                    </motion.span>
                </motion.span>
                
                <p className="text-sm text-white/60 pr-0  lg:pr-50 mt-5">Redefined UI building for developers. Quickly add components, themes, and responsive layouts to your app at any scale.</p>
                <div className="flex gap-5 mt-5 items-center">
                    <Button type="secondary" className="flex gap-2 items-center">
                        Get Started
                        <ExternalLink size={15} />
                    </Button>
                    <Button type="primary" className="flex gap-2 group items-center" >
                        <BookOpenText size={15} />
                        Components
                        <ChevronRight size={15} className="group-hover:translate-x-1.5 transition-all duration-700 ease-in-out" />
                    </Button>
                </div>

            </div>
            <div className="w-full flex flex-col lg:flex-row items-center  h-full">
                <div className="w-full z-1 group relative mt-10 h-fit p-[1px]  rounded-2xl ">
                    <div 
                    className="w-full md:flex-row flex-col border-2 bg-zinc-900 border-zinc-600 rounded-2xl h-fit flex  ">
                        <div className="flex items-center justify-center">
                            <Image width={400} height={100} alt="logo" className="w-[300px] lg:w-[65rem]"  src={'/images/logo.png'} />
                        </div>
                        <div className="flex flex-col p-5 lg:p-0  justify-center">
                            <h1 className="text-2xl font-semibold">Build sleek UI faster</h1>
                            <p className="text-sm text-neutral-400">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
                        </div>
                    </div>
                    <div className="absolute z-[-1] inset-0 w-full h-full">
                        <div className="w-full h-full absolute transition-opacity duration-1000 opacity-100 group-hover:opacity-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 blur-md"></div>
                        <div className="w-full h-full absolute transition-opacity duration-1000 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 blur-md"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}   