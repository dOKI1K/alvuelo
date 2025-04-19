import { HiDocumentCheck, HiTruck, HiGlobeAlt, HiArchiveBox, HiShieldCheck, HiDocumentText, HiUserGroup, HiChartBar } from "react-icons/hi2";
import { motion } from "motion/react";
import image6 from "../../assets/img/PNG/6.png";
import image16 from "../../assets/img/PNG/16.png";
import image17 from "../../assets/img/PNG/17.png";
import image19 from "../../assets/img/PNG/19.png";
import icon from "../../assets/img/logos/flaticon.png";
import Service from "./Service";
import { useEffect } from "react";

export default function Body() {

    useEffect(() => {
        fetch("https://api.unsplash.com/photos/random?client_id=YOUR_ACCESS_KEY&query=import-export")
            .then((response) => response.json())
            .then((data) => {
                const imageUrl = data.urls.regular;
                const imgElement = document.querySelector("#random-image") as HTMLImageElement;
                if (imgElement) {
                    imgElement.src = imageUrl;
                }
            })
            .catch((error) => {
                console.error("Error fetching image:", error);
            });
    }, []);


    return (
        <section className="container w-full py-4 mx-auto lg:px-0 font-poppins">
            <motion.div
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                // Fade in when the element enters the viewport:
                whileInView={{ opacity: 1 }}
                // Animate the component when its layout changes:
                layout
                // Style now supports indepedent transforms:
                transition={{ duration: 0.5, ease: "easeInOut" }} className="bg-[#ff9100] flex flex-col md:flex-row mb-4 mr-1">
                <div className="flex flex-col justify-center w-full lg:h-[70vh] bg-white p-7">
                    <img src={icon} alt="Al Vuelo" className="mb-4 w-28" />
                    <p className="flex-wrap mt-2 text-sm text-balance">Proveemos soluciones integrales de importación, garantizando rapidez, seguridad y adaptabilidad a las necesidades de nuestros clientes, contribuyendo al desarrollo económico de Argentina.</p>
                    <div className="flex flex-col items-center w-full gap-2 mt-4 md:flex-row">
                        <a href="#contact" className="w-full px-4 py-2 text-lg font-semibold text-center text-white transition-colors ease-in-out delay-100 md:w-fit bg-[#ff9100] rounded-md hover:bg-orange-500">Contáctanos</a>
                        <a href="#us" className="w-full px-4 py-2 text-lg font-semibold text-center border border-gray-400 rounded-md md:w-fit">Ver Servicios</a>
                    </div>
                </div>
                <img src={image16} alt="Al Vuelo" className="lg:max-w-none md:w-[40vw] w-full h-full lg:h-[70vh] bg-orange-500" />
            </motion.div>

            <article className="">
                <div className="flex flex-col mb-4 shadow-md md:flex-row">
                    <div className="w-full font-semibold text-center text-white bg-[#ff9100] p-7"><h3>Tenes consultas? Llamanos</h3></div>
                    <div className="w-full text-xl font-bold text-center bg-white p-7"><h3>0800 555 12025</h3></div>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3">
                    <img src={image6} alt="Al Vuelo" className="max-w-[500px] lg:max-w-none w-full h-full lg:h-[70vh]" />
                    <img src={image19} alt="Al Vuelo" className="max-w-[500px] lg:max-w-none w-full h-full lg:h-[70vh]" />
                    <img src={image17} alt="Al Vuelo" className="max-w-[500px] lg:max-w-none w-full h-full lg:h-[70vh] block md:hidden lg:block" />
                </div>
            </article>

            <article className="mb-4 mr-1">
                <div>
                    <p className="mb-3 font-bold text-center font-poppins">...</p>
                    <h2 className="mb-4 text-2xl font-bold text-center font-poppins"><span className="text-[#ff9100]">Nuestros</span> Servicios</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Service icon={HiDocumentCheck} title="Gestión Aduanera" description="Tramitación de documentos aduaneros, pagos de aranceles e impuestos y resolución de problemas relacionados con la aduana." />
                        <Service icon={HiTruck} title="Logística Internacional" description="Coordinación del transporte de mercancías por vía marítima, aérea o terrestre, asegurando entregas en tiempo y forma." />
                        <Service icon={HiGlobeAlt} title="Asesoría en Comercio Internacional" description="Asistencia legal, normativa y fiscal para cumplir con regulaciones internacionales y acuerdos comerciales." />
                        <Service icon={HiArchiveBox} title="Almacenamiento y Distribución" description="Servicios de almacenamiento en depósitos fiscalizados o no, y distribución de mercancías al destino final." />
                        <Service icon={HiShieldCheck} title="Gestión de Seguros de Carga" description="Contratación de seguros que protejan las mercancías contra daños, robos o pérdidas durante el transporte." />
                        <Service icon={HiDocumentText} title="Certificación y Documentación" description="Emisión de certificados de origen, permisos sanitarios y otros documentos necesarios para la exportación o importación." />
                        <Service icon={HiUserGroup} title="Búsqueda de Proveedores y Clientes" description="Identificación de socios comerciales confiables en mercados internacionales." />
                        <Service icon={HiChartBar} title="Estudios de Mercado Internacional" description="Análisis de mercados extranjeros para identificar oportunidades y determinar estrategias de entrada o expansión." />
                    </div>
                </div>
            </article>
        </section>
    )
}
