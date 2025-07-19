"use client"

import { ExternalLink } from "lucide-react";
import Button from "./ui/Button";
import { useTheme } from "next-themes";
import {AnimatePresence, motion} from "framer-motion"

export default function Navbar() {
    const {theme,setTheme} = useTheme()
    
    return <nav className=" py-4 flex    justify-between items-center">
        <h1 className="text-transparent bg-clip-text font-semibold  bg-gradient-to-r dark:from-white from-black to-zinc-700 text-2xl ">NextUI</h1>
        <AnimatePresence>
        <div className="flex gap-2 items-center">
        {
            theme === "dark"?
            <motion.svg  
            exit={{filter:"blur(10px)"}}
            initial={{filter:"blur(2px)"}}
            animate={{filter:"blur(0px)"}}
            transition={{duration:0.3,ease:"easeInOut"}}
            xmlns="http://www.w3.org/2000/svg" onClick={()=>{setTheme(theme === "dark" ? "light" : "dark")}}  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></motion.svg>
            :
            <motion.svg 
            exit={{filter:"blur(10px)"}}
            initial={{filter:"blur(2px)"}}
            animate={{filter:"blur(0px)"}}
            transition={{duration:0.3,ease:"easeInOut"}}
            xmlns="http://www.w3.org/2000/svg"  width="24" onClick={()=>{setTheme(theme === "dark" ? "light" : "dark")}} height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></motion.svg>
        }
        
        <Button type="primary" className="flex  items-center py-[10px] gap-2">
            Get Started
            <ExternalLink size={15}/>
        </Button>
        </div>
        </AnimatePresence>
    </nav>
}