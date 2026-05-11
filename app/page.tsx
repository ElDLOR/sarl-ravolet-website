import Link from "next/link";
import {
  Snowflake,
  Droplets,
  Zap,
  Clock,
  Award,
  MapPin,
  Shield,
  Phone,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AvisClients from "@/components/AvisClients";

const services = [
  {
    icon: Snowflake,
    title: "Climatisation",
    description:
      "Installation, mise en service, entretien et dépannage de systèmes de climatisation pour votre confort toute l'année.",
    color: "text-blue-light",
    bgColor: "bg-blue-light/10",
  },
  {
    icon: Droplets,
    title: "Plomberie",
    description:
      "Installation sanitaire, réparation de fuites, chauffe-eau et débouchage. Interventions rapides et soignées.",
    color: "text-blue-light",
    bgColor: "bg-blue-light/10",
  },
  {
    icon: Zap,
    title: "Électricité",
    description:
      "Installation électrique, mise aux normes, dépannage et tableau électrique. Sécurité et fiabilité garanties.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const strengths = [
  {
    icon: Clock,
    title: "Réactivité",
    description:
      "Intervention rapide, souvent dans la journée, pour répondre à vos urgences.",
  },
  {
    icon: Award,
    title: "Expertise",
    description:
      "Techniciens qualifiés et formés aux dernières technologies du marché.",
  },
  {
    icon: MapPin,
    title: "Proximité",
    description:
      "Une entreprise locale à votre écoute, ancrée dans votre région.",
  },
  {
    icon: Shield,
    title: "Garantie",
    description:
      "Travail soigné et garanti. Votre satisfaction est notre priorité.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-navy via-navy-light to-blue-light overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-light/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-light/5 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 leading-tight">
            SARL RAVOLET
          </h1>
          <Image
            src="/logo.png"
            alt="SARL RAVOLET"
            width={300}
            height={300}
            className="mx-auto mb-2 h-52 w-52 md:h-[300px] md:w-[300px] object-contain"
            priority
          />
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-lighter font-light mb-6">
            Votre confort, Notre mission
          </p>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 mb-10 leading-relaxed">
            Spécialiste en <strong className="text-white">climatisation</strong>,{" "}
            <strong className="text-white">plomberie</strong> et{" "}
            <strong className="text-white">électricité</strong>. Nous
            intervenons pour l&apos;installation, l&apos;entretien et le
            dépannage de tous vos équipements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl text-lg btn-transition shadow-lg hover:shadow-xl"
            >
              Nous contacter
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg btn-transition backdrop-blur-sm border border-white/20"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Nos Services
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                Des solutions complètes pour votre habitat, réalisées par des
                professionnels qualifiés.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <Link
                  href="/services"
                  className="block bg-white rounded-2xl p-8 card-hover h-full border border-gray-100"
                >
                  <div
                    className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-5`}
                  >
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-blue-light font-medium text-sm">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Pourquoi nous choisir ?
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                Une équipe de confiance, à votre service depuis des années.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {strengths.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="text-center p-6 rounded-2xl hover:bg-bg-light btn-transition">
                  <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-blue-light" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Besoin d&apos;un dépannage ?
            </h2>
            <p className="text-blue-lighter text-lg mb-6">
              Appelez-nous au{" "}
              <a
                href="tel:0470437780"
                className="text-accent font-semibold hover:underline"
              >
                04 70 43 77 80
              </a>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl text-lg btn-transition shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Nous contacter
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <AvisClients />
    </>
  );
}
