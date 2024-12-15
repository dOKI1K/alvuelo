import { BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi"
// import { motion } from "motion/react"

interface FooterProps {
    children?: React.ReactNode;
    year?: number;
}

export default function Footer({ children, year }: FooterProps) {
    return (
        <footer className="w-full mt-10 bg-white font-poppins">
            <div className="container grid items-center grid-cols-1 gap-10 pt-10 mx-auto md:grid-cols-2 px-7 md:px-0 pb-28">
                <div className="flex flex-col items-start gap-y-5">
                    <h1 className="text-3xl font-bold">Logo</h1>
                    <p className="text-sm text-gray-500">Proveemos soluciones integrales de importación, garantizando rapidez,
                        seguridad y adaptabilidad a las necesidades de nuestros clientes, contribuyendo al desarrollo económico
                        de Argentina.</p>
                </div>

                <div className="flex flex-col text-center gap-y-5 xl:mx-auto ">
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
                    <div>
                        {children}
                    </div>
                </div>
            </div>
            <div className="py-2 text-white bg-gray-800 cursor-default flex flex-col mx-auto text-xs md:flex-row w-full gap-x-1 justify-center">
                <p>Designed by <a href=""
                    className="cursor-pointer hover:text-secondary">dOKI</a>
                </p>
                <span className="hidden sm:block">•</span>
                <p>All rights reserved &copy; {year}</p>
            </div>
        </footer>
    )
}