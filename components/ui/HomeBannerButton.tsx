import { ArrowRight, ChevronRight } from "lucide-react";

export default function HomeBannerButoon() {

    return <div className={`card-wrapper  group w-fit h-fit text-sm font-sans overflow-hidden relative rounded-full p-[1.2px]  bg-black dark:bg-neutral-600 text-white`}>
        <div className="card-content flex  items-center gap-2 text-sm font-sans relative rounded-full  p-2 bg-neutral-900 dark:bg-neutral-900 text-white">
            We raised $69M pre seed
            <ArrowRight  width={15} className="transform group-hover:translate-x-1  transition-all duration-1000 ease-in-out"/> 
        </div>
        <div className="absolute inset-x-0 bg-gradient-to-r bottom-0 w-3/4 mx-auto transition-all duration-700 ease-in-out group-hover:top-0  h-px from-transparent via-white dark:via-cyan-500 to-transparent"></div>
        <div className="absolute inset-x-0 bg-gradient-to-r bottom-0 w-3/4 mx-auto transition-all duration-700 ease-in-out group-hover:top-0 h-[2px] blur-xs from-transparent via-white dark:via-cyan-500 to-transparent"></div>
    </div>
}