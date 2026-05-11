import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

        // Envoyer un email de notification au patron
        if (resend) {
            try {
            await resend.emails.send({
                from: "SARL RAVOLET <onboarding@resend.dev>",
                to: "damien.lorigeon@gmail.com",
                subject: `📩 Nouveau message - ${sujet}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <div style="background: #1a2744; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Nouveau message reçu</h1>
                        </div>
                        <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 100px;"><strong>Nom :</strong></td>
                                    <td style="padding: 8px 0; color: #1a2744; font-size: 14px;">${nom}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"><strong>Email :</strong></td>
                                    <td style="padding: 8px 0; color: #1a2744; font-size: 14px;">
                                        <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"><strong>Sujet :</strong></td>
                                    <td style="padding: 8px 0; color: #1a2744; font-size: 14px;">${sujet}</td>
                                </tr>
                            </table>
                            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
                            <p style="color: #6b7280; font-size: 13px; margin-bottom: 4px;"><strong>Message :</strong></p>
                            <p style="color: #1a2744; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
                            <p style="color: #9ca3af; font-size: 12px; text-align: center;">
                                Ce message a été envoyé depuis le formulaire de contact de votre site web.
                            </p>
                        </div>
                    </div>
                `,
            });
            } catch (emailError) {
                // On log l'erreur email mais on ne bloque pas la réponse
                // car le message a bien été enregistré en base
                console.error("Erreur envoi email:", emailError);
            }
        }

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

