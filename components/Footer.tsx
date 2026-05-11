import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {/* Column 1: Logo + Contact */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/logo.png"
                                alt="SARL RAVOLET"
                                width={44}
                                height={44}
                                className="h-14 w-14 object-contain"
                            />
                            <div>
                                <span className="text-lg font-bold block">SARL RAVOLET</span>
                                <span className="text-sm text-blue-lighter opacity-80 block">
                                    Votre confort, Notre mission
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                            Spécialiste en climatisation, plomberie et électricité.
                            Nous intervenons rapidement pour tous vos besoins de confort.
                        </p>
                        <div className="space-y-3">
                            <a
                                href="tel:0470437780"
                                className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent btn-transition"
                            >
                                <Phone className="w-4 h-4 text-blue-light shrink-0" />
                                04 70 43 77 80
                            </a>
                            <a
                                href="mailto:sarl.ravolet@gmail.com"
                                className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent btn-transition"
                            >
                                <Mail className="w-4 h-4 text-blue-light shrink-0" />
                                sarl.ravolet@gmail.com
                            </a>
                            <div className="flex items-start gap-3 text-sm text-gray-300">
                                <MapPin className="w-4 h-4 text-blue-light shrink-0 mt-0.5" />
                                <span>Zone d&apos;intervention : Moulins et alentours (50 km)</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-base font-semibold mb-5">Liens rapides</h3>
                        <nav className="space-y-3">
                            {[
                                { href: "/", label: "Accueil" },
                                { href: "/services", label: "Nos services" },
                                { href: "/realisations", label: "Nos réalisations" },
                                { href: "/a-propos", label: "À propos" },
                                { href: "/contact", label: "Contact" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-sm text-gray-300 hover:text-accent btn-transition"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Hours + Social */}
                    <div>
                        <h3 className="text-base font-semibold mb-5">Horaires</h3>
                        <div className="space-y-3 text-sm text-gray-300 mb-6">
                            <div className="flex items-start gap-3">
                                <Clock className="w-4 h-4 text-blue-light shrink-0 mt-0.5" />
                                <div>
                                    <p>Lundi – Vendredi : 8h00 – 18h00</p>
                                    <p>Samedi : 8h00 – 12h00</p>
                                    <p>Dimanche : Fermé</p>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-base font-semibold mb-3">Urgences</h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Dépannage en urgence ? Appelez-nous directement.
                        </p>
                        <a
                            href="tel:0470437780"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-4 py-2 rounded-lg text-sm btn-transition"
                        >
                            <Phone className="w-4 h-4" />
                            04 70 43 77 80
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
                    <p>© 2026 SARL RAVOLET — Tous droits réservés</p>
                    <div className="flex gap-4">
                        <Link
                            href="/mentions-legales"
                            className="hover:text-accent btn-transition"
                        >
                            Mentions légales
                        </Link>
                        <Link
                            href="/politique-de-confidentialite"
                            className="hover:text-accent btn-transition"
                        >
                            Politique de confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
