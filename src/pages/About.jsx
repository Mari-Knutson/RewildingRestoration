import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="min-h-screen bg-nature-light text-nature-dark">
            <Navbar />
            <div className="pt-32 px-6 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-serif font-bold mb-12 text-nature-dark"
                >
                    About Us
                </motion.h1>
                <div className="prose prose-lg text-nature-stone">
                    <p className="text-xl leading-relaxed mb-6">
                        Rewilding Restoration is dedicated to bringing nature back to its original state.
                        We believe in the power of ecological recovery to heal our planet and our communities.
                    </p>
                    <p className="text-xl leading-relaxed">
                        Our work focuses on large-scale landscape restoration, reintroduction of native species,
                        and creating sustainable ecosystems that thrive for generations.
                    </p>
                </div>
            </div>
        </div>
    );
}
