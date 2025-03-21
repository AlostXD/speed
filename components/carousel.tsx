"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
    const images = ["/bg-speed-1.png", "/bg-speed-2.png", "/bg-speed-3.png"]; // Use paths relativos para imagens
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Troca de imagem a cada 5 segundos
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full"> {/* Define a fixed height */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`inset-0 transition-opacity duration-1000 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        width={1000}
                        height={500}
                        priority={index === currentIndex} // Prioriza a imagem atual
                    />
                </div>
            ))}
        </div>
    );
};

export default Carousel;