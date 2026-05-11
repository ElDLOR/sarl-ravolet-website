import type { Metadata } from "next";
import { Heart, MapPin, Clock, Award, Users, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import MapWrapper from "@/components/MapWrapper";

export const metadata: Metadata = {
    title: "À propos",
    description:
        "Découvrez SARL RAVOLET, votre partenaire de confiance en climatisation, plomberie et électricité. Nos valeurs, notre équipe et notre zone d'intervention.",
};

const values = [
    {
        icon: Award,
        title: "Qualité",
        description:
            "Nous sélectionnons les meilleurs matériaux et équipements pour garantir des installations durables et performantes. Chaque intervention est réalisée dans les règles de l'art.",
    },
    {
        icon: MapPin,
        title: "Proximité",
        description:
            "Entreprise locale, nous connaissons parfaitement notre territoire et ses spécificités. Nous sommes toujours proches de nos clients pour une intervention rapide.",
    },
    {
        icon: Clock,
        title: "Réactivité",
        description:
            "Urgence ou rendez-vous planifié, nous nous engageons à intervenir dans les meilleurs délais. Votre confort n'attend pas.",
    },
];

export default function AProposPage() {
    return (
        <>
            {/* Header */}
            <section className="bg-gradient-to-br from-navy via-navy-light to-blue-light pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        À propos
                    </h1>
                    <p className="text-blue-lighter text-lg max-w-2xl mx-auto">
                        Une entreprise de confiance, au service de votre confort depuis des
                        années.
                    </p>
                </div>
            </section>

            {/* Presentation */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Heart className="w-5 h-5 text-accent" />
                                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                                        Notre histoire
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                                    SARL RAVOLET, votre partenaire confort
                                </h2>
                                <div className="space-y-4 text-text-muted leading-relaxed text-left sm:text-center">
                                    <p>
                                        La SARL RAVOLET est une entreprise spécialisée dans la
                                        climatisation, la plomberie et l&apos;électricité.
                                        Forte d&apos;une expérience solide dans ces domaines, notre
                                        équipe de techniciens qualifiés intervient auprès des
                                        particuliers et des professionnels.
                                    </p>
                                    <p>
                                        Notre mission est simple : assurer votre confort au
                                        quotidien. Que ce soit pour une installation neuve, un
                                        entretien régulier ou un dépannage en urgence, nous mettons
                                        notre savoir-faire à votre service avec rigueur et
                                        professionnalisme.
                                    </p>
                                    <p>
                                        Nous travaillons avec les meilleures marques du marché et
                                        restons constamment formés aux nouvelles technologies pour
                                        vous offrir des solutions innovantes et économiques.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-14">
                            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                                Nos Valeurs
                            </h2>
                            <p className="text-text-muted max-w-xl mx-auto">
                                Les principes qui guident chacune de nos interventions.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {values.map((value, index) => (
                            <ScrollReveal key={value.title} delay={index * 100}>
                                <div className="bg-white rounded-2xl p-8 border border-gray-100 card-hover h-full text-center">
                                    <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mx-auto mb-5">
                                        <value.icon className="w-7 h-7 text-blue-light" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-navy mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zone d'intervention */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="w-14 h-14 bg-blue-light/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                                <MapPin className="w-7 h-7 text-blue-light" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                                Zone d&apos;intervention
                            </h2>
                            <p className="text-text-muted leading-relaxed mb-6">
                                La SARL RAVOLET intervient dans un rayon de 50 km autour de son
                                siège. Nous couvrons les communes environnantes et nous déplaçons
                                chez vous rapidement, que ce soit pour un rendez-vous planifié ou
                                une urgence.
                            </p>
                            <p className="text-sm text-text-muted italic mb-10">
                                Zone exacte à préciser — Contactez-nous pour vérifier si nous
                                intervenons dans votre secteur.
                            </p>
                            <MapWrapper />
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
