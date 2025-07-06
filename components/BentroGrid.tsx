import Image from "next/image";

export default function BentoGrid() {
    return <section className="flex flex-col px-4  gap-6  h-fit w-full lg:px-30">
        <div className="flex flex-col items-center w-full  lg:flex-row gap-8">
            <div className="card1 group  w-[24rem]  aspect-square rounded-2xl overflow-hidden p-4 bg-zinc-800">
                <div>
                    <h1 className="group-hover:translate-x-1 transition-all ease-in-out duration-1000 text-xl text-wrap text-white font-semibold ">Exciting New Cards that matters</h1>
                    <h3 className="text-zinc-700 text-wrap text-md group-hover:translate-x-3 transition-all ease-in-out duration-1000">Our team discover insights and trends of new cards for you.</h3>
                </div>
                <div className="bg-white overflow-hidden relative top-5 z-[1]  transition-all ease-in-out duration-1000 group-hover:scale-105 left-10 p-3 h-[22rem] w-full  rounded-2xl">
                    <Image className="w-full h-full object-cover  rounded-2xl" src={'/images/image1.jpg'} width={200} height={300} alt="image" />
                    <div className="absolute inset-0 w-[90%] h-[90%] bg-cyan-500 blur-[13px] m-auto  z-[-1]"></div>
                </div>
            </div>
            <div className="card1 group  w-[24rem]  aspect-square rounded-2xl overflow-hidden  bg-zinc-800">
                <div className="p-4">
                    <h1 className="group-hover:translate-x-1 transition-all ease-in-out duration-1000 text-xl text-wrap text-white font-semibold ">Exciting New Cards that matters</h1>
                    <h3 className="text-zinc-700 text-wrap text-md group-hover:translate-x-3 transition-all ease-in-out duration-1000">Our team discover insights and trends of new cards for you.</h3>
                </div>
                <div className="bg-cyan-100 relative top-2 z-[1] overflow-hidden  transition-all ease-in-out duration-1000 group-hover:scale-105  p-3 h-[22rem] w-full  ">
                    <Image className="w-full h-full object-cover  rounded-2xl" src={'/images/image2.jpg'} width={200} height={300} alt="image" />
                    <div className="absolute inset-0 w-[90%] h-[90%] bg-cyan-500 blur-[13px] m-auto  z-[-1]"></div>

                </div>
            </div>
            <div className="card1 group  w-[24rem]  aspect-square rounded-2xl overflow-hidden p-4 bg-zinc-800">
                <div>
                    <h1 className="group-hover:translate-x-1 transition-all ease-in-out duration-1000 text-xl text-wrap text-white font-semibold ">Exciting New Cards that matters</h1>
                    <h3 className="text-zinc-700 text-wrap text-md group-hover:translate-x-3 transition-all ease-in-out duration-1000">Our team discover insights and trends of new cards for you.</h3>
                </div>
                <div className="bg-white relative  top-5 transition-all ease-in-out overflow-hidden z-[1] duration-1000 group-hover:scale-105 right-10 p-3 h-[22rem] w-full  rounded-2xl">
                    <Image className="w-full h-full  object-cover  rounded-2xl" src={'/images/image3.jpg'} width={200} height={300} alt="image" />
                    <div className="absolute inset-0 w-[90%] h-[90%] bg-cyan-500 blur-[13px] m-auto  z-[-1]"></div>
                </div>
            </div>
        </div>
        <div className="flex flex-col   lg:flex-row gap-8">
            <div className="card1 group  w-full lg:w-[50rem]  h-fit rounded-2xl overflow-hidden p-4 bg-zinc-800">
                <div>
                    <h1 className="group-hover:translate-x-1 transition-all ease-in-out duration-1000 text-xl text-wrap text-white font-semibold ">Exciting New Cards that matters</h1>
                    <h3 className="text-zinc-700 text-wrap text-md group-hover:translate-x-3 transition-all ease-in-out duration-1000">Our team discover insights and trends of new cards for you.</h3>
                </div>
                <div className="bg-cyan-100 overflow-hidden relative top-5 z-[1]  transition-all ease-in-out duration-1000 group-hover:scale-105 left-10 p-3 h-[22rem] w-full  rounded-2xl">
                    <Image className="w-full h-full object-cover  rounded-2xl" src={'/images/image5.jpg'} width={200} height={300} alt="image" />
                    <div className="absolute inset-0 w-[90%] h-[90%] bg-cyan-500 blur-[13px] m-auto  z-[-1]"></div>
                </div>
            </div>
            <div className="card1 group  w-[24rem]  aspect-square rounded-2xl overflow-hidden p-4 bg-zinc-800">
                <div>
                    <h1 className="group-hover:translate-x-1 transition-all ease-in-out duration-1000 text-xl text-wrap text-white font-semibold ">Exciting New Cards that matters</h1>
                    <h3 className="text-zinc-700 text-wrap text-md group-hover:translate-x-3 transition-all ease-in-out duration-1000">Our team discover insights and trends of new cards for you.</h3>
                </div>
                <div className="bg-cyan-100 overflow-hidden relative top-5 z-[1]  transition-all ease-in-out duration-1000 group-hover:scale-105 left-10 p-3 h-[22rem] w-full  rounded-2xl">
                    <Image className="w-full h-full object-cover  rounded-2xl " style={{objectPosition:"left top"}} src={'/images/image4.jpg'} width={200} height={300} alt="image" />
                    <div className="absolute inset-0 w-[90%] h-[90%] bg-cyan-500 blur-[13px] m-auto  z-[-1]"></div>
                </div>
            </div>
        </div>

    </section>
}