"use client";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";


export default function LogoMarquee() {
  const doubledLogos = {
    primaryCompanies: [
      "/images/ycombinator.avif",
      "/images/rebel.avif",
      "/images/inception.avif",
      "/images/tandem.avif",
      "/images/llyod.avif",
      "/images/anthrop.avif",
    ],
  };

  const repeatedLogos = Array.from({ length: 52 }).flatMap(() => doubledLogos.primaryCompanies);

  return (
    <section className="overflow-hidden py-20 lg:py-30 ">
      <div className="text-center mx-auto w-11/12 sm:w-4/5 lg:w-3/4 pt-6 lg:pt-10 font-sans">
        <h1 className="text-xl sm:text-3xl lg:text-7xl font-extrabold text-black dark:text-white">
          Trusted by the best companies
        </h1>
        <p className="text-sm sm:text-lg lg:text-2xl font-semibold px-2 sm:px-6 lg:px-16 pt-3 text-neutral-600/80 dark:text-neutral-600/80">
          Proudly supported by premier early-stage investors and a network of strategic angel backers from across the startup world.
        </p>
      </div>

      <div className="relative w-full [mask-image:radial-gradient(circle_at_center,white_0%,white_45%,transparent_70%)] overflow-hidden pt-10">
        <motion.div
          className="flex w-max items-center gap-x-8 sm:gap-x-12 lg:gap-x-16 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 500,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {repeatedLogos.map((element, index) => (
            <motion.div
              key={index}
              className="rfm-child"
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ duration: 0.7, ease: easeInOut }}
            >
              <Image
                alt={`logo-${index}`}
                src={element}
                width={200}
                height={100}
                className="mx-4 sm:mx-6 lg:mx-8  object-contain invert filter grayscale transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
