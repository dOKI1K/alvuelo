import { useState } from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import { motion } from "motion/react";
import image22 from "../../assets/img/PNG/22.png";

export default function ContactForm({ color }: { color?: string }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        institution: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <section className="mr-1">
            <div className="container w-full px-4 py-4 mx-auto lg:px-0 font-poppins">
                <h2 className="text-2xl font-bold text-center text-[#ff9100] font-poppins">Contactanos</h2>
            </div>
            <motion.div
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                layout
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="container flex flex-col mx-auto bg-white md:flex-row font-poppins">
                <div className="flex flex-col w-full py-7" id="contact">
                    <h2 className="text-xl font-semibold text-center font-poppins">Mandanos tu consulta</h2>
                    <p className="text-sm text-center text-gray-500">Vamos a estar en contacto lo más rapido posible</p>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full py-4 px-7 gap-y-5 ">
                        <FormInput type="text" name="name" value={formData.name} onChange={handleChange} label="Nombre" placeholder="Alejandro García" />
                        <FormInput type="text" name="email" value={formData.email} onChange={handleChange} label="Email" icon placeholder="alegarcia@gmail.com" />
                        <FormInput type="text" name="institution" value={formData.institution} onChange={handleChange} label="Institución" placeholder="Mecanica Ivon" />
                        <FormTextarea name="message" label="Mensaje" placeholder="Hola buena, estoy interesado en..." />
                        <button className={`w-full py-3 text-white bg-[#ff9100] hover:bg-orange-500 transition-colors ease-in-out rounded-md ${color}`} type="submit">Enviar</button>
                    </form>
                </div>
                <div className="">
                    <img src={image22} alt="Al Vuelo" className="justify-around h-full mx-auto bg-orange-500" />
                </div>
            </motion.div>
        </section>
    );
}
