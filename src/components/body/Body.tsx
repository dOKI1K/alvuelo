import { HiDocumentCheck, HiTruck, HiGlobeAlt, HiArchiveBox, HiShieldCheck, HiDocumentText, HiUserGroup, HiChartBar } from "react-icons/hi2";
import image6 from "../../assets/img/PNG/6.png";
import icon from "../../assets/img/logos/flaticon.png";
import Service from "./Service";

export default function Body() {
    return (
        <section className="container w-full px-4 py-4 mx-auto lg:px-0 font-poppins">
            <article className="bg-[#ff9100] flex flex-col md:flex-row mb-4">
                <div className="flex flex-col justify-center w-full h-[70vh] bg-white ">
                    <img src={icon} alt="Al Vuelo" className="mb-4 w-28" />
                    <p className="flex-wrap mt-2 text-sm text-wrap">Proveemos soluciones integrales de importación, garantizando rapidez, seguridad y adaptabilidad a las necesidades de nuestros clientes, contribuyendo al desarrollo económico de Argentina.</p>
                    <div className="flex flex-col items-center w-full mt-4 md:flex-row gap-x-2">
                        <a href="#" className="px-4 py-2 text-lg font-semibold text-white bg-[#ff9100] rounded-md hover:bg-indigo-800">Contáctanos</a>
                        <a href="#" className="px-4 py-2 text-lg font-semibold border border-gray-400 rounded-md hover:bg-indigo-800">Ver Servicios</a>
                    </div>
                </div>
                <img src={image6} alt="Al Vuelo" className="w-full h-[70vh] bg-indigo-600" />
            </article>

            <article>
                <div className="flex flex-col gap-4 mb-4 md:flex-row">
                    <img src={image6} alt="Al Vuelo" className="w-full h-[70vh] bg-indigo-600" />
                    <div className="w-full h-[70vh] bg-indigo-600"></div>
                    <div className="w-full h-[70vh] bg-indigo-600"></div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full font-semibold text-center text-white bg-indigo-900 p-7"><h3>Tenes consultas? Llamanos</h3></div>
                    <div className="w-full font-bold text-center text-indigo-900 bg-white p-7"><h3>0800 555 12025</h3></div>
                </div>
            </article>

            <article className="my-4">
                <div>
                    <h2 className="mb-4 text-xl font-bold text-white font-syne">Nuestros Servicios</h2>
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
