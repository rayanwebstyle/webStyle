"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/app/_Components/Section";
import { Spacing } from "@/app/_Components/Spacing";
import Head from "next/head";

const Footer: React.FC = () => {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Web&Style | Création de Sites Web & Réparation téléphonique</title>
                <meta name="description" content="Web&Style, votre expert en création de sites web et services de réparation téléphonique, vous accompagne dans vos projets numériques." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
                <link rel="icon" href="/icon.png" />
            </Head>

            <footer className={"bg-rose-section pt-8"}>
                <Section classname={"flex flex-col"}>
                    <div className="inline-flex justify-between items-center gap-6 max-md:flex-col px-4">
                        <div className=" flex flex-col sm:flex-row items-center ">
                            <Image
                                src="/logos/bigLogo.svg"
                                alt="Logo de Web&Style, entreprise spécialisée dans la création de sites web"
                                width={200}
                                height={100}
                                priority={true} // Donne priorité au logo pour un chargement plus rapide
                            />
                        </div>

                        {/* Navigation du footer */}
                        <nav aria-label="Footer Navigation">
                            <ul className="flex mb-6 text-sm font-medium text-primary flex-col sm:flex-row justify-evenly gap-4 items-center text-center">
                                <li>
                                    <Link href="/about" className="hover:underline" aria-label="Page À propos de nous">À propos</Link>
                                </li>
                                <li>
                                    <Link href="/policies" className="hover:underline" aria-label="Page Politique de confidentialité">Politique de confidentialité</Link>
                                </li>
                                <li>
                                    <Link href="/licenses" className="hover:underline" aria-label="Page Licences">Licences</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:underline" aria-label="Page de Contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <hr className="my-6 border-gray-200" />
                    <span className="text-sm text-primary text-center">
                        © 2024 <Link href="/" className="hover:underline">Web&Style™</Link>
                        . Tous droits réservés. website made by nouni-massotte Hanakhin
                    </span>
                </Section>
                <Spacing size={"sm"} />
            </footer>
        </>
    );
};

export default Footer;
