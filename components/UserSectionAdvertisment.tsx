"use client"
import { useState } from "react"
import { easeInOut, motion } from "framer-motion"
import HoverButton, { ButtonBorder } from "./ui/HoverButton"
import { ArrowRight } from "lucide-react"
export default function UserSectionAdvertisment() {

    const [hovered, setHovered] = useState<boolean>(false)
    
    return <section className="px-10 flex flex-col items-center justify-center relative lg:px-30  w-full h-full py-20 lg:py-30">

        <div 
        onMouseEnter={() => { setHovered(true) }}
        onMouseLeave={() => { setHovered(false) }}
        className="text-center relative z-[10]   w-full h-[50vh] flex flex-col items-center  pt-14 font-sans ">
            <h1 className="text-4xl lg:text-6xl px-4 lg:px-10 font-extrabold text-black dark:text-white">Ready to start selling?</h1>
            <p className="text-sm lg:text-lg text-wrap  text-zinc-400 mt-4">Join our marketplace with industry-low fees and start selling your cards today!</p>
            <div className="flex gap-6 pt-6 items-center">
                <ButtonBorder className="text-sm text-white px-6 py-2 ">
                    Get Started
                </ButtonBorder>

                <HoverButton className="flex items-center py-2 gap-2 group dark:text-white  text-black hover:text-white">
                    Contact Us <ArrowRight width={12} className="group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
                </HoverButton>
            </div>
            <div
                className="flex absolute mx-auto  z-[-1] inset-0 gap-4  w-full h-full  rounded-xl  overflow-hidden">
                {
                    [...Array(32)].map((_, index) => {
                        return (
                            <div key={index} className="w-full flex flex-col gap-6 h-full">
                                {
                                    [...Array(16)].map((element, idx) => {
                                        const delay = 0.04 * (index * 10 + idx)
                                        return <motion.div
                                            initial={{ backgroundColor: "#888888" }}
                                            animate={{
                                                backgroundColor: hovered ? "#f6f6f6" : "#888888",
                                                boxShadow: hovered ? "2px 2px 12px 1px rgba(225,225,225,1)" : "2px 2px 6px 1px rgba(225,225,225,0.2)"
                                            }}
                                            transition={{ duration: 0.3, ease: easeInOut, delay: delay }}
                                            key={idx} className={`w-[4px] aspect-square  rounded-full`}>
                                        </motion.div>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
}