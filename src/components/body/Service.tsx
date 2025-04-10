import { IconType } from "react-icons/lib";

interface ServiceProps {
    icon?: IconType;
    title?: string;
    description?: string;
}

export default function Service({ icon: Icon, title, description }: ServiceProps) {
    return (
        <div className="p-4 border border-[#ff9100] bg-white">
            {Icon && <Icon className="mx-auto text-amber-300" size={70} color="#ff1111" />}
            <h3 className="my-2 font-semibold text-center font-syne">{title}</h3>
            <p className="text-sm text-gray-700 text-wrap">{description}</p>
        </div>
    )
}