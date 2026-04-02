import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions légales",
    description: "Mentions légales du site SARL Ravolet.",
};

export default function MentionsLegalesPage() {
    return (
        <>
            <section className="bg-gradient-to-br from-navy via-navy-light to-blue-light pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Mentions légales
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-navy max-w-none space-y-8">
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                1. Éditeur du site
                            </h2>
                            <div className="text-text-muted space-y-1 text-sm leading-relaxed">
                                <p>
                                    <strong className="text-navy">Raison sociale :</strong> SARL
                                    Ravolet
                                </p>
                                <p>
                                    <strong className="text-navy">Forme juridique :</strong>{" "}
                                    Société à Responsabilité Limitée (SARL)
                                </p>
                                <p>
                                    <strong className="text-navy">SIRET :</strong> À compléter
                                </p>
                                <p>
                                    <strong className="text-navy">Siège social :</strong> Adresse
                                    à compléter
                                </p>
                                <p>
                                    <strong className="text-navy">Téléphone :</strong>{" "}
                                    <a
                                        href="tel:0470437780"
                                        className="text-blue-light hover:underline"
                                    >
                                        04 70 43 77 80
                                    </a>
                                </p>
                                <p>
                                    <strong className="text-navy">Email :</strong>{" "}
                                    <a
                                        href="mailto:sarl.ravolet@gmail.com"
                                        className="text-blue-light hover:underline"
                                    >
                                        sarl.ravolet@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <strong className="text-navy">
                                        Directeur de la publication :
                                    </strong>{" "}
                                    À compléter
                                </p>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                2. Hébergement
                            </h2>
                            <div className="text-text-muted space-y-1 text-sm leading-relaxed">
                                <p>
                                    <strong className="text-navy">Hébergeur :</strong> Vercel Inc.
                                </p>
                                <p>
                                    <strong className="text-navy">Adresse :</strong> 340 S Lemon
                                    Ave #4133, Walnut, CA 91789, États-Unis
                                </p>
                                <p>
                                    <strong className="text-navy">Site web :</strong>{" "}
                                    <a
                                        href="https://vercel.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-light hover:underline"
                                    >
                                        https://vercel.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                3. Propriété intellectuelle
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                L&apos;ensemble du contenu de ce site (textes, images, logo,
                                graphismes, icônes, etc.) est la propriété exclusive de la SARL
                                Ravolet, sauf mention contraire. Toute reproduction,
                                représentation, modification, publication ou adaptation de tout
                                ou partie des éléments du site est interdite sans
                                l&apos;autorisation écrite préalable de la SARL Ravolet.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                4. Limitation de responsabilité
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                La SARL Ravolet s&apos;efforce de fournir des informations aussi
                                précises que possible sur ce site. Toutefois, elle ne pourra être
                                tenue responsable des omissions, inexactitudes ou carences dans
                                la mise à jour, qu&apos;elles soient de son fait ou du fait des
                                tiers partenaires qui lui fournissent ces informations.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                5. Données personnelles
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Pour plus d&apos;informations sur la collecte et le traitement
                                de vos données personnelles, veuillez consulter notre{" "}
                                <a
                                    href="/politique-de-confidentialite"
                                    className="text-blue-light hover:underline"
                                >
                                    politique de confidentialité
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
