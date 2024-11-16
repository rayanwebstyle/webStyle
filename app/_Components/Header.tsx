"use client"
import { Section } from "@/app/_Components/Section";
import Image from "next/image";
import { Info, Menu, Phone, SendIcon, X, Terminal, Minus, House } from "lucide-react";
import { LinkWithIcon } from "@/app/_Components/LinkWithIcon";
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Spacing } from "@/app/_Components/Spacing";
import { usePathname } from "next/navigation";
import Head from 'next/head';

export const Header = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
        return () => {};
    }, [open]);

    return (
        <>
            {/* Head Section for SEO Meta Tags */}
            <Head>
                <title>WebStyle.tech - acceuil</title>
                <meta name="description" content="Description de votre entreprise ou service, pour le SEO." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
                <link rel="icon" href="/icons/og-icon.png" />
            </Head>

            <header className="w-full">
                <Section>
                    <>
                        {/* Mobile Menu Button */}
                        <div className="fixed top-10 right-10 z-50 md:hidden ">
                            <div
                                onClick={() => setOpen(!open)}
                                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                                aria-expanded={open ? "true" : "false"}
                                aria-controls="navigation-menu"
                            >
                                {open ? <X className="text-primary" /> : <Menu className="text-primary" />}
                            </div>
                        </div>

                        {/* Navigation Bar */}
                        <nav id="navigation-menu" className={cn(`
                            fixed inset-0 w-full max-md:h-screen flex flex-col justify-center items-center bg-primary-foreground/85 backdrop-blur 
                            transition-all duration-300 ease-in-out ${open ? 'translate-y-0 opacity-100 z-40' : '-translate-y-full opacity-0'}
                            md:translate-x-0 md:opacity-100 md:max-w-[80%] md:mx-auto md:w-full md:bg-transparent md:translate-y-0 md:flex md:flex-row md:max-h-[150px] md:backdrop-blur-0 md:static
                        `)}>
                            <Link href="/">
                                <h1>
                                    <Image
                                        src="/logos/smallLogo.svg"
                                        alt="Logo de l'entreprise WS"
                                        width={150}
                                        height={150}
                                    />
                                </h1>
                            </Link>
                            <div className="w-full h-full">
                                <ul className="w-full h-full flex flex-col justify-start items-center gap-2 md:flex md:flex-row md:items-center md:justify-end md:gap-4">
                                    <div className="flex max-md:flex-col justify-center items-center gap-4">
                                        {/* Main navigation links */}
                                        <LinkWithIcon name="Accueil" url="/" Icon={House} aria-label="Page d'accueil" />
                                        <Minus className="self-center md:hidden" />
                                        <LinkWithIcon name="À propos de nous" url="/about" Icon={Info} aria-label="Page À propos" />
                                        <Minus className="self-center md:hidden" />
                                        <LinkWithIcon name="Nous contacter" url="/contact" Icon={SendIcon} aria-label="Page Contact" />
                                    </div>
                                    <Spacing size="md" />
                                    <div className="md:hidden">
                                        <ul className="flex flex-col justify-center items-baseline gap-4">
                                            {/* Mobile-specific services links */}
                                            <LinkWithIcon name="Iphones" url="/services/reparation/iphone" Icon={Phone} aria-label="Services Iphone" />
                                            <Minus className="self-center" />
                                            <LinkWithIcon name="Samsungs" url="/services/reparation/samsung" Icon={Phone} aria-label="Services Samsung" />
                                            <Minus className="self-center" />
                                            <LinkWithIcon name="Site Web" url="/contact" Icon={Terminal} aria-label="Développement de site web" />
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                    </>
                </Section>
            </header>
        </>
    );
}
