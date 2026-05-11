"use client";

import dynamic from "next/dynamic";

// L'import dynamique avec ssr: false doit se faire dans un composant client
const MapZone = dynamic(() => import("./MapZone"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[400px] rounded-2xl bg-gray-100 animate-pulse flex items-center justify-center border border-gray-200">
            <p className="text-gray-400 font-medium">Chargement de la carte...</p>
        </div>
    ),
});

export default function MapWrapper() {
    return <MapZone />;
}
