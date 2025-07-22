"use client"

import BuildInfoSection from "@/components/BuildInfoSection";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import InfoCardSection from "@/components/InfoCardSection";
import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {
  const { theme,setTheme } = useTheme()
  useEffect(()=>{
    setTheme("dark")
  },[theme])
  return (
    <div className="relative px-5 lg:px-20      mx-auto w-full h-full">
     <Navbar/>
     <HomeBanner/>
     <BuildInfoSection/>
     <Feature className="w-full  flex items-center justify-center relative h-fit lg:h-[80vh]"/>
     <InfoCardSection/>
     <Footer/>
     <div className="absolute h-[12rem] z-[-1] blur-[90px] w-[4rem] bg-white top-0 -left-14">
     </div>
     <div className="absolute h-[12rem] z-[-1] blur-[50px] w-[4rem] bg-zinc-700 top-0 right-0">
     </div>
    </div>
  );
}
