import HomeBannerStripe from "@/components/HomeBannerStripe"
import { GradientHoverButton } from "@/components/ui/Button"
import { AnimatedBorderCard } from "@/components/ui/Cards"


export const data = [
  {
    name: "HomeBanner-Button",
    shortInfo: "A professional-looking, engaging button with animated borders and hover effects, styled with Tailwind CSS for modern CTAs.",
    codeOnlyComponent: `const HomeBannerButton = () => {
  return (
    <div className="card-wrapper group w-fit h-fit text-sm font-sans overflow-hidden relative rounded-full p-[1.2px] bg-black dark:bg-neutral-600 text-white">
      <div className="card-content flex items-center gap-2 text-sm font-sans relative rounded-full p-2 bg-neutral-900 dark:bg-neutral-900">
        We raised $69M pre seed
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-all duration-1000 ease-in-out icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
      </div>
      <div className="absolute inset-x-0 bg-gradient-to-r bottom-0 w-3/4 mx-auto transition-all duration-700 ease-in-out group-hover:top-0 h-px from-transparent via-white dark:via-cyan-500 to-transparent"></div>
      <div className="absolute inset-x-0 bg-gradient-to-r bottom-0 w-3/4 mx-auto transition-all duration-700 ease-in-out group-hover:top-0 h-[2px] blur-xs from-transparent via-white dark:via-cyan-500 to-transparent"></div>
    </div>
  );
};`,
    actionComponent: (
      <div className="card-wrapper group w-fit h-fit text-sm font-sans overflow-hidden relative rounded-full p-[1.2px] bg-black dark:bg-neutral-600 text-white">
        <div className="card-content flex items-center gap-2 text-sm font-sans relative rounded-full p-2 bg-neutral-900 dark:bg-neutral-900">
          We raised $69M pre seed
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-all duration-1000 ease-in-out icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
        </div>
        <div className="absolute inset-x-0 bg-gradient-to-r bottom-0 w-3/4 mx-auto transition-all duration-700 ease-in-out group-hover:top-0 h-px from-transparent via-white dark:via-cyan-500 to-transparent"></div>
        <div className="absolute inset-x-0 bg-gradient-to-r bottom-0 w-3/4 mx-auto transition-all duration-700 ease-in-out group-hover:top-0 h-[2px] blur-xs from-transparent via-white dark:via-cyan-500 to-transparent"></div>
      </div>
    ),
    installation: [
      {
        info: "Paste this CSS to the global/style.css",
        code: `.card-wrapper::before {
          background: conic-gradient(transparent, white, transparent 30deg);
          animation: animate-conic 4s infinite linear;
          @apply w-[150%] h-[600%] top-[-250%] left-[-25%] content-[''] absolute
        }
        @keyframes animate-conic {
          100% {
            transform: rotate(-360deg);
          }
        }`
      }
    ]
  },
  {
    name: "Gradient-Hover-Button",
    shortInfo: "A vibrant button with a gradient background and dynamic hover effects, perfect for engaging CTAs.",
    codeOnlyComponent: `import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GradientHoverButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      className="relative px-8 py-3 text-white font-semibold rounded-lg overflow-hidden bg-gradient-to-br from-purple-600 to-blue-500 group"
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-500 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      <span className="relative z-10 flex items-center gap-2">
        Discover Now
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
    </motion.button>
  );
};`,
    actionComponent: <GradientHoverButton />,
    installation: [
      {
        info: "Install framer-motion and lucide-react for animations and icons",
        code: "npm install framer-motion lucide-react"
      }
    ]
  },
 
  {
    name: "Animated-Border-Card",
    shortInfo: "A card with a pulsating animated border that enhances visibility, great for highlighting key information.",
    codeOnlyComponent: `import { motion } from "framer-motion";

const AnimatedBorderCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="relative p-6 rounded-xl bg-neutral-900 text-white w-80 overflow-hidden"
    >
      <div className="absolute inset-0 border-2 border-transparent rounded-xl animate-border-pulse" />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-2">Next-Gen Tech</h3>
        <p className="text-sm">Experience cutting-edge innovation today.</p>
      </div>
    </motion.div>
  );
};`,
    actionComponent: <AnimatedBorderCard />,
    installation: [
      {
        info: "Install framer-motion for animations",
        code: "npm install framer-motion"
      },
      {
        info: "Add this CSS to global/style.css for border animation",
        code: `.animate-border-pulse {
          animation: borderPulse 2s infinite;
          border-color: transparent;
          border-image: linear-gradient(45deg, cyan, blue, purple, pink) 1;
        }
        @keyframes borderPulse {
          0% { border-image: linear-gradient(45deg, cyan, blue, purple, pink) 1; }
          50% { border-image: linear-gradient(45deg, pink, purple, blue, cyan) 1; }
          100% { border-image: linear-gradient(45deg, cyan, blue, purple, pink) 1; }
        }`
      }
    ]
  },
  {
    name: "HomeBannerStripes",
    shortInfo: "A card with a glowing border that activates on hover. Great for highlighting features or calls-to-action in modern interfaces.",
    codeOnlyComponent: `import { ArrowRight } from "lucide-react";
import HomeBannerButton from "./ui/HomeBannerButton";
import { ButtonBorder, HoverButton } from "./ui/Button";

export default function HomeBannerStripe({
  welcomeText = "Welcome, How are you?",
  title = "Transform policy analysis with AI for brokers",
  description = "Save 15 hours every week, minimize errors and omissions exposure, and experience measurable ROI within 3 weeks — all powered by compliant, broker-friendly AI solutions.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Contact Us"
}) {
  return (
    <div className="relative h-full flex">
      <main className="relative container mx-auto mt-한다고
20 z-1">
        <div className="w-full flex flex-col items-center justify-center pt-24">
          <div>
            <HomeBannerButton className="">
              {welcomeText}
            </HomeBannerButton>
          </div>
          <div className="text-center w-3/4 pt-6 font-sans">
            <h1 className="text-4xl lg:text-7xl font-extrabold text-black dark:text-white">{title}</h1>
            <p className="text-sm md:text-xl lg:text-2xl font-medium px-5 lg:px-16 pt-4 dark:text-white/80">{description}</p>
          </div>
          <div className="flex gap-6 pt-6 items-center">
            <ButtonBorder className="text-sm text-white px-6 py-2">
              {primaryButtonText}
            </ButtonBorder>
            <HoverButton className="flex items-center py-2 gap-2 group dark:text-white text-black hover:text-white">
              {secondaryButtonText} <ArrowRight width={12} className="group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
            </HoverButton>
          </div>
        </div>
      </main>
      <div className="absolute inset-0 z-0 flex [mask-image:radial-gradient(circle_at_center,white_0%,white_45%,transparent_70%)]">
        {[...Array(40)].map((_, index) => (
          <div
            key={index}
            className="h-full w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-400)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"
          />
        ))}
      </div>
    </div>
  );
}

export function HoverButton({children, className}: {children: React.ReactNode, className: string}) {
  return (
    <div className={\`hover:bg-neutral-500 rounded-full px-2 py-1 transition-all ease-in-out duration-700 \${className}\`}>
      {children}
    </div>
  );
}

export function ButtonBorder({children, className}: {children: React.ReactNode, className: string}) {
  return (
    <div className="dark:bg-neutral-500 bg-black w-fit h-fit py-[1px] rounded-full transition-all ease-in-out duration-700">
      <div className={\`dark:bg-neutral-800 bg-black w-full h-full rounded-full \${className}\`}>
        {children}
      </div>
    </div>
  );
}

export function HomeBannerButton({children, className}: {children: React.ReactNode, className: string}) {
  return (
    <div className={\`card-wrapper group w-fit h-fit text-sm font-sans overflow-hidden relative rounded-full p-[1.2px] bg-black dark:bg-neutral-600 text-white \${className}\`}>
      <div className="card-content flex items-center gap-2 text-sm font-sans relative rounded-full p-2 bg-neutral-900 dark:bg-neutral-900">
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-all duration-1000 ease-in-out icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
      </div>
      <div className="absolute inset-x-0 bg-gradient-to-r bottom-0 w-3/4 mx-auto transition-all duration-700 ease-in-out group-hover:top-0 h-px from-transparent via-white dark:via-cyan-500 to-transparentNaruto - Chapter 1100
to-transparent"></div>
      <div className="absolute inset-x-0 bg-gradient-to-r bottom-0 w-3/4 mx-auto transition-all duration-700 ease-in-out group-hover:top-0 h-[2px] blur-xs from-transparent via-white dark:via-cyan-500 to-transparent"></div>
    </div>
  );
}`,
    actionComponent: <HomeBannerStripe />,
    installation: []
  }
];