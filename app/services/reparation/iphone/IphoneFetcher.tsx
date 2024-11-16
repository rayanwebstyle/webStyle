"use client"

import { Section } from "@/app/_Components/Section";
import { Iphones } from "./AppleData";
import { PhoneCard } from "@/app/services/reparation/_components/PhoneCard";
import usePagination from "@/app/hooks/usePagination";
import { useState, useEffect } from "react";
import PaginationComponent from "@/app/_Components/PaginationComponent";
import { Spacing } from "@/app/_Components/Spacing";
import { ArrowRight } from "lucide-react";
import { ButtonWithIcon } from "@/app/_Components/ButtonWithIcon";
import Head from "next/head";

export const IphoneFetcher = () => {
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    // Tri dynamique des iPhones en fonction de la date de sortie
    const sortedIphones = [...Iphones].sort((a, b) => {
        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);

        return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });

    const { currentItems, currentPage, totalPages, handlePageChange } = usePagination({
        items: sortedIphones,
        itemsPerPage: 4
    });

    // Dynamiser les métadonnées en fonction de l'affichage
    useEffect(() => {
        document.title = `Réparation iPhone - Web&Style`;
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Découvrez les services de reparation pour iPhone chez Web&Style. Contactez-nous pour un service rapide et fiable.');
    }, []);

    return (
        <>
            <Head>
                <meta name="description" content="Découvrez les services de réparation pour iPhone chez Web&Style. Contactez-nous pour un service rapide et fiable." />
                <meta name="keywords" content="réparation iPhone, réparation téléphone, service Apple, réparation mobile" />
            </Head>

            <Section classname={"flex flex-col"}>
                <div className="w-full max-w-lg h-full mx-auto px-4 py-8 flex max-lg:flex-col gap-8 justify-between max-lg:justify-center max-lg:my-16">
                    <select
                        id="sort-order"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                        className="p-2 border rounded bg-primary-foreground"
                        aria-label="Trier les iPhones par date de sortie"
                    >
                        <option value="desc">Du + récent au - récent</option>
                        <option value="asc">Du - récent au + récent</option>
                    </select>
                    <ButtonWithIcon name={"Androids"} url={"/services/reparation/samsung"} Icon={ArrowRight} aria-label="Voir les services Samsung" />
                </div>

                <div className={"inline-flex items-center gap-4 justify-center max-lg:flex-wrap"}>
                    {currentItems.map((iphone, index) => (
                        <PhoneCard
                            key={index}
                            name={iphone.name}
                            imageUrl={iphone.image}
                            brand={iphone.brand}
                            phoneNumber={"07 66 52 33 50"}
                            classname={""}
                            aria-label={`Détails du téléphone ${iphone.name}`}
                            alt={`Image du téléphone ${iphone.name}`}
                        />
                    ))}
                </div>

                <Spacing size={"sm"} />

                <PaginationComponent
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    classname={""}
                    aria-label={`Page ${currentPage} sur ${totalPages}`}
                />
            </Section>
        </>
    );
};
