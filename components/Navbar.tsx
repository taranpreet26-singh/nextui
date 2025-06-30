"use client";
import {
    AnimatePresence,
    easeInOut,
    motion,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import { MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import HoverButton, { ButtonBorder } from "./ui/HoverButton";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = ["Pricing", "Blog", "Contact"];
    const [hovered, setHover] = useState<number | null>(null);

    function handleCurrntHoverItem(index: number | null) {
        setHover(index);
    }

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest <= 30);
    });

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <motion.nav
            initial={{ y: -10, opacity: 0 }}
            animate={{
                opacity: 1,
                width: scrolled ? "100%" : "90%",
                y: scrolled ? 3 : 16,
            }}
            transition={{ duration: 0.7, ease: easeInOut }}
            layout
            className={`w-full flex px-4  inset-x-0 mx-auto md:px-10 items-center justify-between fixed z-10 rounded-2xl h-16 ${scrolled
                    ? "dark:bg-black/5 bg-white/5"
                    : "dark:bg-black/70 bg-white/70"
                } drop-shadow-xl backdrop-blur-sm`}
        >
            <div className="flex  gap-4">
                <div className="flex items-center gap-2">
                    <Image
                        width={25}
                        height={25}
                        alt="ventel-logo"
                        src={"/images/ventel-logo.avif"}
                    />
                    <h1 className="text-lg md:text-2xl font-bold text-blue-900 font-sans">
                        Idler
                    </h1>
                </div>

                <div className="hidden md:flex ">
                    {navItems.map((element, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => handleCurrntHoverItem(index)}
                            onMouseLeave={() => handleCurrntHoverItem(null)}
                            className={`text-sm font-semibold ${hovered === index
                                    ? "text-neutral-100"
                                    : "text-black dark:text-white/70"
                                } font-sans relative z-[1] p-2`}
                        >
                            {element}
                            {hovered === index && (
                                <motion.div
                                    layoutId="hovered-span"
                                    className="absolute rounded-lg inset-0 w-full h-full z-[-1] bg-neutral-700"
                                ></motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
                {mounted && (
                    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "light" ? <Sun width={20} /> : <MoonIcon />}
                    </div>
                )}
                <HoverButton className="font-sans py-1 hover:text-white">Login</HoverButton>
                <ButtonBorder className="font-sans px-2 py-1 text-white">
                    Sign Up
                </ButtonBorder>
            </div>

            <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen((prev) => !prev)}>
                    {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="absolute top-16 left-0 w-full flex flex-col gap-4 bg-white dark:bg-black px-6 py-4 md:hidden z-50 shadow-xl rounded-b-xl"
                    >
                        {navItems.map((element, index) => (
                            <div
                                key={index}
                                className="text-base font-semibold text-black dark:text-white"
                            >
                                {element}
                            </div>
                        ))}
                        <div className="flex items-center justify-between mt-2">
                            {mounted && (
                                <div
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="cursor-pointer"
                                >
                                    {theme === "light" ? <Sun width={20} /> : <MoonIcon />}
                                </div>
                            )}
                            <HoverButton className="font-sans py-1 text-black dark:text-white">
                                Login
                            </HoverButton>
                            <ButtonBorder className="font-sans px-3 py-1 text-white">
                                Sign Up
                            </ButtonBorder>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
