import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { nom, email, sujet, message } = body;

        // Validation
        if (!nom || !email || !sujet || !message) {
            return NextResponse.json(
                { error: "Veuillez remplir tous les champs obligatoires." },
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

        // TODO: Envoyer un email à sarl.ravolet@gmail.com
        // Configurer Resend (RESEND_API_KEY) ou un autre service d'email
        // Exemple :
        // await resend.emails.send({
        //   from: 'noreply@votre-domaine.fr',
        //   to: 'sarl.ravolet@gmail.com',
        //   subject: `Contact - ${sujet}`,
        //   html: `<p>De: ${nom} (${email})</p><p>${message}</p>`,
        // });

        console.log("Nouveau message de contact:", { nom, email, sujet, message });

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
