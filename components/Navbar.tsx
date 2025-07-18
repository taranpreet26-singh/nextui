import { ExternalLink } from "lucide-react";
import Button from "./ui/Button";

export default function Navbar() {
    return <nav className=" py-4 flex  justify-between items-center">
        <h1 className="text-transparent bg-clip-text font-semibold  bg-gradient-to-r from-white to-zinc-700 text-2xl ">NextUI</h1>
        <Button type="primary" className="flex items-center py-[10px] gap-2">
            Get Started
            <ExternalLink size={15}/>
        </Button>
    </nav>
}