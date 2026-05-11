import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Mentions légales",
    description: "Mentions légales du site SARL RAVOLET.",
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
                                    <strong className="text-navy">SIRET :</strong> 989 647 920 00010
                                </p>
                                <p>
                                    <strong className="text-navy">RCS :</strong>{" "}
                                    {/* TODO: Renseigner le RCS (ex: RCS Moulins 989 647 920) — disponible sur ton extrait Kbis */}
                                    À renseigner
                                </p>
                                <p>
                                    <strong className="text-navy">Capital social :</strong> 10 000 €
                                </p>
                                <p>
                                    <strong className="text-navy">Siège social :</strong>{" "}
                                    {/* TODO: Renseigner l'adresse du siège social (adresse perso du gérant ou adresse de domiciliation) */}
                                    À renseigner
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
                                    RAVOLET Thibaut
                                </p>
                                <p>
                                    <strong className="text-navy">
                                        Numéro de TVA intracommunautaire :
                                    </strong>{" "}
                                    {/* TODO: Renseigner le numéro de TVA intracommunautaire (ex: FR XX 989647920) — disponible auprès du service des impôts */}
                                    À renseigner
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
                                l&apos;autorisation écrite préalable de la SARL RAVOLET.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                4. Limitation de responsabilité
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                La SARL RAVOLET s&apos;efforce de fournir des informations aussi
                                précises que possible sur ce site. Toutefois, elle ne pourra être
                                tenue responsable des omissions, inexactitudes ou carences dans
                                la mise à jour, qu&apos;elles soient de son fait ou du fait des
                                tiers partenaires qui lui fournissent ces informations.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                5. Données personnelles et RGPD
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed mb-3">
                                Ce site collecte des données personnelles via ses formulaires
                                de rendez-vous et de contact. Le traitement de ces données
                                est effectué conformément au Règlement Général sur la
                                Protection des Données (RGPD) et à la loi Informatique et
                                Libertés.
                            </p>
                            <p className="text-text-muted text-sm leading-relaxed mb-3">
                                Vous disposez d&apos;un droit d&apos;accès, de rectification,
                                d&apos;effacement, de portabilité et d&apos;opposition sur vos
                                données personnelles. Pour exercer ces droits, contactez-nous
                                à{" "}
                                <a
                                    href="mailto:sarl.ravolet@gmail.com"
                                    className="text-blue-light hover:underline"
                                >
                                    sarl.ravolet@gmail.com
                                </a>
                                .
                            </p>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Pour plus d&apos;informations sur la collecte et le traitement
                                de vos données personnelles, veuillez consulter notre{" "}
                                <Link
                                    href="/politique-de-confidentialite"
                                    className="text-blue-light hover:underline"
                                >
                                    politique de confidentialité
                                </Link>
                                .
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                6. Cookies
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed mb-3">
                                Ce site utilise uniquement des cookies strictement nécessaires
                                à son fonctionnement. Aucun cookie de tracking, d&apos;analyse
                                ou publicitaire n&apos;est utilisé.
                            </p>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Pour plus de détails, consultez la section &quot;Cookies&quot;
                                de notre{" "}
                                <Link
                                    href="/politique-de-confidentialite"
                                    className="text-blue-light hover:underline"
                                >
                                    politique de confidentialité
                                </Link>
                                .
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                7. Réclamation auprès de la CNIL
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Si vous estimez que vos droits en matière de protection des
                                données ne sont pas respectés, vous pouvez adresser une
                                réclamation à la CNIL :
                            </p>
                            <div className="mt-3 text-text-muted text-sm space-y-1 bg-bg-light rounded-xl p-4">
                                <p>
                                    <strong className="text-navy">CNIL</strong> — Commission
                                    Nationale de l&apos;Informatique et des Libertés
                                </p>
                                <p>3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</p>
                                <p>
                                    <a
                                        href="https://www.cnil.fr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-light hover:underline"
                                    >
                                        www.cnil.fr
                                    </a>
                                </p>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                8. Droit applicable
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Le présent site et ses mentions légales sont régis par le
                                droit français. En cas de litige, et après tentative de
                                résolution amiable, les tribunaux français seront seuls
                                compétents.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        <p className="text-text-muted text-xs italic">
                            Dernière mise à jour : Mai 2026
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
