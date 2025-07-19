import React from "react"

export default function Button({children,type,className}:{children:React.ReactNode,type:string,className:string}){
    
    const buttonType = {
        "primary":"w-fit h-fit px-3 text-white py-1 text-sm rounded-lg bg-black border-zinc-800 border border-px",
        "secondary":"w-fit h-fit px-3 py-1 text-sm rounded-lg bg-white text-black border-zinc-800 border border-px"
    }
    
    return <button className={`${type === "primary"?buttonType.primary:buttonType.secondary} ${className}`}>
            {children}
    </button>
}