"use client"
import { easeInOut, motion } from "framer-motion"
import { JSX } from "react"

type itemType = {
    logo: JSX.Element,
    title: string,
    info: string,
    topic: string
}

export default function Card({ item }: { item: itemType }) {
    return <motion.div
        transition={{ duration: 0.5, ease: easeInOut }}
        className="rounded-xl  flex group  relative  z-20 p-10 text-white flex-col gap-6  px-8 w-full ring-[0.2px] border-white  py-10 h-full">
        <div className="flex flex-row-reverse items-center justify-between w-full  gap-2">
            <div className="w-fit h-fit bg-neutral-700 p-2 transtion-all duration-1000 ease-in-out  rounded-full group-hover:shadow-[2px_2px_4px_-2px_rgba(225,225,225,0.7)] shadow-[inset_4px_4px_10px_2px_rgba(0,0,0,0.7)]">
                {
                    item.logo
                }
            </div>
            <div className="text-md font-semibold  " >
                {item.topic}
            </div>
        </div>
        <h1 className="font-sans text-white/70 font-semibold text-md">
            {item.title}
        </h1>
        <h2 className="font-serif text-neutral-400">
            {item.info}
        </h2>
    </motion.div>
}