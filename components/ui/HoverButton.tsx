export default function HoverButton({children,className}:{children:React.ReactNode,className:string}){
    return <div className= {`${className} hover:bg-neutral-500  rounded-full px-2 py-1 transition-all ease-in-out duration-700`}>
        {children}
    </div>
}


export function ButtonBorder({children,className}:{children:React.ReactNode,className:string}){
    return <div  className= {` dark:bg-neutral-500  bg-black w-fit h-fit py-[1px]  rounded-full  transition-all ease-in-out duration-700`}>
        <div className={`${className} dark:bg-neutral-800 bg-black w-full h-full  rounded-full `}>
        {children}
        </div>
    </div>
}