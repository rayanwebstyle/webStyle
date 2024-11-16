import React from 'react';
import { Section } from "@/app/_Components/Section";
import { ButtonWithIcon } from "@/app/_Components/ButtonWithIcon";
import { ArrowLeft } from "lucide-react";
import { Spacing } from "@/app/_Components/Spacing";

// Ajouter des meta tags SEO dans le Head
import Head from "next/head";

const AboutPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>À propos de notre entreprise de développement web et réparation mobile</title>
                <meta
                    name="description"
                    content="Nous sommes une équipe de professionnels à Perpignan, spécialisés dans la création de sites internet et la réparation mobile. Découvrez nos services et contactez-nous pour vos projets."
                />
                <meta property="og:title" content="À propos de notre entreprise" />
                <meta
                    property="og:description"
                    content="Une équipe dynamique à Perpignan spécialisée en développement web et réparation mobile. Nous vous accompagnons dans vos projets numériques."
                />
                <meta property="og:image" content="/icons/og-icon.png" />
                <meta name="twitter:title" content="À propos de notre entreprise" />
                <meta
                    name="twitter:description"
                    content="Une équipe dynamique à Perpignan spécialisée en développement web et réparation mobile."
                />
                <meta name="twitter:image" content="/icons/og-icon.png" />
            </Head>
            <Section>
                <Spacing size={"xl"} />
                <div className="mx-auto px-4 py-8 bg-primary/10 rounded-sm">
                    <h1 className="text-3xl font-bold mb-6">
                        À propos de notre entreprise de développement web et de réparation mobile
                    </h1>

                    <p className="mb-4">
                        Nous sommes une équipe dynamique de deux professionnels basés à{" "}
                        <strong>Perpignan</strong>, spécialisés dans la <strong>création de sites internet</strong> et
                        la <strong>réparation de dispositifs mobiles</strong>. Avec plus de deux ans d&apos;expérience en{" "}
                        <strong>développement web</strong>, nous avons acquis les compétences nécessaires pour offrir
                        des solutions digitales sur mesure qui répondent aux besoins spécifiques de nos clients.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Notre expertise en développement web</h2>
                    <ul className="list-disc pl-5 mb-4">
                        <li><strong>Développement Web</strong> : Nous concevons et développons des sites internet modernes et réactifs, adaptés à tous types d&apos;appareils, y compris les smartphones et les tablettes.</li>
                        <li><strong>Réparation Mobile</strong> : Nous proposons des services de réparation pour smartphones et tablettes, garantissant une remise en état rapide et efficace.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Notre vision pour un numérique accessible</h2>
                    <p className="mb-4">
                        Notre objectif est de rendre le numérique accessible à tous. Nous croyons fermement que chaque projet mérite une attention particulière et un accompagnement personnalisé pour maximiser son impact.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Pourquoi choisir nos services ?</h2>
                    <ul className="list-disc pl-5 mb-4">
                        <li><strong>Professionnalisme</strong> : Avec deux ans d&apos;expérience dans le domaine, nous avons développé une approche rigoureuse et efficace qui garantit la qualité.</li>
                        <li><strong>Passion</strong> : Notre passion pour la technologie et le design se reflète dans la qualité de notre travail, assurant des résultats qui dépassent vos attentes.</li>
                        <li><strong>Satisfaction Client</strong> : Votre satisfaction est notre priorité. Nous nous engageons à fournir un service client exceptionnel à chaque étape du projet.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Contactez-nous pour vos projets numériques</h2>
                    <p className="mb-4">
                        Si vous avez un projet en tête ou si vous avez besoin d&apos;aide pour réparer votre appareil mobile, n&apos;hésitez pas à nous contacter. Nous serions ravis de discuter avec vous et de voir comment nous pouvons vous aider à atteindre vos objectifs numériques.
                    </p>

                    {/* Le bouton de retour */}
                    <ButtonWithIcon
                        name={"Retour"}
                        url={'/'}
                        Icon={ArrowLeft}
                        aria-label="Retour à la page d'accueil"
                        classname="mt-6"
                    />
                </div>
            </Section>
        </>
    );
};

export default AboutPage;
