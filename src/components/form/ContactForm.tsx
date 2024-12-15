import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

export default function ContactForm() {
    return (
        <div className="container flex flex-col p-4 mx-auto bg-white md:flex-row">
            <form action="" className="flex flex-col w-full gap-y-5">
                <FormInput name="nombre" label="Nombre" />
                <FormInput name="email" label="Email" icon />
                <FormInput name="institución" label="Institución" />
                <FormTextarea name="mensaje" label="Mensaje" />
            </form>
            <div className="w-full">

            </div>
        </div>
    );
}
