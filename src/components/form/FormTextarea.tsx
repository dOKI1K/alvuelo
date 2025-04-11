import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface TextareaProps {
    label?: string,
    name?: string,
    type?: string,
    placeholder?: string,
    value?: string,
}

export default function FormTextarea({ label, name, placeholder, value }: TextareaProps) {

    const [message, setMessage] = useState(value);
    const [customValidity, setCustomValidity] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);

        if (e.target.value.length < 10) {
            setCustomValidity("El mensaje debe tener al menos 10 caracteres.");
            setIsValid(false);
        } else {
            setCustomValidity("");
            setIsValid(true);
        }
    }

    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="font-semibold text-primary">{label}</Label>
            <Textarea
                className={!isValid ? (
                    "min-h-[100px] border-slate-500 bg-white border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20"
                ) : (
                    "min-h-[100px] border-slate-500 bg-white focus-visible:border-primary focus-visible:ring-primary/20"
                )}
                placeholder={placeholder}
                defaultValue={message}
                onChange={handleChange}
                onFocus={() => setIsValid(false)}
            />
            {!isValid && (
                <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
                    {customValidity}
                </p>
            )}
        </div>
    );
}
