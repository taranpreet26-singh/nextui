"use client";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
  useAnimate,
  stagger,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Skeleton } from "./ui/skeleton";

export type features = {
  title: string;
  info: string;
  videoLink?: string;
};

export default function ProjectFullSectionUI({
  features,
}: {
  features: features;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pointerAnimator, animate] = useAnimate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const startAnimation = () => {
    animate(
      "p",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      }
    );
  };

  const translateY = useTransform(scrollYProgress, [0, 1], [600, -400]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="px-4 sm:px-6 lg:px-30 flex flex-col lg:flex-row justify-center items-center  lg:gap-10 w-full h-fit py-16 lg:py-20"
    >
      <motion.div
        ref={pointerAnimator}
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale: scale,
        }}
        className="flex flex-col w-full lg:w-[50%] pt-6 lg:pt-12 justify-center items-start gap-5"
      >
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold">
          {features?.title || (
            <div>
              <Skeleton className="h-4 w-[250px] bg-neutral-700 dark:bg-neutral-400" />
            </div>
          )}
        </h1>

        <motion.h2 className="flex flex-wrap text-sm sm:text-base text-justify text-wrap text-neutral-700 dark:text-neutral-400/60">
          {features?.info.split(" ").map((word, index) => {
            return (
              <motion.p
                style={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                key={index}
              >
                {word}&nbsp;
              </motion.p>
            );
          }) || (
            <div>
              <Skeleton className="h-4 w-[50px] bg-neutral-700 dark:bg-neutral-400" />
              <Skeleton className="h-4 w-[100px] bg-neutral-700 dark:bg-neutral-400" />
              <Skeleton className="h-4 w-[150px] bg-neutral-700 dark:bg-neutral-400" />
              <Skeleton className="h-4 w-[200px] bg-neutral-700 dark:bg-neutral-400" />
            </div>
          )}
        </motion.h2>
      </motion.div>

      <motion.div
        style={{ y: translateY, opacity: opacity }}
        className="bg-neutral-700 p-3 sm:p-4 mx-auto w-full z-[1] h-fit rounded-2xl border border-neutral-700"
      >
        <div className="bg-white dark:bg-black w-full h-full p-3 sm:p-4 z-[2] rounded-3xl border border-neutral-700">
          <video
            src={`${features?.videoLink}`}
            autoPlay
            muted
            playsInline
            className="rounded-2xl w-full h-auto max-h-[70vh] border border-neutral-700 object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
