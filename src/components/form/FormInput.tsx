import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { AtSign } from "lucide-react";

interface FormInputProps {
    label?: string,
    name?: string,
    type?: string,
    placeholder?: string,
    value?: string,
    icon?: boolean
}

export default function FormInput({ label, name, type, placeholder, value, icon }: FormInputProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor={name}>{label}</Label>
            <div className="relative">
                <Input id={name} type={type} placeholder={placeholder} value={value} className={icon ? "peer ps-9" : ""} />

                {icon && (
                    <div className="absolute inset-y-0 flex items-center justify-center pointer-events-none start-0 ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                        <AtSign size={16} strokeWidth={2} aria-hidden="true" color="#8f8f8f" />
                    </div>
                )}
            </div>
        </div >
    )
}
