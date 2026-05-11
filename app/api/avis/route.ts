import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
    try {
        // Ne récupérer que les avis validés et les trier par date décroissante
        const { data, error } = await supabase
            .from("avis_clients")
            .select("id, nom, note, commentaire, created_at")
            .eq("publie", true)
            .order("created_at", { ascending: false });

        if (error) throw error;

        return NextResponse.json({ success: true, avis: data });
    } catch (error: any) {
        console.error("Erreur GET /api/avis:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nom, note, commentaire } = body;

        // Validation
        if (!nom || !note || !commentaire) {
            return NextResponse.json(
                { success: false, error: "Tous les champs sont requis." },
                { status: 400 }
            );
        }

        if (note < 1 || note > 5) {
            return NextResponse.json(
                { success: false, error: "La note doit être comprise entre 1 et 5." },
                { status: 400 }
            );
        }

        // Insertion dans Supabase (publie est false par défaut)
        const { error } = await supabase.from("avis_clients").insert([
            {
                nom,
                note,
                commentaire,
                publie: false, // Doit être validé manuellement par l'admin
            },
        ]);

        if (error) throw error;

        return NextResponse.json({ success: true, message: "Avis enregistré avec succès." });
    } catch (error: any) {
        console.error("Erreur POST /api/avis:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
