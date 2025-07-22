"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import {motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
type Component = {
    image: string,
    name: string,
    shortInfo: string
}

export default function Components(){
   const [allComponent, setAllComponent] = useState<Component[] | null>(null)
      async function fetchAllComponent() {
          try {
              const response = await axios.get("/api/admin/uploads")
              console.log(response.data.msg)
              setAllComponent(response.data.msg)
          } catch (error) {
              console.log(error)
          }
      }
  
      useEffect(() => {
          fetchAllComponent()
      }, [])
  
    return <section className="w-full h-screen">
             <div className="mt-10 ">
                      <h1 className="text-3xl font-bold ">Component</h1>
                      {
                          !allComponent ? <motion.div className="w-full h-full flex items-center justify-center">
                              <motion.svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="64"
                                  height="64"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="icon-tabler-loader animate-spin"
                              >
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                  <path d="M12 6l0 -3" />
                                  <path d="M16.25 7.75l2.15 -2.15" />
                                  <path d="M18 12l3 0" />
                                  <path d="M16.25 16.25l2.15 2.15" />
                                  <path d="M12 18l0 3" />
                                  <path d="M7.75 16.25l-2.15 2.15" />
                                  <path d="M6 12l-3 0" />
                                  <path d="M7.75 7.75l-2.15 -2.15" />
                              </motion.svg>
          
                              <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                                  className="text-lg font-medium tracking-wide"
                              >
                                  Loading, please wait...
                              </motion.p>
                          </motion.div> : <div className="grid grid-cols-1 md:grid-cols-2 min-h-[30rem]">
                              {
                                  allComponent?.map((element, index) => {
                                      return <CardComponent  image={element.image} name={element.name} shortInfo={element.shortInfo} key={index} />
                                  })
                              }
                          </div>
                      }
                  </div>
    </section>
}

 const CardComponent = ({ image, name, shortInfo }: { image: string, name: string, shortInfo: string }) => {
    const router = useRouter()
    return <div onClick={() => { router.push(`/components/${name.replaceAll(" ", "-")}`) }} className="w-full  group lg:w-[20rem]   h-fit  xl:w-[26rem] 2xl:w-[32rem]  my-5 cursor-pointer  lg:m-2 p-2  ">
        <div className="w-full h-[20rem] rounded-lg border-[0.5px]   overflow-hidden p-2 border-neutral-800">
          <Image src={image} className="w-full group-hover:scale-105 transition-all ease-in-out duration-700 h-full object-contain" alt="component-img" width={500} height={500} />
        </div>
        <div className="text-2xl font-bold p-2">{name}</div>
        <p className="text-white/80 text-sm p-2">{shortInfo}</p>
    </div>
}