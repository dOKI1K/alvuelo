import { motion } from "motion/react";
import logo from "../../assets/img/logos/logo.png";
import { HiBars3 } from "react-icons/hi2";

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
            className="container sticky top-0 z-50 flex flex-row items-center justify-between w-full px-4 py-4 mx-auto bg-white shadow-md"
            x-data="{ open: false }"
            >
            <img src={logo} alt="Al Vuelo" className="w-48" />
            {/* <h1 className="text-3xl font-bold font-poppins">Al vuelo</h1> */}
            <ul className="flex-row hidden px-2 font-semibold md:flex gap-x-4 font-poppins">
                <li><a href="#" className="">Home</a></li>
                <li><a href="#" className="">Nosotros</a></li>
                <li><a href="#" className="">Servicios</a></li>
                <li><a href="#" className="text-[#ff9100] hover:text-orange-500 transition-colors ease-in-out">Contacto</a></li>
            </ul>
            <div className="md:hidden">
                <button className="flex items-center justify-center p-2 transition-colors ease-in-out md:hidden" x-on:click="open = ! open">
                    <HiBars3 size={30} />
                </button>
            </div>

            <div x-show="open" className="absolute left-0 flex flex-col items-center justify-center w-full h-screen bg-[#ff9100] md:hidden top-20 -translate-y-100">
                <ul className="flex flex-col items-center justify-center w-full h-screen font-semibold text-white gap-y-4 font-poppins">
                    <li x-on:click="open = ! open"><a href="#" className="">Home</a></li>
                    <li x-on:click="open = ! open"><a href="#deposit" className="">Deposito</a></li>
                    <li x-on:click="open = ! open"><a href="#us" className="">Nosotros</a></li>
                    <li x-on:click="open = ! open"><a href="#contact" className="px-4 py-2 text-white transition-colors ease-in-out rounded-md bg-cyan-600">Contacto</a></li>
                </ul>
            </div>
        </motion.header>
    )
}