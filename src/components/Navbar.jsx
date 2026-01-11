import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Journal', href: '#journal' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-nature-dark/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo / Brand */}
                <a href="#" className="flex items-center gap-2 text-nature-light hover:text-nature-accent transition-colors">
                    <Leaf className="h-6 w-6" />
                    <span className="text-xl font-bold font-serif tracking-wide">Rewilding Restoration</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-widest text-nature-light hover:text-nature-accent transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#join"
                        className="rounded-full bg-nature-moss px-6 py-2 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105 hover:bg-nature-accent"
                    >
                        Join
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-nature-light"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-16 left-0 w-full bg-nature-dark/95 p-6 md:hidden backdrop-blur-md"
                >
                    <div className="flex flex-col gap-6 text-center">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg text-nature-light hover:text-nature-accent"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
