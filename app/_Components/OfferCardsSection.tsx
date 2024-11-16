"use client"

import { Section } from "@/app/_Components/Section";
import { ArrowUp, BadgeCheck } from "lucide-react";
import { OffreCard } from "@/app/_Components/OffreCard";
import { Spacing } from "@/app/_Components/Spacing";
import { CardsCarousel } from "@/app/_Components/CardsCarousel";
import Head from 'next/head';

export const OfferCardSection = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Nos Offres | Web&Style - Découvrez nos plans</title>
                <meta name="description" content="Découvrez nos différentes offres adaptées à vos besoins en développement web : Essential, Pro, et Premium. Choisissez celle qui vous convient!" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
                <link rel="icon" href="/icon.png" />
            </Head>

            <Section>
                {/* Mobile Carousel */}
                <div className={"w-full lg:hidden"}>
                    <CardsCarousel />
                </div>

                {/* Desktop Cards */}
                <div className={"w-full inline-flex max-lg:flex-col justify-center items-center gap-8 max-lg:hidden"}>
                    <OffreCard
                        name={"Essential"}
                        price={599}
                        Icon={BadgeCheck}
                        className={"xl:transform xl:-skew-y-2 xl:-rotate-2 xl:scale-95 xl:translate-y-10 xl:-translate-x-5"}
                        aria-label="Offre Essential"
                    />
                    <OffreCard
                        name={"Pro"}
                        price={1199}
                        Icon={BadgeCheck}
                        isSpecial={true}
                        aria-label="Offre Pro"
                    />
                    <OffreCard
                        name={"Premium"}
                        price={"sur devis"}
                        currency={""}
                        Icon={BadgeCheck}
                        className={"xl:transform xl:skew-y-2 xl:rotate-2 xl:scale-95 xl:translate-y-10 xl:translate-x-5"}
                        aria-label="Offre Premium"
                    />
                </div>

                {/* Scroll to top button */}
                <Spacing size={"sm"} />

                <span className={"flex justify-center self-center w-full max-lg:mt-10 "}>
                    <ArrowUp
                        onClick={scrollToTop}
                        className={"cursor-pointer bg-primary/25 rounded-full p-2"}
                        size={42}
                        aria-label="Retour en haut de page"
                    />
                </span>
            </Section>
        </>
    );
};
