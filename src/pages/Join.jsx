import React from 'react';
import Navbar from '../components/Navbar';

export default function Join() {
    return (
        <div className="min-h-screen bg-nature-dark text-nature-light flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-nature-light mb-6">
                    Restore the Wild, <br />
                    <span className="text-nature-accent">Month by Month</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-nature-moss mb-8 max-w-2xl">
                    Join a community of rewilders dedicated to real-world impact.
                    Your monthly membership directly funds reforestation, habitat restoration, and biodiversity projects.
                </p>
                <p className="text-lg md:text-xl font-light text-nature-stone mb-12 max-w-2xl">
                    We are building a platform where you can track your impact, view project reports, and see the difference you make.
                    <br /><br />
                    <span className="font-bold text-nature-light uppercase tracking-widest text-sm">Membership Launching Soon</span>
                </p>
                <div className="h-1 w-24 bg-nature-accent rounded-full"></div>
            </div>
        </div>
    );
}
