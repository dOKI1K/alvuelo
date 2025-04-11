import { HiHeart, HiArrowPath, HiBriefcase } from "react-icons/hi2";
import { motion } from "motion/react";
import image1 from "../../assets/img/1.jpeg";
import image2 from "../../assets/img/2.jpeg";
import image3 from "../../assets/img/3.jpeg";
import deposito from "../../assets/img/deposito.jpg";
import icon from "../../assets/img/favicon.svg";
import Service from "./Service";

export default function Body() {
    return (
        <section className="container w-full px-4 py-4 mx-auto lg:px-0 font-poppins">
            <motion.div
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                // Fade in when the element enters the viewport:
                whileInView={{ opacity: 1 }}
                // Animate the component when its layout changes:
                layout
                // Style now supports indepedent transforms:
                transition={{ duration: 0.5, ease: "easeInOut" }}

                className="flex flex-col mb-4 mr-1 bg-white md:flex-row">
                <div className="flex flex-col justify-center w-full h-[70vh] bg-white p-7">
                    <div>
                        <img src={icon} alt="Al Vuelo" className="mb-4 w-28" />
                        <h1 className="text-3xl font-geist">FlyGo</h1>
                    </div>
                    <p className="flex-wrap mt-2 text-sm text-balance">Proveemos soluciones integrales de importación, garantizando rapidez, seguridad y adaptabilidad a las necesidades de nuestros clientes, contribuyendo al desarrollo económico de Argentina.</p>
                    <div className="flex flex-col items-center w-full mt-4 md:flex-row gap-x-2">
                        <a href="#" className="px-4 py-2 text-lg font-semibold text-white transition-colors ease-in-out delay-100 rounded-md bg-primary hover:bg-secondary">Contáctanos</a>
                        <a href="#" className="px-4 py-2 text-lg font-semibold border border-gray-400 rounded-md">Conocé más</a>
                    </div>
                </div>
                <img src={image3} alt="Al Vuelo" className="h-[70vh] w-[40vw] bg-orange-500" />
            </motion.div>



            <article className="flex flex-col w-full my-4 mr-1 md:flex-row">
                <img src={deposito} alt="FlyGo - Depósito" className="w-full md:w-1/2" />
                <div className="w-full mr-1 bg-white font-poppins p-7">
                    <h1 className="mb-2 text-2xl font-bold text-primary">Nuestro Depósito:</h1>
                    <p className="pr-3 text-balance">Espacio y Eficiencia al Servicio de tu Negocio
                        Contamos con un depósito de amplias dimensiones, diseñado para almacenar grandes volúmenes de
                        mercancías con total seguridad y eficiencia.<br /><br /> Su estratégica distribución y capacidad nos permiten
                        manejar cargas de todos los tamaños, garantizando un flujo logístico ágil y confiable. Equipado con
                        tecnología moderna y un equipo capacitado, nuestro depósito asegura que tus productos estén siempre
                        en las mejores condiciones.</p>
                </div>
            </article>

            <article className="mr-1">
                <div className="flex flex-col mb-4 shadow-md md:flex-row">
                    <div className="w-full font-semibold text-center bg-white text-siteColors-primary p-7"><h3>Tenes consultas? Llamanos</h3></div>
                    <div className="w-full text-xl font-bold text-center text-white bg-primary p-7"><h3>0800 555 12025</h3></div>
                </div>

                <div className="flex flex-col gap-4 mb-4 md:flex-row">
                    <img src={image1} alt="Al Vuelo" className="w-full h-[70vh] bg-orange-500" />
                    <img src={image2} alt="Al Vuelo" className="w-full h-[70vh] bg-orange-500" />
                    <img src={image3} alt="Al Vuelo" className="w-full h-[70vh] bg-orange-500" />
                </div>
            </article>

            <article className="mb-4 mr-1">
                <div>
                    <p className="mb-3 font-bold text-center font-poppins">...</p>
                    <h2 className="mb-4 text-2xl font-bold text-center font-poppins"><span className="text-white">Nuestro</span> Compromiso</h2>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 my-14">
                        <Service icon={HiHeart} title="Confiabilidad" description="Trabajamos con los estándares más altos de seguridad y transparencia." />
                        <Service icon={HiArrowPath} title="Innovación" description="Nos adaptamos a los cambios del mercado global para ofrecerte lo mejor." />
                        <Service icon={HiBriefcase} title="Compromiso" description="Nos dedicamos a facilitar tu negocio, haciéndote llegar lo que necesitas sin complicaciones." />
                        {/* <Service icon={HiArchiveBox} title="Almacenamiento y Distribución" description="Servicios de almacenamiento en depósitos fiscalizados o no, y distribución de mercancías al destino final." /> */}
                        {/* <Service icon={HiShieldCheck} title="Gestión de Seguros de Carga" description="Contratación de seguros que protejan las mercancías contra daños, robos o pérdidas durante el transporte." /> */}
                        {/* <Service icon={HiDocumentText} title="Certificación y Documentación" description="Emisión de certificados de origen, permisos sanitarios y otros documentos necesarios para la exportación o importación." /> */}
                        {/* <Service icon={HiUserGroup} title="Búsqueda de Proveedores y Clientes" description="Identificación de socios comerciales confiables en mercados internacionales." /> */}
                        {/* <Service icon={HiChartBar} title="Estudios de Mercado Internacional" description="Análisis de mercados extranjeros para identificar oportunidades y determinar estrategias de entrada o expansión." /> */}
                    </div>
                </div>
            </article>
        </section>
    )
}
