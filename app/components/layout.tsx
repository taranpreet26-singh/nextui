"use client"
import Button from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import {  motion } from "framer-motion"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { data } from "@/lib/dummy.data";

export default function ComponentLayout({ children }: { children: React.ReactNode }) {
    const tabsArr = [
        {
        title:"Components",
        href:"./components"
        },
        {
            title:'Templates',
            href:'./templates'
        }
    ]

    
    const [currentComponent,setComponent] = useState<string|null>(null)
    const router = useRouter()
    const [hovered,setHovered] = useState<string>("components")
    return <section className="w-full h-[100vh]" >
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" py-4 flex px-5 lg:px-10    lg:container  mx-auto   justify-between items-center">
           <div className="flex items-center">
            <h1 className="text-transparent bg-clip-text font-semibold  bg-gradient-to-r dark:from-white from-black to-zinc-700 text-2xl ">NextUI</h1>
           <div className="flex items-end h-full mt-1 ml-5">
            {
                tabsArr.map((element,index)=>{
                    return <motion.div onMouseLeave={()=>{setHovered(element.title)}} onMouseEnter={()=>{setHovered(element.title)}} onClick={()=>router.push(element.href)} key={index} className="px-2 relative z-[1] text-white/80  ">
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
            <div className="flex gap-2 items-center">
                <Button type="primary" className="flex  items-center py-[10px] gap-2">
                    Get Started
                    <ExternalLink size={15} />
                </Button>
            </div>
        </motion.nav>
        <div className="flex w-full h-full mt-10">
            <div className="w-[20%] h-full gap-3 pt-5 flex flex-col text-sm px-16 ">
                <h1 className="dark:text-white text-black">All Component</h1>
                {
                    data.map((element,index)=>{
                        return <h3 key={index} onClick={()=>{router.push(`/components/${element.name}`); setComponent(element.name)}} className={`hover:dark:text-white  transition-all ease-in-out duration-700 hover:translate-x-1.5 cursor-pointer text-black/70 ${currentComponent === element.name?"dark:text-white":"dark:text-zinc-600"} `}>{element.name.replaceAll("-"," ")}</h3>
                    })
                }
            </div>
            <div className="w-[80%] h-full">
                {children}
            </div>
        </div>
    </section>
}