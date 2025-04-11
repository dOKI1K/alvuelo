import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { AtSign } from "lucide-react";

interface FormInputProps {
    id?: string,
    label?: string,
    type?: string,
    name?: string,
    value?: string,
    placeholder?: string,
    icon?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({ label, name, type, placeholder, value, icon, onChange }: FormInputProps) {
    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="font-semibold text-[#ff9100]">{label}</Label>
            <div className="relative">
                <Input id={name} name={name} type={type} placeholder={placeholder} value={value} className={`border-slate-500 bg-white focus-visible:outline-none focus-visible:ring-0 ${icon ? "peer ps-9" : ""}`} onChange={onChange} />

                {icon && (
                    <div className="absolute inset-y-0 flex items-center justify-center pointer-events-none start-0 ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                        <AtSign size={16} strokeWidth={2} aria-hidden="true" color="#8f8f8f" />
                    </div>
                )}
            </div>
        </div >
    )
}
