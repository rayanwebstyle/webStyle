import React from 'react';
import Head from 'next/head';
import { Section } from "@/app/_Components/Section";
import { ArrowLeft } from "lucide-react";
import { ButtonWithIcon } from "@/app/_Components/ButtonWithIcon";
import { Spacing } from "@/app/_Components/Spacing";

const Licenses: React.FC = () => {
    return (
        <>
            <Head>
                <title>Licences - Web&Style</title>
                <meta
                    name="description"
                    content="Découvrez les licences associées aux services et produits proposés par Web&Style. En savoir plus sur nos droits d'auteur et conditions d'utilisation."
                />
                <meta
                    name="keywords"
                    content="licences, droits d'auteur, conditions d'utilisation, services Web&Style, produits Web&Style"
                />
                {/* SEO - Meta Robots */}
                <meta name="robots" content="index, follow" />
                {/* Open Graph (réseaux sociaux) */}
                <meta property="og:title" content="Licences - Web&Style" />
                <meta
                    property="og:description"
                    content="Découvrez les licences associées aux services et produits proposés par Web&Style. En savoir plus sur nos droits d'auteur et conditions d'utilisation."
                />
                <meta property="og:url" content="https://webstyle.tech/licenses" />
                <meta property="og:type" content="article" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Licences - Web&Style" />
                <meta
                    name="twitter:description"
                    content="Découvrez les licences associées aux services et produits proposés par Web&Style."
                />
            </Head>
            <Section>
                <Spacing size={"xl"} />
                <article className="mx-auto px-4 py-8 bg-primary/10 rounded-sm">
                    <h1 className="text-3xl font-bold mb-6">Licences</h1>

                    <p className="mb-4">
                        Les services et produits fournis par Web&Style sont soumis aux licences suivantes :
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">1. Licences Logiciels</h2>
                    <p className="mb-4">
                        Tous les logiciels développés par Web&Style sont sous licence propriétaire. Vous ne pouvez pas redistribuer ou modifier ces logiciels sans autorisation écrite.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">2. Contenu Créatif</h2>
                    <p className="mb-4">
                        Le contenu créatif (images, vidéos, textes) utilisé sur notre site est protégé par des droits d&apos;auteur. Toute utilisation non autorisée est interdite.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">3. Conditions d&apos;Utilisation</h2>
                    <p className="mb-4">
                        En utilisant nos services, vous acceptez nos conditions d&apos;utilisation. Veuillez les lire attentivement avant d&apos;utiliser nos produits.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Contactez-nous</h2>
                    <p className="mb-4">
                        Pour toute question concernant nos licences ou conditions d&apos;utilisation, veuillez nous contacter à l&apos;adresse suivante : <a href="mailto:contact@webandstyle.com" className="text-primary hover:underline">contact@webandstyle.com</a>.
                    </p>
                    <ButtonWithIcon name={"Retour"} url={'/'} Icon={ArrowLeft} />
                </article>
            </Section>
        </>
    );
};

export default Licenses;
