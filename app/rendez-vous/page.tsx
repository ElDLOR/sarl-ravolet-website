"use client";

import { useState, type FormEvent } from "react";
import { CalendarDays, Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function RendezVousPage() {
    const [formStatus, setFormStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            nom: formData.get("nom") as string,
            telephone: formData.get("telephone") as string,
            email: formData.get("email") as string,
            type_prestation: formData.get("type_prestation") as string,
            type_intervention: formData.get("type_intervention") as string,
            date_souhaitee: formData.get("date_souhaitee") as string,
            creneau: formData.get("creneau") as string,
            message: formData.get("message") as string,
            rgpd_consent: formData.get("rgpd_consent") === "on",
        };

        try {
            const response = await fetch("/api/rendez-vous", {
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

    if (formStatus === "success") {
        return (
            <>
                <section className="bg-gradient-to-br from-navy via-navy-light to-blue-light pt-28 pb-16 md:pt-36 md:pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Prendre Rendez-vous
                        </h1>
                    </div>
                </section>
                <section className="py-16 md:py-24 bg-bg-light">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-5" />
                            <h2 className="text-2xl font-bold text-navy mb-3">
                                Demande envoyée !
                            </h2>
                            <p className="text-text-muted leading-relaxed">
                                Merci pour votre demande de rendez-vous. Notre équipe vous
                                recontactera dans les plus brefs délais pour confirmer votre
                                créneau.
                            </p>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            {/* Header */}
            <section className="bg-gradient-to-br from-navy via-navy-light to-blue-light pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Prendre Rendez-vous
                    </h1>
                    <p className="text-blue-lighter text-lg max-w-2xl mx-auto">
                        Remplissez le formulaire ci-dessous et nous vous recontacterons
                        rapidement.
                    </p>
                </div>
            </section>

            {/* Form */}
            <section className="py-16 md:py-24 bg-bg-light">
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <CalendarDays className="w-6 h-6 text-blue-light" />
                            <h2 className="text-xl font-semibold text-navy">
                                Formulaire de rendez-vous
                            </h2>
                        </div>

                        {formStatus === "error" && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <p className="text-red-700 text-sm">{errorMessage}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Nom */}
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

                            {/* Téléphone + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label
                                        htmlFor="telephone"
                                        className="block text-sm font-medium text-navy mb-1.5"
                                    >
                                        Téléphone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="telephone"
                                        name="telephone"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-light/30 focus:border-blue-light btn-transition"
                                        placeholder="06 12 34 56 78"
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

                            {/* Type prestation + Type intervention */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label
                                        htmlFor="type_prestation"
                                        className="block text-sm font-medium text-navy mb-1.5"
                                    >
                                        Type de prestation <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="type_prestation"
                                        name="type_prestation"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy bg-white focus:outline-none focus:ring-2 focus:ring-blue-light/30 focus:border-blue-light btn-transition"
                                    >
                                        <option value="">Sélectionner...</option>
                                        <option value="climatisation">Climatisation</option>
                                        <option value="plomberie">Plomberie</option>
                                        <option value="electricite">Électricité</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="type_intervention"
                                        className="block text-sm font-medium text-navy mb-1.5"
                                    >
                                        Type d&apos;intervention{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="type_intervention"
                                        name="type_intervention"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy bg-white focus:outline-none focus:ring-2 focus:ring-blue-light/30 focus:border-blue-light btn-transition"
                                    >
                                        <option value="">Sélectionner...</option>
                                        <option value="installation">Installation</option>
                                        <option value="entretien">Entretien</option>
                                        <option value="depannage">Dépannage</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>
                            </div>

                            {/* Date + Créneau */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label
                                        htmlFor="date_souhaitee"
                                        className="block text-sm font-medium text-navy mb-1.5"
                                    >
                                        Date souhaitée
                                    </label>
                                    <input
                                        type="date"
                                        id="date_souhaitee"
                                        name="date_souhaitee"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy focus:outline-none focus:ring-2 focus:ring-blue-light/30 focus:border-blue-light btn-transition"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="creneau"
                                        className="block text-sm font-medium text-navy mb-1.5"
                                    >
                                        Créneau préféré
                                    </label>
                                    <select
                                        id="creneau"
                                        name="creneau"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy bg-white focus:outline-none focus:ring-2 focus:ring-blue-light/30 focus:border-blue-light btn-transition"
                                    >
                                        <option value="">Pas de préférence</option>
                                        <option value="matin">Matin (8h-12h)</option>
                                        <option value="apres-midi">Après-midi (14h-18h)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-navy mb-1.5"
                                >
                                    Description du besoin{" "}
                                    <span className="text-text-muted font-normal">
                                        (optionnel)
                                    </span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-light/30 focus:border-blue-light btn-transition resize-y"
                                    placeholder="Décrivez votre besoin ou votre problème..."
                                />
                            </div>

                            {/* RGPD */}
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
                                    J&apos;accepte que mes données soient utilisées pour traiter
                                    ma demande.{" "}
                                    <a
                                        href="/politique-de-confidentialite"
                                        className="text-blue-light hover:underline"
                                    >
                                        Voir notre politique de confidentialité
                                    </a>
                                    . <span className="text-red-500">*</span>
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={formStatus === "submitting"}
                                className="w-full bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-xl btn-transition shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-lg"
                            >
                                {formStatus === "submitting" ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Envoyer ma demande
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
