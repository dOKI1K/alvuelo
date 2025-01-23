import { BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi"
// import { motion } from "motion/react"

interface FooterProps {
    // children?: React.ReactNode;
    year?: number;
}

export default function Footer({ year }: FooterProps) {
    return (
        <footer className="w-full mt-10 bg-white font-poppins">
            <div className="container grid items-center grid-cols-1 gap-10 px-4 pt-10 mx-auto md:grid-cols-2 lg:px-0 pb-28">
                <div className="flex flex-col items-start gap-y-5">
                    <h1 className="text-3xl font-bold font-syne">Al vuelo</h1>
                    <p className="text-sm text-gray-500">Proveemos soluciones integrales de importación, garantizando rapidez,
                        seguridad y adaptabilidad a las necesidades de nuestros clientes, contribuyendo al desarrollo económico
                        de Argentina.</p>
                </div>

                <div className="flex flex-col mx-auto text-center gap-y-5 ">
                    <a href="mailto:brand@mail.com" className="text-sm text-gray-500">brand@mail.com</a>
                    <div className="flex flex-row">
                        <a href="#" target="_blank"
                            className="p-2 transition-colors bg-white rounded-full hover:text-white hover:bg-gray-500">
                            <BiLogoFacebookCircle size={40} />
                        </a>
                        <a href="#" target="_blank"
                            className="p-2 transition-colors bg-white rounded-full hover:text-white hover:bg-gray-500">
                            <BiLogoGithub size={40} />
                        </a>
                        <a href="#" target="_blank"
                            className="p-2 transition-colors bg-white rounded-full hover:text-white hover:bg-gray-500">
                            <BiLogoLinkedin size={40} />
                        </a>
                        <a href="#" target="_blank"
                            className="p-2 transition-colors bg-white rounded-full hover:text-white hover:bg-gray-500">
                            <BiLogoInstagram size={40} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center w-full py-2 mx-auto text-xs text-center text-white bg-gray-800 cursor-default sm:flex-row gap-x-1">
                <p>Designed by <a href=""
                    className="cursor-pointer hover:text-secondary">dOKI</a>
                </p>
                <span className="hidden sm:block">•</span>
                <p>All rights reserved &copy; {year}</p>
            </div>
        </footer>
    )
}