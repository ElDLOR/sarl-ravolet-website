import type { Metadata } from "next";
import { Snowflake, Droplets, Zap, Camera } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
    title: "Nos réalisations",
    description:
        "Découvrez nos réalisations en climatisation, plomberie et électricité. SARL RAVOLET, votre spécialiste à Moulins et alentours.",
};

const categories = [
    {
        id: "climatisation",
        title: "Climatisation",
        description:
            "Installation de systèmes mono-split et multi-split, mise en service, entretien et dépannage pour particuliers et professionnels.",
        icon: Snowflake,
        color: "from-blue-500 to-cyan-400",
        bgLight: "bg-blue-50",
        iconColor: "text-blue-500",
        images: [
            "/realisations/Photo1_Clim.jpeg",
            "/realisations/Photo3_Clim.jpeg",
            "/realisations/Photo4_Clim.jpeg",
            "/realisations/Photo5_Clim.jpeg",
            "/realisations/Photo12_Clim.jpeg",
            "/realisations/Photo13_Clim.jpeg",
            "/realisations/Photo17_Clim.jpeg",
            "/realisations/Photo18_Clim.jpeg",
            "/realisations/Photo19_Clim.jpeg",
            "/realisations/Photo20_Clim.jpeg",
        ],
    },
    {
        id: "plomberie",
        title: "Plomberie",
        description:
            "Installation et rénovation de réseaux de plomberie, sanitaires, création et rénovation de salles de bain complètes, dépannage.",
        icon: Droplets,
        color: "from-sky-500 to-blue-400",
        bgLight: "bg-sky-50",
        iconColor: "text-sky-500",
        images: [
            "/realisations/Photo2_Plomberie.jpeg",
            "/realisations/Photo8_Plomberie.jpeg",
            "/realisations/Photo14_Plomberie.jpeg",
            "/realisations/Photo16_Plomberie.jpeg",
            "/realisations/Photo21_Plomberie.jpeg",
            "/realisations/Photo22_Plomberie.jpeg",
            "/realisations/Photo23_plomberie.jpeg",
        ],
    },
    {
        id: "electricite",
        title: "Électricité",
        description:
            "Installation VMC, entretien et rénovation de circuits électriques pour un habitat sûr et aux normes.",
        icon: Zap,
        color: "from-amber-500 to-orange-400",
        bgLight: "bg-amber-50",
        iconColor: "text-amber-500",
        images: [
            "/realisations/Photo6_Élec.jpeg",
            "/realisations/Photo7_Élec.jpeg",
            "/realisations/Photo9_Elec.jpeg",
            "/realisations/Photo10-Elec.jpeg",
            "/realisations/Photo11-Elec.jpeg",
            "/realisations/Photo15_Elec.jpeg",
        ],
    },
];

export default function RealisationsPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-navy via-navy-light to-blue-light pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-lighter text-sm font-medium px-4 py-2 rounded-full mb-6">
                        <Camera className="w-4 h-4" />
                        Galerie photos
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Nos réalisations
                    </h1>
                    <p className="text-blue-lighter text-lg max-w-2xl mx-auto">
                        Découvrez nos interventions en climatisation, plomberie et
                        électricité réalisées à Moulins et ses alentours.
                    </p>
                </div>
            </section>

            {/* Galleries */}
            <section className="py-16 md:py-24 bg-bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {categories.map((category, catIndex) => {
                            const Icon = category.icon;
                            return (
                                <div key={category.id} id={category.id}>
                                    {/* Category header */}
                                    <div
                                        className={`flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 ${
                                            catIndex % 2 !== 0 ? "md:flex-row-reverse md:text-right" : ""
                                        }`}
                                    >
                                        <div
                                            className={`w-14 h-14 ${category.bgLight} rounded-2xl flex items-center justify-center shrink-0`}
                                        >
                                            <Icon
                                                className={`w-7 h-7 ${category.iconColor}`}
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-navy">
                                                {category.title}
                                            </h2>
                                            <p className="text-text-muted mt-1 max-w-xl text-sm">
                                                {category.description}
                                            </p>
                                        </div>
                                        <div className="hidden md:block flex-1" />
                                        <span
                                            className={`text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                                        >
                                            {category.images.length} photos
                                        </span>
                                    </div>

                                    {/* Carousel */}
                                    <ImageCarousel
                                        images={category.images}
                                        title={category.title}
                                        autoPlayInterval={4000 + catIndex * 500}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                        Un projet similaire ?
                    </h2>
                    <p className="text-text-muted mb-8 max-w-xl mx-auto">
                        Contactez-nous pour un devis gratuit. Nous intervenons dans un
                        rayon de 50 km autour de Moulins.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/rendez-vous"
                            className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-xl btn-transition shadow-sm hover:shadow-md"
                        >
                            Prendre rendez-vous
                        </a>
                        <a
                            href="tel:0470437780"
                            className="bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-xl btn-transition shadow-sm hover:shadow-md"
                        >
                            📞 04 70 43 77 80
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
