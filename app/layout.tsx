import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SARL Ravolet — Climatisation, Plomberie & Électricité",
    template: "%s | SARL Ravolet",
  },
  description:
    "SARL Ravolet, votre spécialiste en climatisation, plomberie et électricité. Installation, entretien et dépannage. Appelez-nous au 04 70 43 77 80.",
  keywords: [
    "climatisation",
    "plomberie",
    "électricité",
    "dépannage",
    "installation",
    "entretien",
    "SARL Ravolet",
  ],
  openGraph: {
    title: "SARL Ravolet — Climatisation, Plomberie & Électricité",
    description:
      "Votre confort, Notre mission. Spécialiste en climatisation, plomberie et électricité.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
