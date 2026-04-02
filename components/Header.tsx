"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-md"
                    : "bg-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 shrink-0">
                        <Image
                            src="/logo.png"
                            alt="SARL Ravolet"
                            width={48}
                            height={48}
                            className="h-10 w-10 md:h-12 md:w-12 object-contain"
                            priority
                        />
                        <div className="hidden sm:block">
                            <span className="text-lg font-bold text-navy leading-tight block">
                                SARL Ravolet
                            </span>
                            <span className="text-xs text-text-muted leading-tight block">
                                Votre confort, Notre mission
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-navy hover:text-blue-light btn-transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="tel:0470437780"
                            className="flex items-center gap-2 text-sm font-medium text-navy hover:text-blue-light btn-transition"
                        >
                            <Phone className="w-4 h-4" />
                            04 70 43 77 80
                        </a>
                        <Link
                            href="/rendez-vous"
                            className="bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-2.5 rounded-lg btn-transition shadow-sm hover:shadow-md"
                        >
                            Prendre RDV
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-navy hover:text-blue-light btn-transition"
                        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-navy/20 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <nav className="flex flex-col p-6 gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-navy font-medium py-3 px-4 rounded-lg hover:bg-bg-light btn-transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <hr className="my-3 border-bg-light" />
                        <a
                            href="tel:0470437780"
                            className="flex items-center gap-3 text-navy font-medium py-3 px-4 rounded-lg hover:bg-bg-light btn-transition"
                        >
                            <Phone className="w-5 h-5 text-blue-light" />
                            04 70 43 77 80
                        </a>
                        <Link
                            href="/rendez-vous"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-3 rounded-lg text-center btn-transition shadow-sm"
                        >
                            Prendre RDV
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
