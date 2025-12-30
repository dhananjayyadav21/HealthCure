import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ src, alt, className, style, imageStyle, objectFit = 'cover', aspectRatio }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
        img.onerror = () => setError(true);
    }, [src]);

    return (
        <div
            className={`optimized-image-container ${className || ''}`}
            style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'transparent', // Transparent background
                aspectRatio: aspectRatio,
                ...style
            }}
        >
            {!isLoaded && !error && (
                <div
                    className="skeleton-loader"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)',
                        backgroundSize: '200% 100%',
                        animation: 'skeleton-loading 1.5s infinite linear'
                    }}
                />
            )}
            <img
                src={src}
                alt={alt}
                className={`${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: objectFit,
                    transition: 'opacity 0.3s ease-in-out',
                    display: 'block',
                    ...imageStyle
                }}
                onLoad={() => setIsLoaded(true)}
            />
            {error && (
                <div className="error-placeholder d-flex align-items-center justify-content-center" style={{ height: '100%', width: '100%', color: '#9ca3af' }}>
                    <i className="fa-solid fa-image-slash fa-2x"></i>
                </div>
            )}
            <style>{`
        @keyframes skeleton-loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .opacity-0 { opacity: 0; }
        .opacity-100 { opacity: 1; }
      `}</style>
        </div>
    );
};

export default OptimizedImage;
