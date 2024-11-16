import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {OffreCard} from "@/app/_Components/OffreCard";
import {BadgeCheck} from "lucide-react";


export const CardsCarousel=()=>{

    return(
        <Carousel>
            <CarouselContent>
                <CarouselItem><OffreCard name={"Essential"} price={599}  Icon={BadgeCheck} className={"w-full text-primary"}/></CarouselItem>
                <CarouselItem><OffreCard name={"Pro"} price={1199}  Icon={BadgeCheck} isSpecial={true} className={"w-full  text-primary text-sm"}/></CarouselItem>
                <CarouselItem><OffreCard name={"Premium"} price={"sur devis"} currency={""} Icon={BadgeCheck} className={"w-full text-primary"}/></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className={"left-0 bg-primary/50 text-primary"} />
            <CarouselNext className={"right-0 bg-primary/50 text-primary"} />
        </Carousel>
    )
}

