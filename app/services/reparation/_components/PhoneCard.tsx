"use client"

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

type PhoneCardProps = {
    name: string;
    imageUrl: string;
    brand: string;
    classname?: string; // Rendre la classe optionnelle
    alt: string; // Alt devrait être descriptif pour une meilleure accessibilité
    phoneNumber: string; // Assurez-vous que cette prop est fournie et valide
}

export const PhoneCard = ({ name, imageUrl, brand, classname, phoneNumber, alt }: PhoneCardProps) => {

    const handleCall = () => {
        const encodedPhoneNumber = encodeURIComponent(phoneNumber);
        window.location.href = `tel:${encodedPhoneNumber}`;
    };

    return (
        <div className={cn("w-max bg-primary-foreground/50 rounded-2xl flex flex-col p-4 justify-center items-center", classname)}>
            <div>
                <Image
                    className="p-8 rounded-t-lg"
                    src={imageUrl}
                    alt={alt}
                    width={250}
                    height={250}
                    priority={true}
                />
            </div>
            <div className="p-5 flex flex-col w-full items-center gap-4">
                <p className="leading-7 [&:not(:first-child)]:mt-6">{name}</p>
                <span className="bg-[hsl(0,0%,25%)] text-[hsl(0,0%,85%)] text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                    {brand}
                </span>
                <Button
                    onClick={handleCall} // Appel direct via la fonction handleCall
                    className="w-full rounded-md transition-all duration-300 flex items-center justify-center gap-2 bg-primary hover:bg-accent"
                    aria-label={`Appeler le support pour ${name}`}
                >
                    <Phone className="h-4 w-4" />
                    Appelez-nous
                </Button>
            </div>
        </div>
    )
};
