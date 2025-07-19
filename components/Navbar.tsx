"use client"

import { ExternalLink } from "lucide-react";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter()
    
    return <nav className=" py-4 flex    justify-between items-center">
        <h1 className="text-transparent bg-clip-text font-semibold  bg-gradient-to-r dark:from-white from-black to-zinc-700 text-2xl ">NextUI</h1>
        <div className="flex gap-2 items-center">
        
        
        <Button type="primary" onClick={()=>router.push('/components')} className="flex cursor-pointer  items-center py-[10px] gap-2">
            Get Started
            <ExternalLink size={15}/>
        </Button>
        </div>
    </nav>
}