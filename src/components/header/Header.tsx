import { motion } from "motion/react";
import logo from "../../assets/logo.svg";

export default function Header() {
    return (
        <motion.header
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // Fade in when the element enters the viewport:
            whileInView={{ opacity: 1 }}
            // Animate the component when its layout changes:
            layout
            // Style now supports indepedent transforms:
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="container sticky top-0 z-50 flex flex-row items-center justify-between w-full px-4 py-4 mx-auto bg-white lg:px-0">
            {logo}
            <h1 className="text-3xl font-bold font-syne">Al vuelo</h1>
            <ul className="flex-row hidden md:flex gap-x-4 font-poppins">
                <li><a href="#" className="">Home</a></li>
                <li><a href="#" className="">About</a></li>
                <li><a href="#" className="">Services</a></li>
                <li><a href="#" className="">Contact</a></li>
            </ul>
        </motion.header>
    )
}