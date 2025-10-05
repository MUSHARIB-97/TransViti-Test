import React, { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: string | number;
    height?: string | number;
    loading?: "lazy" | "eager";
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className = "",
    width,
    height,
    loading = "lazy",
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!imgRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "50px",
            }
        );

        observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative inline-block" style={{ width, height }}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
            )}
            <img
                ref={imgRef}
                src={isInView || loading === "eager" ? src : undefined}
                alt={alt}
                className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                width={width}
                height={height}
                loading={loading}
                onLoad={() => setIsLoaded(true)}
                decoding="async"
            />
        </div>
    );
};

export default OptimizedImage;