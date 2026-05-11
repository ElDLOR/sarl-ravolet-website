"use client";

import { CalendarDays, Phone, Clock, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

// ⚠️ REMPLACE CE LIEN PAR TON VRAI LIEN CALENDLY
const CALENDLY_URL = "https://calendly.com/sarl-ravolet";

export default function RendezVousPage() {
    // Charger le script Calendly
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            {/* Header */}
            <section className="bg-gradient-to-br from-navy via-navy-light to-blue-light pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Prendre Rendez-vous
                    </h1>
                    <p className="text-blue-lighter text-lg max-w-2xl mx-auto">
                        Réservez un créneau téléphonique directement dans notre agenda.
                        Simple, rapide et gratuit.
                    </p>
                </div>
            </section>

            {/* Avantages */}
            <section className="py-10 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center gap-3 p-4">
                            <div className="w-12 h-12 bg-blue-light/10 rounded-xl flex items-center justify-center">
                                <CalendarDays className="w-6 h-6 text-blue-light" />
                            </div>
                            <h3 className="font-semibold text-navy text-sm">Choisissez votre créneau</h3>
                            <p className="text-text-muted text-xs">
                                Consultez nos disponibilités en temps réel et sélectionnez le moment qui vous convient.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                <Phone className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="font-semibold text-navy text-sm">Appel téléphonique</h3>
                            <p className="text-text-muted text-xs">
                                Nous vous rappelons à l&apos;heure convenue pour discuter de votre projet.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-navy text-sm">Confirmation immédiate</h3>
                            <p className="text-text-muted text-xs">
                                Recevez une confirmation par email avec tous les détails de votre rendez-vous.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calendly Embed */}
            <section className="py-12 md:py-16 bg-bg-light">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
                            <CalendarDays className="w-5 h-5 text-blue-light" />
                            <h2 className="text-lg font-semibold text-navy">
                                Sélectionnez un créneau
                            </h2>
                        </div>
                        <div
                            className="calendly-inline-widget"
                            data-url={CALENDLY_URL}
                            style={{ minWidth: "320px", height: "700px" }}
                        />
                    </div>

                    {/* Info supplémentaire */}
                    <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-light/10 rounded-xl flex items-center justify-center shrink-0">
                                <Clock className="w-5 h-5 text-blue-light" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-navy mb-1">
                                    Vous préférez nous appeler directement ?
                                </h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Nous sommes joignables du lundi au vendredi de 8h00 à 18h00
                                    et le samedi de 8h00 à 12h00 au{" "}
                                    <a
                                        href="tel:0470437780"
                                        className="text-accent font-semibold hover:underline"
                                    >
                                        04 70 43 77 80
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
