"use client"
import {motion} from "framer-motion"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import { ExternalLink } from "lucide-react";

export default function NavbarSecondary({className}:{className?:string}){
        const tabsArr = [
        {
        title:"Components",
        href:"./components"
        }
    ]
    const router = useRouter()
    const [hovered,setHovered] = useState<string>("components")

    return  <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`${className} py-4 flex    lg:container  mx-auto   justify-between items-center`}>
               <div className="flex h-full  items-center">
                <h1 onClick={()=>router.push('/')} className="text-transparent cursor-pointer bg-clip-text font-semibold  bg-gradient-to-r dark:from-white from-black to-zinc-700 text-2xl">NextUI</h1>
               <div className="flex items-end h-full mt-1 ml-5">
                {
                    tabsArr.map((element,index)=>{
                        
                        return <motion.div 
                        onMouseLeave={()=>{setHovered(element.title)}} onMouseEnter={()=>{setHovered(element.title)}} onClick={()=>router.push(`/${element.href}`)} key={index} className="px-2 relative cursor-pointer z-[1] text-white/80  ">
                            {element.title}
                            {
                                element.title.toLowerCase() === hovered?.toLowerCase() &&
                                <motion.span layout layoutId="hovered-span" className="absolute rounded-lg  inset-0 w-full h-full bg-zinc-800 z-[-1]"></motion.span>
                            }
                        </motion.div>
                    })
                }
                </div>
               </div>
                <div className="flex gap-2 h-full  items-center">
                    <Button type="primary" className="flex  items-center  py-[10px] mt-1 md:mt-0 md:py-[14px] gap-2">
                         <p className="hidden md:block">Get Started</p>
                        <ExternalLink size={15} />
                    </Button>
                </div>
            </motion.nav>
}