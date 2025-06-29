import Image from "next/image";

export default function SecuritySectionAds() {
    return <section className="px-8  lg:px-20 py-20 lg:py-30">
        <div className="text-center mx-auto w-11/12 sm:w-4/5 lg:w-3/4 pt-6 lg:pt-10 font-sans">
            <h1 className="text-xl sm:text-3xl lg:text-7xl font-extrabold text-black dark:text-white">
                Built for security
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl font-semibold px-2 sm:px-6 lg:px-16 pt-3 text-neutral-600/80 dark:text-neutral-600/80">
                SOC 2 Type II audit underway, completion Q3 2025.      
            </p>
        </div>
        <div className="flex mt-10 items-center justify-center">
            <Image width={300} height={200} alt="aicpa" src={`/images/aicpa.svg`}/>
        </div>
    </section>
}