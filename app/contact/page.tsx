"use client";

import { useState, type FormEvent } from "react";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    AlertCircle,
} from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            nom: formData.get("nom") as string,
            email: formData.get("email") as string,
            sujet: formData.get("sujet") as string,
            message: formData.get("message") as string,
            rgpd_consent: formData.get("rgpd_consent") === "on",
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || "Une erreur est survenue");
            }

            setFormStatus("success");
        } catch (err) {
            setErrorMessage(
                err instanceof Error ? err.message : "Une erreur est survenue"
            );
            setFormStatus("error");
        }
    };

    return (
        <>
            {/* Header */}
            <section className="bg-gradient-to-br from-navy via-navy-light to-blue-light pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact
                    </h1>
                    <p className="text-blue-lighter text-lg max-w-2xl mx-auto">
                        Une question ? Un projet ? N&apos;hésitez pas à nous contacter.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="text-xl font-semibold text-navy mb-6">
                                Nos coordonnées
                            </h2>

                            <div className="space-y-5">
                                <a
                                    href="tel:0470437780"
                                    className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 card-hover"
                                >
                                    <div className="w-11 h-11 bg-blue-light/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-blue-light" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-navy text-sm">Téléphone</p>
                                        <p className="text-blue-light font-semibold">
                                            04 70 43 77 80
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:sarl.ravolet@gmail.com"
                                    className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 card-hover"
                                >
                                    <div className="w-11 h-11 bg-blue-light/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-blue-light" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-navy text-sm">Email</p>
                                        <p className="text-blue-light font-semibold">
                                            sarl.ravolet@gmail.com
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                                    <div className="w-11 h-11 bg-blue-light/10 rounded-lg flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-blue-light" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-navy text-sm">Adresse</p>
                                        <p className="text-text-muted text-sm">
                                            Zone d&apos;intervention : Moulins et alentours (50 km)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                                    <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-navy text-sm">Horaires</p>
                                        <div className="text-text-muted text-sm space-y-0.5">
                                            <p>Lundi – Vendredi : 8h00 – 18h00</p>
                                            <p>Samedi : 8h00 – 12h00</p>
                                            <p>Dimanche : Fermé</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                                <h2 className="text-xl font-semibold text-navy mb-6">
                                    Envoyez-nous un message
                                </h2>

                                {formStatus === "success" ? (
                                    <div className="text-center py-8">
                                        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-navy mb-2">
                                            Message envoyé !
                                        </h3>
                                        <p className="text-text-muted">
                                            Nous vous répondrons dans les plus brefs délais.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        {formStatus === "error" && (
                                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                                                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                                <p className="text-red-700 text-sm">{errorMessage}</p>
                                            </div>
                                        )}

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label
                                                        htmlFor="nom"
                                                        className="block text-sm font-medium text-navy mb-1.5"
                                                    >
                                                        Nom complet <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="nom"
                                                        name="nom"
                                                        required
                                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-light/30 focus:border-blue-light btn-transition"
                                                        placeholder="Jean Dupont"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm font-medium text-navy mb-1.5"
                                                    >
                                                        Email <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-light/30 focus:border-blue-light btn-transition"
                                                        placeholder="jean.dupont@email.com"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="sujet"
                                                    className="block text-sm font-medium text-navy mb-1.5"
                                                >
                                                    Sujet <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="sujet"
                                                    name="sujet"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-light/30 focus:border-blue-light btn-transition"
                                                    placeholder="Demande de devis, question..."
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="message"
                                                    className="block text-sm font-medium text-navy mb-1.5"
                                                >
                                                    Message <span className="text-red-500">*</span>
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={5}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-light/30 focus:border-blue-light btn-transition resize-y"
                                                    placeholder="Votre message..."
                                                />
                                            </div>

                                            {/* RGPD Consent */}
                                            <div className="flex items-start gap-3">
                                                <input
                                                    type="checkbox"
                                                    id="rgpd_consent"
                                                    name="rgpd_consent"
                                                    required
                                                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-light focus:ring-blue-light/30"
                                                />
                                                <label
                                                    htmlFor="rgpd_consent"
                                                    className="text-sm text-text-muted leading-relaxed"
                                                >
                                                    J&apos;accepte que mes données soient
                                                    utilisées pour traiter ma demande.{" "}
                                                    <a
                                                        href="/politique-de-confidentialite"
                                                        className="text-blue-light hover:underline"
                                                    >
                                                        Voir notre politique de confidentialité
                                                    </a>
                                                    .{" "}
                                                    <span className="text-red-500">*</span>
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={formStatus === "submitting"}
                                                className="w-full sm:w-auto bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-xl btn-transition shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                                            >
                                                {formStatus === "submitting" ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Envoi en cours...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5" />
                                                        Envoyer
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
