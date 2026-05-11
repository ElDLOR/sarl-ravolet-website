"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Vérifier si l'utilisateur a déjà accepté les cookies
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            // Petit délai pour une apparition fluide
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "accepted");
        localStorage.setItem("cookie_consent_date", new Date().toISOString());
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
            role="dialog"
            aria-label="Bannière de cookies"
        >
            <div className="max-w-4xl mx-auto bg-navy/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl animate-slide-up">
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="hidden sm:flex w-10 h-10 bg-accent/20 rounded-xl items-center justify-center shrink-0">
                        <Cookie className="w-5 h-5 text-accent" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-sm mb-1">
                            🍪 Ce site utilise des cookies
                        </h3>
                        <p className="text-gray-300 text-xs leading-relaxed">
                            Nous utilisons uniquement des cookies techniques nécessaires
                            au bon fonctionnement du site. Aucun cookie publicitaire ou
                            de tracking n&apos;est utilisé.{" "}
                            <Link
                                href="/politique-de-confidentialite"
                                className="text-blue-lighter hover:text-accent underline btn-transition"
                            >
                                En savoir plus
                            </Link>
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={acceptCookies}
                            className="bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-5 py-2.5 rounded-xl btn-transition shadow-sm hover:shadow-md"
                        >
                            Accepter
                        </button>
                        <button
                            onClick={acceptCookies}
                            className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 btn-transition"
                            aria-label="Fermer la bannière"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
