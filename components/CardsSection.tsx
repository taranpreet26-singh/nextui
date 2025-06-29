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
            topic:"Contract Efficiency",    
            title: "I went from spending 2 hours per contract review to 10 minutes",
            info: 'Broker, Liability,New York'
        },
        {
            logo: <HandCoins size={30} />,
            topic:"Revenue Growth",
            title: "Vantel saves me 15 hours every week – I'm increasing my yearly revenue by $50K!",
            info: "Broker, Construction,California"
        },
        {
            logo: <MdPolicy size={30} />,
            topic:"Policy Automation",
            title: "We have Vantel for proofreading policies and comparing quotes. This has been a true time saver and game changer for our agency!",
            info: "Senior Account Executive,Pennsylvania"
        }

    ]

    const [hovered, setHovered] = useState<number | null>(null)

    return <motion.section 
    className="py-10 lg:py-20 px-6 lg:px-30 ">
        <div className="grid grid-cols-1  w-full h-full  relative  lg:grid-cols-3 ">

            {
                cardsArr.map((element, index) => {
                    return <motion.div 
                    onMouseEnter={()=>{setHovered(index)}} 
                    onMouseLeave={()=>{setHovered(null)}}
                    key={index} className="w-full p-2 relative z-10 h-full ">
                        <Card item={element} />
                        {
                            hovered === index &&
                            <motion.div layoutId="hovered-div" className="bg-neutral-800 absolute inset-0  w-full h-full z-[-1] rounded-xl "></motion.div>
                        }
                    </motion.div >
                })
            }

        </div>

    </motion.section>
}