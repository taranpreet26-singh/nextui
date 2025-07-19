"use client"

import Button from "./ui/Button"
import React, { useEffect, useState } from "react"
import {  motion } from "framer-motion"
import { useRouter } from "next/navigation"
type position = {
    x: number,
    y: number
}

export default function Feature({className}:{className:string}) {

    const [position, setPosition] = useState<position>({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false);
    const router = useRouter()
    function handleBubbleMoment(e: React.MouseEvent) {
        setIsHovering(true)
        const { clientX, clientY } = e;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (clientX - (rect.left + rect.width / 2)) / 60;
        const y = (clientY - (rect.top + rect.height / 2)) / 60;
        setPosition({ x, y });
        console.log(x, y)
    }
    useEffect(() => {
    }, [position])
    return <section className={className}>
        <motion.div
            animate={{
                x: isHovering ? position.x : 0,
                y: isHovering ? position.y : 0
            }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            onMouseMove={handleBubbleMoment}
            onMouseLeave={() => { setPosition({ x: 0, y: 0 }); setIsHovering(false) }}

            className="w-full h-fit lg:w-fit lg:h-3/4 min-h-fit p-8 lg:py-20 mt-30 lg:px-30 bg-indigo-800 rounded-2xl relative">
            <motion.h1

                className="text-4xl lg:text-6xl font-semibold text-white ">Ship <span className="bg-gradient-to-r bg-clip-text text-transparent from-pink-700 via-purple-700 to-cyan-600 ">faster</span></motion.h1>
            <h1 className="text-4xl lg:text-6xl font-semibold text-white ">with beautiful components</h1>

            <p className="text-white/70 mt-5 text-lg">Premade templates of over 210+ beautiful and responsive components, professionally created by the team behind NextUI.</p>

            <div className="flex mt-5 lg:flex-row text-white flex-col text-sm  gap-5 items-start lg:items-center">
                <div className="flex border-[0.4px] rounded-full items-center px-2 border-white gap-2">
                    <Sign />
                    <h1 className="text-md font-medium">Lifetime Access</h1>
                </div>
                <div className="flex border-[0.4px] items-center rounded-full px-2 border-white gap-2">
                    <Sign />
                    <h1 className="text-md font-medium">Free Update</h1>
                </div>
                <div className="flex border-[0.4px] items-center rounded-full px-2 border-white gap-2">
                    <Sign />
                    <h1 className="text-md font-medium">Beautiful Designed</h1>
                </div>
                <div className="flex border-[0.4px] items-center rounded-full px-2 border-white gap-2">
                    <Sign />
                    <h1 className="text-md font-medium">Typescript based</h1>
                </div>
            </div>
            <BackgroundBg />
                <Button type="secondary" onClick={()=>router.push('/components')}  className="mt-5 relative z-[10] cursor-pointer">
                    Explore NextUI Galaxy
                </Button>
        </motion.div>
    </section>
}

const BackgroundBg = () => {
    return <div
        className="absolute inset-0  w-full h-full  transform opacity-10"
        style={{ backgroundImage: "url(/images/noise.webp)", backgroundSize: "30%" }}
    >
    </div>
}

const Sign = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon text-[#ff5d91] icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg>
}