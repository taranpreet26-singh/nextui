"use client"
import HoverButton, { ButtonBorder } from "./ui/HoverButton";
import HomeBannerButoon from "./ui/HomeBannerButton";

export default function HomeBanner() {
    return <section className="w-full h-full items-center z-40 relative justify-center flex flex-col gap-6 ">
            <HomeBannerButoon className="">
                See All Latest Card Now
            </HomeBannerButoon>
            <h1 className="text-7xl font-bold "> Buy. Sell. Research.</h1>
            <h3 className="text-xl font-normal">The premium marketplace for collectors and investors. Real-time pricing with zero guesswork.</h3>
            <div className="flex flex-col lg:flex-row gap-4">
                <HoverButton className="flex items-center justify-center">
                    Explore All Cards
                </HoverButton>
                <ButtonBorder className="px-2 py-2">
                    Start Selling Now
                </ButtonBorder>
            </div>
    </section>
}