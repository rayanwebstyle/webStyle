// pages/404.tsx
import React from "react";
import { Home, Frown } from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center p-8 w-full h-screen ">
            <Frown className="text-primary mx-auto mb-4" size={48} color="currentColor" />
            <h1 className="text-primary text-6xl font-scp-regular mb-4">404</h1>
            <h2 className="text-primary text-2xl font-scp-regular mb-4">Page Not Found</h2>
            <p className="text-primary mb-8 text-center">
                Désolé, la page que vous recherchez n&apos;existe pas.
            </p>
            <Link
                href="/"
                aria-label="Retour à l'accueil"
            >
                <Button>
                    <Home className="inline-block mr-2" size={20} color="currentColor" />
                    Retour à l&apos;accueil
                </Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
