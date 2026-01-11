import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-nature-dark text-nature-light">
            {/* Background Image Placeholder - Replace with actual image */}
            <div className="absolute inset-0 bg-nature-dark/80">
                <img
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop"
                    alt="Forest Background"
                    className="h-full w-full object-cover opacity-40"
                />
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
