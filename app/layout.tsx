import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/app/_Components/Footer";
import { Header } from "@/app/_Components/Header";
import { Spacing } from "@/app/_Components/Spacing";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Web&Style",
    description: "Site web de l'agence Web&Style, basée à Perpignan, spécialisée dans la création de sites web et la reparation de téléphones.",
    openGraph: {
        title: "Web&Style - Création de sites web & services",
        description: "Web&Style est une agence spécialisée dans la création de sites web sur mesure et la reparation de téléphones mobiles.",
        url: "https://webstyle.tech", // Remplace par l'URL réelle de ton site
        type: "website",
        images: "icons/og-icon.png", // Image partagée pour les réseaux sociaux (ajoute une image spécifique pour l'Open Graph)
        siteName: "Web&Style",
    },
    twitter: {
        card: "summary_large_image",
        site: "@webstyle_tech", // Remplace par ton compte Twitter si tu en as un
        creator: "@webstyle_tech",
        title: "Web&Style - Création de sites web & services",
        description: "Site web de l'agence Web&Style spécialisée dans la création de sites web et la reparation de téléphones mobiles.",
        images: "/og-image.jpg", // Même image que pour Open Graph
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no " />
            <meta property="og:title" content="Web&Style - Création de sites web & services" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Web&Style est une agence spécialisée dans la création de sites web sur mesure et la réparation de téléphones mobiles." />
            <meta property="og:url" content="https://webstyle.fr" />
            <meta property="og:image" content="/og-image.jpg" />
            <meta property="og:site_name" content="Web&Style" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Web&Style - Création de sites web & services" />
            <meta name="twitter:description" content="Web&Style, agence spécialisée dans la création de sites web et la réparation de téléphones." />
            <meta name="twitter:image" content="/og-image.jpg" />
            <meta name="twitter:site" content="@webstyle_fr" />
            <meta name="twitter:creator" content="@webstyle_fr" />
            <link rel="icon" href="/icon.png" />
		<meta name="google-site-verification" content="5EF2XaY_tL-KwIr4VywVUZyrwZhXBovBCPzW_yYmBWU" />

            <title>Web&Style</title>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased max-sm:bg-mobile max-lg:bg-tablet max-xl:bg-laptop max-2xl:bg-desktop-sm bg-desktop font-mono bg-center bg-cover`}
        >
        <Header />
        <Analytics/>
        {children}
        <Spacing size={"md"} />
        <Footer />
        </body>
        </html>
    );
}
