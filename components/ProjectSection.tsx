import ProjectFullSectionUI from "./ProjectExamples"

export type features = {
  title: string,
  info: string,
  videoLink?: string,
}[]
export default function ProjectSection(){
      const features: features = [
        {
          title: "How to Sell 10 Pokemon Cards in Under 1 Minute",
          info: "Today we're opening the Prismatic Evolutions Super Premium Collection (SPC) Box! And overanalyzing it...",
          videoLink: "https://www.youtube.com/embed/k4MHXCTC1I4?si=3WjxSCfA5ToQQyjn"
        },
        {
          title: "Is the NEW Prismatic Super Premium Collection ACTUALLY Worth It? (Detailed Breakdown & Opening!)",
          info: "Get real‑time market data in seconds. Our advanced AI identifies cards instantly and provides current pricing from across the marketplace.",
          videoLink: "https://www.youtube.com/embed/Kq5-TWzFImA?si=9ahGD589PGzN0YPU"
        },
        {
          title: "Why Modern Pokemon Products Will Never Hit MSRP Again",
          info: "The video explores the current high prices of Pokemon Scarlet and Violet products, which are unlikely to fall below MSRP soon. The video attributes this to increased distributor costs, changes in distributor profiles, and the rise of streaming and pack-ripping for profit. The creator believes that while prices might not go down drastically, they will eventually stabilize and newer sets may be available at or below MSRP.",
          videoLink: "https://www.youtube.com/embed/cJY9rLZhdEQ?si=L6RSQxB7gq8PcjqC"
        }
      ]
    return <section className="flex flex-col gap-10">
         {
                  features.map((element, index) => {
                    return <ProjectFullSectionUI key={index} features={element} />
                  })
                }



        
    </section>
}