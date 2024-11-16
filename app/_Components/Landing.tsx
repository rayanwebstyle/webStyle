"use client"

import { Section } from "@/app/_Components/Section";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Spacing } from "@/app/_Components/Spacing";
import { ButtonScroller } from "@/app/_Components/ButtonScroller";
import Head from 'next/head';

export const LandingPage = () => {
    const scrollToServices = () => {
        const services = document.getElementById('services');
        if (services) {
            services.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <>
            {/* Head Section for SEO Meta Tags */}
            <Head>
                <title>Web&Style | Sites Web Stylés et Modernes | réparation téléphonique</title>
                <meta name="description" content="Créez un site web moderne et élégant avec Web&Style. Découvrez nos services de développement de sites web personnalisés et de réparation téléphonique." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
                <link rel="icon" href="/icon.png" />
            </Head>

            <Spacing size="2xl" />
            <Section classname="flex flex-col justify-center items-center gap-6">
                <h1>
                    <Image
                        src="/logos/bigLogo.svg"
                        alt="Logo Web&Style - Développement de sites web élégants"
                        width={700}
                        height={700}
                        priority={true}
                    />
                </h1>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Des sites web qui ont du style
                </h4>
                <ButtonScroller
                    name="Découvrir nos services"
                    Icon={ArrowDown}
                    onClick={scrollToServices}
                    aria-label="Voir nos services"
                />
            </Section>
        </>
    )
}
