"use client"

import { AnimatePresence, motion, } from "framer-motion"
import {  MoveRight, } from "lucide-react";
import { useEffect, useRef, } from "react";
import { BackgroundGradient } from "./ui/BackgroundCard";
import HoverButton from "./ui/HoverButton";
import Image from "next/image";

export default function CarouselCard() {
    const arrImage = [

        {
            img: "/images/pikachu.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/pickachu2.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/chairazard.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/pikachu.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/pickachu2.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/chairazard.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/pikachu.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/pickachu2.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/chairazard.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/pikachu.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/pickachu2.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/chairazard.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/pikachu.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/pickachu2.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/chairazard.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/pikachu.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/pickachu2.jpg",
            title: "Pikachu Portrait"
        },
        {
            img: "/images/chairazard.jpg",
            title: "Pikachu Portrait"
        },
       
    ]


    const crouselWidthRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        console.log(crouselWidthRef.current?.offsetWidth)
    }, [])

    return <section className="w-full  items-center flex  flex-col px-10    h-fit py-30 ">
        <AnimatePresence>
            <motion.div
                ref={crouselWidthRef}
                animate={{ x: 0 }}
                className="w-full h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6   "
            >
                {arrImage.map((element, index) => {
                    if(index <= 8)
                    return <BackgroundGradient key={index} className="rounded-[22px] w-full h-full   p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <Image
                                src={`${element.img}`}
                                alt="jordans"
                                height="400"
                                width="600"
                                className="w-full h-[22rem] rounded-2xl object-cover "
                            />
                            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                {element.title}{index}
                            </p>

                            {/* <p className="text-sm text-neutral-600 group-hover:h-auto group-hover:opacity-100 transition-all ease-in-out duration-700 h-0 opacity-0 dark:text-neutral-400">
                                The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                                February 17, 2024. Your best opportunity to get these right now is by
                                entering raffles and waiting for the official releases.
                            </p> */}
                            <div className="flex flex-col gap-1 lg:justify-between  lg:flex-row lg:items-center  mt-4     ">
                            <button className="rounded-full pl-4 pr-1 w-fit  py-1 text-white flex items-center space-x-1 bg-black  text-xs font-bold dark:bg-zinc-800">
                                <span>Buy now </span>
                                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                    $100
                                </span>
                            </button>
                            <button className=" text-xs rounded-full pl-4 w-fit  h-fit flex items-center text-white pr-1 space-x-1 py-1 font-bold bg-black dark:bg-zinc-800">
                                <span className="">Sell Now</span>
                                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">$200</span>
                            </button>
                            </div>

                        </BackgroundGradient>
                        
                })}
            </motion.div>
        </AnimatePresence>
                
        <HoverButton className="mt-16 w-fit  justify-center flex gap-1 group">
                <span>Show More</span>
                <span className="group-hover:translate-x-1 transition-all ease-in-out duration-700"><MoveRight/></span>
        </HoverButton>


    </section>
}