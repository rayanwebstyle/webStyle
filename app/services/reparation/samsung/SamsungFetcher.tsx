"use client"

import { Section } from "@/app/_Components/Section";
import { Samsungs } from "./SamsungData";
import { PhoneCard } from "@/app/services/reparation/_components/PhoneCard";
import usePagination from "@/app/hooks/usePagination";
import { useState, useEffect } from "react";
import PaginationComponent from "@/app/_Components/PaginationComponent";
import { Spacing } from "@/app/_Components/Spacing";
import { ButtonWithIcon } from "@/app/_Components/ButtonWithIcon";
import { ArrowRight } from "lucide-react";
import Head from "next/head";

const AndroidFetcher = () => {
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    // Tri dynamique des Samsungs en fonction de la date de sortie
    const sortedSamsungs = [...Samsungs].sort((a, b) => {
        const dateA = new Date(a.releasedate);
        const dateB = new Date(b.releasedate);

        return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });

    const { currentItems, currentPage, totalPages, handlePageChange } = usePagination({
        items: sortedSamsungs,
        itemsPerPage: 4
    });

    // Dynamiser les métadonnées en fonction de la page
    useEffect(() => {
        document.title = `Réparation Samsung - Web&Style`;
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Découvrez les services de reparation pour Samsung chez Web&Style. Contactez-nous pour un service rapide et fiable.');
    }, []);

    return (
        <>
            <Head>
                <meta name="description" content="Découvrez les services de réparation pour Samsung chez Web&Style. Contactez-nous pour un service rapide et fiable." />
                <meta name="keywords" content="réparation Samsung, réparation téléphone, service Android, réparation mobile" />
            </Head>

            <Section classname={"flex flex-col"}>
                <div className="w-full max-w-lg h-full mx-auto px-4 py-8 max-lg:flex-col flex gap-8 justify-between max-lg:justify-center max-lg:my-16">
                    <select
                        id="sort-order"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                        className="p-2 border rounded bg-primary-foreground"
                        aria-label="Trier les Samsung par date de sortie"
                    >
                        <option value="desc">Du + récent au - récent</option>
                        <option value="asc">Du - récent au + récent</option>
                    </select>
                    <ButtonWithIcon
                        name={"iPhones"}
                        url={"/services/reparation/iphone"}
                        Icon={ArrowRight}
                        aria-label="Voir les services iPhone"
                    />
                </div>

                <div className={"inline-flex items-center gap-4 justify-center max-lg:flex-wrap"}>
                    {currentItems.map((samsung, index) => (
                        <PhoneCard
                            key={index}
                            name={samsung.name}
                            imageUrl={samsung.image}
                            brand={samsung.brand}
                            phoneNumber={"07 66 52 33 50"}
                            classname={""}
                            alt={`Image du téléphone ${samsung.name}`}
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

export default AndroidFetcher;
