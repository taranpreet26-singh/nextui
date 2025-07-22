"use client"

import {motion} from "framer-motion"
import { memo } from "react"

export default function BuildInfoSection(){
    return <section className="w-full  relative py-70 text-center flex items-center justify-center h-fit lg:h-[80vh]">
       <MemoStarGalaxy/>
       <div className="w-fit h-fit">
       <h1 className="text-6xl font-bold">Welcome to UI Universe</h1>
        <div className="absolute bg-gradient-to-r from-transparent via-cyan-500 to-transparent inset-x-0 mx-auto w-3/4 h-[2px] "></div>
       </div>
       <div className="absolute inset-x-0 w-[60%] h-[5rem] rounded-full  bg-gradient-to-t from-cyan-500 to-black mx-auto bottom-0 blur-[150px]"></div>
    </section>
}




export const StarGalaxy = ()=>{
    const randomMove = ()=>Math.random() * 10-20
    const random = ()=> Math.random()
    const randomOpcity = ()=>Math.random()
     return<div className="absolute  inset-0">
            {
                [...Array(280)].map((_,i)=>{
                    return <motion.span
                    key={i}
                    animate={{
                        top:`calc(${random() * 100}% + ${randomMove()}px)`,
                        left:`calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity:randomOpcity(),
                        scale:[1,1.2,0]
                    }}
                    transition={{duration:random() * 10 + 20,repeat:Infinity,ease:'linear'}}
                    style={{position:"absolute",backgroundColor:"white",top:`${random() * 100}%`,left:`${random() * 100}%`}}
                    className="inline-block  z-1 bg-white rounded-full  w-[2px] aspect-square"
                    >
                    </motion.span>
                })
            }
            </div>

            
}

const MemoStarGalaxy = memo(StarGalaxy)