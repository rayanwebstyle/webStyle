import React from 'react';
import Head from 'next/head';
import { ArrowLeft } from "lucide-react";
import { ButtonWithIcon } from "@/app/_Components/ButtonWithIcon";
import { Section } from "@/app/_Components/Section";
import { Spacing } from "@/app/_Components/Spacing";

const Policies: React.FC = () => {
    return (
        <>
            <Head>
                <title>Politique de Confidentialité - Web&Style</title>
                <meta
                    name="description"
                    content="Découvrez notre politique de confidentialité concernant la collecte et l'utilisation de vos données personnelles."
                />
                <meta
                    name="keywords"
                    content="politique de confidentialité, protection des données, vie privée, données personnelles"
                />
                {/* SEO - Meta Robots (si tu veux que cette page soit indexée par les moteurs de recherche) */}
                <meta name="robots" content="index, follow" />
                {/* Open Graph (réseaux sociaux) */}
                <meta property="og:title" content="Politique de Confidentialité - Web&Style" />
                <meta
                    property="og:description"
                    content="Découvrez notre politique de confidentialité concernant la collecte et l'utilisation de vos données personnelles."
                />
                <meta property="og:url" content="https://webstyle.tech/policies" />
                <meta property="og:image" content="/og-icon.png" />
                <meta property="og:type" content="article" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Politique de Confidentialité - Web&Style" />
                <meta
                    name="twitter:description"
                    content="Découvrez notre politique de confidentialité concernant la collecte et l'utilisation de vos données personnelles."
                />
                <meta name="twitter:image" content="/og-icon.png" />
            </Head>
            <Section>
                <Spacing size={"xl"} />
                <article className="mx-auto px-4 py-8 bg-primary/10 rounded-sm">
                    <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
                    <p className="mb-4">
                        Chez Web&Style, nous nous engageons à protéger votre vie privée. Cette politique explique comment nous collectons, utilisons et partageons vos informations personnelles.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Informations que nous collectons</h2>
                    <p className="mb-4">Nous collectons des informations lorsque vous utilisez notre site, notamment :</p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>Informations personnelles (nom, adresse e-mail, etc.)</li>
                        <li>Données d&apos;utilisation (adresse IP, type de navigateur, pages visitées)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Utilisation de vos informations</h2>
                    <p className="mb-4">Nous utilisons vos informations pour :</p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>Améliorer notre site et nos services.</li>
                        <li>Vous envoyer des informations et mises à jour.</li>
                        <li>Répondre à vos demandes et commentaires.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Partage de vos informations</h2>
                    <p className="mb-4">
                        Nous ne vendons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations avec des partenaires de confiance pour vous fournir nos services.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Sécurité de vos informations</h2>
                    <p className="mb-4">
                        Nous prenons des mesures raisonnables pour protéger vos informations personnelles contre la perte, le vol et l&apos;utilisation abusive.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Modifications de cette politique</h2>
                    <p className="mb-4">
                        Nous pouvons mettre à jour cette politique de confidentialité. Nous vous informerons des modifications en publiant la nouvelle politique sur notre site.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Contactez-nous</h2>
                    <p className="mb-4">
                        Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à l&apos;adresse suivante : contact@webandstyle.com.
                    </p>
                    <ButtonWithIcon name={"Retour"} url={'/'} Icon={ArrowLeft} />
                </article>
            </Section>
        </>
    );
};

export default Policies;
