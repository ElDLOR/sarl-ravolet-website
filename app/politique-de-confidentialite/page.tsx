import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de confidentialité",
    description:
        "Politique de confidentialité et protection des données personnelles du site SARL RAVOLET — RGPD.",
};

export default function PolitiqueConfidentialitePage() {
    return (
        <>
            <section className="bg-gradient-to-br from-navy via-navy-light to-blue-light pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Politique de confidentialité
                    </h1>
                    <p className="text-blue-lighter text-lg mt-4 max-w-2xl mx-auto">
                        Protection de vos données personnelles conformément au RGPD
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        <p className="text-text-muted text-sm leading-relaxed">
                            La SARL RAVOLET s&apos;engage à protéger la vie privée des
                            utilisateurs de son site web conformément au Règlement Général
                            sur la Protection des Données (RGPD — Règlement UE 2016/679) et
                            à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
                            Cette politique de confidentialité décrit les données collectées,
                            la manière dont elles sont utilisées et vos droits.
                        </p>

                        {/* 1. Responsable du traitement */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                1. Responsable du traitement
                            </h2>
                            <div className="text-text-muted text-sm leading-relaxed space-y-1">
                                <p>
                                    Le responsable du traitement des données personnelles
                                    collectées sur ce site est :
                                </p>
                                <div className="mt-3 bg-bg-light rounded-xl p-4 space-y-1">
                                    <p>
                                        <strong className="text-navy">Raison sociale :</strong>{" "}
                                        SARL RAVOLET
                                    </p>
                                    <p>
                                        <strong className="text-navy">SIRET :</strong> 989 647 920 00010
                                    </p>
                                    <p>
                                        <strong className="text-navy">Siège social :</strong>{" "}
                                        {/* TODO: Renseigner l'adresse du siège social */}
                                        À renseigner
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
                                        <strong className="text-navy">Téléphone :</strong>{" "}
                                        <a
                                            href="tel:0470437780"
                                            className="text-blue-light hover:underline"
                                        >
                                            04 70 43 77 80
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* 2. Données collectées */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                2. Données personnelles collectées
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed mb-3">
                                Nous collectons uniquement les données personnelles que vous
                                nous transmettez volontairement via nos formulaires :
                            </p>

                            <div className="space-y-4">
                                <div className="bg-bg-light rounded-xl p-4">
                                    <p className="font-medium text-navy text-sm mb-2">
                                        Formulaire de rendez-vous :
                                    </p>
                                    <ul className="list-disc list-inside text-text-muted text-sm space-y-1 ml-2">
                                        <li>Nom complet</li>
                                        <li>Numéro de téléphone</li>
                                        <li>Adresse email</li>
                                        <li>Type de prestation et d&apos;intervention souhaités</li>
                                        <li>Date et créneau souhaités</li>
                                        <li>Message décrivant votre besoin (optionnel)</li>
                                    </ul>
                                </div>

                                <div className="bg-bg-light rounded-xl p-4">
                                    <p className="font-medium text-navy text-sm mb-2">
                                        Formulaire de contact :
                                    </p>
                                    <ul className="list-disc list-inside text-text-muted text-sm space-y-1 ml-2">
                                        <li>Nom complet</li>
                                        <li>Adresse email</li>
                                        <li>Sujet du message</li>
                                        <li>Contenu du message</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="text-text-muted text-sm leading-relaxed mt-3">
                                Nous ne collectons aucune donnée sensible (origine ethnique,
                                opinions politiques, données de santé, etc.).
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        {/* 3. Base légale */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                3. Base légale du traitement
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Le traitement de vos données personnelles repose sur votre{" "}
                                <strong className="text-navy">consentement explicite</strong>{" "}
                                (article 6.1.a du RGPD), que vous donnez en cochant la case de
                                consentement présente sur chaque formulaire. Vous pouvez
                                retirer votre consentement à tout moment en nous contactant.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        {/* 4. Finalités */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                4. Finalités du traitement
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed mb-2">
                                Les données collectées sont utilisées exclusivement pour :
                            </p>
                            <ul className="list-disc list-inside text-text-muted text-sm space-y-1 ml-2">
                                <li>Traiter vos demandes de rendez-vous</li>
                                <li>Répondre à vos messages de contact</li>
                                <li>Vous recontacter dans le cadre de votre demande</li>
                                <li>Améliorer la qualité de nos services</li>
                            </ul>
                            <p className="text-text-muted text-sm leading-relaxed mt-3">
                                Vos données ne sont{" "}
                                <strong className="text-navy">
                                    jamais utilisées à des fins de prospection commerciale
                                </strong>{" "}
                                ni revendues à des tiers.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        {/* 5. Destinataires */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                5. Destinataires des données
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed mb-3">
                                Vos données personnelles sont accessibles uniquement :
                            </p>
                            <ul className="list-disc list-inside text-text-muted text-sm space-y-1 ml-2">
                                <li>
                                    Au personnel habilité de la SARL RAVOLET pour le traitement
                                    de vos demandes
                                </li>
                                <li>
                                    À nos sous-traitants techniques, dans le cadre strict de
                                    l&apos;hébergement et du stockage des données :
                                </li>
                            </ul>

                            <div className="mt-3 space-y-3">
                                <div className="bg-bg-light rounded-xl p-4">
                                    <p className="font-medium text-navy text-sm">
                                        Vercel Inc.{" "}
                                        <span className="font-normal text-text-muted">
                                            — Hébergement du site web
                                        </span>
                                    </p>
                                    <p className="text-text-muted text-xs mt-1">
                                        340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis —{" "}
                                        <a
                                            href="https://vercel.com/legal/dpa"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-light hover:underline"
                                        >
                                            DPA disponible
                                        </a>
                                    </p>
                                </div>
                                <div className="bg-bg-light rounded-xl p-4">
                                    <p className="font-medium text-navy text-sm">
                                        Supabase Inc.{" "}
                                        <span className="font-normal text-text-muted">
                                            — Base de données (hébergée en Union Européenne)
                                        </span>
                                    </p>
                                    <p className="text-text-muted text-xs mt-1">
                                        970 Toa Payoh North #07-04, Singapour —{" "}
                                        <a
                                            href="https://supabase.com/legal/dpa"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-light hover:underline"
                                        >
                                            DPA disponible
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* 6. Transferts hors UE */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                6. Transferts de données hors Union Européenne
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Certains de nos sous-traitants techniques (Vercel) sont situés
                                aux États-Unis. Ces transferts sont encadrés par des{" "}
                                <strong className="text-navy">
                                    Clauses Contractuelles Types (CCT)
                                </strong>{" "}
                                approuvées par la Commission européenne, conformément à
                                l&apos;article 46 du RGPD, garantissant un niveau de
                                protection adéquat de vos données. La base de données
                                (Supabase) est hébergée dans un data center situé en Union
                                Européenne (Francfort, Allemagne).
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        {/* 7. Durée de conservation */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                7. Durée de conservation
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Vos données personnelles sont conservées pendant une durée
                                maximale de{" "}
                                <strong className="text-navy">3 ans</strong> à compter de votre
                                dernière interaction avec notre société (demande de
                                rendez-vous, message de contact). Passé ce délai, elles sont
                                automatiquement supprimées de notre base de données.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        {/* 8. Vos droits */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                8. Vos droits
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed mb-3">
                                Conformément au RGPD et à la loi Informatique et Libertés,
                                vous disposez des droits suivants sur vos données
                                personnelles :
                            </p>
                            <ul className="text-text-muted text-sm space-y-2 ml-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-light font-bold mt-0.5">•</span>
                                    <span>
                                        <strong className="text-navy">Droit d&apos;accès</strong>{" "}
                                        — Obtenir la confirmation que vos données sont traitées
                                        et en recevoir une copie (art. 15 RGPD)
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-light font-bold mt-0.5">•</span>
                                    <span>
                                        <strong className="text-navy">
                                            Droit de rectification
                                        </strong>{" "}
                                        — Demander la correction de données inexactes ou
                                        incomplètes (art. 16 RGPD)
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-light font-bold mt-0.5">•</span>
                                    <span>
                                        <strong className="text-navy">
                                            Droit à l&apos;effacement
                                        </strong>{" "}
                                        — Demander la suppression de vos données personnelles
                                        (art. 17 RGPD)
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-light font-bold mt-0.5">•</span>
                                    <span>
                                        <strong className="text-navy">
                                            Droit à la limitation du traitement
                                        </strong>{" "}
                                        — Demander la suspension temporaire du traitement de vos
                                        données (art. 18 RGPD)
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-light font-bold mt-0.5">•</span>
                                    <span>
                                        <strong className="text-navy">
                                            Droit à la portabilité
                                        </strong>{" "}
                                        — Recevoir vos données dans un format structuré,
                                        couramment utilisé et lisible par machine (art. 20 RGPD)
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-light font-bold mt-0.5">•</span>
                                    <span>
                                        <strong className="text-navy">
                                            Droit d&apos;opposition
                                        </strong>{" "}
                                        — Vous opposer au traitement de vos données personnelles
                                        (art. 21 RGPD)
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-light font-bold mt-0.5">•</span>
                                    <span>
                                        <strong className="text-navy">
                                            Droit de retirer votre consentement
                                        </strong>{" "}
                                        — À tout moment, sans affecter la licéité du traitement
                                        effectué avant le retrait (art. 7.3 RGPD)
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <hr className="border-gray-100" />

                        {/* 9. Exercer vos droits */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                9. Comment exercer vos droits
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed mb-3">
                                Pour exercer l&apos;un de vos droits, vous pouvez nous
                                contacter par :
                            </p>
                            <div className="bg-bg-light rounded-xl p-4 space-y-1 text-sm text-text-muted">
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
                                    <strong className="text-navy">Courrier :</strong> SARL
                                    {/* TODO: Renseigner l'adresse du siège social */}
                                    Ravolet — À renseigner
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
                            </div>
                            <p className="text-text-muted text-sm leading-relaxed mt-3">
                                Nous nous engageons à répondre à votre demande dans un délai
                                de{" "}
                                <strong className="text-navy">30 jours</strong> suivant sa
                                réception. Un justificatif d&apos;identité pourra vous être
                                demandé.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        {/* 10. Réclamation CNIL */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                10. Réclamation auprès de la CNIL
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Si vous estimez que le traitement de vos données personnelles
                                constitue une violation du RGPD, vous avez le droit
                                d&apos;introduire une réclamation auprès de la Commission
                                Nationale de l&apos;Informatique et des Libertés (CNIL) :
                            </p>
                            <div className="mt-3 bg-bg-light rounded-xl p-4 space-y-1 text-sm text-text-muted">
                                <p>
                                    <strong className="text-navy">CNIL</strong> — Commission
                                    Nationale de l&apos;Informatique et des Libertés
                                </p>
                                <p>3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</p>
                                <p>
                                    Site web :{" "}
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

                        {/* 11. Cookies */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                11. Cookies
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed mb-3">
                                Ce site utilise uniquement des{" "}
                                <strong className="text-navy">
                                    cookies strictement nécessaires
                                </strong>{" "}
                                à son fonctionnement. Ces cookies techniques ne collectent
                                aucune donnée personnelle à des fins publicitaires ou de
                                suivi.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-text-muted border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-2 pr-4 font-semibold text-navy">
                                                Cookie
                                            </th>
                                            <th className="text-left py-2 pr-4 font-semibold text-navy">
                                                Finalité
                                            </th>
                                            <th className="text-left py-2 font-semibold text-navy">
                                                Durée
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-2 pr-4 font-mono text-xs">
                                                cookie_consent
                                            </td>
                                            <td className="py-2 pr-4">
                                                Mémoriser votre choix concernant les cookies
                                            </td>
                                            <td className="py-2">365 jours</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-text-muted text-sm leading-relaxed mt-3">
                                Nous n&apos;utilisons aucun cookie de tracking, d&apos;analyse
                                (type Google Analytics) ou publicitaire. Aucun cookie tiers
                                n&apos;est déposé sur votre navigateur.
                            </p>
                        </div>

                        <hr className="border-gray-100" />

                        {/* 12. Sécurité */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                12. Sécurité des données
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Nous mettons en œuvre les mesures techniques et
                                organisationnelles appropriées pour protéger vos données
                                personnelles, notamment :
                            </p>
                            <ul className="list-disc list-inside text-text-muted text-sm space-y-1 ml-2 mt-2">
                                <li>
                                    Chiffrement des données en transit (HTTPS/TLS)
                                </li>
                                <li>
                                    Hébergement sécurisé avec contrôle d&apos;accès
                                </li>
                                <li>
                                    Base de données protégée par des politiques de sécurité
                                    (Row Level Security)
                                </li>
                                <li>
                                    Accès restreint aux seules personnes habilitées
                                </li>
                            </ul>
                        </div>

                        <hr className="border-gray-100" />

                        {/* 13. Modifications */}
                        <div>
                            <h2 className="text-xl font-semibold text-navy mb-3">
                                13. Modifications de cette politique
                            </h2>
                            <p className="text-text-muted text-sm leading-relaxed">
                                Nous nous réservons le droit de modifier cette politique de
                                confidentialité à tout moment. Toute modification sera publiée
                                sur cette page avec une mise à jour de la date ci-dessous.
                                Nous vous encourageons à consulter régulièrement cette page.
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
