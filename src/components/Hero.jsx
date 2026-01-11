import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-nature-dark text-nature-light">
            {/* Video Background */}
            <div className="absolute inset-0 bg-nature-dark/80">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-60"
                >
                    <source src="/RewildingRestoration/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/30" /> {/* Overlay for text readability */}
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4 text-5xl font-serif font-bold md:text-7xl"
                >
                    Rewilding Restoration
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-2xl text-lg md:text-xl font-light tracking-wide"
                >
                    Restoring ecosystems, one project at a time.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 animate-bounce"
                >
                    <ArrowDown size={32} className="text-nature-light/80" />
                </motion.div>
            </div>
        </div>
    );
}
