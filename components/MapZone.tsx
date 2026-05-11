"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix pour les icônes Leaflet dans Next.js
const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

export default function MapZone() {
    // Coordonnées de Moulins (03)
    const position: [number, number] = [46.5653, 3.3326];
    const radius = 50000; // 50 km en mètres

    // Éviter les erreurs de rendu côté serveur
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="w-full h-[400px] rounded-2xl bg-gray-100 animate-pulse flex items-center justify-center border border-gray-200">
                <p className="text-gray-400 font-medium">Chargement de la carte...</p>
            </div>
        );
    }

    return (
        <div className="w-full h-[400px] rounded-2xl overflow-hidden border-4 border-white shadow-lg relative z-0">
            <MapContainer
                center={position}
                zoom={9}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%", zIndex: 0 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        <strong>SARL RAVOLET</strong><br />
                        Moulins (03)
                    </Popup>
                </Marker>

                <Circle
                    center={position}
                    pathOptions={{ color: "#F97316", fillColor: "#3B82F6", fillOpacity: 0.15 }}
                    radius={radius}
                />
            </MapContainer>
        </div>
    );
}
