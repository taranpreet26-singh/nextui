"use client"
import { GiContract } from "react-icons/gi"
import { MdPolicy } from "react-icons/md"
import Card from "./ui/Card"
import { motion } from "framer-motion"
import { HandCoins } from "lucide-react"
import { useState } from "react"
export default function CardsSection() {

    const cardsArr = [
        {
            logo:
                <GiContract size={30} />,
            title: "I went from spending 2 hours per contract review to 10 minutes",
            info: 'Broker, Liability,New York'
        },
        {
            logo: <HandCoins size={30} />,
            title: "Vantel saves me 15 hours every week – I'm increasing my yearly revenue by $50K!",
            info: "Broker, Construction,California"
        },
        {
            logo: <MdPolicy size={30} />,
            title: "We have Vantel for proofreading policies and comparing quotes. This has been a true time saver and game changer for our agency!",
            info: "Senior Account Executive,Pennsylvania"
        }

    ]

    const [hovered, setHovered] = useState<number | null>(null)

    return <section className="py-20 lg:py-20 px-6 lg:px-30">
        <div className="grid grid-cols-1  w-full h-full  relative  lg:grid-cols-3 ">

            {
                cardsArr.map((element, index) => {
                    return <div 
                    onMouseEnter={()=>{setHovered(index)}} 
                    onMouseLeave={()=>{setHovered(null)}}
                    key={index} className="w-full p-2 relative z-10 h-full">
                        <Card item={element} />
                        {
                            hovered === index &&
                        <motion.div layoutId="hovered-span" className="absolute z-[-1] inset-0  rounded-2xl w-full h-full bg-neutral-500 ">
                        </motion.div>
                        }
                    </div>
                })
            }

        </div>

    </section>
}