import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { nom, telephone, email, type_prestation, type_intervention, date_souhaitee, creneau, message, rgpd_consent } = body;

        // Validation
        if (!nom || !telephone || !email || !type_prestation || !type_intervention) {
            return NextResponse.json(
                { error: "Veuillez remplir tous les champs obligatoires." },
                { status: 400 }
            );
        }

        if (!rgpd_consent) {
            return NextResponse.json(
                { error: "Vous devez accepter la politique de confidentialité." },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Adresse email invalide." },
                { status: 400 }
            );
        }

        // Insert into Supabase
        const { error: dbError } = await supabase.from("rendez_vous").insert({
            nom,
            telephone,
            email,
            type_prestation,
            type_intervention,
            date_souhaitee: date_souhaitee || null,
            creneau: creneau || null,
            message: message || null,
            rgpd_consent,
        });

        if (dbError) {
            console.error("Erreur Supabase:", dbError);
            return NextResponse.json(
                { error: "Erreur lors de l'enregistrement. Veuillez réessayer." },
                { status: 500 }
            );
        }

        // TODO: Envoyer un email de notification à sarl.ravolet@gmail.com
        // Configurer Resend (RESEND_API_KEY) ou un autre service d'email
        // Exemple avec Resend :
        // import { Resend } from 'resend';
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'noreply@votre-domaine.fr',
        //   to: 'sarl.ravolet@gmail.com',
        //   subject: `Nouveau RDV - ${type_prestation} - ${nom}`,
        //   html: `<p>Nouvelle demande de rendez-vous...</p>`,
        // });

        return NextResponse.json(
            { message: "Demande de rendez-vous envoyée avec succès !" },
            { status: 200 }
        );
    } catch {
        console.error("Erreur serveur:");
        return NextResponse.json(
            { error: "Erreur interne du serveur. Veuillez réessayer." },
            { status: 500 }
        );
    }
}
