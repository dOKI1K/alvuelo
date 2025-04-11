import { IconType } from "react-icons/lib";

interface ServiceProps {
    icon?: IconType;
    title?: string;
    description?: string;
}

export default function Service({ icon: Icon, title, description }: ServiceProps) {
    return (
        <div className="">
            {Icon && <Icon className="mx-auto text-white" size={60} color="#f1f1f1" />}
            <h3 className="my-2 font-semibold text-center font-poppins">{title}</h3>
            <p className="text-sm text-center text-white text-balance">{description}</p>
        </div>
    )
}