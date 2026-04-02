import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.warn(
        "⚠️  Variables Supabase manquantes. Ajoutez NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY dans .env.local"
    );
}

export const supabase = createClient(
    supabaseUrl || "https://placeholder.supabase.co",
    supabaseServiceKey || "placeholder-key"
);
