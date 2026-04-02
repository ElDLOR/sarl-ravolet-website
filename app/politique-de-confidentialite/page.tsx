import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de confidentialité",
    description:
        "Politique de confidentialité et protection des données personnelles du site SARL Ravolet.",
};

export default function PolitiqueConfidentialitePage() {
    return (
        <>
            <section className="bg-gradient-to-br from-navy via-navy-light to-blue-light pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Politique de confidentialité
                    </h1>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        <p className="text-text-muted text-sm leading-relaxed">
                            La SARL Ravolet s&apos;engage à protéger la vie privée des
                            utilisateurs de son site web. Cette politique de confidentialité
                            décrit les types de données collectées et la manière dont elles
                            sont utilisées.
                        </p>

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                1. Données collectées
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed mb-2">
                                Nous collectons les données personnelles que vous nous
                                transmettez volontairement via nos formulaires :
                            </p>
                            <ul className="list-disc list-inside text-text-muted text-sm space-y-1 ml-2">
                                <li>Nom complet</li>
                                <li>Numéro de téléphone</li>
                                <li>Adresse email</li>
                                <li>Type de prestation et d&apos;intervention souhaités</li>
                                <li>Date et créneau souhaités</li>
                                <li>
                                    Message décrivant votre besoin
                                </li>
                            </ul>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                2. Finalité du traitement
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Les données collectées sont utilisées exclusivement pour :
                            </p>
                            <ul className="list-disc list-inside text-text-muted text-sm space-y-1 ml-2 mt-2">
                                <li>
                                    Traiter vos demandes de rendez-vous et de contact
                                </li>
                                <li>
                                    Vous recontacter dans le cadre de votre demande
                                </li>
                                <li>Améliorer la qualité de nos services</li>
                            </ul>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                3. Durée de conservation
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Vos données personnelles sont conservées pendant une durée
                                maximale de 3 ans à compter de votre dernière interaction avec
                                notre société. Passé ce délai, elles sont automatiquement
                                supprimées ou anonymisées.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                4. Vos droits
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed mb-2">
                                Conformément au Règlement Général sur la Protection des Données
                                (RGPD), vous disposez des droits suivants :
                            </p>
                            <ul className="list-disc list-inside text-text-muted text-sm space-y-1 ml-2">
                                <li>
                                    <strong className="text-navy">Droit d&apos;accès :</strong>{" "}
                                    obtenir la confirmation que vos données sont traitées et en
                                    obtenir une copie
                                </li>
                                <li>
                                    <strong className="text-navy">
                                        Droit de rectification :
                                    </strong>{" "}
                                    demander la correction de données inexactes ou incomplètes
                                </li>
                                <li>
                                    <strong className="text-navy">
                                        Droit à l&apos;effacement :
                                    </strong>{" "}
                                    demander la suppression de vos données personnelles
                                </li>
                                <li>
                                    <strong className="text-navy">
                                        Droit à la portabilité :
                                    </strong>{" "}
                                    recevoir vos données dans un format structuré et lisible
                                </li>
                                <li>
                                    <strong className="text-navy">
                                        Droit d&apos;opposition :
                                    </strong>{" "}
                                    vous opposer au traitement de vos données
                                </li>
                            </ul>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                5. Sécurité
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Nous mettons en œuvre les mesures techniques et
                                organisationnelles appropriées pour protéger vos données
                                personnelles contre la destruction accidentelle ou illicite, la
                                perte, l&apos;altération ou la divulgation non autorisée.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                6. Contact
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Pour exercer vos droits ou pour toute question relative à la
                                protection de vos données personnelles, vous pouvez nous
                                contacter :
                            </p>
                            <div className="mt-3 text-text-muted text-sm space-y-1">
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
                                    <strong className="text-navy">Téléphone :</strong>{" "}
                                    <a
                                        href="tel:0470437780"
                                        className="text-blue-light hover:underline"
                                    >
                                        04 70 43 77 80
                                    </a>
                                </p>
                                <p>
                                    <strong className="text-navy">Adresse :</strong> À compléter
                                </p>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        <p className="text-text-muted text-xs italic">
                            Dernière mise à jour : Avril 2026
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
