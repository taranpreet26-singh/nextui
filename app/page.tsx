import CardsSection from "@/components/CardsSection";
import CarouselSection from "@/components/CarouselSection";
import ProjectFullSectionUI from "@/components/ProjectExamples";
import ScreenWithImage from "@/components/ScreenWithImage";
import HomeBannerButoon from "@/components/ui/HomeBannerButton";
import HoverButton, { ButtonBorder } from "@/components/ui/HoverButton";
import { ArrowRight } from "lucide-react";

export type features = {
  title: string,
  info: string,
  videoLink?: string,
}[]
export default function Home() {
  const features: features = [
    {
      title: "Compare quotes 10 times faster with zero coverage gaps",
      info: "Vantel reads every line in seconds, ranks quotes by client favorability and slashes E&O exposure",
      videoLink: "https://framerusercontent.com/assets/lwJryAp9GuwcWU9P4ObVG7jIsJI.mp4"
    },
    {
      title: "Review contracts and subcontractor agreements in seconds",
      info: "Instantly cross-check requirements against policies, surface missing coverages and respond to clients the same day",
      videoLink: "https://framerusercontent.com/assets/2Z8lkkIgN2bjbs8AZBJzJWJpkc.mp4"
    }
  ]
  return (
    <div className="relative h-screen flex">

      <main className="relative container mx-auto  mt-20 z-1">
        <div className="w-full flex flex-col items-center justify-center pt-24">
          <div>
            <HomeBannerButoon />
          </div>
          <div className="text-center  w-3/4 pt-6 font-sans ">
            <h1 className="text-4xl lg:text-7xl font-extrabold text-black dark:text-white">Transform policy analysis with AI for brokers</h1>
            <p className="text-lg lg:text-2xl font-semibold  px-5 lg:px-16 pt-4 text-neutral-600/80 dark:text-neutral-600/80">Save 15 hours every week, minimize errors and omissions exposure, and experience measurable ROI within 3 weeks — all powered by compliant, broker-friendly AI solutions.</p>
          </div>
          <div className="flex gap-6 pt-6 items-center">
            <ButtonBorder className="text-sm text-white px-6 py-2 ">
              Get Started
            </ButtonBorder>

            <HoverButton className="flex items-center py-2 gap-2 group dark:text-white  text-black hover:text-white">
              Contact Us <ArrowRight width={12} className="group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
            </HoverButton>
          </div>

        </div>

        <ScreenWithImage />
        <CarouselSection />
        {
          features.map((element, index) => {
            return <ProjectFullSectionUI key={index} features={element} />
          })
        }


        <CardsSection />
      </main>












      <div className="absolute inset-0 z-0  flex [mask-image:radial-gradient(circle_at_center,white_0%,white_45%,transparent_70%)]">
        {
          [...Array(40)].map((element, index) => {
            return <div key={index} className="h-full w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-400)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]">
            </div>
          })
        }
      </div>
    </div>
  );
}
