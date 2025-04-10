import { IconType } from "react-icons/lib";

interface ServiceProps {
    icon?: IconType;
    title?: string;
    description?: string;
}

export default function Service({ icon: Icon, title, description }: ServiceProps) {
    return (
        <div className="p-6 border-2 shadow-sm border-[#ff9100] bg-white">
            {Icon && <Icon className="mx-auto text-amber-300" size={60} color="#ff9100" />}
            <h3 className="my-2 font-semibold text-center font-poppins">{title}</h3>
            <p className="text-sm text-center text-gray-700 text-balance">{description}</p>
        </div>
    )
}