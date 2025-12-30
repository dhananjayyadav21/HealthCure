import React from 'react';

const Loader = ({ message = "Loading content..." }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '60vh', width: '100%' }}>
            <div className="loader-container glass-effect p-5 rounded-5 shadow-sm text-center" style={{ background: 'rgba(255,255,255,0.8)' }}>
                <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h5 className="fw-bold mb-0 text-secondary">{message}</h5>
                <p className="small text-muted mt-2">Connecting to HealthCure servers...</p>
            </div>
            <style>{`
                @keyframes pulse-soft {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.02); opacity: 0.8; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .loader-container {
                    animation: pulse-soft 2s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Loader;
