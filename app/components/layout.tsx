"use client"
import Button from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import {  motion, stagger } from "framer-motion"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { data } from "@/lib/dummy.data";
import NavbarSecondary from "@/components/ui/NavbarSecondary";

export default function ComponentLayout({ children }: { children: React.ReactNode }) {
    const tabsArr = [
        {
        title:"Components",
        href:"./components"
        }
    ]

    
    const [currentComponent,setComponent] = useState<string|null>(null)
    const router = useRouter()
    return <section className="w-full px-5 lg:px-20 lg:container mx-auto h-[100vh]" >
        <NavbarSecondary/>
        <div className="flex w-full gap-8 h-full mt-10">
            <div className="w-0 hidden lg:w-[20%] h-full gap-3 pt-5 lg:flex flex-col text-sm  ">
                <h1 className="dark:text-white text-black">All Component</h1>
                {
                    data.map((element,index)=>{
                        return <motion.h3 
                        initial={{filter:"blur(10px)",opacity:0,y:-10}}
                        animate={{filter:"blur(0px)",opacity:1,y:0}}
                        transition={{duration:0.3,delay:0.2*index}}
                        key={index} onClick={()=>{router.push(`/components/${element.name}`); setComponent(element.name)}} className={`hover:dark:text-white flex justify-between items-center transition-all ease-in-out duration-700 hover:translate-x-1.5 cursor-pointer text-black/70 ${currentComponent === element.name?"dark:text-white":"dark:text-zinc-600"} `}>
                            {element.name.replaceAll("-"," ")}
                            <div className="border-[0.5px] font-semibold bg-green-500 text-white text-[10px] px-1 rounded-full" >new</div>
                            </motion.h3>
                    })
                }
            </div>
            <div className="w-full  lg:w-[80%]  h-full">
                {children}
            </div>
        </div>
    </section>
}