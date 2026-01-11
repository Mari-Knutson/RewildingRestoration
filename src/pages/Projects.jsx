import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-nature-light">
            <Navbar />
            <div className="pt-32">
                <div className="px-6 max-w-6xl mx-auto mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-serif font-bold text-nature-dark"
                    >
                        Our Projects
                    </motion.h1>
                </div>
                <Projects />
            </div>
        </div>
    );
}
