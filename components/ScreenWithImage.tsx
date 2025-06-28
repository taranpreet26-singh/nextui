"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ScreenWithImage() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateSize = () => setWidth(window.innerWidth);
    updateSize(); 
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const isLg = width >= 1024;
  const isMd = width >= 768 && width < 1024;
  const isSm = width < 768;

  const transform = useTransform(
    scrollYProgress,
    [0, 0.5],
    isLg
      ? ["-450px", "100px"]
      : isMd
      ? ["-250px", "80px"]
      : ["-120px", "40px"]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    isLg
      ? ["45deg", "0deg"]
      : isMd
      ? ["25deg", "0deg"]
      : ["15deg", "0deg"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5],
    isLg
      ? [0.9, 1]
      : isMd
      ? [0.95, 1]
      : [1, 1]
  );

  return (
    <section
      ref={ref}
      style={{ perspective: "1500px" }}
      className="w-full px-4 sm:px-6 md:px-8 py-32 sm:py-36 md:py-40 relative"
    >
      <motion.div
        style={{ rotateX, scale, y: transform }}
        className="bg-neutral-700 p-2 sm:p-4 mx-auto relative top-0 w-full max-w-6xl z-[1] h-fit rounded-2xl border border-neutral-700"
      >
        <div className="bg-white dark:bg-black w-full h-full p-2 sm:p-4 z-[2] rounded-3xl border border-neutral-700">
          <video
            src="https://framerusercontent.com/assets/lwJryAp9GuwcWU9P4ObVG7jIsJI.mp4"
            autoPlay
            muted
            playsInline
            className="rounded-2xl border border-neutral-700 w-full h-auto max-h-[80vh] object-cover"
          />
        </div>
      </motion.div>

      <div className="absolute inset-x-0 z-0 bottom-0 h-28 w-full blur-2xl bg-white dark:bg-black" />
    </section>
  );
}
