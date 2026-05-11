import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { nom, email, sujet, message, rgpd_consent } = body;

        // Validation
        if (!nom || !email || !sujet || !message) {
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
        // Table SQL à créer dans Supabase :
        // CREATE TABLE messages_contact (
        //   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        //   nom TEXT NOT NULL,
        //   email TEXT NOT NULL,
        //   sujet TEXT NOT NULL,
        //   message TEXT NOT NULL,
        //   rgpd_consent BOOLEAN NOT NULL DEFAULT false,
        //   consent_date TIMESTAMPTZ NOT NULL DEFAULT now(),
        //   created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        // );
        const { error: dbError } = await supabase.from("messages_contact").insert({
            nom,
            email,
            sujet,
            message,
            rgpd_consent,
            consent_date: new Date().toISOString(),
        });

        if (dbError) {
            console.error("Erreur Supabase:", dbError);
            return NextResponse.json(
                { error: "Erreur lors de l'enregistrement. Veuillez réessayer." },
                { status: 500 }
            );
        }

        // TODO: Envoyer un email à sarl.ravolet@gmail.com
        // Configurer Resend (RESEND_API_KEY) ou un autre service d'email
        // Exemple :
        // import { Resend } from 'resend';
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'noreply@sarl-ravolet.fr',
        //   to: 'sarl.ravolet@gmail.com',
        //   subject: `Contact - ${sujet}`,
        //   html: `<p>De: ${nom} (${email})</p><p>${message}</p>`,
        // });

        return NextResponse.json(
            { message: "Message envoyé avec succès !" },
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
