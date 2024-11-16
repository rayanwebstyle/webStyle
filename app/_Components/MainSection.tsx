"use client"

import { Section } from "@/app/_Components/Section";
import { ButtonWithIcon } from "@/app/_Components/ButtonWithIcon";
import {CircleEllipsis, Send} from "lucide-react";
import { Spacing } from "@/app/_Components/Spacing";
import Link from "next/link";
import { CustomIcon } from "@/app/_Components/ImageWithLink";
import Head from "next/head";

export const MainSection = () => {

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Web&Style | Création de Sites Web et Réparation téléphonique</title>
                <meta name="description" content="Web&Style propose la création de sites web personnalisés pour entreprises et particuliers. Nous offrons aussi un service de réparation de téléphones mobiles." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
            </Head>

            <Section classname={"flex flex-col gap-10 px-0 max-w-screen"}>
                {/* Main Header Section */}
                <div className="w-full flex flex-col items-center text-center gap-4">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        L&#39;imagination pour seule limite.
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                        Web&Style vous propose une expertise dans le domaine de la création
                        de sites web pour les entreprises et les particuliers.
                        <br />
                        Nous vous accompagnerons et vous aiderons à réaliser le site
                        qui correspond à vos besoins spécifiques.
                        <br />
                        Nous proposons également un service de réparation téléphonique et multimédia.
                    </p>
                    <ButtonWithIcon
                        name={"Nous contacter"}
                        url={"/contact"}
                        Icon={Send}
                        aria-label="Page de contact"
                    />
                </div>

                <Spacing size={"3xl"} />

                {/* Services Section */}
                <div className="w-full flex flex-col items-center text-center gap-4 py-8 bg-rose-section" id={"services"}>
                    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                        Découvrez nos services de réparation de téléphone
                    </h2>
                    <ul className={"inline-flex justify-center items-center gap-32 max-md:gap-16 mt-10"}>
                        <Link href={"/services/reparation/iphone"} passHref>
                            <li aria-label="Réparation iPhone">
                                <CustomIcon name={"iosIcon"} url={"iphone.svg"} size={50} alt="Réparation iPhone" />
                            </li>
                        </Link>
                        <Link href={"/services/reparation/samsung"} passHref>
                            <li aria-label="Réparation Samsung">
                                <CustomIcon name={"androidIcon"} url={"android.svg"} size={50} alt="Réparation Samsung" />
                            </li>
                        </Link>
                        <Link href={'/contact'} passHref>
                            <li className={"text-lg"} aria-label="Autres services de réparation">
                                <CircleEllipsis size={50}/>
                            </li>
                        </Link>
                    </ul>
                </div>
            </Section>
        </>
    );
}
