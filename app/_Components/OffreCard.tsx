import { Send, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonWithIcon } from "@/app/_Components/ButtonWithIcon";

// Définition des types
export type OfferType = 'Essential' | 'Pro' | 'Premium';

export type OptionType = {
    text: string;
    offers: OfferType[];
};

export type OfferCardProps = {
    name: OfferType;
    price: number | string;
    currency?: string;
    isSpecial?: boolean;
    Icon: LucideIcon;
    className?: string;
}

// Tableau d'options
export const AllOptions: OptionType[] = [
    { text: "Landing Page", offers: ['Essential', 'Pro'] },
    { text: "Optimisation SEO", offers: ['Essential', 'Pro', 'Premium'] },
    { text: "Responsive", offers: ['Essential', 'Pro', 'Premium'] },
    { text: "2 pages supplémentaires", offers: ['Essential'] },
    { text: "4 pages supplémentaires", offers: ['Pro'] },
    { text: "Accompagnement pendant 2 mois", offers: ['Essential'] },
    { text: "Accompagnement pendant 3 mois", offers: ['Pro'] },
    { text: "Livraison en 1 à 2 semaines environ", offers: ['Essential'] },
    { text: "Livraison en 2 à 4 semaines environ", offers: ['Pro'] },
    { text: "Logique de connexion et d'inscription", offers: ['Pro'] },
    { text: "Maquettage simple", offers: ['Pro'] },
    { text: "Fonctionnalités sur demande", offers: ['Premium'] },
];

// Fonction utilitaire pour obtenir les options d'une offre spécifique
const getOptionsForOffer = (offer: OfferType): string[] => {
    return AllOptions
        .filter(option => option.offers.includes(offer))
        .map(option => option.text);
};

export const OffreCard = ({ name, price, currency = "€", Icon, className }: OfferCardProps) => {
    const options = getOptionsForOffer(name);

    return (
        <div className={cn(`h-full w-full max-w-sm bg-primary/10 rounded shadow flex flex-col ${className}`)}>
            <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <h5 className="text-2xl font-medium text-primary underline text-center mb-6">{name}</h5>

                <div className="flex items-center justify-center text-primary mb-6">
                    <span className="text-3xl font-semibold">{currency}</span>
                    <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                </div>

                <ul role="list" className="flex-grow flex flex-col gap-4 mb-6">
                    {options.map((option: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                            <Icon size={16} className="flex-shrink-0 mt-1" />
                            <span>{option}</span>
                        </li>
                    ))}
                </ul>

                <ButtonWithIcon
                    Icon={Send}
                    name="Nous contacter"
                    url="https://calendly.com/web_style"
                    classname="w-full justify-center max-w-max self-center"
                    target={"_blank"}
                />
            </div>
        </div>
    )
}