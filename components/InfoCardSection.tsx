import { Box, Bug } from "lucide-react"
import { JSX } from "react"

const arrCard = [
    {
        logo: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iconicon-tabler icons-tabler-outline icon-tabler-server"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M7 8l0 .01" /><path d="M7 16l0 .01" /></svg>),
        title: "React server components",
        info: (<span> All HeroUI components already include the <span className="bg-black p-1 rounded-sm px-2 ">"use client"</span>  directive, which means you can import and use them directly in your RSC.</span>)
    },
    {
        logo: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9h8" /><path d="M8 13h6" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /></svg>),
        title: "Accessible components",
        info: (<span> NextUI components follow the WAI-ARIA guidelines, provide keyboard support and sensible focus managemen</span>)
    },
    {
        logo: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-click"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12l3 0" /><path d="M12 3l0 3" /><path d="M7.8 7.8l-2.2 -2.2" /><path d="M16.2 7.8l2.2 -2.2" /><path d="M7.8 16.2l-2.2 2.2" /><path d="M12 12l9 3l-4 2l-2 4l-3 -9" /></svg>),
        title: "Focus interactions",
        info: (<span>Focus ring will appear only when user navigates with keyboard or screen reader.</span>)
    },
    {
        logo: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-ts"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M9 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M3.5 15h3" /><path d="M5 15v6" /></svg>),
        title: "TypeScript based",
        info: (<span>Build type safe applications, NextUI has a fully-typed API to minimize the learning curve, and help you build applications.</span>)
    },
    {
        logo: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-bolt"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 2l.018 .001l.016 .001l.083 .005l.011 .002h.011l.038 .009l.052 .008l.016 .006l.011 .001l.029 .011l.052 .014l.019 .009l.015 .004l.028 .014l.04 .017l.021 .012l.022 .01l.023 .015l.031 .017l.034 .024l.018 .011l.013 .012l.024 .017l.038 .034l.022 .017l.008 .01l.014 .012l.036 .041l.026 .027l.006 .009c.12 .147 .196 .322 .218 .513l.001 .012l.002 .041l.004 .064v6h5a1 1 0 0 1 .868 1.497l-.06 .091l-8 11c-.568 .783 -1.808 .38 -1.808 -.588v-6h-5a1 1 0 0 1 -.868 -1.497l.06 -.091l8 -11l.01 -.013l.018 -.024l.033 -.038l.018 -.022l.009 -.008l.013 -.014l.04 -.036l.028 -.026l.008 -.006a1 1 0 0 1 .402 -.199l.011 -.001l.027 -.005l.074 -.013l.011 -.001l.041 -.002z" /></svg>),
        title: "No runtime styles",
        info: (<span>NextUI is based on Tailwind CSS, it means that there are no runtime styles, and no unnecessary classes in your bundle.</span>)
    },
    {
        logo: (<Box/>),
        title: "Multiple packages",
        info: (<span>NextUI is divided into multiple packages, so you can install only the components you need.
        </span>)
    },
    {
        logo: (<Bug/>),
        title: "Bug Free",
        info: (<span>NextUI say <span className="bg-black p-1 rounded-sm px-2 ">Chill out from Bug</span> and get best component.
        </span>)
    },
    {
        logo: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-wand"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 21l15 -15l-3 -3l-15 15l3 3" /><path d="M15 6l3 3" /><path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" /><path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" /></svg>),
        title: "Beautiful Designed",
        info: (<span>NextUI components are unique and are not tied to any visual trend or design rule, which makes us unique and of course your projects as well.</span>)
    }
]

export default function InfoCardSection() {
    return <section className="w-full  flex flex-col items-center h-fit lg:h-[90vh]">
        <h1 className="text-4xl font-semibold text-white lg:text-6xl ">
            Last <span className="text-purple-500">but</span>
        </h1>
        <h1 className="text-4xl font-semibold ml-4  text-white lg:text-6xl ">
            Not <span className="text-pink-500">least.</span>
        </h1>
        <p className="mt-5 text-white/70">A fully-featured React/Next UI library.</p>
        <div className="mt-8  w-[90%] lg:w-full justify-between lg:justify-around   h-fit mx-auto  flex flex-wrap gap-6">
            {
                arrCard.map((element, index) => {
                    return <Card key={index} logo={element.logo} title={element.title} info={element.info} />
                })
            }
        </div>
    </section>
}

const Card = ({ logo, title, info }: { logo: JSX.Element, title: string, info: JSX.Element }) => {
    return <div className="p-4 w-[18rem] rounded-2xl bg-zinc-800">
        <div className="flex items-center   gap-2">
            <div className="bg-purple-900 rounded-full p-1 text-pink-600 ">
                {logo}
            </div>
            <h1 className="text-lg ">{title}</h1>
        </div>
        <div className="text-sm text-white/80 mt-4">
            {info}
        </div>
    </div>
}