
export default function Footer() {
    const navItems = ["Pricing", "Blog", "Contact"];
    const policies = ['Privancy Policy', 'Terms of Service']
    const socialMedia = ['Twitter', 'LinkedIn', 'GitHub']
    return <footer className=" relative bg-black  border-neutral-700 w-full h-1/2 lg:h-full px-4 lg:px-20 py-20">
        <div className="w-full h-fit flex flex-col lg:flex-row gap-6 lg:gap-40">
            <div className="flex items-start w-full  mb-4 lg:mb-0 lg:items-center gap-2">
                <h1 className="text-lg md:text-3xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-white to-zinc-700 font-sans">
                    Next UI
                </h1>
            </div>
            <div className="grid grid-cols-3 justify-end  w-full lg:w-1/2  ">
                <div className="w-full h-full">
                    {
                        navItems.map((element, index) => {
                            return <li key={index} className="text-sm mt-2 list-none text-neutral-400 hover:text-neutral-600 transition-all duration-700 ease-in-out">
                                {element}
                            </li>
                        })
                    }
                </div>
                <div className="w-full flex flex-col items-center h-full">
                    {
                        policies.map((element, index) => {
                            return <li key={index} className="text-sm mt-2 list-none text-neutral-400 hover:text-neutral-600 transition-all duration-700 ease-in-out">
                                {element}
                            </li>
                        })
                    }
                </div>
                <div className="w-full flex flex-col items-end h-full">
                    {
                        socialMedia.map((element, index) => {
                            return <li key={index} className="text-sm mt-2 list-none text-neutral-400 hover:text-neutral-600 transition-all duration-700 ease-in-out">
                                {element}
                            </li>
                        })
                    }
                </div>
            </div>
        </div>
        <h1 className="text-5xl lg:text-[14rem] bg-clip-text bg-linear-to-b text-transparent from-neutral-700 to-white text-center mt-20 lg:mt-30 font-extrabold font-sans">Next UI</h1>
        <div className="absolute bg-gradient-to-r from-cyan-500 to-white blur-[100px] w-3/4 h-[20%] mx-auto  inset-x-0 rounded-full bottom-0"></div>
    </footer>
}