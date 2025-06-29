import ProjectFullSectionUI from "./ProjectExamples"

export type features = {
  title: string,
  info: string,
  videoLink?: string,
}[]
export default function ProjectSection(){
      const features: features = [
        {
          title: "Compare quotes 10 times faster with zero coverage gaps",
          info: "Vantel reads every line in seconds, ranks quotes by client favorability and slashes E&O exposure Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad necessitatibus voluptatem culpa fuga asperiores vero ab recusandae porro nemo. Autem tempore facilis sunt corrupti, consequatur tempora optio sequi quae odio.Animi ipsa cum quis. Blanditiis doloribus aliquid temporibus. In reiciendis pariatur, omnis error sequi voluptates amet culpa nesciunt voluptatem velit impedit laborum distinctio, nam ea. Tempora voluptate magnam fugit beatae.",
          videoLink: "https://framerusercontent.com/assets/lwJryAp9GuwcWU9P4ObVG7jIsJI.mp4"
        },
        {
          title: "Review contracts and subcontractor agreements in seconds",
          info: "Instantly cross-check requirements against policies, surface missing coverages and respond to clients the same day Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad necessitatibus voluptatem culpa fuga asperiores vero ab recusandae porro nemo. Autem tempore facilis sunt corrupti, consequatur tempora optio sequi quae odio.Animi ipsa cum quis. Blanditiis doloribus aliquid temporibus. In reiciendis pariatur, omnis error sequi voluptates amet culpa nesciunt voluptatem velit impedit laborum distinctio, nam ea. Tempora voluptate magnam fugit beatae.",
          videoLink: "https://framerusercontent.com/assets/2Z8lkkIgN2bjbs8AZBJzJWJpkc.mp4"
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