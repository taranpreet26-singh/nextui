import BuildInfoSection from "@/components/BuildInfoSection";
import { CardHoverEffectDemo } from "@/components/CardHoverEffect";
import { FlipWordsDemo } from "@/components/FlipWordStagger";
import HomeBannerStripe from "@/components/HomeBannerStripe"
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { FeaturesSectionDemo } from "@/components/SimpleWithHoverEffect";
import { BoxButton, GradientHoverButton } from "@/components/ui/Button"
import GridColumns from "@/components/ui/GridColumns";
import HomeBannerStrike from "@/components/ui/HomeBannerStrike";


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
    name: "Text-Flip-Stagger",
    shortInfo: "A component that flips through a list of words",
    codeOnlyComponent: `"use client";
    import React, { useCallback, useEffect, useState } from "react";
    import { AnimatePresence, motion } from "framer-motion";
    import { cn } from "@/lib/utils";
    
    export const FlipWords = ({
      words,
      duration = 3000,
      className,
    }: {
      words: string[];
      duration?: number;
      className?: string;
    }) => {
      const [currentWord, setCurrentWord] = useState(words[0]);
      const [isAnimating, setIsAnimating] = useState<boolean>(false);
    
      const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
      }, [currentWord, words]);
    
      useEffect(() => {
        if (!isAnimating)
          setTimeout(() => {
            startAnimation();
          }, duration);
      }, [isAnimating, duration, startAnimation]);
    
      return (
        <AnimatePresence
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            exit={{
              opacity: 0,
              y: -40,
              x: 40,
              filter: "blur(8px)",
              scale: 2,
              position: "absolute",
            }}
            className={cn(
              "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
              className
            )}
            key={currentWord}
          >
            {currentWord.split(" ").map((word, wordIndex) => (
              <motion.span
                key={word + wordIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3,
                  duration: 0.3,
                }}
                className="inline-block whitespace-nowrap"
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={word + letterIndex}
                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: wordIndex * 0.3 + letterIndex * 0.05,
                      duration: 0.2,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      );
    };
    `,
    actionComponent: <FlipWordsDemo/>,
    installation: [
      {
        info: "Install util dependencies",
        code: "npm i motion clsx tailwind-merge"
      },
      {
        info: "Add util file (lib/utils.ts)",
        code: `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
      }
    ]
  },
  {
    name: "HomeBannerStripes",
    shortInfo: "A Home Banner which have stripes with mask effect too, engaging UI and design",
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
  },
  {
    name: "HomeBannerStrike",
    shortInfo: "A Home Banner which have Digital or Robotic feeling UI, suitable for Digital website",
    codeOnlyComponent: `"use client"
    
    import { ButtonBorder, HoverButton } from "./Button"
    import HomeBannerButoon from "./HomeBannerButton"
    
    export default function HomeBannerStrike() {
        return <section className="w-full h-full rounded-2xl items-center z-[-1] relative justify-center flex flex-col gap-6 ">
                <HomeBannerButoon className="">
                    See All Latest Card Now
                </HomeBannerButoon>
                <h1 className="text-4xl font-bold  text-center"> Buy. Sell. Research.</h1>
                <h3 className="text-lg font-normal text-center">The premium marketplace for collectors and investors. Real-time pricing with zero guesswork.</h3>
                <div className="flex flex-col lg:flex-row gap-4">
                    <HoverButton className="flex items-center justify-center">
                        Explore All Cards
                    </HoverButton>
                    <ButtonBorder className="px-2 text-white py-2">
                        Start Selling Now
                    </ButtonBorder>
                </div>
                  <div className="hidden absolute inset-0 z-[-1] md:block overflow-hidden">
            <svg
              width="1382"
              height="370"
              viewBox="0 0 1382 370"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute hidden  md:block inset-0 z-30 h-full w-full"
            >
              <path
                d="M268 115L181.106 6.97176C178.069 3.19599 173.485 1 168.639 1H0"
                stroke="url(#paint0_linear_337_46)"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <path
                d="M1114 115L1200.89 6.97176C1203.93 3.19599 1208.52 1 1213.36 1H1382"
                stroke="url(#paint1_linear_337_46)"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <path
                d="M268 255L181.106 363.028C178.069 366.804 173.485 369 168.639 369H0"
                stroke="url(#paint2_linear_337_46)"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <path
                d="M1114 255L1200.89 363.028C1203.93 366.804 1208.52 369 1213.36 369H1382"
                stroke="url(#paint3_linear_337_46)"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_337_46"
                  x1="26.4087"
                  y1="1.00001"
                  x2="211.327"
                  y2="175.17"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.481613" stopColor="#F8F8F8" />
                  <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_337_46"
                  x1="1355.59"
                  y1="1.00001"
                  x2="1170.67"
                  y2="175.17"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.481613" stopColor="#F8F8F8" />
                  <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_337_46"
                  x1="26.4087"
                  y1="369"
                  x2="211.327"
                  y2="194.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.481613" stopColor="#F8F8F8" />
                  <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_337_46"
                  x1="1355.59"
                  y1="369"
                  x2="1170.67"
                  y2="194.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.481613" stopColor="#F8F8F8" />
                  <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="807"
              height="797"
              viewBox="0 0 807 797"
              fill="none"
              className="pointer-events-none absolute -left-96 top-0 hidden  h-full w-full  dark:block"
            >
              <path
                d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
                fill="url(#paint0_radial_254_135)"
              />
              <path
                d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
                fill="url(#paint1_radial_254_135)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_254_135"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(77.0001 15.8894) rotate(90.3625) scale(869.41 413.353)"
                >
                  <stop stopColor="#23268F" />
                  <stop offset="0.25" stopColor="#1A266B" />
                  <stop offset="0.573634" stopColor="#0C0C36" />
                  <stop offset="1" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_254_135"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(127.5 -31) rotate(1.98106) scale(679.906 715.987)"
                >
                  <stop stopColor="#2E459F" />
                  <stop offset="0.283363" stopColor="#1C379B" />
                  <stop offset="0.573634" stopColor="#0D0D33" />
                  <stop offset="1" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="807"
              height="797"
              viewBox="0 0 807 797"
              fill="none"
              className="pointer-events-none absolute rotate-180 -right-90 bottom-0 hidden h-full w-full dark:block"
            >
              <path
                d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
                fill="url(#paint0_radial_254_135)"
              />
              <path
                d="M807 110.119L699.5 -117.546L8.5 -154L-141 246.994L-7 952L127 782.111L279 652.114L513 453.337L807 110.119Z"
                fill="url(#paint1_radial_254_135)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_254_135"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(77.0001 15.8894) rotate(90.3625) scale(869.41 413.353)"
                >
                  <stop stopColor="#23268F" />
                  <stop offset="0.25" stopColor="#1A266B" />
                  <stop offset="0.573634" stopColor="#0C0C36" />
                  <stop offset="1" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_254_135"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(127.5 -31) rotate(1.98106) scale(679.906 715.987)"
                >
                  <stop stopColor="#2E459F" />
                  <stop offset="0.283363" stopColor="#1C379B" />
                  <stop offset="0.573634" stopColor="#0D0D33" />
                  <stop offset="1" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
    
          <div className="absolute inset-0 z-1  hidden md:flex [mask-image:radial-gradient(circle_at_center,white_0%,white_45%,transparent_70%)]">
            <svg
              width="445"
              height="418"
              viewBox="0 0 445 418"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute inset-x-0  -bottom-20 z-20 aspect-square h-[150px] w-full md:h-[300px]"
            >
              <line x1="139.5" y1="418" x2="139.5" y2="12" stroke="url(#paint0_linear_0_1)" />
              <line x1="172.5" y1="418" x2="172.5" y2="12" stroke="url(#paint1_linear_0_1)" />
              <line x1="205.5" y1="418" x2="205.5" y2="12" stroke="url(#paint2_linear_0_1)" />
              <line x1="238.5" y1="418" x2="238.5" y2="12" stroke="url(#paint3_linear_0_1)" />
              <line x1="271.5" y1="418" x2="271.5" y2="12" stroke="url(#paint4_linear_0_1)" />
              <line x1="304.5" y1="418" x2="304.5" y2="12" stroke="url(#paint5_linear_0_1)" />
              <path
                d="M1 149L109.028 235.894C112.804 238.931 115 243.515 115 248.361V417"
                stroke="url(#paint6_linear_0_1)"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <path
                d="M444 149L335.972 235.894C332.196 238.931 330 243.515 330 248.361V417"
                stroke="url(#paint7_linear_0_1)"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="140.5"
                  y1="418"
                  x2="140.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="173.5"
                  y1="418"
                  x2="173.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_1"
                  x1="206.5"
                  y1="418"
                  x2="206.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_0_1"
                  x1="239.5"
                  y1="418"
                  x2="239.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_0_1"
                  x1="272.5"
                  y1="418"
                  x2="272.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_0_1"
                  x1="305.5"
                  y1="418"
                  x2="305.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_0_1"
                  x1="115"
                  y1="390.591"
                  x2="-59.1703"
                  y2="205.673"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.481613" stopColor="#F8F8F8" />
                  <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_0_1"
                  x1="330"
                  y1="390.591"
                  x2="504.17"
                  y2="205.673"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.481613" stopColor="#F8F8F8" />
                  <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
    
            <svg
              width="445"
              height="418"
              viewBox="0 0 445 418"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute inset-x-0  -top-0 rotate-180 z-20 aspect-square h-[150px] w-full md:h-[300px]"
            >
              <line x1="139.5" y1="418" x2="139.5" y2="12" stroke="url(#paint0_linear_0_1)" />
              <line x1="172.5" y1="418" x2="172.5" y2="12" stroke="url(#paint1_linear_0_1)" />
              <line x1="205.5" y1="418" x2="205.5" y2="12" stroke="url(#paint2_linear_0_1)" />
              <line x1="238.5" y1="418" x2="238.5" y2="12" stroke="url(#paint3_linear_0_1)" />
              <line x1="271.5" y1="418" x2="271.5" y2="12" stroke="url(#paint4_linear_0_1)" />
              <line x1="304.5" y1="418" x2="304.5" y2="12" stroke="url(#paint5_linear_0_1)" />
              <path
                d="M1 149L109.028 235.894C112.804 238.931 115 243.515 115 248.361V417"
                stroke="url(#paint6_linear_0_1)"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <path
                d="M444 149L335.972 235.894C332.196 238.931 330 243.515 330 248.361V417"
                stroke="url(#paint7_linear_0_1)"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="140.5"
                  y1="418"
                  x2="140.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="173.5"
                  y1="418"
                  x2="173.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_1"
                  x1="206.5"
                  y1="418"
                  x2="206.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_0_1"
                  x1="239.5"
                  y1="418"
                  x2="239.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_0_1"
                  x1="272.5"
                  y1="418"
                  x2="272.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_0_1"
                  x1="305.5"
                  y1="418"
                  x2="305.5"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_0_1"
                  x1="115"
                  y1="390.591"
                  x2="-59.1703"
                  y2="205.673"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.481613" stopColor="#F8F8F8" />
                  <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_0_1"
                  x1="330"
                  y1="390.591"
                  x2="504.17"
                  y2="205.673"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.481613" stopColor="#F8F8F8" />
                  <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
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
    actionComponent: <HomeBannerStrike />,
    installation: []
  },
  {
    name: "Layout-Grid",
    shortInfo: "A layout effect that animates the grid item on click, powered by framer motion layout",
    codeOnlyComponent: `"use client";
    import React, { JSX, useState } from "react";
    import { motion } from "motion/react";
    import { cn } from "@/lib/utils";
    
    type Card = {
      id: number;
      content: JSX.Element | React.ReactNode | string;
      className: string;
      thumbnail: string;
    };
    
    export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
      const [selected, setSelected] = useState<Card | null>(null);
      const [lastSelected, setLastSelected] = useState<Card | null>(null);
    
      const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
      };
    
      const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
      };
    
      return (
        <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
          {cards.map((card, i) => (
            <div key={i} className={cn(card.className, "")}>
              <motion.div
                onClick={() => handleClick(card)}
                className={cn(
                  card.className,
                  "relative overflow-hidden",
                  selected?.id === card.id
                    ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                    : lastSelected?.id === card.id
                    ? "z-40 bg-white rounded-xl h-full w-full"
                    : "bg-white rounded-xl h-full w-full"
                )}
                layoutId={card-card.id}
              >
                {selected?.id === card.id && <SelectedCard selected={selected} />}
                <ImageComponent card={card} />
              </motion.div>
            </div>
          ))}
          <motion.div
            onClick={handleOutsideClick}
            className={cn(
              "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
              selected?.id ? "pointer-events-auto" : "pointer-events-none"
            )}
            animate={{ opacity: selected?.id ? 0.3 : 0 }}
          />
        </div>
      );
    };
    
    const ImageComponent = ({ card }: { card: Card }) => {
      return (
        <motion.img
          layoutId={"image-card.id-image"}
          src={card.thumbnail}
          height="500"
          width="500"
          className={cn(
            "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
          )}
          alt="thumbnail"
        />
      );
    };
    
    const SelectedCard = ({ selected }: { selected: Card | null }) => {
      return (
        <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.6,
            }}
            className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
          />
          <motion.div
            layoutId={"content-selected?.id"}
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 100,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="relative px-8 pb-4 z-[70]"
          >
            {selected?.content}
          </motion.div>
        </div>
      );
    };
    `,
    actionComponent: <LayoutGridDemo />,
    installation: [   {
        info: "Install util dependencies",
        code: "npm i motion clsx tailwind-merge"
      },{
        info:"Add util file (lib/utils.ts)",
        code:`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
      }]
  },
  {
    name: "Features-Section",
    height:"h-full",
    shortInfo: "A simple hover effect",
    codeOnlyComponent: `import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

    `,
    actionComponent: <FeaturesSectionDemo />,
    installation: []
  },
  {
    name: "Sparkles-Stars",
    shortInfo: "A sparkling component",
    codeOnlyComponent: `"use client"

import { motion } from "framer-motion"
import { memo } from "react"

export default function BuildInfoSection(){
    return <section className="w-full  relative py-70 text-center flex items-center justify-center h-fit lg:h-[80vh]">
       <MemoStarGalaxy/>
       <div className="w-fit h-fit">
       <h1 className="text-6xl font-bold">Welcome to UI Universe</h1>
        <div className="absolute bg-gradient-to-r from-transparent via-cyan-500 to-transparent inset-x-0 mx-auto w-3/4 h-[2px] "></div>
       </div>
       <div className="absolute inset-x-0 w-[60%] h-[5rem] rounded-full  bg-gradient-to-t from-cyan-500 to-black mx-auto bottom-0 blur-[150px]"></div>
    </section>
}

export const StarGalaxy = () => {
    const randomMove = () => Math.random() * 10 - 20
    const random = () => Math.random()
    const randomOpcity = () => Math.random()
    return <div className="absolute inset-0">
        {
            [...Array(280)].map((_, i) => {
                return <motion.span
                    key={i}
                    animate={{
                        top: \`calc($\{random() * 100\}% + $\{randomMove()\}px)\`,
                        left: \`calc($\{random() * 100\}% + $\{randomMove()\}px)\`,
                        opacity: randomOpcity(),
                        scale: [1, 1.2, 0]
                    }}
                    transition={{ duration: random() * 10 + 20, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: "absolute",
                        backgroundColor: "white",
                        top: \`\${random() * 100}%\`,
                        left: \`\${random() * 100}%\`
                    }}
                    className="inline-block z-1 bg-white rounded-full w-[2px] aspect-square"
                >
                </motion.span>
            })
        }
    </div>
}

const MemoStarGalaxy = memo(StarGalaxy)
`,
    actionComponent: <BuildInfoSection />,
    installation: []
  },
  {
    name: "Brutal-Button",
    shortInfo: "A button with shadow appears like a Box",
    codeOnlyComponent: `export function BoxButton(){
      return <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
      Brutal
    </button>
    }
`,
    actionComponent: <BoxButton />,
    installation: []
  },
  {
    name: "Grid-Columns",
    shortInfo: "A unique Grid columns , can be used as background",
    codeOnlyComponent: `
export  const GridColumns = () => {
    const columns = 41
    const rows = 11
    return <div className="flex bg-gray-100 absolute inset-0 z-[-1] dark:bg-neutral-900 shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
        {
            Array.from({ length: rows }).map((_, row) =>
                Array.from({ length: columns }).map((element, colum) => {
                    const index = row * columns + colum - 1
                    return <div key={\`$\{colum}-$\{row}\`} className={"w-10 h-10 flex shrink-0 rounded-[2px] $\{index % 2 === 0 ? "bg-neutral-950" : "bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"}\`}>
                    </div>
                })
            )}
    </div>
}
`,
    actionComponent: <GridColumns />,
    installation: []
  },
  {
    name: "Card-Hover-Effect",
    shortInfo: "Hover over the cards and the effect slides to the currently hovered card.",
    codeOnlyComponent: `import { cn } from "@/lib/utils";
    import { AnimatePresence, motion } from "motion/react";
    
    import { useState } from "react";
    
    export const HoverEffect = ({
        items,
        className,
    }: {
        items: {
            title: string;
            description: string;
            link: string;
        }[];
        className?: string;
    }) => {
        let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    
        return (
            <div
                className={cn(
                    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                    className
                )}
            >
                {items.map((item, idx) => (
                    <a
                        href={item?.link}
                        key={item?.link}
                        className="relative group  block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </Card>
                    </a>
                ))}
            </div>
        );
    };
    
    export const Card = ({
        className,
        children,
    }: {
        className?: string;
        children: React.ReactNode;
    }) => {
        return (
            <div
                className={cn(
                    "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                    className
                )}
            >
                <div className="relative z-50">
                    <div className="p-4">{children}</div>
                </div>
            </div>
        );
    };
    export const CardTitle = ({
        className,
        children,
    }: {
        className?: string;
        children: React.ReactNode;
    }) => {
        return (
            <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
                {children}
            </h4>
        );
    };
    export const CardDescription = ({
        className,
        children,
    }: {
        className?: string;
        children: React.ReactNode;
    }) => {
        return (
            <p
                className={cn(
                    "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                    className
                )}
            >
                {children}
            </p>
        );
    };
    
    
    export function CardHoverEffectDemo() {
      return (
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      );
    }
`,
    actionComponent: <CardHoverEffectDemo />,
    installation: [
      {
        info:"Install dependencies",
        code:"npm i motion clsx tailwind-merge"
      },
      {
        info:"Add util file (lib/utils.ts)",
        code:`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
      }
    ]
  },
];