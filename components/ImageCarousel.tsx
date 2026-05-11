"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
    images: string[];
    title: string;
    autoPlayInterval?: number;
}

export default function ImageCarousel({
    images,
    title,
    autoPlayInterval = 4000,
}: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Auto-play
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(goToNext, autoPlayInterval);
        return () => clearInterval(interval);
    }, [goToNext, autoPlayInterval, isHovered]);

    return (
        <div
            className="relative group overflow-hidden rounded-2xl bg-navy/5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image container */}
            <div className="relative aspect-[16/10] overflow-hidden">
                {images.map((src, index) => (
                    <div
                        key={src}
                        className="absolute inset-0 transition-all duration-700 ease-in-out"
                        style={{
                            opacity: index === currentIndex ? 1 : 0,
                            transform: `scale(${index === currentIndex ? 1 : 1.05})`,
                        }}
                    >
                        <Image
                            src={src}
                            alt={`${title} - Réalisation ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index === 0}
                        />
                    </div>
                ))}

                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Counter */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Arrow buttons */}
            <button
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Photo précédente"
            >
                <ChevronLeft className="w-5 h-5 text-navy" />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Photo suivante"
            >
                <ChevronRight className="w-5 h-5 text-navy" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 right-4 flex gap-1.5">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? "bg-white w-5"
                                : "bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Aller à la photo ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
