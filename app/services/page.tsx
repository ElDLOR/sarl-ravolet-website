import type { Metadata } from "next";
import {
    Snowflake,
    Droplets,
    Zap,
    Settings,
    Play,
    Wrench,
    AlertTriangle,
    ShowerHead,
    Droplet,
    Flame,
    CircleDot,
    Cable,
    ShieldCheck,
    Lightbulb,
    LayoutGrid,
    ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Nos Services",
    description:
        "Découvrez nos services en climatisation, plomberie et électricité. Installation, entretien et dépannage par des professionnels qualifiés.",
};

const sections = [
    {
        id: "climatisation",
        icon: Snowflake,
        title: "Climatisation",
        description:
            "Profitez d'un confort thermique optimal toute l'année grâce à nos solutions de climatisation adaptées à vos besoins. Nous installons, entretenons et réparons tous types de systèmes : split, multi-split, gainable et réversible.",
        color: "text-blue-light",
        bgColor: "bg-blue-light/10",
        borderColor: "border-blue-light/20",
        subServices: [
            {
                icon: Settings,
                title: "Installation",
                description:
                    "Étude personnalisée, choix de l'équipement adapté et installation professionnelle de votre système de climatisation.",
            },
            {
                icon: Play,
                title: "Mise en service",
                description:
                    "Mise en route, réglages et paramétrage de votre climatisation pour un fonctionnement optimal dès le premier jour.",
            },
            {
                icon: Wrench,
                title: "Entretien",
                description:
                    "Maintenance préventive régulière pour garantir la performance, la longévité et la qualité de l'air de votre installation.",
            },
            {
                icon: AlertTriangle,
                title: "Dépannage",
                description:
                    "Intervention rapide en cas de panne. Diagnostic précis et réparation efficace de votre système de climatisation.",
            },
        ],
    },
    {
        id: "plomberie",
        icon: Droplets,
        title: "Plomberie",
        description:
            "Notre équipe de plombiers qualifiés intervient pour tous vos projets et urgences en plomberie. Du simple dépannage à l'installation complète, nous garantissons un travail soigné et durable.",
        color: "text-blue-light",
        bgColor: "bg-blue-light/10",
        borderColor: "border-blue-light/20",
        subServices: [
            {
                icon: ShowerHead,
                title: "Installation sanitaire",
                description:
                    "Pose de lavabos, douches, baignoires, WC et robinetterie. Création et rénovation de salles de bain complètes.",
            },
            {
                icon: Droplet,
                title: "Réparation de fuites",
                description:
                    "Détection et réparation rapide de fuites d'eau pour éviter les dégâts et le gaspillage.",
            },
            {
                icon: Flame,
                title: "Chauffe-eau",
                description:
                    "Installation, remplacement et entretien de chauffe-eau électriques et thermodynamiques.",
            },
            {
                icon: CircleDot,
                title: "Débouchage",
                description:
                    "Débouchage professionnel de canalisations, éviers, toilettes et colonnes d'évacuation.",
            },
        ],
    },
    {
        id: "electricite",
        icon: Zap,
        title: "Électricité",
        description:
            "Nos électriciens certifiés assurent la sécurité et la conformité de vos installations électriques. Que ce soit pour du neuf, de la rénovation ou du dépannage, nous intervenons avec rigueur et professionnalisme.",
        color: "text-accent",
        bgColor: "bg-accent/10",
        borderColor: "border-accent/20",
        subServices: [
            {
                icon: Cable,
                title: "Installation électrique",
                description:
                    "Câblage, prises, interrupteurs, éclairage. Installation complète pour constructions neuves et rénovations.",
            },
            {
                icon: ShieldCheck,
                title: "Mise aux normes",
                description:
                    "Diagnostic et mise en conformité de votre installation électrique selon les normes NF C 15-100 en vigueur.",
            },
            {
                icon: Lightbulb,
                title: "Dépannage",
                description:
                    "Intervention rapide pour coupures de courant, courts-circuits, prises défaillantes et tout problème électrique.",
            },
            {
                icon: LayoutGrid,
                title: "Tableau électrique",
                description:
                    "Installation, remplacement et mise aux normes de tableaux électriques. Protection optimale de votre logement.",
            },
        ],
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Header */}
            <section className="bg-gradient-to-br from-navy via-navy-light to-blue-light pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Nos Services
                    </h1>
                    <p className="text-blue-lighter text-lg max-w-2xl mx-auto">
                        Des solutions complètes pour votre habitat, réalisées par des
                        professionnels qualifiés et expérimentés.
                    </p>
                </div>
            </section>

            {/* Service Sections */}
            {sections.map((section, sectionIndex) => (
                <section
                    key={section.id}
                    id={section.id}
                    className={`py-16 md:py-24 ${sectionIndex % 2 === 0 ? "bg-white" : "bg-bg-light"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className={`w-14 h-14 ${section.bgColor} rounded-xl flex items-center justify-center`}
                                >
                                    <section.icon className={`w-7 h-7 ${section.color}`} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-navy">
                                    {section.title}
                                </h2>
                            </div>
                            <p className="text-text-muted max-w-3xl leading-relaxed mb-10">
                                {section.description}
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {section.subServices.map((sub, index) => (
                                <ScrollReveal key={sub.title} delay={index * 100}>
                                    <div
                                        className={`bg-white border ${section.borderColor} rounded-2xl p-6 card-hover h-full`}
                                    >
                                        <div
                                            className={`w-12 h-12 ${section.bgColor} rounded-lg flex items-center justify-center mb-4`}
                                        >
                                            <sub.icon className={`w-6 h-6 ${section.color}`} />
                                        </div>
                                        <h3 className="text-lg font-semibold text-navy mb-2">
                                            {sub.title}
                                        </h3>
                                        <p className="text-text-muted text-sm leading-relaxed">
                                            {sub.description}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="bg-navy py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Un projet ? Demandez un rendez-vous gratuit
                        </h2>
                        <p className="text-blue-lighter text-lg mb-6 max-w-2xl mx-auto">
                            Nos techniciens se déplacent chez vous pour évaluer vos besoins et
                            vous proposer une solution adaptée.
                        </p>
                        <Link
                            href="/rendez-vous"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl text-lg btn-transition shadow-lg"
                        >
                            Prendre rendez-vous
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
