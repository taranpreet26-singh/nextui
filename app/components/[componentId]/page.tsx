"use client"
import { SquareCode, TvMinimal } from "lucide-react"
import { useParams } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion"
import { CodeBlock } from "@/components/ui/CodeBlock"
import { data } from "@/lib/dummy.data"

export default function Component() {
    const { componentId } = useParams()
    console.log(componentId)
    const subTabs = [{
        title: "Preview",
        logo: (
            <TvMinimal size={20} />
        )
    },
    {
        title: "Code",
        logo: (<SquareCode size={20} />)
    }
    ]

  
    const [hovered, setHovered] = useState<string>("Preview")
    const filterOutData = data.filter((element) => { return element.name === componentId })
    console.log(filterOutData)
    return <div className="w-full h-full">
        {
filterOutData.map((element, index) => {
        return <div key={index} className="w-full  px-6 lg:px-0 h-full ">
            <motion.h1
                className="text-3xl font-bold">{element.name.replaceAll("-"," ")}</motion.h1>
            <motion.p

                className="text-white/70 mt-4">{element.shortInfo}</motion.p>

            <div className="flex gap-4 mt-4">
                {
                    subTabs.map((element, index) => {
                        return <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            onClick={() => { setHovered(element.title) }} key={index}
                            className={`${hovered.toLowerCase() === element.title.toLowerCase() ? "bg-zinc-800" : ""} rounded-lg px-3 py-1 flex gap-2 items-center`}>
                            {element.logo}
                            <h1 key={element.title} className="text-lg text-white/90 cursor-pointer">{element.title}</h1>
                        </motion.div>
                    })
                }
            </div>
            {hovered.toLowerCase() === "preview" &&
                <div className={`w-full  lg:w-3/4  h-fit lg:${element.height} relative    rounded-2xl overflow-hidden mt-8 flex items-center justify-center border-[1px] border-zinc-800`}>
                    {element.actionComponent}
                </div>
            }
            {
                hovered.toLowerCase() === "code" &&
                <div className="w-full  h-fit">
                    <div className="w-full lg:w-3/4 h-fit min-h-3/4  rounded-lg  mt-8 flex items-center justify-center border-[1px] border-zinc-800">
                        <CodeBlock
                            language="tsx"
                            filename="DummyComponent.tsx"
                            highlightLines={[9, 13, 14]}
                            code={element.codeOnlyComponent}
                        />
                    </div>
                    <div className="w-full h-fit mt-5">
                       {element.installation.length > 0 &&  <h1 className="text-3xl font-bold">Installation</h1>}
                        { element.installation &&
                            element.installation.map((item, idx) => {
                                return <div key={idx} className="w-full h-full">
                                    <motion.p className="text-white/70 mt-4">{item.info}</motion.p>
                                    <div className="min-w-3/4 mt-5 w-full lg:w-fit   h-fit min-h-3/4 ">
                                        <CodeBlock
                                            language=".css"
                                            filename="global.css"
                                            code={item.code}
                                        />
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            }

        </div>
    })
        }
    </div>
}