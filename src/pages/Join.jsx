import React from 'react';
import Navbar from '../components/Navbar';

export default function Join() {
    return (
        <div className="min-h-screen bg-nature-dark text-nature-light flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-nature-light mb-6">
                    Join the Movement
                </h1>
                <p className="text-xl md:text-2xl font-light text-nature-moss mb-12 max-w-2xl">
                    We are currently building something straightforward and professional.
                    <br />
                    Membership details are coming soon.
                </p>
                <div className="h-1 w-24 bg-nature-accent rounded-full"></div>
            </div>
        </div>
    );
}
