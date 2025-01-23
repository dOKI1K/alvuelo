import { HiDocumentCheck, HiTruck, HiGlobeAlt, HiArchiveBox, HiShieldCheck, HiDocumentText, HiUserGroup, HiChartBar } from "react-icons/hi2";

export default function Body() {
    return (
        <section className="container w-full px-4 py-4 mx-auto lg:px-0 font-poppins">
            <article>
                <div className="flex flex-col gap-4 mb-4 md:flex-row">
                    <div className="w-full h-[70vh] bg-indigo-600"></div>
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
                        <div className="p-4 bg-white">
                            <HiDocumentCheck className="mx-auto text-amber-300" size={70} color="#ff1111" />
                            <h3 className="my-2 font-semibold text-center font-syne">Gestión Aduanera</h3>
                            <p className="text-sm text-gray-700 text-wrap">Tramitación de documentos aduaneros, pagos de aranceles e impuestos y resolución de problemas relacionados con la aduana.</p>
                        </div>
                        <div className="p-4 bg-white">
                            <HiTruck className="mx-auto text-amber-300" size={70} color="#ff1111" />
                            <h3 className="my-2 font-semibold text-center font-syne">Logística Internacional</h3>
                            <p className="text-sm text-gray-700 text-wrap">Coordinación del transporte de mercancías por vía marítima, aérea o terrestre, asegurando entregas en tiempo y forma.</p>
                        </div>
                        <div className="p-4 bg-white">
                            <HiGlobeAlt className="mx-auto text-amber-300" size={70} color="#ff1111" />
                            <h3 className="my-2 font-semibold text-center font-syne">Asesoría en Comercio Internacional</h3>
                            <p className="text-sm text-gray-700 text-wrap">Asistencia legal, normativa y fiscal para cumplir con regulaciones internacionales y acuerdos comerciales.</p>
                        </div>
                        <div className="p-4 bg-white">
                            <HiArchiveBox className="mx-auto text-amber-300" size={70} color="#ff1111" />
                            <h3 className="my-2 font-semibold text-center font-syne">Almacenamiento y Distribución</h3>
                            <p className="text-sm text-gray-700 text-wrap">Servicios de almacenamiento en depósitos fiscalizados o no, y distribución de mercancías al destino final.</p>
                        </div>
                        <div className="p-4 bg-white">
                            <HiShieldCheck className="mx-auto text-amber-300" size={70} color="#ff1111" />
                            <h3 className="my-2 font-semibold text-center font-syne">Gestión de Seguros de Carga</h3>
                            <p className="text-sm text-gray-700 text-wrap">Contratación de seguros que protejan las mercancías contra daños, robos o pérdidas durante el transporte.</p>
                        </div>
                        <div className="p-4 bg-white">
                            <HiDocumentText className="mx-auto text-amber-300" size={70} color="#ff1111" />
                            <h3 className="my-2 font-semibold text-center font-syne">Certificación y Documentación</h3>
                            <p className="text-sm text-gray-700 text-wrap">Emisión de certificados de origen, permisos sanitarios y otros documentos necesarios para la exportación o importación.</p>
                        </div>
                        <div className="p-4 bg-white">
                            <HiUserGroup className="mx-auto text-amber-300" size={70} color="#ff1111" />
                            <h3 className="my-2 font-semibold text-center font-syne">Búsqueda de Proveedores y Clientes</h3>
                            <p className="text-sm text-gray-700 text-wrap">Identificación de socios comerciales confiables en mercados internacionales.</p>
                        </div>
                        <div className="p-4 bg-white">
                            <HiChartBar className="mx-auto text-amber-300" size={70} color="#ff1111" />
                            <h3 className="my-2 font-semibold text-center font-syne">Estudios de Mercado Internacional</h3>
                            <p className="text-sm text-gray-700 text-wrap">Análisis de mercados extranjeros para identificar oportunidades y determinar estrategias de entrada o expansión.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
