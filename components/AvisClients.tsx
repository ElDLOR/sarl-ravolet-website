"use client";

import { useState, useEffect } from "react";
import { Star, MessageSquarePlus, X, Loader2, CheckCircle2 } from "lucide-react";

type Avis = {
    id: string;
    nom: string;
    note: number;
    commentaire: string;
    created_at: string;
};

export default function AvisClients() {
    const [avisList, setAvisList] = useState<Avis[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form state
    const [nom, setNom] = useState("");
    const [note, setNote] = useState(5);
    const [commentaire, setCommentaire] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    // Hover state for stars in form
    const [hoveredStar, setHoveredStar] = useState(0);

    // Fetch avis on mount
    useEffect(() => {
        const fetchAvis = async () => {
            try {
                const response = await fetch("/api/avis");
                const data = await response.json();
                if (data.success) {
                    setAvisList(data.avis);
                }
            } catch (error) {
                console.error("Erreur de récupération des avis", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAvis();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        try {
            const response = await fetch("/api/avis", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nom, note, commentaire }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitSuccess(true);
                // Reset form
                setNom("");
                setNote(5);
                setCommentaire("");
                // Close modal after 3 seconds
                setTimeout(() => {
                    setIsModalOpen(false);
                    setSubmitSuccess(false);
                }, 3000);
            } else {
                setSubmitError(data.error || "Une erreur est survenue.");
            }
        } catch (error) {
            setSubmitError("Impossible de se connecter au serveur.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                        Ce que disent nos clients
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto mb-8">
                        La satisfaction de nos clients est notre meilleure carte de visite.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-xl btn-transition shadow-sm"
                    >
                        <MessageSquarePlus className="w-5 h-5" />
                        Laisser un avis
                    </button>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-32">
                        <Loader2 className="w-8 h-8 text-blue-light animate-spin" />
                    </div>
                ) : avisList.length === 0 ? (
                    <div className="text-center bg-white p-8 rounded-2xl border border-gray-100 max-w-2xl mx-auto">
                        <p className="text-text-muted">Aucun avis pour le moment. Soyez le premier à partager votre expérience !</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {avisList.map((avis) => (
                            <div key={avis.id} className="bg-white rounded-2xl p-7 border border-gray-100 card-hover h-full flex flex-col">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < avis.note ? "text-accent fill-accent" : "text-gray-200"}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-text-muted text-sm leading-relaxed flex-1 mb-4 whitespace-pre-wrap">
                                    &ldquo;{avis.commentaire}&rdquo;
                                </p>
                                <p className="font-semibold text-navy text-sm">
                                    {avis.nom}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {new Date(avis.created_at).toLocaleDateString('fr-FR', {
                                        year: 'numeric', month: 'long', day: 'numeric'
                                    })}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal de soumission */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-navy/60 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6 md:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy bg-gray-50 hover:bg-gray-100 rounded-full btn-transition"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="text-2xl font-bold text-navy mb-6">Laisser un avis</h3>

                        {submitSuccess ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                                </div>
                                <h4 className="text-lg font-bold text-navy mb-2">Merci pour votre avis !</h4>
                                <p className="text-text-muted">Il a été envoyé avec succès et sera publié après validation par notre équipe.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-navy mb-2">Votre note</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((starValue) => (
                                            <button
                                                type="button"
                                                key={starValue}
                                                onClick={() => setNote(starValue)}
                                                onMouseEnter={() => setHoveredStar(starValue)}
                                                onMouseLeave={() => setHoveredStar(0)}
                                                className="focus:outline-none transition-transform hover:scale-110"
                                            >
                                                <Star
                                                    className={`w-8 h-8 ${starValue <= (hoveredStar || note)
                                                            ? "text-accent fill-accent"
                                                            : "text-gray-200"
                                                        } transition-colors`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="nom" className="block text-sm font-medium text-navy mb-1.5">
                                        Votre nom ou prénom
                                    </label>
                                    <input
                                        type="text"
                                        id="nom"
                                        required
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                        className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        placeholder="Ex: Jean Dupont"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="commentaire" className="block text-sm font-medium text-navy mb-1.5">
                                        Votre expérience
                                    </label>
                                    <textarea
                                        id="commentaire"
                                        required
                                        rows={4}
                                        value={commentaire}
                                        onChange={(e) => setCommentaire(e.target.value)}
                                        className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Racontez-nous comment s'est passée l'intervention..."
                                    ></textarea>
                                </div>

                                {submitError && (
                                    <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">{submitError}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 rounded-xl btn-transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        "Envoyer mon avis"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
