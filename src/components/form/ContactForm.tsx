import { useState } from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import { motion } from "motion/react";

export default function ContactForm() {
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
        <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="container flex flex-col p-4 mx-auto bg-white md:flex-row font-poppins">
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-5">
                <FormInput type="text" name="name" value={formData.name} onChange={handleChange} label="Nombre" />
                <FormInput type="text" name="email" value={formData.email} onChange={handleChange} label="Email" icon />
                <FormInput type="text" name="institution" value={formData.institution} onChange={handleChange} label="Institución" />
                <FormTextarea name="message" label="Mensaje" />
                <button className="w-full py-3 text-white bg-blue-500 rounded-md" type="submit">Enviar</button>
            </form>
            <div className="w-full">

            </div>
        </motion.div>
    );
}
