"use client"
import Lenis from "lenis"
import { useEffect, useState } from "react"

export default function LenisScroller({children}:{children:React.ReactNode}){
     const [,setLenis] = useState<Lenis | null>(null)
      const [,setRafState] = useState<number | null>(null)
        useEffect(()=>{
          const scroller = new Lenis({
            duration:2,
            smoothWheel:true
          })
          
          
      
          function ref(time:number){
            scroller.raf(time)
            requestAnimationFrame(ref)
          }
      
          const rf = requestAnimationFrame(ref)
          setRafState(rf)
          setLenis(scroller)
         return () => {
          cancelAnimationFrame(rf);
        };
        },[])
    return <div>
        {
            children
        }
    </div>
}